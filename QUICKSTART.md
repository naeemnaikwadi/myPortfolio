# 🚀 Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Install Dependencies (2 min)

Open terminal in project root:

```bash
# Install all dependencies at once
npm run install:all
```

Or install separately:

```bash
# Client
cd client
npm install

# Server
cd ../server
npm install
```

## Step 2: Configure Email (1 min)

```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**Get Gmail App Password:**
1. Go to: https://myaccount.google.com/apppasswords
2. Create app password for "Mail"
3. Copy 16-character code
4. Paste in .env file

## Step 3: Add Your Images (1 min)

Place in `client/public/`:
- `profile.jpg` - Your photo
- `workspace.jpg` - Your setup
- `projects/growskill.jpg`
- `projects/skillsync.jpg`
- `projects/revcorp.jpg`
- `projects/icam.jpg`

**Don't have images yet?** The site will still work, just shows placeholder backgrounds.

## Step 4: Run Development Servers (1 min)

**Terminal 1 - Frontend:**
```bash
cd client
npm run dev
```
Opens at: http://localhost:5173

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
```
Runs on: http://localhost:5000

## ✅ You're Done!

Visit http://localhost:5173 to see your portfolio!

---

## Next Steps

### Customize Content (10-15 min)

1. **Update Personal Info** - Edit these files:
   - `client/src/components/Hero.jsx` - Name, tagline
   - `client/src/components/About.jsx` - Bio, education
   - `client/src/components/Contact.jsx` - Email, location

2. **Update Projects** - Edit:
   - `client/src/components/Projects.jsx` - Add your GitHub/demo links

3. **Update Social Links** - Edit:
   - `client/src/components/Hero.jsx` - Social media URLs
   - `client/src/components/Footer.jsx` - Footer links

### Test Contact Form

1. Fill out form on contact page
2. Click "Send Message"
3. Check your email for the message

### Deploy (15 min)

See `DEPLOYMENT.md` for full guide.

**Quick Deploy:**
1. Push to GitHub
2. Connect to Vercel (frontend)
3. Connect to Render (backend)
4. Update API URL in Contact.jsx

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Kill process on port 5000
npx kill-port 5000
```

### Contact Form Not Working
- Check server is running
- Verify .env file exists
- Check email credentials

### Images Not Showing
- Ensure images are in `client/public/`
- Check file names match exactly
- Refresh browser (Ctrl+F5)

### Dark Mode Not Working
- Clear browser cache
- Check browser console for errors

---

## Commands Cheat Sheet

```bash
# Install everything
npm run install:all

# Run frontend only
npm run dev:client

# Run backend only
npm run dev:server

# Build for production
npm run build:client

# Preview production build
npm run preview:client
```

---

## File Structure

```
portfolio/
├── client/                 # Frontend (React + Tailwind)
│   ├── public/            # Static assets (images, resume)
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   └── package.json
│
├── server/                # Backend (Node.js + Express)
│   ├── server.js         # API server
│   ├── .env              # Environment variables
│   └── package.json
│
├── README.md             # Main documentation
├── SETUP.md              # Detailed setup guide
├── DEPLOYMENT.md         # Deployment instructions
└── FEATURES.md           # Feature list
```

---

## Need Help?

1. Check `SETUP.md` for detailed instructions
2. Check `DEPLOYMENT.md` for deployment help
3. Check `FEATURES.md` for feature list
4. Email: naeemnaikwadi32@gmail.com

---

## Tips

💡 **Start Simple**: Get it running first, customize later
💡 **Test Locally**: Make sure everything works before deploying
💡 **Use Placeholders**: Don't have all images? Use temporary ones
💡 **Commit Often**: Save your progress with Git
💡 **Deploy Early**: Get it online and iterate

---

Happy Building! 🎉
