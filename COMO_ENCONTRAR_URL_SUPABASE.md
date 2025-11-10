# 🔍 Como Encontrar a URL de Conexão no Supabase

## 📋 Passo a Passo Detalhado

### 1. Acesse o Supabase

1. Abra seu navegador
2. Acesse: **https://supabase.com**
3. Faça login na sua conta

### 2. Selecione Seu Projeto

1. No dashboard do Supabase, você verá uma lista de projetos
2. Clique no projeto **`miquestyle`** (ou o nome que você deu)

### 3. Acesse as Configurações

1. No menu lateral esquerdo, procure por **"Settings"** (Configurações)
   - É um ícone de **engrenagem** ⚙️
   - Geralmente está na parte inferior do menu

2. Clique em **"Settings"**

### 4. Vá para Database

1. Dentro de Settings, você verá várias opções no menu lateral:
   - General
   - **Database** ← CLIQUE AQUI
   - API
   - Auth
   - Storage
   - etc.

2. Clique em **"Database"**

### 5. Encontre a Connection String

1. Role a página para baixo
2. Procure pela seção **"Connection string"** ou **"Connection pooling"**
3. Você verá várias opções:
   - **URI** ← ESCOLHA ESTA
   - Session mode
   - Transaction mode
   - etc.

4. Clique na aba **"URI"**

### 6. Copie a String

Você verá algo assim:

```
postgresql://postgres.xxxxxxxxxxxxx:[YOUR-PASSWORD]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
```

**IMPORTANTE**: 
- Copie a string completa
- Ela contém `[YOUR-PASSWORD]` que você precisa substituir pela senha real

### 7. Substitua a Senha

A string que você copiou tem `[YOUR-PASSWORD]` no meio. Você precisa:

1. Lembrar da senha que você criou quando fez o projeto
2. Substituir `[YOUR-PASSWORD]` pela senha real

**Exemplo:**
- Antes: `postgresql://postgres.xxxxx:[YOUR-PASSWORD]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres`
- Depois: `postgresql://postgres.xxxxx:MinhaSenha123@aws-0-sa-east-1.pooler.supabase.com:6543/postgres`

### 8. Se Esqueceu a Senha

Se você esqueceu a senha do banco:

1. No Supabase Dashboard → Settings → Database
2. Procure por **"Database password"** ou **"Reset database password"**
3. Clique em **"Reset database password"**
4. Uma nova senha será gerada
5. Use essa nova senha na string de conexão

## 📝 Onde Usar Essa URL

Depois de obter a URL completa (com a senha substituída):

1. Abra o arquivo `backend/.env`
2. Adicione a linha:
   ```env
   DATABASE_URL=postgresql://postgres.xxxxx:SUA_SENHA@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
   ```

## 🖼️ Visualização do Caminho

```
Supabase Dashboard
  └── Seu Projeto (miquestyle)
      └── Settings (⚙️ - menu lateral)
          └── Database (menu lateral)
              └── Connection string (role para baixo)
                  └── URI (aba)
                      └── Copiar string
                          └── Substituir [YOUR-PASSWORD]
```

## 🆘 Não Encontrou?

### Se não vê "Connection string":
- Certifique-se de estar na aba **"Database"** dentro de Settings
- Role a página para baixo (pode estar mais embaixo)
- Procure por **"Connection pooling"** ou **"Database URL"**

### Se não vê a opção "URI":
- Certifique-se de que o projeto está totalmente criado
- Aguarde alguns minutos se acabou de criar o projeto
- Tente atualizar a página (F5)

### Se não tem projeto ainda:
1. Clique em **"New Project"** no dashboard
2. Preencha:
   - Name: `miquestyle`
   - Database Password: (crie uma senha forte)
   - Region: South America
3. Aguarde 2-3 minutos
4. Depois siga os passos acima

## ✅ Próximos Passos

Depois de copiar a URL:
1. Adicione no arquivo `backend/.env`
2. Reinicie o servidor
3. Teste: `http://localhost:4000/api/health`

## 💡 Dica

A URL completa deve ter este formato:
```
postgresql://postgres.XXXXX:SENHA@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
```

Se estiver faltando alguma parte, verifique novamente!

