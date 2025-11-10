# 👑 Miquestyle - E-commerce de Sneakers Premium

E-commerce moderno de sneakers com catálogo online e finalização de compra via WhatsApp.

## 🚀 Funcionalidades

- ✅ Catálogo de produtos por marca (Nike, Jordan, Adidas, New Balance)
- ✅ Carrinho de compras
- ✅ Integração com WhatsApp para finalização de compra
- ✅ Sistema de autenticação (cadastro, login, recuperação de senha)
- ✅ Perfil do usuário
- ✅ Design responsivo
- ✅ Parcelamento com juros de 4,5% ao mês

## 📁 Estrutura do Projeto

```
MiqueStyle/
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # Lógica frontend
├── img/                # Imagens dos produtos
├── backend/            # API Node.js
│   ├── src/
│   │   ├── server.js   # Servidor Express
│   │   ├── auth.js     # Lógica de autenticação
│   │   └── db.js       # Configuração SQLite
│   └── package.json
└── README.md
```

## 🛠️ Como Rodar Localmente

### Frontend

1. Abra `index.html` no navegador ou use um servidor local:
```bash
# Com Python
python3 -m http.server 8000

# Com Node.js (http-server)
npx http-server
```

### Backend

1. Entre na pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o servidor:
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:4000`

## 📡 API Endpoints

- `POST /auth/register` - Cadastro de usuário
- `POST /auth/login` - Login
- `GET /auth/me` - Dados do usuário logado
- `POST /auth/forgot-password` - Solicitar redefinição de senha
- `POST /auth/reset-password` - Redefinir senha
- `GET /health` - Health check

## 🗄️ Banco de Dados

- **Tipo**: SQLite
- **Arquivo**: `backend/data.db` (criado automaticamente)
- **Tabelas**:
  - `users` - Usuários cadastrados
  - `password_reset_tokens` - Tokens de redefinição de senha

## 🌐 Como Colocar Online

Veja o arquivo [DEPLOY.md](./DEPLOY.md) para instruções detalhadas de deploy.

**Opções recomendadas:**
- **Vercel** (Frontend + Backend juntos)
- **Netlify** (Frontend) + **Railway/Render** (Backend)

## ⚙️ Configuração

### Variáveis de Ambiente (Backend)

Crie um arquivo `.env` em `backend/`:

```env
PORT=4000
JWT_SECRET=seu_secret_super_seguro
ORIGIN=*
```

### WhatsApp

Configure o número do WhatsApp em `script.js`:
```javascript
const WHATSAPP_NUMBER = "41995136233";
```

## 📝 Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express
- **Banco de Dados**: SQLite
- **Autenticação**: JWT (JSON Web Tokens)
- **Segurança**: bcryptjs (hash de senhas)

## 📄 Licença

Este projeto é privado.
