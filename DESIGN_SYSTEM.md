# DESIGN_SYSTEM.md — Ahmed Elbeek Import & Export

> **Phase:** Design Planning (Pre-Implementation Specification — Revised)  
> **Brand:** Ahmed Elbeek Import & Export (`أحمد البيك للاستيراد والتصدير`)  
> **Visual Direction:** Premium Dark Red Corporate  
> **Primary Reference:** [`design-references/dark.png`](design-references/dark.png) (Desktop only — no mobile reference supplied)  
> **Skill Availability:** [`ui-ux-pro-max`](.agents/skills/ui-ux-pro-max/SKILL.md) **Loaded & Queried** | `frontend-design` **Missing from `.agents/skills/`** (not loaded)

---

## 1. Visual Philosophy & Skill Audit

### 1.1 Skill Availability Report (Verified on Disk)
- **`ui-ux-pro-max`**: Present at `.agents/skills/ui-ux-pro-max/SKILL.md` and actively queried via `scripts/search.py` for design system structure, dark-mode contrast, typography, RTL/mobile UX, responsive images, icons, and Next.js / Tailwind best practices.
- **`frontend-design`**: **Still Missing** from `.agents/skills/` (`d:\Ahmed Elbeek\Ahmed Elbeek website\.agents\skills\frontend-design\SKILL.md` does not exist on disk). Do not assume or claim `frontend-design` was loaded. Visual art direction comes directly from the approved [`design-references/dark.png`](design-references/dark.png) desktop reference, client brand constraints, and `ui-ux-pro-max`.

### 1.2 Core Design Pillars
1. **Editorial Corporate Authority**: Layered deep-charcoal surfaces (`#0B0F14` → `#121B26` → `#151F2B` → `#192533`) create architectural depth without flat navy backgrounds or excessive gradients.
2. **Restrained Brand Crimson (`#B51219`)**: Red defines brand authority and directional focus — diagonal geometric transitions, primary hero/contact CTAs, active navigation markers, location badges, subtle ambient corner lighting, and uniform outline icons.
3. **Deliberate White Emblem Integration**: Rather than awkwardly stripping the white canvas from the `1254×1254` master logo or pasting a stark square sticker onto `#0B0F14`, the official brand mark lives inside a tailored white/slate architectural crest module.
4. **Authentic Port & Operations Storytelling**: Real photographs anchor Al-Awja and Alexandria (plus Damietta once its verified image file is uploaded to `public/images/`), while the **`من أعمالنا`** section presents flexible visual showcase slots with strict distinction between illustrative MVP visuals and verified company work.
5. **Bilingual Parity (`AR` RTL Default / `EN` LTR)**: Every spacing token, grid, directional chevron, and diagonal hero slash uses CSS Logical Properties or `[dir]` mirroring.

---

## 2. Color Tokens & Contrast Architecture

### 2.1 Approved Surface, Brand & Utility Tokens

| Token Name | CSS Variable | Hex / RGBA Value | Role & Usage Rules |
|---|---|---|---|
| **Main Background** | `--bg-main` | `#0B0F14` | Root `<body>`, Hero content stage, sticky Header base, Footer base |
| **Secondary Background** | `--bg-secondary` | `#121B26` | Alternating section bands (`Services`, `من أعمالنا`, `Why Us`), Mobile drawer |
| **Card Surface** | `--bg-card` | `#151F2B` | Service cards, Port location cards, `من أعمالنا` gallery cards, Header brand tray, Contact banner |
| **Elevated Surface** | `--bg-elevated` | `#192533` | Card hover surface, interactive chips, sub-panels |
| **Brand Red (Primary)** | `--brand-red` | `#B51219` | Primary Hero/Nav/Contact CTAs, diagonal crimson geometric separator, location pills, active nav marker |
| **Brand Red (Hover/Pressed)** | `--brand-red-hover` | `#9B0F15` | Hover/active state for `#B51219` fills |
| **Brand Red (Ambient Glow)** | `--brand-red-glow` | `rgba(181, 18, 25, 0.16)` | Restrained radial ambient wash behind hero text panel & contact card corner |
| **Accessible Crimson Text** | `--text-red-accent` | `#F4585E` | Hero red subheadline, eyebrow tags, outline icons on dark `#0B0F14`–`#192533` |
| **Primary Text** | `--text-primary` | `#F5F6F7` | Headlines, card titles, primary nav links, button text |
| **Secondary Text** | `--text-secondary` | `#A7B0BC` | Descriptions, inactive nav items, secondary labels |
| **Subtle Border** | `--border-subtle` | `rgba(255, 255, 255, 0.10)` | Structural card dividers, subtle grid lines, non-interactive borders |
| **Interactive Border** | `--border-interactive` | `rgba(255, 255, 255, 0.34)` | Secondary outline buttons, language switcher frame, interactive input borders |
| **Logo Plaque White** | `--surface-logo-plaque` | `#FDFDFD` | Matches `RGB(253..255)` background of `Ahmed Elbeek Global Trade Logo.png` seamlessly |
| **WhatsApp Green (Persistent FAB)** | `--whatsapp-green` | `#25D366` | Standard recognizable WhatsApp floating action button background |
| **WhatsApp Ink (Accessible Contrast)** | `--whatsapp-ink` | `#0B0F14` | High-contrast WhatsApp phone-bubble glyph/label inside `#25D366` FAB (`9.69:1` contrast) |

### 2.2 WCAG 2.2 Contrast Verification

| Foreground | Background | Ratio | WCAG Status & Rule |
|---|---|---|---|
| `#F5F6F7` (Primary Text) | `#0B0F14` / `#151F2B` | **17.76:1 / 15.37:1** | AAA Pass — Safe across all dark surfaces |
| `#A7B0BC` (Secondary Text) | `#0B0F14` / `#192533` | **8.77:1 / 7.08:1** | AAA Pass — Safe for body copy & metadata |
| `#FFFFFF` / `#F5F6F7` | `#B51219` (Brand Red CTA) | **6.85:1 / 6.33:1** | AA Pass (`>= 4.5:1`) — White/off-white text on `#B51219` fills |
| `#B51219` (Brand Red) | `#0B0F14` / `#151F2B` | **2.81:1 / 2.43:1** | **FAILS AA** for text/icons on dark backgrounds — reserve `#B51219` for solid fills, slashes, glows, borders |
| `#F4585E` (Crimson Text/Icon) | `#0B0F14` / `#121B26` / `#151F2B` / `#192533` | **5.86 / 5.29 / 5.07 / 4.73 : 1** | **AA Pass (`>= 4.5:1`) across all 4 dark tiers** |
| `rgba(255,255,255,0.34)` Border | `#0B0F14` / `#151F2B` | **3.08:1 / 3.09:1** | WCAG 1.4.11 Pass (`>= 3.0:1`) for interactive outlines |
| `#B00302` / `#2F2F2F` (Master Logo Inks) | `#FDFDFD` (Logo Plaque) | **7.15:1 / 13.06:1** | AAA/AA Pass — Master logo remains crisp and authoritative |
| `#0B0F14` Icon/Label | `#25D366` (WhatsApp FAB) | **9.69:1** | AAA Pass (`#FFFFFF` on `#25D366` is only `1.98:1`; using dark `#0B0F14` glyph or darker `#15803D` with white `5.02:1` guarantees accessibility — `#25D366` + `#0B0F14` glyph preserves exact WhatsApp green + maximum readability) |

---

## 3. Typography & Bilingual Font Pairings

### 3.1 Recommended Font Pairing
- **Arabic (Default RTL):** **Cairo** (`400`, `500`, `600`, `700`, `800`) — crisp geometric Kufi authority matching [`design-references/dark.png`](design-references/dark.png), strong counter clarity at `15px–16px` mobile body sizes.
- **English (LTR):** **Plus Jakarta Sans** (`400`, `500`, `600`, `700`, `800`) — clean corporate geometry aligned with Cairo's weight rhythm.
- **Alternative Technical Option:** **IBM Plex Sans Arabic** + **IBM Plex Sans** (if a strictly neutral technical B2B tone is preferred).
- **Numerals & Contacts:** Enforce `font-variant-numeric: tabular-nums` and wrap `01093313193`, `01092755002`, and `elbeekb2b@gmail.com` in `<bdi dir="ltr">` inside Arabic RTL layouts. Never apply positive `letter-spacing` to Arabic text.

### 3.2 Responsive Typography Scale

| Role | Token | Mobile (`360px–430px`) | Tablet (`768px–1023px`) | Desktop (`>= 1024px`) | Weight | Line Height (`AR` / `EN`) |
|---|---|---|---|---|---|---|
| **Hero H1** | `--text-hero-h1` | `clamp(1.875rem, 7.2vw, 2.25rem)` (`30–36px`) | `2.625rem` (`42px`) | `clamp(2.75rem, 3.6vw, 3.5rem)` (`44–56px`) | `800` | `1.22` / `1.12` |
| **Hero Subheadline (Red)** | `--text-hero-sub` | `1.125rem` (`18px`) | `1.25rem` (`20px`) | `1.375rem` (`22px`) | `700` | `1.45` / `1.35` |
| **Section Eyebrow** | `--text-eyebrow` | `0.8125rem` (`13px`) | `0.875rem` (`14px`) | `0.875rem` (`14px`) | `700` | `1.40` / `1.40` |
| **Section H2** | `--text-section-h2` | `1.625rem` (`26px`) | `2rem` (`32px`) | `2.25rem` (`36px`) | `800` | `1.30` / `1.20` |
| **Card Title H3** | `--text-card-h3` | `1.125rem` (`18px`) | `1.1875rem` (`19px`) | `1.25rem` (`20px`) | `700` | `1.40` / `1.30` |
| **Body Lead** | `--text-lead` | `0.9375rem` (`15px`) | `1.0625rem` (`17px`) | `1.125rem` (`18px`) | `400` | `1.75` / `1.60` |
| **Body Standard** | `--text-body` | `0.9375rem` (`15px`) | `1rem` (`16px`) | `1rem` (`16px`) | `400` | `1.75` / `1.60` |
| **UI / Button / Nav** | `--text-ui` | `0.9375rem` (`15px`) | `0.9375rem` (`15px`) | `0.9375rem` (`15px`) | `600` | `1.25` / `1.25` |
| **Badge / Caption** | `--text-caption` | `0.8125rem` (`13px`) | `0.8125rem` (`13px`) | `0.875rem` (`14px`) | `500` | `1.45` / `1.45` |

---

## 4. Spacing, Radii, Shadows & Breakpoints

### 4.1 Spacing & Radii
- **Spacing Rhythm (`4px / 8px`):** `--space-2: 8px` (minimum gap between touch targets), `--space-3: 12px`, `--space-4: 16px` (`360px` container gutter), `--space-5: 20px` (`390px–430px` gutter & mobile card padding), `--space-6: 24px` (desktop card padding & grid gap), `--space-12: 48px` (mobile section `py`), `--space-20: 80px` (desktop section `py`).
- **Radii:**
  - `--radius-sm: 8px` (logo plaque inner insert, micro tags)
  - `--radius-md: 10px` (primary/secondary buttons, header brand crest tray)
  - `--radius-lg: 14px` (service cards, port cards, `من أعمالنا` gallery cards)
  - `--radius-xl: 18px` (footer logo crest card, contact banner)
  - `--radius-pill: 9999px` (port badge pill, circular WhatsApp FAB)
- **Shadows:** Rely on `#0B0F14` → `#121B26` → `#151F2B` → `#192533` surface elevation + `1px solid rgba(255,255,255,0.10)` borders. Use controlled depth shadows only on primary `#B51219` CTAs (`0 10px 24px -6px rgba(181,18,25,0.45)`), the white logo plaque frame (`0 6px 18px rgba(0,0,0,0.45)`), and the persistent WhatsApp FAB (`0 10px 28px rgba(0,0,0,0.55)`).

### 4.2 Breakpoints & Viewport Matrix

| Viewport Tier | Width | Gutter | Services | Locations | `من أعمالنا` | Why Us | Footer Bottom Safe Clearance |
|---|---|---|---|---|---|---|---|
| **Mobile XS** | `360px` | `16px` | `1 col` | `1 col` | `1 col` | `1 col` | `pb-24` (`96px`) for persistent FAB |
| **Mobile Std** | `390px` | `20px` | `1 col` | `1 col` | `1 col` | `2 cols` (`2×2`) | `pb-24` (`96px`) |
| **Mobile Large** | `430px` | `20px` | `1 col` | `1 col` | `1 col` | `2 cols` (`2×2`) | `pb-24` (`96px`) |
| **Tablet (`md`)** | `768px–1023px` | `32px` | `2 cols` | `2 cols` (`Al-Awja` full or `3-up` scroll/2+1) | `2 cols` | `2 cols` | `pb-20` (`80px`) |
| **Desktop (`lg` / `xl`)** | `1024px–1440px+` | `32px / 40px` | `4 cols` | `3-port asymmetric / balanced showcase` | `4 cols` (or `2×2` editorial) | `4 cols` | `pb-16` (`64px`) + right/end margin awareness |

---

## 5. Component Specifications

### 5.1 Deliberate White Logo Plaque Integration (Master Asset `1254×1254`)
> **Master Asset:** [`public/images/Ahmed Elbeek Global Trade Logo.png`](public/images/Ahmed%20Elbeek%20Global%20Trade%20Logo.png) (`1254×1254`, opaque `#FDFDFD`–`#FFFFFF` canvas, crimson `#B00302` globe/wordmark, charcoal `#2F2F2F` subtitle).  
> **Strict Rule:** Never remove its white background, recolor, redraw, crop, or distort proportions.

To ensure the opaque white `1254×1254` square integrates purposefully into the dark `#0B0F14` corporate identity rather than looking like a pasted white sticker:

1. **Header Brand Lockup (`BrandLogo` variant="header"):**
   - **Outer Corporate Tray:** An architectural dark-slate capsule/frame (`bg-[#151F2B]/90`, `border: 1px solid rgba(255,255,255,0.12)`, `rounded-[12px]`, `p-1.5 pe-3.5` in RTL/LTR logical spacing, `shadow-[0_4px_16px_rgba(0,0,0,0.35)]`) that binds the emblem and live company typography into **one unified brand signature**.
   - **Inner White Logo Plaque:** Inside the start side of the tray sits a calibrated `#FDFDFD` square crest (`40×40px` at `360px` / `44×44px` at `390px–767px` / `48×48px` on desktop, `rounded-[8px]`, `ring-1 ring-black/10`, `border-b-2 border-[#B51219]`, `p-0.5`). Matching `#FDFDFD` hides any `RGB(253–255)` edge seam completely, while the subtle `2px` bottom crimson architectural rule connects the plaque visually to `#B51219`.
   - **Paired HTML Company Typography:** Adjacent to the plaque:
     - Arabic: **أحمد البيك** (`15px–16px`, `font-bold`, `#F5F6F7`, tight leading) + **للاستيراد والتصدير** (`12px` mobile / `12.5px` desktop, `#A7B0BC` — hidden or compact single-line at `360px` only if drawer button needs extra room).
     - English: **Ahmed Elbeek** (`15px–16px`, `font-bold`, `#F5F6F7`) + **Import & Export** (`12px`, `#A7B0BC`).
2. **Footer Crest Presentation (`BrandLogo` variant="footer"):**
   - Larger executive presentation (`96×96px` mobile, `112×112px` desktop) inside an elevated white architectural card (`bg-[#FDFDFD]`, `rounded-[16px]`, `p-2`, `border border-white/20`, bottom/top `3px` `#B51219` structural trim, `shadow-[0_12px_32px_rgba(0,0,0,0.5)]`) anchored at `inline-start`, paired beside the company name, Arabic/English summary, and navigation columns. At `112×112px`, every stroke of `"Ahmed Elbeek"` and `"IMPORT & EXPORT"` inside the `1254×1254` PNG is crisp and legible without needing HTML repetition inside the card itself (HTML title sits respectfully beside it).

### 5.2 Navigation & Mobile Drawer
- **Header Links (7 Anchors):** `الرئيسية` (`#hero`), `من نحن` (`#about`), `خدماتنا` (`#services`), `نطاق عملنا` (`#locations`), **`من أعمالنا`** (`#our-work`), `لماذا نحن` (`#why-us`), `تواصل معنا` (`#contact`).
- **Desktop (`>= 1024px`):** `76px` sticky translucent bar (`rgba(11,15,20,0.88)` + `backdrop-filter: blur(12px)` + `1px` bottom border). `BrandLogo` at `inline-start`, centered nav (`gap-4 xl:gap-6`), compact `#B51219` WhatsApp CTA + `AR | EN` switcher at `inline-end`.
- **Mobile (`< 1024px`):** `64px` sticky bar with `BrandLogo` (`inline-start`) + `AR | EN` button (`min-h-[44px]`) + Hamburger toggle (`44×44px`) at `inline-end` (`gap-2`).
- **Mobile Slide-in Drawer:** Anchored to `inline-end`, `#121B26` surface, `min-h-[48px]` nav links, full-width `#B51219` WhatsApp CTA, direct tap-to-call `01093313193` / `01092755002`, and `elbeekb2b@gmail.com`. Escape/backdrop close + focus trap + scroll lock.

### 5.3 Desktop & Mobile Hero Composition

#### Desktop Hero (`>= 1024px`) — Exact Approved Composition
Preserves [`design-references/dark.png`](design-references/dark.png) faithfully:
- Large authentic [`al-awja-yard.jpg`](public/images/al-awja-yard.jpg) on the left (`inline-end` in RTL, `~58%` width, height capped at `clamp(520px, 60vh, 620px)` to protect native `537px` vertical resolution, `object-cover object-[68%_45%]`).
- Dark `#0B0F14` content panel on the right (`inline-start` in RTL, `~44%` width) with restrained bottom-start red radial glow.
- Bold white Arabic H1 (`أحمد البيك للاستيراد والتصدير`), crimson supporting headline (`خدمات تجارية.. ومتابعة لكل التفاصيل.` in `#F4585E`), muted description (`#A7B0BC`), primary `#B51219` WhatsApp CTA + secondary outlined CTA (`rgba(255,255,255,0.34)` border).
- Distinctive multi-layered diagonal crimson geometric separator dividing image and text (`-18deg` in RTL, `+18deg` in LTR).

#### Mobile Hero (`360px–767px`) — Layered Editorial Composition (Upgraded Depth & Hierarchy)
Addresses flatness in basic stacked prototypes without heavy effects or bloated animations:
1. **Atmospherically Framed Edge-to-Edge Photograph (`270px` @ `360px`, `290px` @ `390px`, `310px` @ `430px`, `370px` @ `768px`):**
   - Renders [`al-awja-yard.jpg`](public/images/al-awja-yard.jpg) edge-to-edge with precision focal framing **`object-cover object-[72%_42%]`** so the **Egyptian flag, Al-Awja gate arch, and loaded truck convoy** remain sharply composed inside narrow mobile widths.
   - **Dual Depth Scrims:**
     - Top edge gradient (`linear-gradient(to bottom, rgba(11,15,20,0.55) 0%, transparent 32%)`) merges seamlessly into the sticky header.
     - Deep bottom twilight dissolve (`linear-gradient(to top, #0B0F14 4%, rgba(11,15,20,0.72) 42%, transparent 100%)`) eliminates any hard rectangular photo box edge.
2. **Multi-Plane Diagonal Crimson Geometric Transition (`48px` Overlap Zone):**
   - Slicing dynamically across the lower boundary of the photo (`-mt-11 relative z-10`), an SVG geometric transition layers **two overlapping angled planes**:
     - Midground translucent crimson architectural wing (`rgba(181, 18, 25, 0.30)` angled polygon rising subtly toward `inline-start`),
     - Foreground razor `#B51219` diagonal bevel ribbon (`4px–5px` crisp crimson edge) capping the solid `#0B0F14` dark wedge below.
   - This mirrors desktop `dark.png`'s exact visual signature inside a vertical portrait flow, creating unmistakable foreground/midground/background depth.
3. **Connected Deep-Charcoal Content Stage:**
   - `#0B0F14` background elevated by a soft ambient corner spotlight (`radial-gradient(320px circle at 90% 8%, rgba(181, 18, 25, 0.16), transparent 70%)` in RTL; `10% 8%` in LTR).
   - **Typographic Anchor & Hierarchy:**
     - Fine `3px` crimson vertical accent bar (`border-s-[3px] border-[#B51219] ps-3.5`) framing the bold white **H1** (`أحمد البيك` / `للاستيراد والتصدير`) and **crimson supporting headline** (`خدمات تجارية.. ومتابعة لكل التفاصيل.` in `#F4585E`) — creating instant editorial structure on mobile.
     - Crisp `15px` `#A7B0BC` overview paragraph (`max-w-[38ch]`).
     - **Full-Width Accessible CTAs (`gap-3`):**
       - Primary `#B51219` WhatsApp button (`w-full min-h-[48px]`, `shadow-[0_10px_24px_-6px_rgba(181,18,25,0.45)]`),
       - Secondary `#151F2B/80` outlined Services button (`w-full min-h-[48px]`, `border border-white/35`).
   - **First-Screen Balance (`390×844`):** `64px` header + `290px` photo - `44px` overlap + `~360px` headline/copy/primary CTA = `~670px`, keeping the photo, diagonal crimson seam, headline, red tagline, and Primary WhatsApp CTA all visible above the fold!

### 5.4 Services Section (`خدماتنا` / Our Services)
- 4 equal-height `#151F2B` cards (`rounded-[14px]`, `border: 1px solid rgba(255,255,255,0.10)`, `p-6`) on `#121B26` section band:
  1. **Import & Export (`الاستيراد والتصدير`)**
  2. **Customs Clearance (`التخليص الجمركي`)**
  3. **Freight & Shipment Coordination (`النقل وتنسيق الشحنات`)**
  4. **Operations Follow-up (`متابعة وتنسيق العمليات`)**
- Uniform `32px` `#F4585E` `1.75px`-stroke outline SVG icons (`Package`, `FileText`, `Truck`, `Stack`), bold `#F5F6F7` titles, 2-line `#A7B0BC` descriptions.

### 5.5 Operating Locations (`نطاق عملنا` / Operating Locations)
> **Approved Locations:** **Al-Awja Land Port (`منفذ العوجة البري`)**, **Alexandria Port (`ميناء الإسكندرية`)**, and **Damietta Port (`ميناء دمياط`)**, plus flexible multi-port coverage.  
> **Asset Readiness Status:** Authentic photos are on disk for **Al-Awja** and **Alexandria**. **Damietta's photo is not yet present on disk** (see [`ASSET_INVENTORY.md`](ASSET_INVENTORY.md)); `port-reference.webp` (`500×281`) is unconfirmed and MUST remain unassigned / generic-only.

- **Section Layout (`#0B0F14` base):**
  - **Editorial Header + Multi-Port Overview:** Eyebrow `نطاق عملنا`, H2 `تواجد فعلي في أهم المنافذ.`, concise paragraph emphasizing Al-Awja Land Port, Alexandria Port, and Damietta Port plus operational flexibility across other ports when required.
  - **3-Port Visual Card Grid (`1 col` mobile → `3 cols` desktop, with Al-Awja visually leading or equal balanced 3-up editorial cards):**
    1. **Al-Awja Land Port (`منفذ العوجة البري`):** Uses [`al-awja-gate.jpg`](public/images/al-awja-gate.jpg) (`aspect-[4/3]`, **`object-cover object-[50%_18%]`** protecting Arabic gate signage) + bottom dark scrim + `#B51219` pill (`منفذ العوجة البري`).
    2. **Alexandria Port (`ميناء الإسكندرية`):** Uses [`alexandria-port.webp`](public/images/alexandria-port.webp) (`aspect-[16/10]` or unified `aspect-[4/3]` with `object-cover object-center`, container ship + gantry cranes) + bottom dark scrim + `#B51219` / `#192533` port classification badge (`ميناء بحري` / `Sea Port`).
    3. **Damietta Port (`ميناء دمياط`):**
       - *If verified Damietta photo is uploaded before coding:* Render identically to Alexandria (`aspect-[4/3]` / `aspect-[16/10]`, crisp scrim + port badge).
       - *If photo is not yet supplied at build time:* Render a cohesive dark architectural sea-port card (`#151F2B` with subtle nautical/grid linework, `#F4585E` anchor/port vector icon, `ميناء بحري` pill) matching the exact card proportions — **never mislabeling `port-reference.webp` as Damietta and never generating AI port imagery.**
  - **Unassigned `port-reference.webp` Policy:** Keep `port-reference.webp` (`500×281`) unassigned in Location cards; if used at all, restrict strictly to an unnamed decorative background texture/generic maritime visual capped at `<= 420px` width.
  - **Multi-Port Flexibility Strip:** Subtle `#151F2B` footer bar below the 3 port cards confirming capability across additional ports as required by client operations.

### 5.6 Operations Gallery Section (`من أعمالنا` / Our Work) — Renamed
> **Section Rename:** Changed from `عملياتنا وبضائعنا` to **`من أعمالنا`** (English: `Our Work`).

- **Supporting Description:** Concise bilingual copy highlighting live shipment coordination, cargo diversity, truck loading stages, and continuous field follow-up.
- **4-Slot Flexible Visual Gallery (`1 col` mobile → `2 cols` tablet → `4 cols` or `2×2` desktop):**
  1. Trucks During Loading (`شاحنات أثناء التحميل`)
  2. Fully Loaded Trucks (`شاحنات محملة بالكامل`)
  3. Diverse Cargo & Shipments (`بضائع وشحنات متنوعة`)
  4. Field Operations & Follow-up (`عمليات ميدانية ومتابعة مستمرة`)
- **MVP Visual Attribution Policy (Critical Integrity Rule):**
  - **Preferred Production State:** Authentic company photos placed inside `public/images/operations/`.
  - **Permitted MVP Fallback:** Generic licensed stock photographs may be used **strictly as clearly labeled illustrative visuals** (small unobtrusive top-end pill `صورة توضيحية` / `Illustrative Visual` + section footnote: *"صور توضيحية لطبيعة الشحن والتجهيز — يتم تحديثها بالصور الميدانية الفعلية تباعاً"*). **Never claim or caption stock photos as completed operations executed by Ahmed Elbeek.**

### 5.7 Persistent Floating WhatsApp Experience (Updated Rule)
> **Updated Policy:** Floating WhatsApp remains **persistently visible and accessible throughout the entire browsing journey** — **do NOT auto-hide** when the Hero or Contact section is in view.

- **Visual Styling:**
  - Fill: Standard recognizable **WhatsApp Green (`#25D366`)** with subtle crisp hover lift (`#20BD5A`) and dark high-contrast icon/label (`#0B0F14`, **9.69:1 contrast**), framed by a subtle `1px solid rgba(255,255,255,0.22)` edge ring and deep shadow (`0 10px 28px rgba(0,0,0,0.55)`) so it reads crisply over `#0B0F14`, `#121B26`, `#151F2B`, and `#B51219` alike.
- **Responsive Dimensions & Placement:**
  - **Mobile (`360px–767px`):** Compact circular button, **`54×54px`** (exceeds `>= 52px` minimum), positioned at `bottom: calc(16px + env(safe-area-inset-bottom))` and `inset-inline-end: 16px` (`left: 16px` in AR RTL; `right: 16px` in EN LTR).
  - **Desktop (`>= 1024px`):** Compact capsule pill (`h-[48px] px-4 gap-2.5 rounded-full`, icon + `واتساب` / `WhatsApp` label) or `56×56px` circular FAB at `bottom: 24px`, `inset-inline-end: 24px`.
- **Zero-Overlap Layout Safeguards (Since FAB Always Stays Visible):**
  - Reserve **`pb-24` (`96px`)** bottom padding on the Mobile Footer and ensure no phone link (`01093313193`, `01092755002`), email link (`elbeekb2b@gmail.com`), or `AR | EN` toggle sits inside the bottom-end `80×80px` corner zone on mobile viewports (`360px–430px`).
  - Keep `z-index: 35` (below Mobile Drawer `z-50` so opening the nav drawer cleanly covers the FAB without visual collision).

---

## 6. Animations, Accessibility & Performance

- **Subtle Motion Only:** CSS transitions (`180ms` hover/focus, `260ms` drawer slide), zero blocking intro screen, zero heavy parallax, zero autoplay videos, zero Hero entrance delay (`0ms` LCP). Enforce `@media (prefers-reduced-motion: reduce)`.
- **Accessibility:** Skip link, `:focus-visible` `2px solid #F5F6F7` outline, `44×44px` minimum interactive hit areas (`48px` primary buttons, `>= 52px` FAB), `aria-hidden="true"` on decorative icons, localized `aria-label` on WhatsApp FAB and menu buttons, `<bdi dir="ltr">` for phones/emails.
- **Performance:** Compress/serve all images via `next/image` (critical for reducing the `1.12 MB` master logo PNG and `al-awja-yard.jpg` to optimal WebP/AVIF byte sizes), explicit `aspect-ratio` containers (`CLS <= 0.02`), self-hosted `next/font/google`, and `backdrop-filter` restricted solely to the sticky header.
