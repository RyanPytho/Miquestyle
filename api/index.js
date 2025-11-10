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
  // Log da requisição
  console.log(`[VERCEL] ${req.method} ${req.url}`);
  console.log('[VERCEL] DATABASE_URL configurada:', !!process.env.DATABASE_URL);
  console.log('[VERCEL] JWT_SECRET configurado:', !!process.env.JWT_SECRET);
  
  // Garantir que o banco está inicializado
  if (!dbInitialized) {
    try {
      console.log('[VERCEL] Inicializando banco de dados...');
      await initDb();
      dbInitialized = true;
      console.log('[VERCEL] Banco de dados inicializado com sucesso');
    } catch (error) {
      console.error('[VERCEL] Erro ao inicializar banco:', error);
      console.error('[VERCEL] Stack:', error.stack);
      // Não retornar erro aqui, deixar o Express tratar
    }
  }
  
  // Passar para o Express com tratamento de erro
  try {
    return app(req, res);
  } catch (error) {
    console.error('[VERCEL] Erro no handler:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Erro interno do servidor', details: error.message });
    }
  }
}
