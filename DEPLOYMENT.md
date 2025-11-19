# Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (for frontend)
- Render/Railway account (for backend)

## Part 1: Deploy Frontend to Vercel

### Step 1: Prepare Repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click "Deploy"

### Step 3: Configure Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## Part 2: Deploy Backend to Render

### Step 1: Create Web Service
1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: portfolio-backend
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Step 2: Add Environment Variables
In Render dashboard, add:
```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### Step 3: Deploy
Click "Create Web Service"

## Part 3: Connect Frontend to Backend

### Update API URL
1. Get your Render backend URL (e.g., `https://portfolio-backend.onrender.com`)
2. Update `client/src/components/Contact.jsx`:
```js
const response = await fetch('https://YOUR-BACKEND-URL.onrender.com/api/contact', {
```

3. Commit and push changes:
```bash
git add .
git commit -m "Update API URL"
git push
```

Vercel will automatically redeploy.

## Alternative: Deploy Backend to Railway

### Step 1: Create Project
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository

### Step 2: Configure
1. Set root directory to `server`
2. Add environment variables (same as Render)
3. Railway will auto-detect Node.js and deploy

## Environment Variables Checklist

### Backend (.env)
- [ ] PORT
- [ ] EMAIL_USER
- [ ] EMAIL_PASS

### Frontend (if needed)
- [ ] VITE_API_URL (optional, can hardcode)

## Post-Deployment Checklist

- [ ] Test contact form
- [ ] Verify all images load
- [ ] Check dark/light mode toggle
- [ ] Test responsive design on mobile
- [ ] Verify all navigation links work
- [ ] Test project links (GitHub, demos)
- [ ] Check social media links
- [ ] Test resume download
- [ ] Verify email notifications work
- [ ] Check console for errors

## Troubleshooting

### Contact Form Not Working
1. Check backend is running (visit `/api/health`)
2. Verify CORS is enabled
3. Check environment variables are set
4. Test with Postman/Thunder Client

### Images Not Loading
1. Ensure images are in `client/public/`
2. Check paths are correct (case-sensitive)
3. Verify images are committed to Git

### Build Failures
1. Check Node version (use Node 18+)
2. Clear node_modules and reinstall
3. Check for syntax errors
4. Review build logs

## Monitoring

### Vercel
- View deployment logs in dashboard
- Set up analytics (optional)
- Configure error tracking

### Render/Railway
- Monitor server logs
- Set up health checks
- Configure auto-deploy on push

## Custom Domain Setup

### Vercel (Frontend)
1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Add domain in Vercel settings
3. Update DNS records:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

### Custom Backend Domain
1. Use Render custom domains feature
2. Or use Cloudflare for SSL/CDN

## Performance Optimization

### Frontend
- Enable Vercel Analytics
- Use image optimization
- Enable compression
- Configure caching headers

### Backend
- Use connection pooling
- Implement rate limiting
- Add request logging
- Monitor response times

## Security

- [ ] Enable HTTPS (automatic on Vercel/Render)
- [ ] Set secure CORS policy
- [ ] Use environment variables for secrets
- [ ] Implement rate limiting on contact form
- [ ] Add CAPTCHA (optional)
- [ ] Regular dependency updates

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor error logs weekly
- Backup environment variables
- Test contact form monthly
- Update content as needed

### Updating Content
1. Edit component files locally
2. Test changes: `npm run dev`
3. Commit and push to GitHub
4. Vercel auto-deploys on push

## Cost Estimate

### Free Tier (Recommended for Portfolio)
- **Vercel**: Free (100GB bandwidth/month)
- **Render**: Free (750 hours/month)
- **Railway**: Free ($5 credit/month)

### Paid Options (If Needed)
- **Vercel Pro**: $20/month
- **Render Starter**: $7/month
- **Railway**: Pay as you go

## Support Resources

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- Railway Docs: https://docs.railway.app

## Need Help?

Contact: naeemnaikwadi32@gmail.com
