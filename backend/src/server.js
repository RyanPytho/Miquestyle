import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb } from './db.js';
import { register, login, me, authMiddleware, forgotPassword, resetPassword } from './auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const ORIGIN = process.env.ORIGIN || '*';
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';

app.set('JWT_SECRET', JWT_SECRET);
app.use(cors({ origin: ORIGIN === '*' ? true : ORIGIN, credentials: false }));
app.use(express.json());
app.use(authMiddleware);

// Healthcheck
app.get('/health', (_req, res) => res.json({ ok: true }));

// Auth routes
app.post('/auth/register', register);
app.post('/auth/login', login);
app.get('/auth/me', me);
app.post('/auth/forgot-password', forgotPassword);
app.post('/auth/reset-password', resetPassword);

initDb();

app.listen(PORT, () => {
  console.log(`Miquestyle API rodando em http://localhost:${PORT}`);
});

