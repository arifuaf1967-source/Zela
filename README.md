# Zela Boost — Portfolio Website (Version 1)

A responsive, dark-premium Next.js 15 App Router / TypeScript website with six service offerings, a filterable portfolio, four individual case studies, about and contact pages.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Run `npm run build` before deployment.

## Launch checklist (important)

- Replace the **typographic placeholder logo** in `components/Navigation.tsx` and `components/Footer.tsx` with your approved SVG/PNG logo.
- Replace portfolio artwork and project information in `lib/content.ts` with approved photos, video thumbnails and verified client descriptions.
- Replace case study outcome placeholder text with real, permissioned metrics. **No performance stats are fabricated.**
- Replace `YOUR_EMAIL@DOMAIN.COM` in `components/ContactForm.tsx` and `app/contact/page.tsx` with the actual agency email.
- The contact form currently opens the visitor's mail client, but does NOT transmit data to a backend. For production, connect a service such as Resend, Formspree, or a validated API endpoint with spam protection and a privacy policy.
- Add your real booking link, social links, legal/privacy information, and approved testimonials as appropriate.
- Remove the `robots: {index:false,follow:false}` safeguard from `app/layout.tsx` once all placeholders are replaced and the site is ready for search engines.
- Replace metadata, favicon, OG images, and domain placeholders. Validate the site for accessibility, mobile, performance and privacy compliance before public launch.

## Pages
- `/` homepage
- `/services` all services
- `/work` filterable portfolio
- `/work/[slug]` each case study
- `/about` agency overview
- `/contact` inquiry form (mailto draft)

## Deployment
Push this folder to GitHub and import the repository to Vercel. Vercel recognizes Next.js automatically. Supply your domain in Vercel's dashboard, verify DNS, and enable HTTPS.
