# TCGEXOTICS

Marketing site for **TCGEXOTICS** — luxury, exotic & everyday car rentals by the day,
week or month across **NYC · NJ · CT · PA**. Built for conversion: fast paths to
**Reserve** and **Call** on every screen, transparent pricing, and a clean, cinematic
dark aesthetic anchored by the brand's gauge-gradient signature.

## Stack

- **Vite** + **React 19**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** (reduced-motion aware via `MotionConfig`)
- **React Router DOM** (multi-page)
- **lucide-react** icons

## Pages

| Route       | Purpose                                                      |
| ----------- | ----------------------------------------------------------- |
| `/`         | Home — hero, featured fleet, how it works, social proof     |
| `/fleet`    | Full fleet with interactive category filtering              |
| `/pricing`  | Daily / weekly / monthly rentals, requirements, FAQ         |
| `/about`    | Story, coverage, stats                                      |
| `/contact`  | Contact methods + reservation form                          |

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy (Vercel)

Zero-config. `vercel.json` includes the SPA rewrite so client-side routes resolve.
Framework preset: **Vite**. Build command `npm run build`, output `dist/`. No env vars required.

## Notes

- **Reserve** and **Contact** forms are mock (front-end only) — they simulate a
  successful submission. Wire them to a CRM / webhook / SMS provider before launch.
- Photography is hotlinked from **Unsplash** (`src/data/images.js`). Swap in real
  photos of the actual fleet when available.
- Business info (phone, Instagram, coverage, copy) lives in `src/data/site.js`;
  the fleet lives in `src/data/fleet.js`. Edit those to update content.
