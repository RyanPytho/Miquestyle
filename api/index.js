// Vercel serverless function - Wrapper para o backend
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb } from '../backend/src/db.js';
import { register, login, me, authMiddleware, forgotPassword, resetPassword } from '../backend/src/auth.js';

dotenv.config();

const app = express();
const ORIGIN = process.env.ORIGIN || '*';
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';

app.set('JWT_SECRET', JWT_SECRET);
app.use(cors({ origin: ORIGIN === '*' ? true : ORIGIN, credentials: false }));
app.use(express.json());

// Logging middleware para debug
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.use(authMiddleware);

// Healthcheck melhorado
app.get('/health', async (_req, res) => {
  try {
    await initDb(); // Garantir que o banco está inicializado
    res.json({ 
      ok: true, 
      timestamp: new Date().toISOString(),
      environment: process.env.VERCEL ? 'production' : 'development',
      database: 'PostgreSQL'
    });
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

// Auth routes
app.post('/auth/register', register);
app.post('/auth/login', login);
app.get('/auth/me', me);
app.post('/auth/forgot-password', forgotPassword);
app.post('/auth/reset-password', resetPassword);

// Inicializar banco na inicialização (async)
let dbInitialized = false;
(async () => {
  try {
    await initDb();
    dbInitialized = true;
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
})();

// Handler para Vercel - precisa ser uma função que recebe req e res
export default function handler(req, res) {
  // Garantir que o banco está inicializado
  if (!dbInitialized) {
    initDb().then(() => {
      dbInitialized = true;
    }).catch(err => {
      console.error('Database initialization error:', err);
    });
  }
  
  // Passar a requisição para o Express
  return app(req, res);
}
