# 🧪 Como Testar Localmente

## ⚠️ Problema: Porta 4000 em Uso

Se você ver o erro `EADDRINUSE: address already in use :::4000`, significa que já tem um processo rodando na porta 4000.

## ✅ Solução Rápida

### 1. Matar o processo na porta 4000

```bash
# Encontrar o processo
lsof -ti:4000

# Matar o processo (substitua PID pelo número que apareceu)
kill -9 PID

# Ou matar todos de uma vez
kill -9 $(lsof -ti:4000)
```

### 2. Configurar Variáveis de Ambiente

Antes de rodar o servidor, você precisa configurar o `DATABASE_URL`:

1. Crie um arquivo `.env` na pasta `backend/`:

```bash
cd backend
touch .env
```

2. Adicione estas linhas no arquivo `.env`:

```env
PORT=4000
JWT_SECRET=dev_secret_change_me
ORIGIN=*
DATABASE_URL=postgresql://postgres:SUA_SENHA@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
```

⚠️ **IMPORTANTE**: Substitua `SUA_SENHA` pela senha real do seu Supabase!

### 3. Rodar o Servidor

```bash
cd backend
npm install
npm run dev
```

Você deve ver:
```
Database initialized successfully
Miquestyle API rodando em http://localhost:4000
```

### 4. Testar a API

Em outro terminal ou no navegador:

```bash
# No terminal
curl http://localhost:4000/api/health

# Ou no navegador
http://localhost:4000/api/health

```

Deve retornar:
```json
{
  "ok": true,
  "timestamp": "...",
  "database": "PostgreSQL"
}
```

## 🆘 Se Não Funcionar

### Erro: "Cannot connect to database"

- Verifique se o `DATABASE_URL` está correto
- Verifique se o projeto do Supabase está ativo
- Teste a conexão no Supabase Dashboard

### Erro: "Porta já em uso"

- Use o comando `kill -9 $(lsof -ti:4000)` para matar processos
- Ou mude a porta no `.env`: `PORT=4001`

### Erro: "Module not found"

- Execute `npm install` novamente na pasta `backend/`

## 📝 Próximos Passos

Depois que funcionar localmente:
1. Teste criar uma conta: `POST http://localhost:4000/api/auth/register`
2. Teste fazer login: `POST http://localhost:4000/api/auth/login`
3. Se funcionar localmente, o problema está no Vercel

