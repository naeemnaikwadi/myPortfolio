# Portfolio Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 2. Configure Environment

```bash
# In server directory
cp .env.example .env
```

Edit `server/.env` with your credentials:
```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

### 3. Add Your Images

Place these images in `client/public/`:
- `profile.jpg` - Professional headshot (square, 500x500px recommended)
- `workspace.jpg` - Your coding setup (landscape, 1200x800px)
- `projects/growskill.jpg` - Project screenshot
- `projects/skillsync.jpg` - Project screenshot
- `projects/revcorp.jpg` - Project screenshot
- `projects/icam.jpg` - Project screenshot
- `contact-illustration.svg` - Contact illustration (optional)

### 4. Run Development Servers

**Terminal 1 - Frontend:**
```bash
cd client
npm run dev
```
Visit: http://localhost:5173

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
```
Server runs on: http://localhost:5000

## Customization Checklist

### Personal Information
- [ ] Update name and tagline in `Hero.jsx`
- [ ] Update bio in `About.jsx`
- [ ] Update education details in `About.jsx`
- [ ] Update skills in `Skills.jsx`
- [ ] Update experience in `Experience.jsx`
- [ ] Update projects in `Projects.jsx`
- [ ] Update certifications in `Certifications.jsx`
- [ ] Update contact info in `Contact.jsx`
- [ ] Update social links in `Hero.jsx` and `Footer.jsx`

### Branding
- [ ] Update favicon in `client/public/`
- [ ] Update page title in `client/index.html`
- [ ] Update meta description in `client/index.html`
- [ ] Customize colors in `client/tailwind.config.js`

### Content
- [ ] Add your resume PDF to `client/public/resume.pdf`
- [ ] Add all project images
- [ ] Add profile and workspace photos
- [ ] Update project GitHub and demo links

## Gmail App Password Setup

1. Enable 2-Step Verification on your Google Account
2. Go to: https://myaccount.google.com/apppasswords
3. Select "Mail" and "Other (Custom name)"
4. Name it "Portfolio Contact Form"
5. Copy the 16-character password
6. Paste it in `server/.env` as `EMAIL_PASS`

## Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project in Vercel
3. Set root directory to `client`
4. Deploy

### Backend (Render)
1. Create new Web Service
2. Connect GitHub repository
3. Set root directory to `server`
4. Add environment variables
5. Deploy

### Update API URL
After deploying backend, update the API URL in `client/src/components/Contact.jsx`:
```js
const response = await fetch('YOUR_BACKEND_URL/api/contact', {
```

## Troubleshooting

### Contact form not working
- Check server is running on port 5000
- Verify .env file has correct credentials
- Check browser console for CORS errors

### Images not loading
- Ensure images are in `client/public/` folder
- Check file names match exactly (case-sensitive)
- Clear browser cache

### Styling issues
- Run `npm install` in client directory
- Check Tailwind CSS is configured correctly
- Verify dark mode toggle is working

## Support

For issues or questions, contact: naeemnaikwadi32@gmail.com
