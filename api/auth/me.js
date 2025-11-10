// Me endpoint
import dotenv from 'dotenv';
import { initDb } from '../../backend/src/db.js';
import { me, authMiddleware } from '../../backend/src/auth.js';

dotenv.config();

import express from 'express';
const app = express();
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
app.set('JWT_SECRET', JWT_SECRET);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    await initDb();
    // Aplicar middleware de auth
    await new Promise((resolve, reject) => {
      authMiddleware(req, res, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
    
    const expressReq = Object.assign(req, { app });
    return me(expressReq, res);
  } catch (error) {
    console.error('Me error:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
