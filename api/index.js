// Vercel serverless function - Roteador único para todas as rotas
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Carregar .env (Vercel injeta variáveis de ambiente automaticamente, mas dotenv ajuda em desenvolvimento)
dotenv.config();

import { initDb } from '../backend/src/db.js';
import { register, login, me, authMiddleware, forgotPassword, resetPassword } from '../backend/src/auth.js';

// Criar app Express mínimo
import express from 'express';
const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
app.set('JWT_SECRET', JWT_SECRET);
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Healthcheck
app.get('/health', async (_req, res) => {
  try {
    await initDb();
    res.json({ 
      ok: true, 
      timestamp: new Date().toISOString(),
      environment: process.env.VERCEL ? 'production' : 'development',
      database: 'PostgreSQL',
      databaseUrl: !!process.env.DATABASE_URL
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

// Inicializar banco
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

// Handler para Vercel
export default async function handler(req, res) {
  // Garantir que o banco está inicializado
  if (!dbInitialized) {
    try {
      await initDb();
      dbInitialized = true;
    } catch (error) {
      console.error('Database initialization error:', error);
    }
  }
  
  // Passar para o Express
  return app(req, res);
}
