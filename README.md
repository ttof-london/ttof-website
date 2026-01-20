# 🎉 Two Tons of Fun Website

## Your Complete Step-by-Step Guide

Hey! This guide will walk you through EVERYTHING. No coding knowledge needed - just copy, paste, and click!

---

## 📁 What's in This Folder?

```
ttof-website/
├── index.html          ← Your main homepage
├── merch.html          ← Your merch page (ready when you need it)
├── manifest.json       ← Makes it installable as an app
├── service-worker.js   ← Enables push notifications
├── TTOF-main-logo.png  ← Your logo (you'll add this)
└── README.md           ← This guide!
```

---

## 🚀 STEP 1: Set Up Your Accounts (One-Time Only)

### 1A. Create a GitHub Account (FREE)
1. Go to **https://github.com**
2. Click **"Sign Up"**
3. Use your email, create a password
4. Verify your email
5. Done! ✅

### 1B. Create a Netlify Account (FREE)
1. Go to **https://netlify.com**
2. Click **"Sign Up"**
3. Choose **"Sign up with GitHub"** (easiest!)
4. Authorize Netlify to access your GitHub
5. Done! ✅

### 1C. Set Up OneSignal for Push Notifications (FREE)
1. Go to **https://onesignal.com**
2. Click **"Sign Up"**
3. Create a free account
4. Click **"New App/Website"**
5. Name it "Two Tons of Fun"
6. Choose **"Web"** as your platform
7. Choose **"Typical Site"**
8. Enter your website URL (you'll get this from Netlify later - you can update it)
9. Follow their setup wizard
10. **IMPORTANT**: Copy the code they give you - you'll add it to your index.html later
11. Done! ✅

---

## 🌐 STEP 2: Upload Your Website to GitHub

### Option A: Using GitHub Desktop (Easiest!)

1. Download GitHub Desktop: **https://desktop.github.com**
2. Install and sign in with your GitHub account
3. Click **"Create New Repository"**
4. Name: `ttof-website`
5. Choose where to save it on your computer
6. Click **"Create Repository"**
7. Open that folder on your computer
8. Copy ALL the files from this folder into it
9. **Don't forget to add your logo file!** (TTOF-main-logo.png)
10. In GitHub Desktop, you'll see the files listed
11. Type a message like "First upload" in the Summary box
12. Click **"Commit to main"**
13. Click **"Publish repository"**
14. Uncheck "Keep this code private" (so Netlify can access it)
15. Click **"Publish Repository"**
16. Done! ✅

### Option B: Upload Directly to GitHub Website

1. Go to **https://github.com**
2. Click the **+** in the top right → **"New repository"**
3. Name: `ttof-website`
4. Make it **Public**
5. Click **"Create repository"**
6. Click **"uploading an existing file"**
7. Drag ALL the files from this folder (including your logo!)
8. Click **"Commit changes"**
9. Done! ✅

---

## 🌍 STEP 3: Connect to Netlify (Make It Live!)

1. Go to **https://app.netlify.com**
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"**
4. Find and select your `ttof-website` repository
5. Click **"Deploy site"**
6. Wait 1-2 minutes...
7. 🎉 **Your site is now LIVE!**

You'll see a random URL like `random-name-123.netlify.app`

---

## 🔗 STEP 4: Connect Your Custom Domain

1. In Netlify, go to your site → **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `twotons.fun`)
4. Click **"Verify"** → **"Add domain"**
5. Netlify will show you DNS settings to add to your domain registrar

### At Your Domain Registrar (where you bought the domain):
1. Find **DNS Settings** or **Nameservers**
2. Add the records Netlify tells you (usually A record or CNAME)
3. Wait 1-24 hours for it to work

---

## 🎟️ STEP 5: Add Your Outsavvy Tickets

1. Log in to **Outsavvy**
2. Go to your event
3. Click **Promote Event** → **Widgets**
4. Copy the **iframe code** they give you

5. Open `index.html` in a text editor (Notepad, TextEdit, or VS Code)
6. Find this section (around line 260):
   ```html
   <!-- PLACEHOLDER - Delete this and paste your Outsavvy code -->
   <div class="widget-placeholder">
       ...
   </div>
   <!-- END PLACEHOLDER -->
   ```
7. Delete everything between the comments
8. Paste your Outsavvy iframe code
9. Add `class="outsavvy-embed"` to the iframe, like this:
   ```html
   <iframe class="outsavvy-embed" src="https://www.outsavvy.com/..."></iframe>
   ```
10. Save the file
11. Upload the updated file to GitHub (it will auto-deploy to Netlify!)

---

## 📧 STEP 6: Add Your Brevo Newsletter Form

1. Log in to **Brevo**
2. Go to **Marketing** → **Forms** → **Sign-up**
3. Create a form or use existing one
4. Click **"Share"**
5. Copy the **Iframe code**

6. Open `index.html` in a text editor
7. Find this section (around line 290):
   ```html
   <!-- PLACEHOLDER - Delete this and paste your Brevo code -->
   <div style="text-align: center; padding: 40px 20px;">
       ...
   </div>
   <!-- END PLACEHOLDER -->
   ```
8. Delete everything between the comments
9. Paste your Brevo iframe code
10. Add `class="brevo-embed"` to the iframe:
    ```html
    <iframe class="brevo-embed" src="https://sibforms.com/..."></iframe>
    ```
11. Save and upload to GitHub

---

## 🔔 STEP 7: Enable Push Notifications (OneSignal)

1. Go to your **OneSignal dashboard**
2. Go to **Settings** → **Push Notification Web Configuration**
3. Make sure your domain is correct
4. Copy the **Web SDK** code they provide
5. Open `index.html`
6. Paste the OneSignal code just before `</head>` (around line 10)
7. Save and upload to GitHub

### To Send a Push Notification:
1. Go to OneSignal dashboard
2. Click **"New Push"**
3. Write your message
4. Click **"Send"**
5. Everyone who installed your app will get it! 🎉

---

## ✏️ HOW TO EDIT YOUR WEBSITE

### Change Text:
1. Open `index.html` in a text editor
2. Find the text you want to change
3. Edit it
4. Save the file
5. Upload to GitHub

### Change Colors:
Find this section near the top of `index.html`:
```css
:root {
    --color-brown: #5D3A3A;
    --color-pink: #E85A71;
    --color-yellow: #F5E6A3;
    --color-cream: #FDF8E8;
    --color-white: #FFFFFF;
    --color-black: #2D2D2D;
}
```
Change the hex codes to your preferred colors!

### Add Social Media Links:
Find this in the footer section:
```html
<a href="#" aria-label="Instagram">📸</a>
```
Replace `#` with your actual social media URLs.

### Add the Merch Page:
1. The `merch.html` file is already ready!
2. In `index.html`, find the navigation section
3. Uncomment this line (remove the `<!-- -->` around it):
   ```html
   <li><a href="merch.html">Merch</a></li>
   ```
4. Save and upload

---

## 🆘 TROUBLESHOOTING

### "My changes aren't showing up!"
- Make sure you saved the file
- Make sure you uploaded to GitHub
- Wait 1-2 minutes for Netlify to rebuild
- Try hard-refreshing: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### "My domain isn't working!"
- DNS changes can take up to 24 hours
- Double-check the DNS settings match what Netlify told you
- Contact your domain registrar's support

### "Push notifications aren't working!"
- Make sure you added the OneSignal code to index.html
- Make sure your domain is set correctly in OneSignal
- Users need to "install" the app (add to home screen) on iOS

---

## 📱 HOW THE APP WORKS

When people visit your website on their phone:
1. After 30 seconds, they'll see an "Install App" prompt
2. If they install it, your website becomes an app on their phone!
3. They can receive push notifications (if they allow them)
4. It works offline too!

On **iOS (iPhone/iPad)**: Users need to click Share → Add to Home Screen
On **Android**: Users will get an automatic install prompt

---

## 🎉 YOU'RE DONE!

Your website is now:
- ✅ Live on the internet
- ✅ Connected to your domain
- ✅ Installable as an app
- ✅ Able to send push notifications
- ✅ Has embedded ticket sales
- ✅ Has newsletter signup
- ✅ Ready for a merch page when you want it

**Questions?** Just ask! 💖

---

Made with love for Two Tons of Fun 🎉
