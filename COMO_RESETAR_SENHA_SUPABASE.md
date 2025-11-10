# 🔑 Como Resetar a Senha do Banco no Supabase

## 📋 Passo a Passo

### 1. Acesse o Supabase Dashboard

1. Abra seu navegador
2. Acesse: **https://supabase.com**
3. Faça login na sua conta

### 2. Selecione Seu Projeto

1. No dashboard, clique no projeto **`miquestyle`** (ou o nome que você deu)

### 3. Vá para Settings → Database

1. No menu lateral esquerdo, clique em **"Settings"** (ícone de engrenagem ⚙️)
2. Clique em **"Database"**

### 4. Encontre a Opção de Resetar Senha

1. Role a página para baixo
2. Procure pela seção **"Database password"** ou **"Database settings"**
3. Você verá algo como:
   - **"Database password"** (mostra se está definida)
   - **"Reset database password"** (botão para resetar)

### 5. Resetar a Senha

1. Clique no botão **"Reset database password"** ou **"Change database password"**
2. Uma nova senha será gerada automaticamente
3. **COPIE ESSA SENHA IMEDIATAMENTE** (você não conseguirá vê-la novamente!)
4. Anote em um lugar seguro

### 6. Usar a Nova Senha

Depois de resetar, use a nova senha na URL:

1. Abra o arquivo `backend/.env`
2. Adicione a linha:
   ```env
   DATABASE_URL=postgresql://postgres:NOVA_SENHA_AQUI@db.vgsedjvtdgodldbbevoh.supabase.co:5432/postgres
   ```
   Substitua `NOVA_SENHA_AQUI` pela senha que você acabou de copiar

### 7. Exemplo Completo

Se a nova senha gerada for `abc123XYZ789`, sua URL ficaria:

```
postgresql://postgres:abc123XYZ789@db.vgsedjvtdgodldbbevoh.supabase.co:5432/postgres
```

E no arquivo `.env`:
```env
DATABASE_URL=postgresql://postgres:abc123XYZ789@db.vgsedjvtdgodldbbevoh.supabase.co:5432/postgres
```

## 🖼️ Onde Encontrar

```
Supabase Dashboard
  └── Seu Projeto
      └── Settings (⚙️)
          └── Database
              └── Role para baixo
                  └── Database password
                      └── Reset database password (botão)
```

## ⚠️ IMPORTANTE

- **COPIE A SENHA IMEDIATAMENTE** quando ela aparecer
- Você não conseguirá vê-la novamente depois
- Se perder, terá que resetar novamente

## 🔒 Dica de Segurança

Depois de configurar:
1. Não compartilhe a senha
2. Não commite o arquivo `.env` no Git (já está no .gitignore)
3. Use senhas diferentes para desenvolvimento e produção

## 🆘 Não Encontrou a Opção?

### Se não vê "Reset database password":
- Certifique-se de estar em **Settings → Database**
- Role a página para baixo (pode estar mais embaixo)
- Procure por **"Database settings"** ou **"Connection info"**
- Tente atualizar a página (F5)

### Se o botão não aparece:
- Verifique se você tem permissão de administrador no projeto
- Tente em outro navegador
- Limpe o cache do navegador

## ✅ Próximos Passos

Depois de resetar e configurar:

1. Salve o arquivo `.env`
2. Reinicie o servidor:
   ```bash
   cd backend
   npm run dev
   ```

3. Teste:
   ```
   http://localhost:4000/api/health
   ```

4. Se funcionar, configure também no Vercel:
   - Vercel Dashboard → Settings → Environment Variables
   - Adicione: `DATABASE_URL` com a mesma URL completa

## 💡 Alternativa: Criar Nova Senha Manualmente

Se preferir criar sua própria senha:

1. No Supabase → Settings → Database
2. Clique em "Reset database password"
3. Alguns projetos permitem definir uma senha personalizada
4. Crie uma senha forte (mínimo 12 caracteres, com letras, números e símbolos)

