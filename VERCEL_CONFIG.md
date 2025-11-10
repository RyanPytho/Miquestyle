# ⚙️ Configuração do Vercel

## Variáveis de Ambiente Necessárias

No painel do Vercel, vá em **Settings → Environment Variables** e adicione:

```
JWT_SECRET = um_secret_muito_seguro_aqui_123456789
ORIGIN = *
VERCEL = 1
```

## Importante sobre SQLite no Vercel

⚠️ **LIMITAÇÃO**: O SQLite no Vercel funciona, mas o banco de dados é **temporário** (apagado quando a função serverless "dorme").

**Soluções:**
1. Use um banco de dados externo (PostgreSQL, MongoDB) para produção
2. Ou aceite que os dados serão perdidos quando a função não for usada por um tempo

## Testar a API

Após o deploy, teste:
- `https://miqueestyle.vercel.app/api/health` - Deve retornar `{"ok":true}`
- `https://miqueestyle.vercel.app/api/auth/register` - Deve funcionar

## Problemas Comuns

**Erro 500 na API:**
- Verifique se as variáveis de ambiente estão configuradas
- Verifique os logs no Vercel Dashboard → Functions → Logs

**Banco de dados não funciona:**
- SQLite pode ter limitações no Vercel
- Considere migrar para PostgreSQL (Supabase, Railway, etc.)

