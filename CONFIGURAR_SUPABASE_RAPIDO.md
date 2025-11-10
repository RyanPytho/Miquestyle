# ⚡ Configurar Supabase - Guia Rápido

## 🎯 Passo a Passo (5 minutos)

### 1. Criar Conta no Supabase

1. Acesse: **https://supabase.com**
2. Clique em **"Start your project"** ou **"Sign Up"**
3. Faça login com GitHub, Google ou email

### 2. Criar Projeto

1. Clique em **"New Project"**
2. Preencha:
   - **Name**: `miquestyle` (ou qualquer nome)
   - **Database Password**: Crie uma senha forte (ANOTE ELA!)
   - **Region**: Escolha **South America** (mais próximo)
3. Clique em **"Create new project"**
4. Aguarde 2-3 minutos enquanto o projeto é criado

### 3. Obter a String de Conexão

1. No painel do Supabase, vá em **Settings** (ícone de engrenagem ⚙️)
2. Clique em **Database**
3. Role até a seção **"Connection string"**
4. Selecione **"URI"** (não "Session mode")
5. Você verá algo como:
   ```
   postgresql://postgres.xxxxxxxxxxxxx:[YOUR-PASSWORD]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
   ```
6. **COPIE** essa string
7. **SUBSTITUA** `[YOUR-PASSWORD]` pela senha que você criou

### 4. Configurar no Projeto

1. Abra o arquivo `backend/.env`
2. Adicione a linha:
   ```env
   DATABASE_URL=postgresql://postgres.xxxxx:SUA_SENHA@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
   ```
   ⚠️ **IMPORTANTE**: Substitua `SUA_SENHA` pela senha real!

3. O arquivo `.env` completo deve ficar assim:
   ```env
   PORT=4000
   JWT_SECRET=uma_chave_muito_segura_e_grande_aqui
   ORIGIN=*
   DATABASE_URL=postgresql://postgres.xxxxx:SUA_SENHA@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
   ```

### 5. Testar

1. Pare o servidor (se estiver rodando): `Ctrl+C`
2. Rode novamente:
   ```bash
   cd backend
   npm run dev
   ```

3. Você deve ver:
   ```
   Database initialized successfully
   Miquestyle API rodando em http://localhost:4000
   ```

4. Teste no navegador:
   ```
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

## ✅ Pronto!

Agora seu banco de dados está configurado e funcionando!

## 🆘 Problemas Comuns

### Erro: "client password must be a string"
- Verifique se o `DATABASE_URL` está correto
- Certifique-se de substituir `[YOUR-PASSWORD]` pela senha real
- Não deixe espaços antes ou depois do `=`

### Erro: "Connection refused"
- Verifique se o projeto do Supabase está ativo (não pausado)
- Verifique se a string de conexão está completa
- Teste a conexão no Supabase Dashboard → Database → Connection Pooling

### Não consigo encontrar a Connection string
- Vá em Settings → Database
- Role a página para baixo
- Procure por "Connection string" ou "Connection pooling"

## 📝 Próximos Passos

Depois que funcionar localmente:
1. Configure as mesmas variáveis no Vercel
2. Faça deploy
3. Teste a API em produção

