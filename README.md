## Miquestyle - Auth & API

### Como rodar a API localmente

1) Abra o terminal nesta pasta:

```bash
cd /Users/macbookm1/Downloads/MiqueStyle/backend
```

2) Instale as dependências (requer Node 18+):

```bash
npm install
```

3) Rode o servidor (porta 4000):

```bash
npm run dev
```

Endpoints:
- POST /auth/register { name, email, password }
- POST /auth/login { email, password }
- GET /auth/me (Authorization: Bearer <token>)

Banco: SQLite (arquivo `backend/data.db` gerado automaticamente).

No frontend, o botão "Entrar" abre o modal de autenticação. O token é salvo no `localStorage`.


