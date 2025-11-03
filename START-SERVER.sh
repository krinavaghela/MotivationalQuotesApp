#!/bin/bash

# Start the development server with Node 20
cd /Users/shiva/MotivationalQuotesApp

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node 20 (install if not available)
if ! nvm use 20 2>/dev/null; then
    echo "⚠️  Node 20 not found. Installing..."
    nvm install 20
    nvm use 20
    nvm alias default 20
fi

# Verify Node version
NODE_VERSION=$(node -v)
echo "📦 Using Node $NODE_VERSION"

# Check if Node version is 18 or higher
MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$MAJOR_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js version 18 or higher is required (current: $NODE_VERSION)"
    echo "Please run: nvm install 20 && nvm use 20"
    exit 1
fi

echo "🚀 Starting dev server..."
echo ""

# Start the server
npm run dev
