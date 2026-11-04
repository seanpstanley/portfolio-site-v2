# seanpstanley.dev

My portfolio site. One sheet of rubber: seamed tiles, domed keys that press in, a little screen that follows you down the page, and some bubble wrap.

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

- `app/globals.css`: the design tokens for the light ("chalk") and dark ("graphite") themes, plus the material utilities (`sheet`, `cell`, `well`, `chip`, `pad`, `bubble`, `keycap`, `lcd`, `led`, `field`).
- `lib/data.ts`: all the content: experience, projects, skills, footer quotes.
- `components/ControlPanel.tsx`: the left-hand panel. On phones it becomes `MobileReadout` (top) and `MobileDock` (bottom).
- `actions/sendEmail.ts`: the contact form's server action.
- `lib/theme.ts` and `lib/theme-script.ts`: theme state, plus the inline script that applies it before first paint.

## Accessibility

Text colors meet WCAG AA in both themes. Everything works with a keyboard, and decorative pieces (the bubble wrap, the section screen) are hidden from screen readers. Motion respects "reduce motion".
