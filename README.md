# Safran & Afnan Wedding Invitation

A premium animated Muslim wedding invitation website built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

The confirmed wedding date is Tuesday, September 22, 2026.

## Editable Wedding Details

All practical wedding information lives in:

`src/data/wedding.js`

Update that file when these details are confirmed:

- Exact wedding time
- Venue name
- Venue address
- Google Maps link or latitude/longitude
- Map embed URL
- WhatsApp RSVP number
- Hijri date
- Gallery image paths
- Background music path

Do not search through React components to update the event details.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Assets

Add files here:

- Wedding photos: `public/assets/couple-1.jpg`, `public/assets/couple-2.jpg`, `public/assets/wedding-detail.jpg`, `public/assets/mosque.jpg`
- Social preview image: `public/assets/wedding-preview.jpg`
- Background music: `public/assets/harris_jayaraj.mp3`

The website includes graceful fallbacks if photos, music, or map details are not available yet.

## GitHub Pages Deployment Guide

1. Create a new GitHub repository.
2. Push this project to the repository.
3. Open the repository Settings.
4. Select Pages.
5. Under Source, choose GitHub Actions.
6. Push to the `main` branch.
7. Wait for the deployment workflow to finish.
8. Open the generated GitHub Pages URL.
9. Test it on mobile.
10. Send the link through WhatsApp.

The Vite base path is configured for GitHub Pages subdirectories and custom domains.
