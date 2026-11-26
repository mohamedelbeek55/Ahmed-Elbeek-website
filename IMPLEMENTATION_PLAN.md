# IMPLEMENTATION_PLAN.md — Ahmed Elbeek Import & Export

> **Phase:** Architecture & Execution Roadmap (Planning Only — Zero Code Written)  
> **Approved Direction:** Premium Dark Red Corporate (`#0B0F14` / `#121B26` / `#151F2B` / `#192533` / `#B51219`)  
> **Skill Status:** `ui-ux-pro-max` Loaded & Applied | `frontend-design` Missing from `.agents/skills/`  
> **Companion Specs:** [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) | [`ASSET_INVENTORY.md`](ASSET_INVENTORY.md)

---

## 1. Proposed Stack & Architecture

Workspace contains planning documentation, visual assets (`public/images/`), empty `public/images/operations/`, and desktop reference (`design-references/dark.png`) — no framework files exist yet.

| Layer | Recommended Choice | Rationale |
|---|---|---|
| **Framework** | **Next.js (App Router, TypeScript)** | Built-in `next/image` automatically converts the `1.10 MB` `Ahmed Elbeek Global Trade Logo.png` and port images to lightweight WebP/AVIF without modifying source files; `next/font/google` self-hosts `Cairo` + `Plus Jakarta Sans` with zero layout shift. |
| **Styling** | **Tailwind CSS + CSS Variables** | Logical CSS utilities (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`) support seamless Arabic (`RTL`) / English (`LTR`) mirroring. |
| **Icons** | **`@phosphor-icons/react`** (or `lucide-react`) + Inline WhatsApp SVG | Uniform `1.75px` outline vector icons; zero emojis as UI icons. |
| **Bilingual Routing** | **Subpath Routing (`/` = Arabic RTL default, `/en` = English LTR)** | Clean SEO indexing (`lang`, `dir`, `hreflang`), instant toggling via `AR | EN` control, shared strongly typed copy dictionary (`ar.ts` / `en.ts`). |
| **Motion** | **CSS Transitions + Lightweight `IntersectionObserver`** | Subtle `180–260ms` transitions, zero Hero LCP blocking, automatic `prefers-reduced-motion` compliance. |

---

## 2. Information Architecture & Section Breakdown

1. **Sticky Header (`Header.tsx`)**
   - `BrandLogo` (header variant): Unmodified `1254×1254` white-canvas logo inside calibrated `#FDFDFD` crest plaque + `#151F2B` corporate tray + live HTML company typography (`أحمد البيك — للاستيراد والتصدير` / `Ahmed Elbeek — Import & Export`).
   - 7 Navigation Links: `الرئيسية` (`#hero`), `من نحن` (`#about`), `خدماتنا` (`#services`), `نطاق عملنا` (`#locations`), **`من أعمالنا`** (`#our-work`), `لماذا نحن` (`#why-us`), `تواصل معنا` (`#contact`).
   - Desktop: `#B51219` WhatsApp CTA + `AR | EN` switcher (`inline-end`).
   - Mobile (`< 1024px`): Compact `BrandLogo`, `AR | EN` button (`min-h-[44px]`), `44×44px` drawer trigger opening `#121B26` slide-in navigation + direct contact actions.

2. **Hero Section (`HeroSection.tsx`) — `#hero`**
   - **Desktop (`>= 1024px`):** Exact preservation of [`design-references/dark.png`](design-references/dark.png) — dark content panel `inline-start`, double-layer diagonal `#B51219` geometric divider, `al-awja-yard.jpg` `inline-end` capped at `<= 620px` height (`object-[68%_45%]`).
   - **Mobile (`360px–767px`):** Upgraded editorial depth composition — edge-to-edge `al-awja-yard.jpg` (`270–310px` height, `object-[72%_42%]`), top & deep bottom gradient scrims, overlapping two-plane diagonal crimson SVG transition into `#0B0F14`, subtle corner radial red glow, `3px` crimson vertical bar beside bold Arabic H1 & `#F4585E` tagline, and full-width `48px` primary & secondary CTAs above the fold.

3. **About / Corporate Overview (`AboutSection.tsx`) — `#about`**
   - Concise bilingual corporate positioning band anchoring `#about` navigation without invented awards, dates, or statistics.

4. **Services Section (`ServicesSection.tsx`) — `#services`**
   - 4 equal `#151F2B` cards:
     1. Import & Export (`الاستيراد والتصدير`)
     2. Customs Clearance (`التخليص الجمركي`)
     3. Freight & Shipment Coordination (`النقل وتنسيق الشحنات`)
     4. Operations Follow-up (`متابعة وتنسيق العمليات`)

5. **Operating Locations (`LocationsSection.tsx`) — `#locations`**
   - Highlights all 3 approved ports plus operational flexibility across additional ports:
     1. **Al-Awja Land Port (`منفذ العوجة البري`)**: [`al-awja-gate.jpg`](public/images/al-awja-gate.jpg) (`aspect-[4/3]`, `object-[50%_18%]`) + `#B51219` badge.
     2. **Alexandria Port (`ميناء الإسكندرية`)**: [`alexandria-port.webp`](public/images/alexandria-port.webp) (`aspect-[4/3]` or `16:10`, `object-[55%_45%]`) + sea-port badge.
     3. **Damietta Port (`ميناء دمياط`)**: Renders verified Damietta photo once uploaded to `public/images/`; until then renders a neutral dark architectural sea-port card (`#151F2B`) with zero fabricated imagery.
   - `port-reference.webp` (`500×281`) stays **unassigned** (never labeled as Damietta or Alexandria).

6. **Operations Showcase (`OurWorkSection.tsx`) — `#our-work` (`من أعمالنا`)**
   - Renamed from `عملياتنا وبضائعنا` to **`من أعمالنا`** (`Our Work`).
   - Supporting copy on shipments, cargo variety, loading stages, and field execution.
   - 4 flexible visual slots (`Trucks During Loading`, `Fully Loaded Trucks`, `Diverse Cargo Types`, `Field Operations`):
     - Reads real assets from `public/images/operations/` when supplied.
     - If licensed generic stock visuals are used for MVP, each frame explicitly displays a subtle `صورة توضيحية` / `Illustrative Visual` badge and section disclaimer — never misrepresenting stock photos as past projects by Ahmed Elbeek.

7. **Why Work With Us (`WhyUsSection.tsx`) — `#why-us`**
   - 4-column feature strip with vertical hairline dividers matching `dark.png` (`متابعة واهتمام بالتفاصيل`, `وضوح في التواصل`, `تنسيق العمليات حسب متطلبات العمل`, `مرونة في التعامل مع المنافذ`).

8. **Contact Banner (`ContactSection.tsx`) — `#contact`**
   - `#151F2B` banner with restrained `#B51219` radial glow:
     - Primary WhatsApp (`https://wa.me/201093313193`)
     - Phone 1: `01093313193` (`tel:+201093313193`, `<bdi dir="ltr">`)
     - Phone 2: `01092755002` (`tel:+201092755002`, `<bdi dir="ltr">`)
     - Email: `elbeekb2b@gmail.com` (`mailto:elbeekb2b@gmail.com`, `<bdi dir="ltr">`)

9. **Footer (`Footer.tsx`) + Persistent WhatsApp FAB (`FloatingWhatsApp.tsx`)**
   - Larger executive white crest presentation (`96×96px–112×112px` `#FDFDFD` plaque with crimson structural accent) aligned cleanly to `inline-start`, nav links (including `من أعمالنا`), `AR | EN` toggle, and reserved bottom clearance (`pb-24` mobile).
   - **Persistent Floating WhatsApp FAB**: Always visible throughout the entire scroll (never auto-hidden on Hero or Contact). Standard WhatsApp green `#25D366` with high-contrast `#0B0F14` icon/label (`9.69:1`), `>= 52px` circular button on mobile (`54×54px`), compact pill/circular button on desktop (`48px` pill / `56px` circle), `env(safe-area-inset-bottom)` safe offset.

---

## 3. Proposed Directory Structure

```text
├── public/
│   └── images/
│       ├── Ahmed Elbeek Global Trade Logo.png   # Preferred 1254×1254 master logo
│       ├── ahmed-elbeek-logo.png                # Legacy 500×500 transparent archive
│       ├── al-awja-gate.jpg                     # Al-Awja Land Port gate
│       ├── al-awja-yard.jpg                     # Hero Al-Awja twilight yard
│       ├── alexandria-port.webp                 # Alexandria Port terminal
│       ├── damietta-port.*                      # PENDING upload from client
│       ├── port-reference.webp                  # Unassigned generic port reference
│       └── operations/                          # Future authentic "من أعمالنا" photos
├── src/
│   ├── app/
│   │   ├── layout.tsx                           # Cairo + Plus Jakarta Sans, SEO, metadata
│   │   ├── globals.css                          # Design tokens, dark surfaces, reduced-motion
│   │   ├── page.tsx                             # Arabic (RTL) default landing page
│   │   └── en/
│   │       └── page.tsx                         # English (LTR) landing page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── MobileDrawer.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── LocationsSection.tsx
│   │   │   ├── OurWorkSection.tsx               # Renamed "من أعمالنا" gallery section
│   │   │   ├── WhyUsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── BrandLogo.tsx                    # Integrated #FDFDFD crest plaque (header & footer)
│   │       ├── DiagonalAccent.tsx               # Desktop split & mobile multi-plane diagonal divider
│   │       ├── FloatingWhatsApp.tsx             # Persistent #25D366 WhatsApp FAB
│   │       └── SectionHeading.tsx
│   └── content/
│       ├── types.ts
│       ├── contact.ts
│       ├── ar.ts
│       └── en.ts
```

---

## 4. Mobile UX & Performance Risk Matrix

| Risk | Affected Viewports | Mitigation |
|---|---|---|
| **Opaque white logo looks like an awkward pasted square** | All (`360px–1440px`) | Match plaque exactly to `#FDFDFD`, nest inside `#151F2B` header brand tray beside live bilingual HTML text with crimson trim, and use a `96–112px` architectural crest card in footer. |
| **1.10 MB logo PNG slows mobile load** | `360px–430px` (4G) | Never serve raw PNG via `<img>`; optimize via `next/image` into `~5–12 KB` WebP/AVIF while keeping master PNG untouched. |
| **Flat mobile hero layout** | `360px–767px` | Dual photo scrims + 2-plane overlapping diagonal crimson SVG + ambient corner glow + `3px` crimson editorial accent bar beside H1. |
| **Persistent WhatsApp FAB covers footer/contact actions** | `360px–430px` | Apply `pb-24` (`96px`) clearance in mobile footer & keep key contact controls inset away from bottom `inset-inline-end` corner (`calc(16px + env(safe-area-inset-bottom))`). |
| **WhatsApp white-on-green low contrast (`1.98:1`)** | All | Use dark `#0B0F14` WhatsApp icon/label on `#25D366` (`9.69:1` AAA contrast) with subtle outer ring. |
| **Low-res `port-reference.webp` (`500×281`) upscaling** | Tablet / Desktop | Keep `port-reference.webp` unassigned for named ports; never render wider than `420px`. |
| **Missing Damietta Port photo** | All | Render clean dark architectural sea-port card fallback until Damietta photo is uploaded into `public/images/`. |

---

## 5. Implementation Phases (Awaiting Explicit Approval)

1. **Pre-Flight Check:** Confirm Damietta Port file upload (if ready) and MVP illustrative visual preference for `من أعمالنا`.
2. **Phase 1 — Scaffold & Tokens:** Next.js App Router + TypeScript + Tailwind CSS + `Cairo` / `Plus Jakarta Sans` + CSS tokens.
3. **Phase 2 — Core Chrome & Brand System:** `BrandLogo` plaque component, RTL/LTR Header & Drawer, Footer crest layout, persistent `#25D366` `FloatingWhatsApp`, typed `ar.ts`/`en.ts` copy.
4. **Phase 3 — Sections:** Desktop & upgraded Mobile Hero, About, Services, Locations (`Al-Awja`, `Alexandria`, `Damietta`), `من أعمالنا` gallery, Why Us, Contact Banner.
5. **Phase 4 — Cross-Viewport & Accessibility Verification:** Inspect `360px`, `390px`, `430px`, `768px`, and `1440px` in `AR` & `EN`; verify persistent FAB non-overlap, contrast, keyboard focus, zero overflow, and clean `next build`.
