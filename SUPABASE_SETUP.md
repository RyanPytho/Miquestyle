# 🗄️ Configuração do PostgreSQL (Supabase)

Este guia vai te ajudar a configurar o Supabase (PostgreSQL gratuito) para o seu projeto.

## 📋 Passo a Passo

### 1. Criar Conta no Supabase

1. Acesse: https://supabase.com
2. Clique em **"Start your project"** ou **"Sign Up"**
3. Faça login com GitHub, Google ou email

### 2. Criar um Novo Projeto

1. Clique em **"New Project"**
2. Preencha:
   - **Name**: `miquestyle` (ou qualquer nome)
   - **Database Password**: Crie uma senha forte (ANOTE ELA!)
   - **Region**: Escolha a mais próxima (ex: South America)
3. Clique em **"Create new project"**
4. Aguarde alguns minutos enquanto o projeto é criado

### 3. Obter a String de Conexão (DATABASE_URL)

1. No painel do Supabase, vá em **Settings** (ícone de engrenagem)
2. Clique em **Database**
3. Role até a seção **"Connection string"**
4. Selecione **"URI"** (não "Session mode")
5. Copie a string que começa com `postgresql://...`
6. **IMPORTANTE**: Substitua `[YOUR-PASSWORD]` pela senha que você criou

Exemplo:
```
postgresql://postgres.xxxxxxxxxxxxx:SUA_SENHA_AQUI@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
```

### 4. Configurar no Vercel

1. Acesse: https://vercel.com/dashboard
2. Selecione seu projeto `miquestyle`
3. Vá em **Settings** → **Environment Variables**
4. Adicione estas variáveis:

```
DATABASE_URL = postgresql://postgres.xxxxx:SUA_SENHA@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
JWT_SECRET = um_secret_muito_seguro_aqui_123456789
ORIGIN = *
```

⚠️ **IMPORTANTE**: 
- Substitua `SUA_SENHA` pela senha real do banco
- Após adicionar, faça um **novo deploy**!

### 5. Testar Localmente (Opcional)

Se quiser testar localmente antes de fazer deploy:

1. Crie um arquivo `.env` na raiz do projeto:
```bash
DATABASE_URL=postgresql://postgres.xxxxx:SUA_SENHA@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
JWT_SECRET=dev_secret_change_me
```

2. Instale as dependências:
```bash
npm install
cd backend
npm install
```

3. Rode o servidor:
```bash
cd backend
npm run dev
```

4. Teste: `http://localhost:4000/api/health`

## ✅ Verificar se Está Funcionando

Após o deploy no Vercel:

1. Teste o health check:
   ```
   https://miqueestyle.vercel.app/api/health
   ```
   Deve retornar: `{"ok": true, "database": "PostgreSQL", ...}`

2. Tente criar uma conta no site
3. Tente fazer login

## 🔍 Verificar no Supabase

1. No painel do Supabase, vá em **Table Editor**
2. Você deve ver as tabelas `users` e `password_reset_tokens`
3. Quando criar uma conta, você verá os dados aparecerem na tabela `users`

## 🆘 Problemas Comuns

### Erro: "Connection refused"
- Verifique se a `DATABASE_URL` está correta
- Certifique-se de substituir `[YOUR-PASSWORD]` pela senha real
- Verifique se o projeto do Supabase está ativo (não pausado)

### Erro: "SSL required"
- A string de conexão já deve incluir SSL
- Se persistir, verifique se está usando a string "URI" e não "Session mode"

### Erro: "relation does not exist"
- As tabelas são criadas automaticamente na primeira requisição
- Tente acessar `/api/health` primeiro para inicializar o banco

## 💡 Vantagens do PostgreSQL

✅ **Persistente**: Dados não são perdidos  
✅ **Escalável**: Suporta milhões de registros  
✅ **Confiável**: Banco de dados profissional  
✅ **Gratuito**: Plano free do Supabase é generoso  
✅ **Backup automático**: Supabase faz backup diário  

## 📚 Recursos Úteis

- [Documentação do Supabase](https://supabase.com/docs)
- [Documentação do PostgreSQL](https://www.postgresql.org/docs/)
- [Supabase Dashboard](https://app.supabase.com)

