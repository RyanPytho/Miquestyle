#!/usr/bin/env bash

set -e

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

echo "==> Miquestyle API - Setup e Start"

# 1) Criar .env se não existir
if [ ! -f .env ]; then
  echo "==> Criando .env padrão"
  cat > .env << 'EOF'
PORT=4000
JWT_SECRET=uma_chave_muito_segura_e_grande_aqui
ORIGIN=*
EOF
fi

echo "==> Lendo .env"
set -a
source .env
set +a

# 2) Instalar dependências se node_modules não existir
if [ ! -d node_modules ]; then
  echo "==> Instalando dependências (npm install)"
  npm install
fi

echo "==> Iniciando servidor (porta: ${PORT:-4000})"
npm run dev


