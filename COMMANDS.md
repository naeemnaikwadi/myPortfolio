# 📝 Command Reference

All commands you'll need for development, testing, and deployment.

## 🚀 Quick Start Commands

### Windows (Automated)
```bash
# Install everything
install.bat

# Start both servers
start-dev.bat
```

### Manual (All Platforms)
```bash
# Install all dependencies
npm run install:all

# Start frontend (Terminal 1)
npm run dev:client

# Start backend (Terminal 2)
npm run dev:server
```

## 📦 Installation Commands

### Install All Dependencies
```bash
# From project root
npm run install:all
```

### Install Client Only
```bash
cd client
npm install
```

### Install Server Only
```bash
cd server
npm install
```

### Clean Install (if issues)
```bash
# Client
cd client
rmdir /s /q node_modules
del package-lock.json
npm install

# Server
cd server
rmdir /s /q node_modules
del package-lock.json
npm install
```

## 🔧 Development Commands

### Start Development Servers

#### Frontend (React + Vite)
```bash
cd client
npm run dev
```
Runs on: http://localhost:5173

#### Backend (Node.js + Express)
```bash
cd server
npm run dev
```
Runs on: http://localhost:5000

#### Both (Separate Terminals)
```bash
# Terminal 1
cd client && npm run dev

# Terminal 2
cd server && npm run dev
```

### Custom Port
```bash
# Frontend on different port
cd client
npm run dev -- --port 3000

# Backend on different port
# Edit server/.env: PORT=5001
```

## 🏗️ Build Commands

### Build for Production
```bash
cd client
npm run build
```
Output: `client/dist/`

### Preview Production Build
```bash
cd client
npm run preview
```
Runs on: http://localhost:4173

### Build and Preview
```bash
cd client
npm run build && npm run preview
```

## 🧹 Cleanup Commands

### Clear Node Modules
```bash
# Client
cd client
rmdir /s /q node_modules

# Server
cd server
rmdir /s /q node_modules
```

### Clear Build Output
```bash
cd client
rmdir /s /q dist
```

### Clear npm Cache
```bash
npm cache clean --force
```

### Full Cleanup
```bash
# From project root
cd client
rmdir /s /q node_modules
rmdir /s /q dist
del package-lock.json

cd ../server
rmdir /s /q node_modules
del package-lock.json

cd ..
npm cache clean --force
```

## 🔍 Debugging Commands

### Check Node/npm Versions
```bash
node --version
npm --version
```
Required: Node 18+, npm 9+

### Check Running Processes
```bash
# Windows
netstat -ano | findstr :5173
netstat -ano | findstr :5000
```

### Kill Process by Port
```bash
# Using npx
npx kill-port 5173
npx kill-port 5000

# Windows manual
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Check Server Health
```bash
# Using curl (if installed)
curl http://localhost:5000/api/health

# Or visit in browser
# http://localhost:5000/api/health
```

### View Server Logs
```bash
cd server
npm run dev
# Logs appear in terminal
```

## 🧪 Testing Commands

### Test Contact Form (Manual)
1. Start both servers
2. Visit http://localhost:5173
3. Navigate to Contact section
4. Fill and submit form
5. Check email inbox

### Test API Endpoint
```bash
# Using curl (if installed)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Test\",\"email\":\"test@test.com\",\"message\":\"Test message\"}"
```

### Test Build
```bash
cd client
npm run build
npm run preview
# Visit http://localhost:4173
```

## 📦 Package Management

### Update Dependencies
```bash
# Check outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm update <package-name>
```

### Add New Package

#### Client
```bash
cd client
npm install <package-name>
```

#### Server
```bash
cd server
npm install <package-name>
```

### Remove Package
```bash
npm uninstall <package-name>
```

## 🔐 Environment Commands

### Create .env File
```bash
cd server
copy .env.example .env
```

### Edit .env File
```bash
# Windows
notepad server\.env

# Or use VS Code
code server\.env
```

### Verify .env Loaded
```bash
cd server
node -e "require('dotenv').config(); console.log(process.env.EMAIL_USER)"
```

## 🌐 Git Commands

### Initialize Repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### Create GitHub Repository
```bash
# After creating repo on GitHub
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

### Common Git Commands
```bash
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b feature-name

# Switch branch
git checkout main

# View commit history
git log --oneline
```

## 🚀 Deployment Commands

### Deploy Frontend (Vercel)

#### Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd client
vercel

# Deploy to production
vercel --prod
```

#### Using Git (Recommended)
1. Push to GitHub
2. Import in Vercel dashboard
3. Auto-deploys on push

### Deploy Backend (Render)

#### Using Git
1. Push to GitHub
2. Connect in Render dashboard
3. Auto-deploys on push

### Update Deployment
```bash
# Just push to GitHub
git add .
git commit -m "Update"
git push

# Vercel and Render auto-deploy
```

## 🔧 Troubleshooting Commands

### Fix Port Issues
```bash
# Kill all Node processes (Windows)
taskkill /F /IM node.exe

# Restart computer (if above doesn't work)
shutdown /r /t 0
```

### Fix npm Issues
```bash
# Clear cache
npm cache clean --force

# Reinstall
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Fix Git Issues
```bash
# Reset to last commit
git reset --hard HEAD

# Discard local changes
git checkout -- .

# Remove untracked files
git clean -fd
```

## 📊 Performance Commands

### Analyze Bundle Size
```bash
cd client
npm run build
# Check dist/ folder size
```

### Check Dependencies Size
```bash
npm install -g npm-check
npm-check
```

## 🔍 Inspection Commands

### List Installed Packages
```bash
npm list --depth=0
```

### Check Package Info
```bash
npm info <package-name>
```

### View Package Scripts
```bash
npm run
```

### Check for Security Issues
```bash
npm audit

# Fix automatically
npm audit fix
```

## 💡 Useful Shortcuts

### VS Code Terminal
```bash
# Open terminal: Ctrl + `
# New terminal: Ctrl + Shift + `
# Split terminal: Ctrl + Shift + 5
# Close terminal: Ctrl + D
```

### Browser DevTools
```bash
# Open DevTools: F12
# Console: Ctrl + Shift + J
# Inspect: Ctrl + Shift + C
# Hard Refresh: Ctrl + Shift + R
# Clear Cache: Ctrl + Shift + Delete
```

## 📝 Custom Scripts

### Add to package.json
```json
{
  "scripts": {
    "install:all": "cd client && npm install && cd ../server && npm install",
    "dev:client": "cd client && npm run dev",
    "dev:server": "cd server && npm run dev",
    "build:client": "cd client && npm run build",
    "preview:client": "cd client && npm run preview",
    "clean": "cd client && rmdir /s /q node_modules dist && cd ../server && rmdir /s /q node_modules"
  }
}
```

### Run Custom Scripts
```bash
npm run <script-name>
```

## 🎯 Daily Workflow

### Morning (Start Work)
```bash
# Pull latest changes
git pull

# Start servers
start-dev.bat
# or
npm run dev:client  # Terminal 1
npm run dev:server  # Terminal 2
```

### During Work
```bash
# Make changes
# Save files (Ctrl + S)
# Browser auto-refreshes

# Commit frequently
git add .
git commit -m "Description of changes"
```

### Evening (End Work)
```bash
# Stop servers (Ctrl + C in terminals)

# Push changes
git push

# Close terminals
```

## 🚀 Pre-Deployment Checklist

```bash
# 1. Test locally
npm run dev:client
npm run dev:server

# 2. Build production
cd client
npm run build

# 3. Preview build
npm run preview

# 4. Commit changes
git add .
git commit -m "Ready for deployment"

# 5. Push to GitHub
git push

# 6. Deploy (auto-deploys if configured)
```

## 📞 Help Commands

### Get Help
```bash
# npm help
npm help

# Command-specific help
npm help install
npm help run

# List all commands
npm help-search <term>
```

### Check Documentation
```bash
# Open package docs
npm docs <package-name>

# Open package repo
npm repo <package-name>
```

---

## 🎯 Most Used Commands

### Development
```bash
npm run dev:client    # Start frontend
npm run dev:server    # Start backend
```

### Build
```bash
npm run build:client  # Build for production
```

### Git
```bash
git add .
git commit -m "message"
git push
```

### Troubleshooting
```bash
npx kill-port 5173    # Kill frontend port
npx kill-port 5000    # Kill backend port
npm cache clean --force  # Clear cache
```

---

**Save this file for quick reference! 📌**

Press `Ctrl + F` to search for specific commands.
