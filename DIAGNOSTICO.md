# 🔧 Guia de Diagnóstico e Correção - Login no Vercel

## ✅ Passos para Corrigir o Login

### 1. Configurar Variáveis de Ambiente no Vercel

1. Acesse: https://vercel.com/dashboard
2. Selecione seu projeto `miquestyle`
3. Vá em **Settings** → **Environment Variables**
4. Adicione estas variáveis:

```
JWT_SECRET = um_secret_muito_seguro_aqui_123456789
ORIGIN = *
```

⚠️ **IMPORTANTE**: Após adicionar as variáveis, você precisa fazer um **novo deploy**!

### 2. Verificar se a API está Funcionando

Teste estas URLs no navegador:

#### Health Check
```
https://miqueestyle.vercel.app/api/health
```

**Resposta esperada:**
```json
{
  "ok": true,
  "timestamp": "2025-01-XX...",
  "environment": "production"
}
```

#### Teste de Registro (via Console do Navegador)
Abra o Console (F12) e execute:

```javascript
fetch('https://miqueestyle.vercel.app/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Teste',
    email: 'teste@teste.com',
    password: '123456'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

### 3. Verificar Logs no Vercel

1. Vá em **Vercel Dashboard** → Seu projeto → **Functions**
2. Clique em `api/index.js`
3. Veja os logs em tempo real
4. Procure por erros como:
   - `[DB] Error opening database`
   - `Database initialization error`
   - `Register error` / `Login error`

### 4. Problemas Comuns e Soluções

#### ❌ Erro: "Failed to fetch"
**Causa**: API não está respondendo ou CORS bloqueado
**Solução**: 
- Verifique se as variáveis de ambiente estão configuradas
- Faça um novo deploy após adicionar variáveis

#### ❌ Erro: "Database initialization error"
**Causa**: SQLite não consegue criar o banco em `/tmp`
**Solução**: 
- O banco será criado automaticamente na primeira requisição
- Se persistir, considere migrar para PostgreSQL

#### ❌ Erro: "JWT_SECRET não definido"
**Causa**: Variável de ambiente não configurada
**Solução**: Adicione `JWT_SECRET` nas variáveis de ambiente e faça novo deploy

### 5. Limitação do SQLite no Vercel

⚠️ **IMPORTANTE**: O SQLite no Vercel tem limitações:
- O banco é **temporário** (dados podem ser perdidos)
- Cada função serverless tem seu próprio `/tmp`
- Não é ideal para produção

**Solução Recomendada**: Migrar para PostgreSQL (Supabase gratuito) ou MongoDB

### 6. Testar Localmente Primeiro

Antes de fazer deploy, teste localmente:

```bash
cd backend
npm install
npm run dev
```

Depois teste: `http://localhost:4000/api/health`

## 📝 Checklist de Deploy

- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Novo deploy feito após adicionar variáveis
- [ ] `/api/health` retorna `{"ok": true}`
- [ ] Teste de registro funciona
- [ ] Teste de login funciona
- [ ] Logs no Vercel não mostram erros

## 🆘 Ainda Não Funciona?

1. Verifique os logs no Vercel Dashboard
2. Teste o endpoint `/api/health` diretamente
3. Verifique se o `package.json` na raiz tem todas as dependências
4. Considere migrar para um banco de dados mais robusto (PostgreSQL)

