// Me endpoint
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb } from '../../backend/src/db.js';
import { me, authMiddleware } from '../../backend/src/auth.js';

dotenv.config();

const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
app.set('JWT_SECRET', JWT_SECRET);
app.use(cors());
app.use(express.json());
app.use(authMiddleware);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    await initDb();
    return me(req, res);
  } catch (error) {
    console.error('Me error:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

