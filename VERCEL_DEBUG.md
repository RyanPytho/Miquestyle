# 🔍 Debug - API não funciona no Vercel

## ✅ Checklist de Verificação

### 1. Verificar se os arquivos estão no repositório

Os arquivos devem estar nesta estrutura:
```
api/
  ├── health.js
  ├── auth/
  │   ├── login.js
  │   ├── register.js
  │   ├── me.js
  │   ├── forgot-password.js
  │   └── reset-password.js
```

### 2. Verificar Logs do Deploy no Vercel

1. Acesse: https://vercel.com/dashboard
2. Clique no projeto `miquestyle`
3. Vá em **"Deployments"**
4. Clique no deployment mais recente
5. Veja a aba **"Logs"** ou **"Build Logs"**

**Procure por:**
- ✅ "Building..." → "Build completed"
- ❌ Erros como "Cannot find module" ou "Syntax error"
- ❌ "Function not found"

### 3. Verificar Functions no Vercel

1. No projeto, vá em **"Functions"** (no menu lateral)
2. Você deve ver:
   - `api/health`
   - `api/auth/login`
   - `api/auth/register`
   - etc.

**Se não aparecer nada:**
- Os arquivos não estão sendo detectados
- Pode ser problema de estrutura de pastas

### 4. Testar Diretamente

Após o deploy, teste no navegador:
```
https://miqueestyle.vercel.app/api/health
```

**Se ainda der 404:**
- Verifique se o deploy foi concluído
- Verifique os logs do deploy
- Verifique se há erros de build

## 🛠️ Soluções Possíveis

### Solução 1: Verificar se o arquivo está na raiz

Certifique-se de que a pasta `api/` está na **raiz** do projeto, não dentro de outra pasta.

### Solução 2: Forçar novo deploy

1. Vercel Dashboard → Deployments
2. Clique nos **3 pontinhos** (⋯) do último deployment
3. Clique em **"Redeploy"**
4. Aguarde terminar

### Solução 3: Verificar variáveis de ambiente

Mesmo que a API não funcione, verifique se as variáveis estão configuradas:
- `DATABASE_URL`
- `JWT_SECRET`
- `ORIGIN`

### Solução 4: Verificar package.json

O `package.json` na raiz deve ter todas as dependências:
- `pg`
- `express`
- `bcryptjs`
- etc.

## 📞 Próximos Passos

1. **Verifique os logs do deploy** e me diga o que aparece
2. **Verifique se as Functions aparecem** no Vercel Dashboard
3. **Teste novamente** após o deploy terminar

Se ainda não funcionar, me envie:
- Screenshot dos logs do deploy
- Screenshot da página de Functions no Vercel
- Qualquer erro que apareça

