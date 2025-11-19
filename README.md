# 🚀 Naeem Anjum Naikwadi - Portfolio Website

> A modern, professional developer portfolio showcasing Full Stack Development, AI/ML projects, and technical leadership.

![React](https://img.shields.io/badge/React-18.3-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)
![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with Indigo + Cyan color scheme
- 🌓 **Dark/Light Mode** - Seamless theme switching
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ✨ **Smooth Animations** - Framer Motion throughout
- 📧 **Contact Form** - Working email integration
- 🎯 **Project Showcase** - 4 featured projects with live demos
- 📊 **Skills Display** - Categorized technical expertise
- 📅 **Experience Timeline** - Visual work & leadership history
- 🏆 **Certifications** - Professional certificates & workshops

## 🎯 Quick Start

### Option 1: Automated Setup (Windows)

```bash
# Run installation script
install.bat

# Start development servers
start-dev.bat
```

### Option 2: Manual Setup

```bash
# Install all dependencies
npm run install:all

# Terminal 1 - Frontend
cd client
npm run dev

# Terminal 2 - Backend
cd server
npm run dev
```

Visit: **http://localhost:5173**

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get running in 5 minutes
- **[SETUP.md](SETUP.md)** - Detailed setup instructions
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy to production
- **[FEATURES.md](FEATURES.md)** - Complete feature list
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Project overview

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Nodemailer** - Email service

## 📁 Project Structure

```
portfolio/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/          # Static assets (add your images here)
├── server/              # Node.js backend
│   ├── server.js
│   └── .env            # Email credentials (create this)
└── docs/               # Documentation
```

## ⚙️ Configuration

### 1. Email Setup

```bash
cd server
cp .env.example .env
```

Edit `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**Get Gmail App Password:**
1. Visit: https://myaccount.google.com/apppasswords
2. Create password for "Mail"
3. Copy 16-character code

### 2. Add Your Images

Place in `client/public/`:
- `profile.jpg` - Your photo (500x500px)
- `workspace.jpg` - Your setup (1200x800px)
- `resume.pdf` - Your resume
- `projects/*.jpg` - Project screenshots

### 3. Customize Content

Edit these files:
- `Hero.jsx` - Name, tagline, social links
- `About.jsx` - Bio, education
- `Skills.jsx` - Technical skills
- `Experience.jsx` - Work history
- `Projects.jsx` - Project details
- `Certifications.jsx` - Certificates
- `Contact.jsx` - Contact info

## 🚀 Deployment

### Frontend → Vercel
```bash
cd client
npm run build
# Deploy to Vercel
```

### Backend → Render
```bash
# Deploy server folder to Render
# Add environment variables in dashboard
```

See **[DEPLOYMENT.md](DEPLOYMENT.md)** for detailed instructions.

## 📊 Sections

1. **Hero** - Introduction with CTA buttons
2. **About** - Personal story & education (8.89 CGPA)
3. **Skills** - Languages, frameworks, tools, design
4. **Experience** - 4 positions (leadership & internships)
5. **Projects** - GrowSkill.edu, SkillSync, REVCORP, iCam
6. **Certifications** - 5 professional certificates
7. **Contact** - Functional email form
8. **Footer** - Links & social media

## 🎨 Customization

### Change Colors

Edit `client/tailwind.config.js`:
```js
colors: {
  primary: { 500: '#6366f1' },  // Indigo
  accent: { 400: '#22d3ee' }    // Cyan
}
```

### Change Fonts

Edit `client/index.html` Google Fonts link

## 📝 Commands

```bash
# Install dependencies
npm run install:all

# Development
npm run dev:client    # Frontend
npm run dev:server    # Backend

# Production
npm run build:client
npm run preview:client
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npx kill-port 5173  # Frontend
npx kill-port 5000  # Backend
```

### Contact Form Not Working
- Check server is running
- Verify .env credentials
- Check browser console

### Images Not Loading
- Ensure files are in `client/public/`
- Check file names (case-sensitive)
- Clear browser cache

## 📄 License

MIT License - Free to use for your own portfolio!

## 👤 Author

**Naeem Anjum Naikwadi**

- 📧 Email: naeemnaikwadi32@gmail.com
- 📍 Location: Kolhapur, India
- 🎓 B.Tech CSE - KIT's College of Engineering (8.89 CGPA)
- 💼 Full Stack Developer | AI & ML Enthusiast | Technical Leader

### Connect
- GitHub: [Add your URL]
- LinkedIn: [Add your URL]

## 🙏 Acknowledgments

- React Team
- Tailwind CSS
- Framer Motion
- Vercel & Render

---

**Built with ❤️ using React + Tailwind CSS + Node.js**

⭐ Star this repo if you found it helpful!
