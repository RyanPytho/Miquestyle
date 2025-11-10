// Health check endpoint
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDb } from '../backend/src/db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    await initDb();
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
}

