# EmailJS Setup Guide (No Backend Needed!)

EmailJS allows you to send emails directly from your frontend without a backend server.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Verify your email

### Step 2: Add Email Service

1. Go to https://dashboard.emailjs.com/admin
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account"
5. Sign in with: **naeemnaikwadi32@gmail.com**
6. Allow EmailJS access
7. Copy your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Go to "Email Templates" tab
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Click "Save"
5. Copy your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. Go to "Account" tab
2. Find "API Keys" section
3. Copy your **Public Key** (e.g., `abcdefghijk123`)

### Step 5: Update Contact Component

Replace these values in `client/src/components/Contact.jsx`:

```javascript
await emailjs.send(
  'service_abc123',      // Your Service ID
  'template_xyz789',     // Your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'naeemnaikwadi32@gmail.com'
  },
  'abcdefghijk123'       // Your Public Key
)
```

### Step 6: Test & Deploy

1. Save the file
2. Commit changes:
   ```bash
   git add .
   git commit -m "Add EmailJS integration"
   git push
   ```
3. Vercel will auto-deploy
4. Test from mobile!

## ✅ Benefits of EmailJS

- ✅ No backend server needed
- ✅ Works on all devices (mobile, desktop)
- ✅ Free tier: 200 emails/month
- ✅ Easy to set up
- ✅ Reliable delivery
- ✅ No server costs

## 🔒 Security Note

Your EmailJS keys are safe to expose in frontend code - they're designed for public use. EmailJS handles rate limiting and spam protection.

## 📧 Alternative: Keep Backend Approach

If you prefer using your Node.js backend:

1. Deploy backend to Render (see DEPLOYMENT.md)
2. Add environment variable in Vercel:
   - Name: `VITE_API_URL`
   - Value: Your Render backend URL
3. Redeploy frontend

## 💡 Recommendation

**Use EmailJS** - It's simpler, free, and works perfectly for portfolio contact forms!

---

Need help? Email: naeemnaikwadi32@gmail.com
