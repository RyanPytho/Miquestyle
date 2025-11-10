import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { db } from './db.js';

const genToken = (user, secret) =>
  jwt.sign({ id: user.id, email: user.email, name: user.name }, secret, { expiresIn: '7d' });

export function register(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Preencha nome, email e senha' });
  }
  const password_hash = bcrypt.hashSync(password, 10);
  const stmt = db.prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)');
  stmt.run([name, email.toLowerCase(), password_hash], function(err) {
    if (err) {
      if (err.message.includes('UNIQUE')) {
        return res.status(409).json({ error: 'Email já cadastrado' });
      }
      return res.status(500).json({ error: 'Erro ao cadastrar' });
    }
    const user = { id: this.lastID, name, email: email.toLowerCase() };
    const token = genToken(user, req.app.get('JWT_SECRET'));
    return res.status(201).json({ user, token });
  });
}

export function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Informe email e senha' });
  }
  db.get('SELECT * FROM users WHERE email = ?', [email.toLowerCase()], (err, row) => {
    if (err) return res.status(500).json({ error: 'Erro no login' });
    if (!row) return res.status(401).json({ error: 'Credenciais inválidas' });
    const ok = bcrypt.compareSync(password, row.password_hash);
    if (!ok) return res.status(401).json({ error: 'Credenciais inválidas' });
    const user = { id: row.id, name: row.name, email: row.email };
    const token = genToken(user, req.app.get('JWT_SECRET'));
    return res.json({ user, token });
  });
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

export function forgotPassword(req, res) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Informe o email' });
  }
  
  db.get('SELECT * FROM users WHERE email = ?', [email.toLowerCase()], (err, row) => {
    if (err) return res.status(500).json({ error: 'Erro ao processar' });
    if (!row) {
      // Por segurança, sempre retorna sucesso mesmo se email não existir
      return res.json({ message: 'Se o email existir, você receberá um link de redefinição' });
    }
    
    // Gerar token único
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 3600000); // 1 hora
    
    // Invalidar tokens anteriores
    db.run('UPDATE password_reset_tokens SET used = 1 WHERE user_id = ? AND used = 0', [row.id]);
    
    // Salvar novo token
    db.run(
      'INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES (?, ?, ?)',
      [row.id, token, expiresAt.toISOString()],
      function(insertErr) {
        if (insertErr) return res.status(500).json({ error: 'Erro ao gerar token' });
        
        // TODO: Aqui você deve enviar o email com o link
        // Por enquanto, apenas logamos (em produção, use nodemailer ou similar)
        const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost'}/reset-password?token=${token}`;
        console.log(`[DEV] Link de redefinição para ${row.email}: ${resetUrl}`);
        
        // Em produção, descomente e configure:
        // sendResetEmail(row.email, resetUrl);
        
        return res.json({ message: 'Se o email existir, você receberá um link de redefinição' });
      }
    );
  });
}

export function resetPassword(req, res) {
  const { token, password } = req.body;
  if (!token || !password) {
    return res.status(400).json({ error: 'Token e senha são obrigatórios' });
  }
  
  if (password.length < 6) {
    return res.status(400).json({ error: 'Senha deve ter pelo menos 6 caracteres' });
  }
  
  // Buscar token válido
  db.get(
    `SELECT pt.*, u.id as user_id, u.email 
     FROM password_reset_tokens pt 
     JOIN users u ON pt.user_id = u.id 
     WHERE pt.token = ? AND pt.used = 0 AND pt.expires_at > datetime('now')`,
    [token],
    (err, row) => {
      if (err) return res.status(500).json({ error: 'Erro ao processar' });
      if (!row) {
        return res.status(400).json({ error: 'Token inválido ou expirado' });
      }
      
      // Hash da nova senha
      const password_hash = bcrypt.hashSync(password, 10);
      
      // Atualizar senha e marcar token como usado
      db.serialize(() => {
        db.run('UPDATE users SET password_hash = ? WHERE id = ?', [password_hash, row.user_id]);
        db.run('UPDATE password_reset_tokens SET used = 1 WHERE token = ?', [token], (updateErr) => {
          if (updateErr) return res.status(500).json({ error: 'Erro ao atualizar senha' });
          return res.json({ message: 'Senha redefinida com sucesso' });
        });
      });
    }
  );
}

