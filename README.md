# seanpstanley.dev

My portfolio site. Meant to evoke a single "membrane": seamed tiles, domed buttons that press in, a little screen that follows you down the page, and some bubble wrap.

Live at [seanpstanley.dev](https://seanpstanley.dev).

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion · Resend + React Email · deployed on Vercel.

Fonts: [Doto](https://fonts.google.com/specimen/Doto) (dot-matrix display), [Geist and Geist Mono](https://vercel.com/font).

## Running it

Needs Node 24 (see `.nvmrc`) and pnpm. The pnpm version is pinned in `package.json`, and pnpm switches to it automatically.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
pnpm format     # prettier (sorts Tailwind classes too)
```

### Environment

| Variable         | Used for                         |
| ---------------- | -------------------------------- |
| `RESEND_API_KEY` | sending the contact form's email |

With the Vercel CLI linked, `vercel env pull .env.local` fetches it.

## Where things live

- `app/`: the page, layout, 404, link-preview image, robots, and sitemap.
- `app/globals.css`: the design tokens for the light ("chalk") and dark ("graphite") themes, plus the material utilities (`sheet`, `cell`, `well`, `chip`, `pad`, `floating`, `bubble`, `keycap`, `lcd`, `led`, `field`).
- `components/sections/`: the page's sections (About, Experience, Projects, Skills, Contact).
- `components/panel/`: the left-hand control panel and its modules (name plate, nav keys, readout, theme switch, clock, bubble wrap).
- `components/mobile/`: what replaces the panel's nav on phones: `MobileReadout` (top) and `MobileDock` (bottom).
- `components/`: shared pieces (`Section`, `TechTags`, `SubmitButton`, `Footer`, `Disclaimer`, `Providers`).
- `context/ActiveSectionProvider.tsx`: tracks which section is in view (the scroll spy).
- `lib/data.ts`: all the content: experience, projects, skills, footer quotes. Its shapes are in `lib/types.ts`.
- `lib/theme.ts`, `lib/sound.ts`, `lib/clock.ts`: client state for the theme, the pop sound, and the clock. `lib/theme-script.ts` applies the theme before first paint.
- `actions/sendEmail.ts` and `emails/ContactFormEmail.tsx`: the contact form's server action and the email it sends.

## Accessibility

Text colors meet WCAG AA in both themes. Everything works with a keyboard, and decorative pieces (the bubble wrap, the section screen) are hidden from screen readers. Motion respects "reduce motion".
