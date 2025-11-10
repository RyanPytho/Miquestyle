# 🚀 Deploy no Vercel - Passo a Passo

## ✅ O que já foi feito

- ✅ Código commitado e enviado para o GitHub
- ✅ Servidor funcionando localmente
- ✅ Banco de dados conectado ao Supabase

## 📋 Próximos Passos no Vercel

### 1. Configurar Variáveis de Ambiente

⚠️ **IMPORTANTE**: Sem isso, a API não funcionará em produção!

1. Acesse: https://vercel.com/dashboard
2. Selecione seu projeto `miquestyle`
3. Vá em **Settings** → **Environment Variables**
4. Adicione estas variáveis (se ainda não adicionou):

```
DATABASE_URL = postgresql://postgres:matheus2619261@db.vgsedjvtdgodldbbevoh.supabase.co:5432/postgres
JWT_SECRET = uma_chave_muito_segura_e_grande_aqui
ORIGIN = *
```

⚠️ **CRUCIAL**: 
- Substitua a senha se necessário (use a mesma do `.env` local)
- Marque todas as opções: Production, Preview, Development
- Clique em **"Save"** para cada variável

### 2. Fazer Deploy

**Opção 1 - Deploy Automático (Recomendado):**
- Se o projeto está conectado ao GitHub, o Vercel faz deploy automaticamente
- Aguarde alguns minutos após o push
- Veja o status em: Vercel Dashboard → Deployments

**Opção 2 - Deploy Manual:**
1. Vercel Dashboard → Deployments
2. Clique nos **3 pontinhos** (⋯) do último deployment
3. Clique em **"Redeploy"**
4. Aguarde terminar

### 3. Verificar se Funcionou

Após o deploy terminar:

1. Teste o health check:
   ```
   https://miqueestyle.vercel.app/api/health
   ```
   Deve retornar: `{"ok": true, "database": "PostgreSQL", ...}`

2. Teste no site:
   - Acesse: `https://miqueestyle.vercel.app`
   - Tente fazer login ou criar conta
   - Deve funcionar!

## 🆘 Problemas Comuns

### Erro 404 na API
- Verifique se o deploy foi concluído
- Verifique os Build Logs no Vercel
- Veja se há erros de build

### Erro: "Cannot connect to database"
- Verifique se `DATABASE_URL` está configurada no Vercel
- Verifique se a senha está correta
- Verifique se o projeto do Supabase está ativo

### Login não funciona em produção
- Verifique se todas as variáveis de ambiente estão configuradas
- Verifique se fez um novo deploy após adicionar as variáveis
- Veja os logs no Vercel Dashboard → Functions → Logs

## ✅ Checklist Final

- [ ] Variáveis de ambiente configuradas no Vercel
- [ ] Deploy concluído com sucesso
- [ ] `/api/health` retorna `{"ok": true}`
- [ ] Login funciona no site em produção
- [ ] Cadastro funciona no site em produção

## 💡 Dica

Mantenha as mesmas variáveis de ambiente no `.env` local e no Vercel para garantir consistência!

