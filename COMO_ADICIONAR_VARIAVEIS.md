# 📝 Como Adicionar Variáveis de Ambiente no Vercel

## 🎯 Passo a Passo Detalhado

### 1. Acesse o Dashboard do Vercel

1. Abra seu navegador
2. Acesse: **https://vercel.com/dashboard**
3. Faça login se necessário

### 2. Selecione Seu Projeto

1. Na página inicial do dashboard, você verá uma lista de projetos
2. Clique no projeto **`miquestyle`** (ou o nome que você deu ao projeto)

### 3. Acesse as Configurações

1. No topo da página do projeto, você verá várias abas:
   - **Overview** | **Deployments** | **Analytics** | **Settings** | etc.
2. Clique na aba **"Settings"** (Configurações)

### 4. Encontre a Seção de Variáveis de Ambiente

1. No menu lateral esquerdo (dentro de Settings), você verá:
   - General
   - **Environment Variables** ← CLIQUE AQUI
   - Git
   - Domains
   - etc.

2. Clique em **"Environment Variables"**

### 5. Adicione as Variáveis

Você verá uma interface com:
- Uma tabela vazia (ou com variáveis existentes)
- Um botão **"Add New"** ou **"Add"** no topo

#### Adicionar DATABASE_URL:

1. Clique em **"Add New"** ou **"Add"**
2. No campo **"Key"** (Chave), digite: `DATABASE_URL`
3. No campo **"Value"** (Valor), cole a string de conexão do Supabase:
   ```
   postgresql://postgres.xxxxx:SUA_SENHA@aws-0-sa-east-1.pooler.supabase.com:6543/postgres
   ```
   ⚠️ **IMPORTANTE**: Substitua `SUA_SENHA` pela senha real do seu banco Supabase!

4. Marque as opções de ambiente:
   - ✅ **Production** (produção)
   - ✅ **Preview** (preview)
   - ✅ **Development** (desenvolvimento)
   - Ou deixe todas marcadas

5. Clique em **"Save"** ou **"Add"**

#### Adicionar JWT_SECRET:

1. Clique em **"Add New"** novamente
2. No campo **"Key"**, digite: `JWT_SECRET`
3. No campo **"Value"**, digite uma senha segura:
   ```
   um_secret_muito_seguro_aqui_123456789
   ```
   ⚠️ **IMPORTANTE**: Use uma senha forte e única!

4. Marque os ambientes (Production, Preview, Development)
5. Clique em **"Save"**

#### Adicionar ORIGIN:

1. Clique em **"Add New"** novamente
2. No campo **"Key"**, digite: `ORIGIN`
3. No campo **"Value"**, digite: `*`
4. Marque os ambientes
5. Clique em **"Save"**

### 6. Fazer Novo Deploy

⚠️ **CRUCIAL**: Após adicionar as variáveis, você PRECISA fazer um novo deploy!

**Opção 1 - Deploy Automático (se conectado ao GitHub):**
- Faça um commit e push para o GitHub
- O Vercel fará deploy automaticamente

**Opção 2 - Deploy Manual:**
1. Vá na aba **"Deployments"**
2. Clique nos **3 pontinhos** (⋯) do último deployment
3. Clique em **"Redeploy"**
4. Confirme o redeploy

## ✅ Verificar se Funcionou

Após o deploy:

1. Vá na aba **"Deployments"**
2. Clique no deployment mais recente
3. Veja os logs para verificar se não há erros
4. Teste: `https://miqueestyle.vercel.app/api/health`

## 🖼️ Visualização

```
Vercel Dashboard
  └── Seu Projeto (miquestyle)
      └── Settings (aba no topo)
          └── Environment Variables (menu lateral)
              └── Add New (botão)
                  ├── Key: DATABASE_URL
                  ├── Value: postgresql://...
                  └── Save
```

## 🆘 Problemas Comuns

### Não vejo "Environment Variables"
- Certifique-se de estar na aba **"Settings"**
- Role a página para baixo se necessário
- Verifique se você tem permissão de administrador no projeto

### Variáveis não funcionam após deploy
- Verifique se marcou os ambientes corretos (Production, Preview, Development)
- Certifique-se de ter feito um **novo deploy** após adicionar as variáveis
- As variáveis só são aplicadas em novos deploys!

### Esqueci a senha do Supabase
- No Supabase Dashboard → Settings → Database
- Você pode ver a string de conexão, mas não a senha
- Se perdeu a senha, você precisa resetá-la no Supabase

## 📞 Precisa de Ajuda?

Se ainda tiver dúvidas:
1. Tire um print da tela do Vercel
2. Verifique se está na seção correta
3. Tente seguir o passo a passo novamente

