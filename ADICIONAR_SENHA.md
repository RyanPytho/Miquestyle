# 🔐 Como Adicionar a Senha na URL

## ⚠️ IMPORTANTE

A URL que você copiou tem `[YOUR_PASSWORD]` no meio. Você precisa substituir isso pela senha real do banco de dados.

## 📝 Passo a Passo

### 1. Lembrar da Senha

Você criou uma senha quando criou o projeto no Supabase. É essa senha que você precisa usar.

**Se esqueceu a senha:**
1. Vá no Supabase Dashboard
2. Settings → Database
3. Procure por "Database password" ou "Reset database password"
4. Clique em "Reset" para gerar uma nova senha

### 2. Substituir na URL

Sua URL atual:
```
postgresql://postgres:[YOUR_PASSWORD]@db.vgsedjvtdgodldbbevoh.supabase.co:5432/postgres
```

**Substitua `[YOUR_PASSWORD]` pela senha real:**

Exemplo (se sua senha fosse "MinhaSenha123"):
```
postgresql://postgres:MinhaSenha123@db.vgsedjvtdgodldbbevoh.supabase.co:5432/postgres
```

### 3. Adicionar no arquivo .env

1. Abra o arquivo `backend/.env`
2. Adicione ou edite a linha:
   ```env
   DATABASE_URL=postgresql://postgres:SUA_SENHA_REAL@db.vgsedjvtdgodldbbevoh.supabase.co:5432/postgres
   ```

**IMPORTANTE**: 
- Substitua `SUA_SENHA_REAL` pela senha real
- Não deixe espaços antes ou depois do `=`
- Não use aspas na URL

### 4. Exemplo Completo do .env

O arquivo `backend/.env` deve ficar assim:

```env
PORT=4000
JWT_SECRET=uma_chave_muito_segura_e_grande_aqui
ORIGIN=*
DATABASE_URL=postgresql://postgres:SUA_SENHA_REAL@db.vgsedjvtdgodldbbevoh.supabase.co:5432/postgres
```

### 5. Testar

1. Salve o arquivo `.env`
2. Reinicie o servidor:
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

## 🆘 Problemas

### Erro: "client password must be a string"
- Verifique se substituiu `[YOUR_PASSWORD]` pela senha real
- Verifique se não há espaços na URL
- Verifique se a senha não tem caracteres especiais que precisam ser codificados

### Erro: "Connection refused"
- Verifique se o projeto do Supabase está ativo
- Verifique se a URL está completa
- Tente usar a porta 5432 (que é a padrão)

### Esqueci a senha
- Vá em Supabase → Settings → Database
- Clique em "Reset database password"
- Use a nova senha na URL

## ✅ Pronto!

Depois de configurar, seu banco de dados estará funcionando!

