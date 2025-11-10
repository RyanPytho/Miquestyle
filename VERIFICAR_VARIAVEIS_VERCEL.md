# 🔧 Verificar Variáveis de Ambiente no Vercel

## ⚠️ Problema
O erro "Erro interno do servidor" geralmente indica que as variáveis de ambiente não estão configuradas no Vercel.

## ✅ Solução: Configurar Variáveis no Vercel

### Passo 1: Acessar Configurações do Projeto

1. Acesse: https://vercel.com/dashboard
2. Selecione seu projeto **Miquestyle**
3. Vá em **Settings** (Configurações)
4. Clique em **Environment Variables** (Variáveis de Ambiente)

### Passo 2: Adicionar Variáveis

Você precisa adicionar estas variáveis:

#### 1. `DATABASE_URL`
- **Nome:** `DATABASE_URL`
- **Valor:** Sua URL do Supabase PostgreSQL
  - Formato: `postgresql://postgres:SENHA@HOST:5432/postgres`
  - Exemplo: `postgresql://postgres:abc123@db.xyz.supabase.co:5432/postgres`
- **Ambientes:** Marque todos (Production, Preview, Development)

#### 2. `JWT_SECRET`
- **Nome:** `JWT_SECRET`
- **Valor:** Uma string aleatória e segura
  - Exemplo: `sua_chave_secreta_super_segura_aqui_123456`
- **Ambientes:** Marque todos (Production, Preview, Development)

#### 3. `FRONTEND_URL` (Opcional)
- **Nome:** `FRONTEND_URL`
- **Valor:** `https://miqueestyle.vercel.app`
- **Ambientes:** Marque todos

### Passo 3: Salvar e Fazer Redeploy

1. Clique em **Save** (Salvar)
2. Vá em **Deployments**
3. Clique nos **3 pontinhos** (⋯) do último deployment
4. Clique em **Redeploy**
5. Aguarde terminar (2-5 minutos)

## 🔍 Como Encontrar DATABASE_URL do Supabase

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** → **Database**
4. Role até **Connection string**
5. Selecione **URI**
6. Copie a URL (ela já inclui a senha)
7. Se não tiver a senha, vá em **Database** → **Reset database password**

## ✅ Verificar se Funcionou

Após configurar e fazer redeploy:

1. Teste: `https://miqueestyle.vercel.app/api/health`
   - Deve retornar: `{"ok": true, "databaseUrl": true}`

2. Abra o Console (F12) no site
3. Tente fazer login
4. Veja os logs no console - devem mostrar:
   - `[AUTH] Fazendo requisição para: ...`
   - `[AUTH] Resposta recebida: 200 OK`

## 🆘 Se Ainda Não Funcionar

1. **Verifique os logs do Vercel:**
   - Vercel Dashboard → Deployments
   - Clique no último deployment
   - Veja a aba **"Logs"** ou **"Function Logs"**
   - Procure por erros em vermelho

2. **Verifique no Console do navegador (F12):**
   - Veja os logs que começam com `[AUTH]` ou `[VERCEL]`
   - Isso mostra exatamente onde está o problema

3. **Teste a API diretamente:**
   ```bash
   curl -X POST https://miqueestyle.vercel.app/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"teste@teste.com","password":"123456"}'
   ```

## 📝 Resumo

```bash
# Variáveis necessárias no Vercel:
DATABASE_URL=postgresql://...
JWT_SECRET=sua_chave_secreta
FRONTEND_URL=https://miqueestyle.vercel.app (opcional)
```

**Depois de adicionar, sempre faça um Redeploy!**

