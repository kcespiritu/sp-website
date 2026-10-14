## sp-website

Personal site for Kenneth Espiritu — automation, full-stack, and systems work.

### Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (route transitions)
- IBM Plex Sans / IBM Plex Mono via `next/font`

### Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

### Structure

| Path | Purpose |
|---|---|
| `src/lib/content.ts` | All site copy and project data — edit content here, not in the pages |
| `src/app/page.tsx` | Home |
| `src/app/projects/page.tsx` | Selected work + earlier roles |
| `src/app/about/page.tsx` | Background and skills |
| `src/app/contact/page.tsx` | Contact details |
| `src/components/` | Header, Footer, Section, ProjectEntry, NavLink, RouteTransition |
| `src/app/globals.css` | Design tokens, base styles, `.shell` / `.specgrid` / `.chip` utilities |
| `tailwind.config.ts` | Palette, fonts, widths |

### Editing content

Almost everything you would want to change lives in `src/lib/content.ts`: the headline claim, intro,
the three flagship projects, earlier roles, capabilities, skills, and contact links.

### Design tokens

Defined twice on purpose — as CSS-ish values in Tailwind (`ink`, `paper`, `line`, `accent`) and consumed
via utility classes. The accent is signal amber (`#C2410C`) on warm paper (`#FAF8F5`) with near-black ink
(`#151210`). Keep to one accent.

### Deploy

Vercel, auto-deploying from `main`.
