# Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: VUCA Prime webapp"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure (Optional)**
   - Project Name: `vuca-prime-webapp`
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-configured)
   - Output Directory: `.next` (auto-configured)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? `vuca-prime-webapp`
   - In which directory is your code located? `./`

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Environment Variables

This project doesn't require any environment variables for basic functionality.

If you add analytics or other services later:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables

## Custom Domain (Optional)

1. Go to your project in Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimizations

The app is already optimized for production:
- ✅ Next.js 14 App Router for optimal performance
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Static generation where possible
- ✅ Tailwind CSS for minimal CSS bundle size
- ✅ Framer Motion for smooth animations

## Build Settings

Vercel automatically configures these, but for reference:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18.x or higher
- Review build logs in Vercel dashboard

### Fonts Not Loading
- Fonts are loaded via Google Fonts CDN in `layout.tsx`
- Should work automatically, no additional configuration needed

### Animations Not Smooth
- Ensure Framer Motion is installed: `npm install framer-motion`
- Clear browser cache

## Post-Deployment Checklist

- [ ] Verify all sections load correctly
- [ ] Test mobile responsiveness
- [ ] Check animations and interactions
- [ ] Test navigation between sections
- [ ] Verify all data displays correctly
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Share link with team for feedback

## Monitoring

Vercel provides built-in analytics:
1. Go to your project dashboard
2. Click "Analytics" tab
3. View performance metrics, page views, etc.

## Updates and Redeployment

After making changes:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

Vercel will automatically redeploy on push to main branch.

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Project Issues: Contact development team

---

**Deployment Target:** Production-ready for management presentations
**Expected Load Time:** < 3 seconds on 4G connection
**Mobile Support:** iOS Safari 14+, Chrome Android 90+
**Desktop Support:** Chrome 90+, Firefox 88+, Safari 14+
