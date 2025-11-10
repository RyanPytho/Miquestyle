import pg from 'pg';
const { Pool } = pg;

// Configuração do PostgreSQL
// Usa DATABASE_URL do Supabase ou variáveis individuais
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Testar conexão
pool.on('connect', () => {
  console.log('[DB] PostgreSQL connected successfully');
});

pool.on('error', (err) => {
  console.error('[DB] Unexpected error on idle client', err);
});

// Função auxiliar para executar queries
export async function query(text, params) {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log(`[DB] Query executed in ${duration}ms: ${text.substring(0, 50)}...`);
    return res;
  } catch (error) {
    console.error('[DB] Query error:', error);
    throw error;
  }
}

// Inicializar banco de dados - criar tabelas se não existirem
export async function initDb() {
  try {
    // Criar tabela de usuários
    await query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('[DB] Users table ready');

    // Criar tabela de tokens de redefinição de senha
    await query(`
      CREATE TABLE IF NOT EXISTS password_reset_tokens (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        token TEXT NOT NULL UNIQUE,
        expires_at TIMESTAMP NOT NULL,
        used INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('[DB] Password reset tokens table ready');

    // Criar índices para melhor performance
    await query(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    `);
    await query(`
      CREATE INDEX IF NOT EXISTS idx_reset_tokens_token ON password_reset_tokens(token);
    `);
    await query(`
      CREATE INDEX IF NOT EXISTS idx_reset_tokens_user_id ON password_reset_tokens(user_id);
    `);
    console.log('[DB] Indexes created');

    return true;
  } catch (error) {
    console.error('[DB] Error initializing database:', error);
    throw error;
  }
}

// Exportar pool para uso direto se necessário
export { pool };
