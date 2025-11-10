# 🧪 Como Testar a API

## 📝 Rotas Disponíveis

### No Servidor Local (localhost:4000)

- **Health Check**: `http://localhost:4000/health` (sem `/api`)
- **Registro**: `POST http://localhost:4000/auth/register`
- **Login**: `POST http://localhost:4000/auth/login`
- **Meu Perfil**: `GET http://localhost:4000/auth/me`

### No Vercel (Produção)

- **Health Check**: `https://miqueestyle.vercel.app/api/health` (com `/api`)
- **Registro**: `POST https://miqueestyle.vercel.app/api/auth/register`
- **Login**: `POST https://miqueestyle.vercel.app/api/auth/login`

## 🧪 Como Testar

### Opção 1: No Navegador (Mais Fácil)

1. Abra o navegador
2. Cole esta URL:
   ```
   http://localhost:4000/health
   ```
3. Você deve ver um JSON:
   ```json
   {
     "ok": true,
     "timestamp": "...",
     "database": "PostgreSQL"
   }
   ```

### Opção 2: No Terminal (curl)

```bash
curl http://localhost:4000/health
```

### Opção 3: Testar Registro (curl)

```bash
curl -X POST http://localhost:4000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@teste.com",
    "password": "123456"
  }'
```

## ⚠️ Erros Comuns

### Erro: "Cannot GET /api/health"
- **Causa**: No servidor local, a rota é `/health` (sem `/api`)
- **Solução**: Use `http://localhost:4000/health`

### Erro: "client password must be a string"
- **Causa**: `DATABASE_URL` não está configurado no `.env`
- **Solução**: Adicione `DATABASE_URL` no arquivo `backend/.env`

### Erro: "Connection refused"
- **Causa**: Servidor não está rodando
- **Solução**: Rode `cd backend && npm run dev`

## ✅ Checklist

- [ ] Servidor rodando (`npm run dev`)
- [ ] `DATABASE_URL` configurado no `.env`
- [ ] Testar: `http://localhost:4000/health`
- [ ] Deve retornar JSON com `"ok": true`

