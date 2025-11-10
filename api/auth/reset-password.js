// Reset password endpoint
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb } from '../../backend/src/db.js';
import { resetPassword } from '../../backend/src/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    await initDb();
    return resetPassword(req, res);
  } catch (error) {
    console.error('Reset password error:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

