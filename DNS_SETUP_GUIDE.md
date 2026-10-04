# GoDaddy DNS Configuration Guide for rivellair.com

This guide provides the exact steps to connect your GoDaddy domain **`rivellair.com`** to your new Rivellair website.

---

## 1. Fast & Free Deployment Options (Recommended)

Since this website is built with modern, ultra-fast static web standards (HTML5, Vanilla CSS, JS with Vite), it can be deployed for free with automated SSL and global CDN on **Vercel**, **Netlify**, or **Cloudflare Pages**.

### Recommended: Deploying on Vercel
1. Run `npm run build` (production build output is in the `dist/` folder).
2. Push your project to GitHub (or use the Vercel CLI: `npx vercel deploy --prod`).
3. In Vercel, go to **Project Settings > Domains** and add `rivellair.com` and `www.rivellair.com`.

---

## 2. GoDaddy DNS Records to Configure

Log into your **[GoDaddy Account](https://www.godaddy.com/)**:
1. Navigate to **Domain Portfolio** (or **My Products**).
2. Click on **rivellair.com** and select **Manage DNS**.
3. Under **DNS Records**, add or update the following records:

| Record Type | Name (Host) | Value / Points To | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | `600 seconds` (10 mins) | Routes root domain `rivellair.com` to the global edge CDN |
| **CNAME** | `www` | `cname.vercel-dns.com` *(or `rivellair.com`)* | `1 Hour` | Routes `www.rivellair.com` seamlessly |
| **TXT** (Optional) | `@` | `_site-verification=...` | `1 Hour` | Domain ownership verification (if requested) |

> **Note on Nameservers:**
> Keep the default GoDaddy nameservers (`ns*.domaincontrol.com`) unless you wish to manage DNS directly through Cloudflare or Route53.

---

## 3. Propagation Timeline
- DNS changes made in GoDaddy typically take between **5 minutes to 2 hours** to propagate worldwide.
- You can verify propagation using free global DNS checkers like `https://whatsmydns.net/#A/rivellair.com`.
- SSL certificates (HTTPS) are provisioned automatically within minutes of DNS propagation.

---

## 4. Local Development

To run and preview the site locally on your computer:
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

To produce a production bundle for deployment:
```bash
npm run build
```
The output directory will be `dist/`.
