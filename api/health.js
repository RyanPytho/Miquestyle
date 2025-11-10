// Health check endpoint
import dotenv from 'dotenv';
import { initDb } from '../backend/src/db.js';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    await initDb();
    return res.json({ 
      ok: true, 
      timestamp: new Date().toISOString(),
      environment: process.env.VERCEL ? 'production' : 'development',
      database: 'PostgreSQL'
    });
  } catch (error) {
    console.error('Health check error:', error);
    return res.status(500).json({ ok: false, error: error.message });
  }
}
