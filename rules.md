# SAVA Digital Factory — Project Rules

## Demo Package Tiers

Every demo under `/work/` maps to exactly one service package and must visually prove its value.

| Demo | Package | Badge | Key differentiators |
|---|---|---|---|
| Mavi Fincan | SAVA START | `START` | Single-page only. No sub-routes. Minimal nav. |
| Eksen Hukuk | SAVA BUSINESS | `BUSINESS` | 5 sub-pages, working contact form, GA hook, JSON-LD. |
| Orion Travel | SAVA COMMERCE | `COMMERCE` | Listing + detail + cart + checkout + payment placeholder + 10 seeded products. |

---

## SAVA START (Mavi Fincan)
- **Single scrolling page only** — no sub-routes under `/work/mavi-fincan/`.
- Sections: Hero → About → Menu highlights → Reservation CTA → Location/Map → Footer.
- CTA must link to WhatsApp or phone (`tel:`).
- **No** contact form with server submission, **no** Google Analytics, **no** multi-page nav.
- Keep it fast and lightweight.

## SAVA BUSINESS (Eksen Hukuk)
- Minimum **5 sub-pages** under `/work/eksen-law/`:
  - `/` — Home (hero, stats, practice areas, process, testimonials, FAQ)
  - `/hakkimizda` — About (mission, values, timeline)
  - `/hizmetler` — Services (detailed scope per area)
  - `/ekibimiz` — Team (attorney bios, education, focus areas)
  - `/iletisim` — Contact (form with client-side validation, success/error states)
- **Navigation** in `EksenLayout` must reflect all 5 pages with active-link highlighting.
- **Contact form** must validate required fields before submission. Show both success and error states.
- **Google Analytics** via `GoogleAnalytics` client component using `NEXT_PUBLIC_GA_ID` env var. Fail gracefully if missing.
- **JSON-LD** `LegalService` schema on home page.
- Proper `<Metadata>` (title, description, openGraph, canonical) on every page.
- Dark (`bg-[#0e1117]`) theme with amber accent (`amber-500`).

## SAVA COMMERCE (Orion Travel)
- **Listing page** `/work/orion-travel/turlar`: search, region filters, sort (price/duration/reviews).
- **Detail page** `/work/orion-travel/turlar/[slug]`: date selector, traveler count, add-to-cart, includes/excludes, FAQ, gallery placeholders, Product JSON-LD schema.
- **Cart** — client-side state via `CartContext` (add, remove, clear, total).
- **Checkout flow** — 3-step sidebar (Bilgiler → Ödeme → Onay) with mock payment card form (iyzico/Stripe/Havale tabs) and installment options.
- **10 seeded tour packages** in `_data/tours.ts` with realistic data.
- **Payment placeholder** visible on home page and in checkout (iyzico + Stripe + Havale).
- Teal (`teal-500`) accent on dark navy (`bg-[#0b1622]`) theme.
- `generateMetadata` on listing and detail pages. Product JSON-LD on detail pages.

---

## General Rules

### Routing
- All 3 demos live under `/src/app/work/[demo]/`.
- Demo sub-pages must **not** use the main SAVA `Header`/`Footer` — they use their own layout component (`EksenLayout`, `OrionLayout`).
- Mavi Fincan is a single page; it may use its own minimal inline header.

### Code Quality
- No emojis in UI components (use SVG icons, text abbreviations, or number badges).
- Data-driven sections — keep content arrays/objects at top of file or in `_data/` files.
- Reuse layout components (`EksenLayout`, `OrionLayout`) across all sub-pages of that demo.
- `"use client"` only on components that need React state/effects. Server components for static pages.

### SEO & Metadata
- Every page exports `metadata` (or `generateMetadata`) with at minimum: `title`, `description`, `openGraph`, `alternates.canonical`.
- JSON-LD `script` tags rendered via `dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}`.
- **BUSINESS** minimum: `LegalService` or `Organization` schema.
- **COMMERCE** minimum: `TravelAgency` on home, `Product` schema on every detail page.

### Pricing Page (`/pricing`)
- Remove "Gizli maliyet yok" text if it appears.
- The 3 package cards must visually match the 3 demo tiers (START → BUSINESS → COMMERCE).

### Contact Page (`/contact`)
- Email must be `info@sava.company`.
- Form submits to `/api/contact` which emails to `info@sava.company` via SMTP (nodemailer).
- SMTP config via env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`.

### Environment Variables
| Variable | Used in | Purpose |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | `GoogleAnalytics.tsx` (Eksen Hukuk) | Google Analytics 4 Measurement ID |
| `SMTP_HOST` | `/api/contact/route.ts` | SMTP server host |
| `SMTP_PORT` | `/api/contact/route.ts` | SMTP port (default 587) |
| `SMTP_USER` | `/api/contact/route.ts` | SMTP username |
| `SMTP_PASS` | `/api/contact/route.ts` | SMTP password |

---

## File Structure Reference

```
src/app/work/
├── page.tsx                          # Demos listing — shows START/BUSINESS/COMMERCE badges
├── mavi-fincan/
│   └── page.tsx                      # START — single scrolling landing page
├── eksen-law/
│   ├── page.tsx                      # BUSINESS — Home
│   ├── hakkimizda/page.tsx           # BUSINESS — About
│   ├── hizmetler/page.tsx            # BUSINESS — Services
│   ├── ekibimiz/page.tsx             # BUSINESS — Team
│   ├── iletisim/page.tsx             # BUSINESS — Contact (with form)
│   └── _components/
│       ├── EksenLayout.tsx           # Shared layout: nav, footer, demo badge
│       └── GoogleAnalytics.tsx       # GA4 script (graceful no-op if no env var)
└── orion-travel/
    ├── page.tsx                      # COMMERCE — Home
    ├── turlar/
    │   ├── page.tsx                  # COMMERCE — Tour listing (filters + sort)
    │   └── [slug]/
    │       ├── page.tsx              # COMMERCE — Tour detail (SSG + JSON-LD)
    │       └── TourDetailClient.tsx  # Client: date/traveler picker, add-to-cart
    ├── _data/
    │   └── tours.ts                  # 10 seeded tour packages + helpers
    └── _components/
        ├── OrionLayout.tsx           # Shared layout: nav, footer, cart sidebar, checkout
        └── CartContext.tsx           # Cart state context (add/remove/clear)
```

---

## Manual Test Checklist

### Mavi Fincan (START)
- [ ] `/work/mavi-fincan` — single scroll, no sub-nav links to sub-pages
- [ ] Reservation CTA links to phone/WhatsApp
- [ ] No multi-page navigation visible

### Eksen Hukuk (BUSINESS)
- [ ] `/work/eksen-law` — home with 5-section layout
- [ ] `/work/eksen-law/hakkimizda` — loads without error
- [ ] `/work/eksen-law/hizmetler` — 6 service areas, detailed scope
- [ ] `/work/eksen-law/ekibimiz` — 3 attorney cards with bio/education
- [ ] `/work/eksen-law/iletisim` — form validates empty name/email/short message
- [ ] `/work/eksen-law/iletisim` — submit shows success state (stub)
- [ ] Active nav link highlighted on each page
- [ ] `<title>` tag is page-specific on each sub-page

### Orion Travel (COMMERCE)
- [ ] `/work/orion-travel` — home with payment provider cards
- [ ] `/work/orion-travel/turlar` — 10 tours listed
- [ ] Filter by region works
- [ ] Sort by price works
- [ ] `/work/orion-travel/turlar/kapadokya-balon` — detail page loads
- [ ] Change date, change traveler count → total price updates
- [ ] "Sepete Ekle" → cart count badge updates in header
- [ ] Cart sidebar opens with item, shows total
- [ ] Checkout: step through Bilgiler → Ödeme → Onay → success screen
- [ ] Sepetten "Kaldır" removes the item
