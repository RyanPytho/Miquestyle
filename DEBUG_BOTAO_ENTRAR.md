# 🔍 Debug - Botão "Entrar" não funciona no Vercel

## 🔍 Como Diagnosticar

### 1. Abrir o Console do Navegador

1. Acesse: `https://miqueestyle.vercel.app`
2. Pressione **F12** (ou clique com botão direito → Inspecionar)
3. Vá na aba **"Console"**

### 2. Verificar Logs

Quando você clicar no botão "Entrar", você deve ver logs como:

```
[AUTH] setupAuth chamado
[AUTH] loginForm listener adicionado
[AUTH] handleLogin chamado
[AUTH] Tentando fazer login para: seuemail@email.com
[AUTH] API_BASE: https://miqueestyle.vercel.app/api
```

### 3. Verificar Erros

Procure por mensagens em **vermelho** no console. Erros comuns:

#### Erro: "loginForm não encontrado!"
- **Causa**: O HTML não está carregando corretamente
- **Solução**: Verifique se o `index.html` está correto

#### Erro: "Failed to fetch" ou "NetworkError"
- **Causa**: A API não está respondendo
- **Solução**: Verifique se `/api/health` funciona

#### Erro: "API_BASE is not defined"
- **Causa**: O script.js não está carregando
- **Solução**: Verifique se há erros de sintaxe no script.js

#### Nenhum log aparece
- **Causa**: O JavaScript não está sendo executado
- **Solução**: Verifique se há erros antes no console

### 4. Testar Manualmente

No Console do navegador, execute:

```javascript
// Verificar se o formulário existe
console.log('loginForm:', document.getElementById('loginForm'));

// Verificar se o handler está anexado
const form = document.getElementById('loginForm');
console.log('Event listeners:', getEventListeners ? getEventListeners(form) : 'Não disponível');

// Testar API diretamente
fetch('https://miqueestyle.vercel.app/api/health')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error);
```

## 🛠️ Possíveis Soluções

### Solução 1: Verificar se o script.js está carregando

1. No Console, digite: `typeof handleLogin`
2. Se retornar `"function"`, o script está carregado
3. Se retornar `"undefined"`, o script não está carregando

### Solução 2: Verificar se há erros de sintaxe

1. Vá na aba **"Sources"** ou **"Fontes"** no DevTools
2. Procure por `script.js`
3. Veja se há erros destacados em vermelho

### Solução 3: Verificar Cache

1. Pressione **Ctrl+Shift+R** (ou Cmd+Shift+R no Mac) para recarregar sem cache
2. Tente novamente

### Solução 4: Verificar API

1. Teste: `https://miqueestyle.vercel.app/api/health`
2. Se não funcionar, a API está com problema
3. Veja os logs no Vercel Dashboard → Functions → Logs

## 📝 O que Verificar

- [ ] Console mostra `[AUTH] setupAuth chamado`
- [ ] Console mostra `[AUTH] loginForm listener adicionado`
- [ ] Quando clica no botão, aparece `[AUTH] handleLogin chamado`
- [ ] Não há erros em vermelho no console
- [ ] `/api/health` retorna `{"ok": true}`

## 🆘 Me Envie

Se ainda não funcionar, me envie:
1. Screenshot do Console (F12)
2. Qualquer erro em vermelho que aparecer
3. O que aparece quando você digita `API_BASE` no console

