# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/92b88d5e-b277-4ee0-9f06-5db32ed999e8

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/92b88d5e-b277-4ee0-9f06-5db32ed999e8) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/92b88d5e-b277-4ee0-9f06-5db32ed999e8) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## 🔐 Environment Variables

This project requires the following environment variables for full functionality:

### Frontend (Vite)

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_TURNSTILE_SITE_KEY` | Optional | Cloudflare Turnstile site key for CAPTCHA. Falls back to default if not set. |

### Backend (Cloudflare Pages Functions)

These must be set in Cloudflare Pages dashboard under Settings → Environment Variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `TURNSTILE_SECRET_KEY` | **Yes** | Cloudflare Turnstile secret key for server-side verification. Get from [Cloudflare Dashboard](https://dash.cloudflare.com/?to=/:account/turnstile). |
| `RESEND_API_KEY` | **Yes** | Resend API key for sending emails. Get from [Resend Dashboard](https://resend.com/api-keys). |

### Email Configuration

The contact form sends two emails:
1. **Internal notification** to `contact.luminousanddeliver@gmail.com` with full lead details
2. **Confirmation email** to the user thanking them for their enquiry

Emails are sent from:
- Internal: `noreply@luminousanddeliver.co.uk`
- Confirmation: `contact@luminousanddeliver.co.uk`

Make sure these domains are verified in Resend: [Resend Domains](https://resend.com/domains)

---

# 🚀 Performance & PWA Features

This app includes advanced performance optimizations and Progressive Web App capabilities.

## ✅ Implemented Features

### 🎯 Lazy Loading & Code Splitting
- All route components are lazy-loaded for faster initial load
- Automatic code splitting reduces main bundle size
- Suspense boundaries with skeleton loading states
- Vendor chunks for React, UI components, and query library

### 🛡️ Error Boundaries
- Graceful error handling with user-friendly fallback UI
- Automatic error reporting to Google Analytics
- Dev mode shows detailed error information
- Recovery options (reload page, return home)

### ⚡ Route Preloading
- Pages preload on link hover for instant navigation
- Smart preloading with configurable delays (default: 200ms)
- Reduces perceived navigation time
- Works with keyboard navigation (focus events)

### 📱 PWA Features
- **Installable**: Add to home screen on mobile and desktop
- **Offline Support**: Service worker caches assets
- **Auto-Update**: Workbox manages updates automatically
- **Fast Loading**: Cached assets load instantly
- **Install Prompt**: Smart install prompt after 10 seconds
- **Install Page**: Visit `/install` for installation instructions

### 📊 Performance Monitoring
- **Web Vitals**: LCP, FID, CLS, TTFB, FCP tracking
- **Google Analytics**: Integrated event tracking
- **Page Views**: Automatic tracking on route changes
- **Custom Events**: Track any user interaction
- **Error Tracking**: Automatic exception reporting

### 🎨 Enhanced UX
- Animated counters for statistics
- Floating action menu for quick access
- Hero parallax scrolling effect
- Staggered card animations
- Testimonials auto-play carousel
- Loading skeletons for better perceived performance

## 🛠️ Setup Instructions

### 1. PWA Icons
Create these icons in the `public/` folder:
- `pwa-192x192.png` (192×192px)
- `pwa-512x512.png` (512×512px)
- `apple-touch-icon.png` (180×180px)

Use [PWA Asset Generator](https://github.com/elegantapp/pwa-asset-generator):
```bash
npx pwa-asset-generator logo.svg public/
```

### 2. Google Analytics
Replace `GA_MEASUREMENT_ID` in `index.html` (line 40 and 42) with your actual Google Analytics 4 Measurement ID.

Get your ID from: https://analytics.google.com

### 3. Test PWA Locally
```bash
npm run build
npm run preview
```
Visit http://localhost:4173 and test:
- Install prompt appears after 10 seconds
- App works offline (Network tab → Offline)
- Service worker is registered

## 📊 Performance Metrics

Track performance in your app:
```typescript
import { performanceMonitor } from '@/utils/performance';

// Get current Web Vitals
const metrics = performanceMonitor.getMetrics();
console.log('LCP:', metrics.lcp, 'ms');
console.log('FID:', metrics.fid, 'ms');
console.log('CLS:', metrics.cls);

// Track custom events
performanceMonitor.trackEvent('button_click', {
  button_id: 'cta-hero',
  page: '/'
});
```

## 🎯 Performance Targets

| Metric | Target | Current Implementation |
|--------|--------|----------------------|
| LCP | < 2.5s | ✅ Lazy loading, image optimization |
| FID | < 100ms | ✅ Code splitting, minimal JS |
| CLS | < 0.1 | ✅ Skeleton loaders, size hints |
| TTFB | < 600ms | ✅ Static generation, CDN |
| Bundle | < 1MB | ✅ Manual chunks, tree-shaking |

## 🔧 Advanced Configuration

### Customize Preloading
```typescript
import { PreloadLink } from '@/components/PreloadLink';

// Adjust preload delay
<PreloadLink to="/services" preloadDelay={100}>
  Services
</PreloadLink>
```

### Manual Performance Tracking
```typescript
import { measureAsync } from '@/utils/performance';

// Measure async operations
const data = await measureAsync('fetch-products', async () => {
  return await fetch('/api/products').then(r => r.json());
});
```

### Custom Error Boundaries
```typescript
import ErrorBoundary from '@/components/ErrorBoundary';

<ErrorBoundary fallback={<CustomErrorUI />}>
  <YourComponent />
</ErrorBoundary>
```

## 📱 PWA Testing Checklist

- [ ] Install prompt appears on mobile
- [ ] App works offline after installation
- [ ] Service worker updates automatically
- [ ] Icons display correctly on home screen
- [ ] Standalone mode works (no browser UI)
- [ ] Push notifications work (if implemented)
- [ ] Lighthouse PWA score > 90

## 🚀 Deployment

When deploying:
1. PWA assets are generated during `npm run build`
2. Service worker is automatically registered
3. Install prompt will show on HTTPS domains only
4. Test with Chrome DevTools → Application tab

## 📚 Learn More

- [Web Vitals](https://web.dev/vitals/)
- [PWA Guide](https://web.dev/progressive-web-apps/)
- [Workbox](https://developers.google.com/web/tools/workbox)
- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
