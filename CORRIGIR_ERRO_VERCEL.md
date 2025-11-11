# 🚨 CORRIGIR ERRO "Erro interno do servidor"

## ⚠️ Problema Atual
Você está recebendo:
- Login: "Erro no servidor. Verifique se as variáveis de ambiente estão configuradas no Vercel."
- Registro: "Erro interno do servidor"

Isso significa que **as variáveis de ambiente não estão configuradas** no Vercel.

## ✅ SOLUÇÃO PASSO A PASSO

### Passo 1: Acessar Variáveis de Ambiente no Vercel

1. **Acesse:** https://vercel.com/dashboard
2. **Clique** no projeto **Miquestyle** (ou o nome do seu projeto)
3. **Vá em:** **Settings** (Configurações) → **Environment Variables**

### Passo 2: Adicionar DATABASE_URL

1. **Clique em:** "Add New" ou "Add"
2. **Nome:** `DATABASE_URL`
3. **Valor:** Cole sua URL do Supabase
   - Como encontrar:
     - Acesse: https://supabase.com/dashboard
     - Selecione seu projeto
     - Vá em **Settings** → **Database**
     - Role até **Connection string**
     - Selecione **URI**
     - Copie a URL completa (formato: `postgresql://postgres:SENHA@HOST:5432/postgres`)
4. **Ambientes:** Marque **todos** (Production, Preview, Development)
5. **Clique em:** "Save"

### Passo 3: Adicionar JWT_SECRET

1. **Clique em:** "Add New"
2. **Nome:** `JWT_SECRET`
3. **Valor:** Qualquer string aleatória segura
   - Exemplo: `minha_chave_secreta_super_segura_123456789`
   - Ou gere uma: https://randomkeygen.com/
4. **Ambientes:** Marque **todos**
5. **Clique em:** "Save"

### Passo 4: Fazer Redeploy OBRIGATÓRIO

⚠️ **IMPORTANTE:** Após adicionar variáveis, você DEVE fazer redeploy!

1. Vá em **Deployments**
2. Clique nos **3 pontinhos** (⋯) do último deployment
3. Clique em **"Redeploy"**
4. Aguarde terminar (2-5 minutos)

## 🔍 Verificar se Funcionou

### Teste 1: Health Check
Acesse: `https://miqueestyle.vercel.app/api/health`

Deve retornar:
```json
{
  "ok": true,
  "databaseUrl": true,
  "database": "PostgreSQL"
}
```

Se retornar `"databaseUrl": false`, as variáveis não foram configuradas corretamente.

### Teste 2: Console do Navegador
1. Abra o site: https://miqueestyle.vercel.app
2. Pressione **F12** (abrir Console)
3. Tente fazer login
4. Veja os logs que começam com `[AUTH]` ou `[VERCEL]`

### Teste 3: Logs do Vercel
1. Vercel Dashboard → **Deployments**
2. Clique no último deployment
3. Vá em **"Logs"** ou **"Function Logs"**
4. Procure por erros em vermelho
5. Veja se aparece: `DATABASE_URL não está definida!`

## 🆘 Se Ainda Não Funcionar

### Verificar se DATABASE_URL está correta:

1. A URL deve começar com: `postgresql://`
2. Deve incluir a senha: `postgresql://postgres:SENHA@...`
3. Deve terminar com: `:5432/postgres` ou `:5432/nome_do_banco`

### Verificar se JWT_SECRET foi adicionado:

1. Vercel Dashboard → Settings → Environment Variables
2. Deve aparecer `JWT_SECRET` na lista
3. Se não aparecer, adicione novamente

### Verificar Logs Detalhados:

No Console do navegador (F12), você deve ver:
```
[AUTH] Fazendo requisição para: https://miqueestyle.vercel.app/api/auth/login
[AUTH] Resposta recebida: 500 Internal Server Error
```

Se aparecer `500`, o problema está no backend. Verifique os logs do Vercel.

## 📝 Checklist Rápido

- [ ] Acessei Vercel Dashboard
- [ ] Fui em Settings → Environment Variables
- [ ] Adicionei `DATABASE_URL` com a URL do Supabase
- [ ] Adicionei `JWT_SECRET` com uma chave secreta
- [ ] Marquei todos os ambientes (Production, Preview, Development)
- [ ] Cliquei em "Save"
- [ ] Fiz Redeploy do projeto
- [ ] Aguardei o deploy terminar
- [ ] Testei `/api/health` e retornou `ok: true`
- [ ] Testei login e funcionou

## 💡 Dica Importante

**Sempre faça Redeploy após adicionar/modificar variáveis de ambiente!**

As variáveis só são aplicadas em novos deployments.

