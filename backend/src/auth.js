import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { query } from './db.js';

const genToken = (user, secret) =>
  jwt.sign({ id: user.id, email: user.email, name: user.name }, secret, { expiresIn: '7d' });

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Preencha nome, email e senha' });
    }
    const password_hash = bcrypt.hashSync(password, 10);
    
    const result = await query(
      'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email',
      [name, email.toLowerCase(), password_hash]
    );
    
    const user = result.rows[0];
    const token = genToken(user, req.app.get('JWT_SECRET'));
    return res.status(201).json({ user, token });
  } catch (error) {
    if (error.code === '23505') { // Unique violation
      return res.status(409).json({ error: 'Email já cadastrado' });
    }
    console.error('Register error:', error);
    return res.status(500).json({ error: 'Erro ao cadastrar' });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Informe email e senha' });
    }
    
    const result = await query(
      'SELECT * FROM users WHERE email = $1',
      [email.toLowerCase()]
    );
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    
    const row = result.rows[0];
    const ok = bcrypt.compareSync(password, row.password_hash);
    if (!ok) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }
    
    const user = { id: row.id, name: row.name, email: row.email };
    const token = genToken(user, req.app.get('JWT_SECRET'));
    return res.json({ user, token });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Erro no login' });
  }
}

export function authMiddleware(req, _res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return next();
  try {
    req.user = jwt.verify(token, req.app.get('JWT_SECRET'));
  } catch {}
  next();
}

export function me(req, res) {
  if (!req.user) return res.status(401).json({ error: 'Não autenticado' });
  return res.json({ user: req.user });
}

export async function forgotPassword(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Informe o email' });
    }
    
    const result = await query(
      'SELECT * FROM users WHERE email = $1',
      [email.toLowerCase()]
    );
    
    if (result.rows.length === 0) {
      // Por segurança, sempre retorna sucesso mesmo se email não existir
      return res.json({ message: 'Se o email existir, você receberá um link de redefinição' });
    }
    
    const user = result.rows[0];
    
    // Gerar token único
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 3600000); // 1 hora
    
    // Invalidar tokens anteriores
    await query(
      'UPDATE password_reset_tokens SET used = 1 WHERE user_id = $1 AND used = 0',
      [user.id]
    );
    
    // Salvar novo token
    await query(
      'INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
      [user.id, token, expiresAt.toISOString()]
    );
    
    // TODO: Aqui você deve enviar o email com o link
    // Por enquanto, apenas logamos (em produção, use nodemailer ou similar)
    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost'}/reset-password?token=${token}`;
    console.log(`[DEV] Link de redefinição para ${user.email}: ${resetUrl}`);
    
    // Em produção, descomente e configure:
    // sendResetEmail(user.email, resetUrl);
    
    return res.json({ message: 'Se o email existir, você receberá um link de redefinição' });
  } catch (error) {
    console.error('Forgot password error:', error);
    return res.status(500).json({ error: 'Erro ao processar' });
  }
}

export async function resetPassword(req, res) {
  try {
    const { token, password } = req.body;
    if (!token || !password) {
      return res.status(400).json({ error: 'Token e senha são obrigatórios' });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ error: 'Senha deve ter pelo menos 6 caracteres' });
    }
    
    // Buscar token válido
    const result = await query(
      `SELECT pt.*, u.id as user_id, u.email 
       FROM password_reset_tokens pt 
       JOIN users u ON pt.user_id = u.id 
       WHERE pt.token = $1 AND pt.used = 0 AND pt.expires_at > NOW()`,
      [token]
    );
    
    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'Token inválido ou expirado' });
    }
    
    const row = result.rows[0];
    
    // Hash da nova senha
    const password_hash = bcrypt.hashSync(password, 10);
    
    // Atualizar senha e marcar token como usado
    await query(
      'UPDATE users SET password_hash = $1 WHERE id = $2',
      [password_hash, row.user_id]
    );
    
    await query(
      'UPDATE password_reset_tokens SET used = 1 WHERE token = $1',
      [token]
    );
    
    return res.json({ message: 'Senha redefinida com sucesso' });
  } catch (error) {
    console.error('Reset password error:', error);
    return res.status(500).json({ error: 'Erro ao atualizar senha' });
  }
}
