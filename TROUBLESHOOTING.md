# 🔧 Troubleshooting Guide

Common issues and their solutions.

## 🚨 Installation Issues

### "npm: command not found"
**Problem**: Node.js is not installed or not in PATH

**Solution**:
1. Download Node.js from https://nodejs.org (v18 or higher)
2. Install with default settings
3. Restart terminal/command prompt
4. Verify: `node --version` and `npm --version`

### "Cannot find module" errors
**Problem**: Dependencies not installed properly

**Solution**:
```bash
# Delete node_modules and reinstall
cd client
rmdir /s /q node_modules
npm install

cd ../server
rmdir /s /q node_modules
npm install
```

### Installation hangs or is very slow
**Problem**: Network issues or npm cache

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

## 🌐 Development Server Issues

### Port 5173 already in use
**Problem**: Another process is using the frontend port

**Solution**:
```bash
# Kill the process
npx kill-port 5173

# Or use a different port
cd client
npm run dev -- --port 3000
```

### Port 5000 already in use
**Problem**: Another process is using the backend port

**Solution**:
```bash
# Kill the process
npx kill-port 5000

# Or change port in server/.env
PORT=5001
```

### "EADDRINUSE" error
**Problem**: Port is already in use

**Solution**:
```bash
# Windows - Find and kill process
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or restart your computer
```

### Server starts but shows blank page
**Problem**: Build issue or wrong URL

**Solution**:
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Check console for errors (F12)
4. Verify URL: http://localhost:5173

## 📧 Contact Form Issues

### Form submits but no email received
**Problem**: Email configuration incorrect

**Solution**:
1. Check `server/.env` file exists
2. Verify EMAIL_USER is correct
3. Verify EMAIL_PASS is app password (not regular password)
4. Check spam folder
5. Test server: http://localhost:5000/api/health

### "Failed to send email" error
**Problem**: Gmail authentication failed

**Solution**:
1. Enable 2-Step Verification on Google Account
2. Generate new App Password:
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other"
   - Copy 16-character password (no spaces)
3. Update `server/.env` with new password
4. Restart server

### CORS error in browser console
**Problem**: Frontend can't connect to backend

**Solution**:
1. Verify server is running on port 5000
2. Check `server/server.js` has CORS enabled
3. Clear browser cache
4. Try in incognito mode

### "Network Error" when submitting form
**Problem**: Backend not running or wrong URL

**Solution**:
1. Verify server is running: http://localhost:5000/api/health
2. Check Contact.jsx has correct URL: `http://localhost:5000/api/contact`
3. Check browser console for exact error

## 🖼️ Image Issues

### Images not displaying
**Problem**: Wrong path or missing files

**Solution**:
1. Verify images are in `client/public/` folder
2. Check file names match exactly (case-sensitive)
3. Verify paths in components:
   - `/profile.jpg` not `./profile.jpg`
   - `/projects/growskill.jpg` not `/project/growskill.jpg`
4. Clear browser cache (Ctrl+F5)

### Images show broken icon
**Problem**: File doesn't exist or wrong format

**Solution**:
1. Check file exists in correct location
2. Verify file extension (.jpg, .png, .svg)
3. Try opening image directly: http://localhost:5173/profile.jpg
4. Check file isn't corrupted

### Images load slowly
**Problem**: Files too large

**Solution**:
1. Compress images using TinyPNG.com
2. Resize to recommended dimensions:
   - profile.jpg: 500x500px
   - workspace.jpg: 1200x800px
   - projects: 1200x800px
3. Keep files under 500KB each

## 🎨 Styling Issues

### Tailwind classes not working
**Problem**: Tailwind not configured properly

**Solution**:
1. Verify `tailwind.config.js` exists
2. Check `postcss.config.js` exists
3. Verify `index.css` has Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
4. Restart dev server

### Dark mode not working
**Problem**: Dark mode toggle not functioning

**Solution**:
1. Check `tailwind.config.js` has `darkMode: 'class'`
2. Verify Navbar component updates state
3. Check browser console for errors
4. Clear browser cache

### Styles look broken
**Problem**: CSS not loading or build issue

**Solution**:
1. Hard refresh browser (Ctrl+F5)
2. Clear browser cache
3. Restart dev server
4. Check console for CSS errors

## ⚡ Performance Issues

### Page loads slowly
**Problem**: Large files or network issues

**Solution**:
1. Optimize images (compress and resize)
2. Check network tab in DevTools (F12)
3. Clear browser cache
4. Check internet connection

### Animations are choppy
**Problem**: Performance or browser issue

**Solution**:
1. Close other browser tabs
2. Update browser to latest version
3. Disable browser extensions
4. Check CPU usage (Task Manager)

### Build takes too long
**Problem**: Large dependencies or slow computer

**Solution**:
```bash
# Clear cache and rebuild
cd client
npm cache clean --force
rmdir /s /q node_modules
rmdir /s /q dist
npm install
npm run build
```

## 🔐 Security Issues

### .env file committed to Git
**Problem**: Sensitive data exposed

**Solution**:
1. Remove from Git history:
   ```bash
   git rm --cached server/.env
   git commit -m "Remove .env from tracking"
   ```
2. Verify `.gitignore` includes `.env`
3. Change email password immediately
4. Generate new app password

### API keys visible in code
**Problem**: Secrets in source code

**Solution**:
1. Move to `.env` file
2. Use environment variables
3. Never commit `.env` to Git
4. Rotate exposed keys

## 🚀 Deployment Issues

### Vercel build fails
**Problem**: Build configuration or dependencies

**Solution**:
1. Check build logs in Vercel dashboard
2. Verify `package.json` scripts are correct
3. Set root directory to `client`
4. Check Node version (18+)
5. Try building locally: `npm run build`

### Render deployment fails
**Problem**: Server configuration issue

**Solution**:
1. Check build logs in Render dashboard
2. Verify environment variables are set
3. Set root directory to `server`
4. Check start command: `npm start`
5. Verify `package.json` has correct scripts

### Contact form works locally but not in production
**Problem**: API URL not updated

**Solution**:
1. Get backend URL from Render (e.g., `https://your-app.onrender.com`)
2. Update `Contact.jsx`:
   ```js
   const response = await fetch('https://your-backend-url.onrender.com/api/contact', {
   ```
3. Commit and push changes
4. Vercel will auto-redeploy

### Images work locally but not in production
**Problem**: Images not included in build

**Solution**:
1. Verify images are in `client/public/` folder
2. Check images are committed to Git
3. Verify paths start with `/` not `./`
4. Redeploy to Vercel

## 🐛 Common Errors

### "Cannot read property of undefined"
**Problem**: Accessing undefined variable

**Solution**:
1. Check browser console for exact line
2. Add null checks: `data?.property`
3. Verify API response structure
4. Check component props

### "Module not found"
**Problem**: Import path incorrect

**Solution**:
1. Check file path is correct
2. Verify file extension (.jsx, .js)
3. Check case sensitivity
4. Verify file exists

### "Unexpected token"
**Problem**: Syntax error in code

**Solution**:
1. Check for missing brackets, parentheses
2. Verify JSX syntax
3. Check for missing semicolons
4. Use code formatter (Prettier)

## 📱 Mobile Issues

### Layout broken on mobile
**Problem**: Responsive design issue

**Solution**:
1. Test with browser DevTools mobile view
2. Check Tailwind responsive classes (md:, lg:)
3. Verify viewport meta tag in index.html
4. Test on actual mobile device

### Touch interactions not working
**Problem**: Mobile event handlers missing

**Solution**:
1. Verify buttons have proper touch targets (min 44x44px)
2. Check hover states work on mobile
3. Test on actual mobile device

## 🔄 Git Issues

### "Permission denied" when pushing
**Problem**: Git authentication issue

**Solution**:
1. Verify GitHub credentials
2. Use HTTPS or SSH correctly
3. Generate new personal access token
4. Update remote URL

### Merge conflicts
**Problem**: Conflicting changes

**Solution**:
```bash
# Resolve conflicts manually
git status
# Edit conflicted files
git add .
git commit -m "Resolve conflicts"
```

## 💡 General Tips

### When something doesn't work:
1. **Check the console** (F12 in browser)
2. **Read error messages** carefully
3. **Restart servers** (Ctrl+C, then restart)
4. **Clear cache** (Ctrl+Shift+Delete)
5. **Try incognito mode** (Ctrl+Shift+N)
6. **Check file paths** (case-sensitive!)
7. **Verify environment variables**
8. **Test in different browser**
9. **Check documentation** files
10. **Search error message** online

### Before asking for help:
- [ ] Checked this troubleshooting guide
- [ ] Read error message completely
- [ ] Checked browser console
- [ ] Restarted servers
- [ ] Cleared browser cache
- [ ] Verified file paths
- [ ] Checked .env configuration
- [ ] Tested in incognito mode

## 📞 Still Need Help?

If you've tried everything and still have issues:

1. **Check documentation**:
   - README.md
   - SETUP.md
   - DEPLOYMENT.md

2. **Search online**:
   - Google the exact error message
   - Check Stack Overflow
   - Search GitHub issues

3. **Contact**:
   - Email: naeemnaikwadi32@gmail.com
   - Include:
     - Exact error message
     - What you were trying to do
     - What you've already tried
     - Screenshots if relevant

## 🔍 Debugging Tools

### Browser DevTools (F12)
- **Console**: View errors and logs
- **Network**: Check API requests
- **Elements**: Inspect HTML/CSS
- **Application**: Check localStorage, cookies

### VS Code Extensions
- ESLint - Find code errors
- Prettier - Format code
- Error Lens - Inline errors

### Testing Tools
- Postman - Test API endpoints
- Lighthouse - Performance audit
- BrowserStack - Cross-browser testing

---

**Remember**: Most issues are simple fixes. Stay calm, read error messages, and work through them systematically! 🚀
