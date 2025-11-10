# 🔐 Como Trocar a Senha

## 📋 Passo a Passo

### 1. Solicitar Redefinição de Senha

1. Acesse o site: `https://miqueestyle.vercel.app`
2. Clique no botão **"Entrar"** (canto superior direito)
3. No modal de login, clique em **"Esqueci minha senha"**
4. Digite seu **email cadastrado**
5. Clique em **"Enviar link"**

### 2. Obter o Link de Redefinição

⚠️ **ATENÇÃO**: Atualmente o email não está configurado, então você precisa pegar o link dos logs.

#### Se estiver rodando localmente:
1. Veja o terminal onde o backend está rodando
2. Procure por uma linha que começa com: `[DEV] Link de redefinição para...`
3. Copie o link completo que aparece

#### Se estiver no Vercel (produção):
1. Acesse: https://vercel.com/dashboard
2. Selecione seu projeto `miquestyle`
3. Vá em **"Functions"** → Clique em `api/index.js`
4. Veja os **"Logs"** em tempo real
5. Faça uma nova solicitação de redefinição
6. Procure por: `[DEV] Link de redefinição para...`
7. Copie o link completo

### 3. Redefinir a Senha

1. Cole o link no navegador (ou clique nele)
2. O modal de redefinição abrirá automaticamente
3. Digite sua **nova senha** (mínimo 6 caracteres)
4. Confirme a senha
5. Clique em **"Redefinir senha"**
6. Pronto! Sua senha foi alterada

## ⚙️ Configurar Envio de Email (Opcional)

Para receber o link por email automaticamente, você precisa configurar um serviço de email.

### Opção 1: Resend (Recomendado - Gratuito)

1. Crie conta em: https://resend.com
2. Obtenha sua API Key
3. Adicione no Vercel como variável: `RESEND_API_KEY`
4. Instale: `npm install resend`
5. Configure o envio de email no código

### Opção 2: SendGrid (Gratuito até 100 emails/dia)

1. Crie conta em: https://sendgrid.com
2. Obtenha sua API Key
3. Adicione no Vercel como variável: `SENDGRID_API_KEY`
4. Instale: `npm install @sendgrid/mail`
5. Configure o envio de email no código

### Opção 3: Nodemailer com Gmail

1. Configure uma senha de app no Gmail
2. Adicione variáveis no Vercel:
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=587`
   - `SMTP_USER=seuemail@gmail.com`
   - `SMTP_PASS=sua_senha_de_app`
3. Instale: `npm install nodemailer`
4. Configure o envio de email no código

## 🔧 Implementar Envio de Email

Após escolher um serviço, você precisa modificar o arquivo `backend/src/auth.js` na função `forgotPassword`:

```javascript
// Exemplo com Resend
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// Dentro da função forgotPassword, substitua o console.log por:
await resend.emails.send({
  from: 'noreply@miquestyle.com',
  to: user.email,
  subject: 'Redefinição de Senha - Miquestyle',
  html: `
    <h2>Redefinição de Senha</h2>
    <p>Clique no link abaixo para redefinir sua senha:</p>
    <a href="${resetUrl}">${resetUrl}</a>
    <p>Este link expira em 1 hora.</p>
  `
});
```

## ✅ Verificar se Funcionou

Após redefinir a senha:
1. Tente fazer login com a nova senha
2. Se funcionar, a senha foi alterada com sucesso!

## 🆘 Problemas Comuns

### "Token inválido ou expirado"
- O token expira em 1 hora
- Cada token só pode ser usado uma vez
- Solicite um novo link de redefinição

### Não recebo o link por email
- Verifique a pasta de spam
- Confirme que o email está correto
- Se ainda não configurou email, pegue o link dos logs

### Link não funciona
- Verifique se copiou o link completo
- O link deve começar com `https://miqueestyle.vercel.app/reset-password?token=...`
- Se expirou, solicite um novo link

