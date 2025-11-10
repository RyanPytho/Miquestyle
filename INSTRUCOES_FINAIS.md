# ✅ Instruções Finais - Fazer Login Funcionar

## 🔧 Problema Atual

O servidor backend precisa ser reiniciado para pegar a nova configuração do `.env` com o `DATABASE_URL`.

## 📋 Passo a Passo

### 1. Parar TODOS os Processos na Porta 4000

Execute este comando no terminal:

```bash
pkill -9 -f "node src/server.js"
lsof -ti:4000 | xargs kill -9
```

### 2. Verificar se Parou

```bash
curl http://localhost:4000/health
```

Se retornar erro de conexão, está parado.

### 3. Iniciar o Servidor

```bash
cd backend
npm run dev
```

Você deve ver:
```
Database initialized successfully
Miquestyle API rodando em http://localhost:4000
```

### 4. Testar a API

Em outro terminal:

```bash
curl http://localhost:4000/health
```

Deve retornar:
```json
{
  "ok": true,
  "timestamp": "...",
  "database": "PostgreSQL"
}
```

### 5. Testar no Site

1. Abra o site no navegador: `http://127.0.0.1:5502` (ou onde estiver rodando)
2. Clique em "Entrar"
3. Tente fazer login ou criar uma conta
4. Deve funcionar agora!

## 🆘 Se Ainda Não Funcionar

### Erro: "Erro no login" ou "Erro ao cadastrar"

1. Abra o Console do navegador (F12)
2. Veja se há erros de conexão
3. Verifique se o servidor está rodando na porta 4000

### Erro: "Cannot connect to API"

- Verifique se o servidor está rodando: `curl http://localhost:4000/health`
- Verifique se o arquivo `.env` tem o `DATABASE_URL` correto
- Reinicie o servidor após modificar o `.env`

### Erro: "client password must be a string"

- Verifique se o `DATABASE_URL` no `.env` está correto
- Certifique-se de que a senha está substituída (não tem `[YOUR-PASSWORD]`)
- Reinicie o servidor

## ✅ Checklist Final

- [ ] Servidor parado completamente
- [ ] Arquivo `.env` com `DATABASE_URL` correto
- [ ] Servidor iniciado: `npm run dev`
- [ ] Health check funciona: `curl http://localhost:4000/health`
- [ ] Site consegue fazer login/cadastro

## 💡 Dica

Mantenha o terminal do servidor aberto para ver os logs. Se houver erros, eles aparecerão lá!

