# 🔄 Como Reiniciar o Servidor

## ⚠️ IMPORTANTE

Depois de modificar o arquivo `.env`, você **PRECISA** reiniciar o servidor para que as mudanças tenham efeito!

## 📋 Passo a Passo

### 1. Parar o Servidor

Se o servidor estiver rodando no terminal:

1. Vá até o terminal onde o servidor está rodando
2. Pressione **`Ctrl + C`** para parar o servidor

Ou use este comando em outro terminal:
```bash
kill -9 $(lsof -ti:4000)
```

### 2. Verificar se Parou

```bash
curl http://localhost:4000/health
```

Se retornar erro de conexão, o servidor parou.

### 3. Iniciar Novamente

```bash
cd backend
npm run dev
```

### 4. Testar

Em outro terminal ou no navegador:
```bash
curl http://localhost:4000/health
```

Ou no navegador:
```
http://localhost:4000/health
```

## ✅ Deve Funcionar Agora!

Depois de reiniciar, você deve ver:
```json
{
  "ok": true,
  "timestamp": "...",
  "database": "PostgreSQL"
}
```

## 🆘 Ainda Não Funciona?

1. Verifique se o arquivo `.env` está correto
2. Verifique se a senha do Supabase está correta
3. Verifique se o projeto do Supabase está ativo
4. Veja os logs do servidor para mais detalhes

