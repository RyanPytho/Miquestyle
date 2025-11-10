import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// IMPORTANTE: Carregar .env ANTES de importar outros módulos que usam process.env
// Carregar do diretório backend (um nível acima de src)
dotenv.config({ path: join(__dirname, '..', '.env') });

console.log('[SERVER] DATABASE_URL carregada:', !!process.env.DATABASE_URL);

import { initDb } from './db.js';
import { register, login, me, authMiddleware, forgotPassword, resetPassword } from './auth.js';

const app = express();
const PORT = process.env.PORT || 4000;
const ORIGIN = process.env.ORIGIN || '*';
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';

app.set('JWT_SECRET', JWT_SECRET);
app.use(cors({ origin: ORIGIN === '*' ? true : ORIGIN, credentials: false }));
app.use(express.json());
app.use(authMiddleware);

// Healthcheck
app.get('/health', async (_req, res) => {
  try {
    await initDb();
    res.json({ 
      ok: true, 
      timestamp: new Date().toISOString(),
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

// Inicializar banco
(async () => {
  try {
    await initDb();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
})();

app.listen(PORT, () => {
  console.log(`Miquestyle API rodando em http://localhost:${PORT}`);
});

