# 8 ABS Gym — Multipage Website

Kanpur's Premier Strength & Core Destination — full multipage React website.

## Tech Stack

- **React 19** + **Vite 8**
- **React Router DOM v6** — client-side routing
- **Tailwind CSS v3**
- **PostCSS** + **Autoprefixer**

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, About, Services (preview), Why Us, Membership, Location |
| `/services` | Services | All 6 programs with expanded descriptions + Why Us |
| `/membership` | Membership | All plans, What's Included, FAQ accordion |
| `/contact` | Contact | Contact form, quick info cards, map |
| `*` | 404 | Not found page |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed nav with active NavLink states
│   ├── Footer.jsx        # Footer with Router Links
│   ├── Hero.jsx          # Home hero section
│   ├── About.jsx         # About section
│   ├── Services.jsx      # Services grid (preview prop for home)
│   ├── WhyUs.jsx         # Features grid + CTA banner
│   ├── Membership.jsx    # Pricing cards
│   ├── Location.jsx      # Map + contact info
│   ├── PageHero.jsx      # Reusable inner-page hero banner
│   └── ScrollToTop.jsx   # Floating scroll-to-top button
├── pages/
│   ├── HomePage.jsx
│   ├── ServicesPage.jsx
│   ├── MembershipPage.jsx
│   ├── ContactPage.jsx
│   └── NotFoundPage.jsx
├── App.jsx               # Routes + layout
├── main.jsx              # Entry point with BrowserRouter
└── index.css             # Tailwind + custom components
```

## Gym Info

- **Address:** W block, 620/161, near Jagran College, Saket Nagar, Kanpur, UP 208014
- **Phone:** 090444 05342
- **Hours:** 6:00 AM – 10:00 PM, Mon–Sun
- **Head Coach:** Mr. Sonu Mishra
- **Google Rating:** 4.9 ★
