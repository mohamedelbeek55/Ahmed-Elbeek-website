# ASSET_INVENTORY.md — Ahmed Elbeek Import & Export

> **Inspection Date:** Verified directly from disk via file listing, visual inspection, and Pillow metadata analysis  
> **Scope:** Full audit of brand marks, authentic port photographs, unassigned references, and missing files

---

## 1. Current Disk Asset Summary

| File Path | Size | Format / Mode | Dimensions | Aspect Ratio | Transparency / Background | Assigned Role | Audit Status |
|---|---|---|---|---|---|---|---|
| [`public/images/Ahmed Elbeek Global Trade Logo.png`](public/images/Ahmed%20Elbeek%20Global%20Trade%20Logo.png) | `1,150,631 B` (`1,123.66 KB` / `1.10 MB`) | PNG (`RGB`) | `1254 × 1254 px` | `1.00 : 1` | Opaque off-white (`RGB 253..255`) | **Preferred Master Brand Logo** | **Approved** — Use inside deliberate `#FDFDFD` white plaque; optimize delivery via `next/image` |
| [`public/images/ahmed-elbeek-logo.png`](public/images/ahmed-elbeek-logo.png) | `139,100 B` (`135.84 KB`) | PNG (`RGBA`) | `500 × 500 px` | `1.00 : 1` | Transparent (`83.5%` alpha=0, `3,273` faint white-halo edge px) | Legacy / Archive Only | **Superseded** by `1254×1254` master logo |
| [`public/images/al-awja-yard.jpg`](public/images/al-awja-yard.jpg) | `122,998 B` (`120.12 KB`) | JPEG (`RGB`, 96 DPI) | `1276 × 537 px` | `2.38 : 1` | Opaque | **Hero Stage** (Desktop & Mobile) | **Approved & Ready** — Cap desktop height `<= 620px`; mobile crop `object-[72%_42%]` |
| [`public/images/al-awja-gate.jpg`](public/images/al-awja-gate.jpg) | `96,717 B` (`94.45 KB`) | JPEG (`RGB`, Progressive) | `1161 × 1161 px` | `1.00 : 1` | Opaque | **Locations: Al-Awja Land Port** | **Approved & Ready** — Use top-biased `object-[50%_18%]` |
| [`public/images/alexandria-port.webp`](public/images/alexandria-port.webp) | `53,052 B` (`51.81 KB`) | WebP (`RGB`) | `860 × 484 px` | `1.78 : 1` (`16:9`) | Opaque | **Locations: Alexandria Port** | **Approved & Ready** — Ideal for card frames (`<= 600px` wide) |
| [`public/images/port-reference.webp`](public/images/port-reference.webp) | `28,570 B` (`27.90 KB`) | WebP (`RGB`) | `500 × 281 px` | `1.78 : 1` (`16:9`) | Opaque | **Unassigned / Generic Port Visual Only** | **Location Unconfirmed + Low Res (`500px`)** — Never assign to a named port |
| `public/images/operations/` | `Empty Folder` | — | — | — | — | **Future Authentic `من أعمالنا` Photos** | **Directory Exists (0 files)** — Ready for authentic uploads |
| [`design-references/dark.png`](design-references/dark.png) | `1,736,046 B` (`1.66 MB`) | PNG (`RGB`) | `1199 × 1312 px` | `0.91 : 1` | Opaque | **Approved Desktop Visual Reference** | **Approved Reference** (Mobile reference missing; content deltas logged below) |

---

## 2. Detailed Per-Asset Audit

### 2.1 Master Logo: `public/images/Ahmed Elbeek Global Trade Logo.png`
- **Technical Specs:** `1254 × 1254 px` PNG RGB, `1.10 MB`.
- **Pixel Composition:**
  - Background: Solid opaque near-white (`RGB(253..255, 253..255, 253..255)`, `#FDFDFD`–`#FFFFFF`).
  - Visible artwork bounding box: `(99, 201)` to `(1152, 998)` (`1053 × 797 px` — `84%` width × `63.6%` height), leaving clean built-in square safe margins (`~16%` top, `~20.4%` bottom).
  - Ink colors measured: Crimson red globe + `"Ahmed Elbeek"` (`~#B00302`, contrast **7.15:1** on `#FDFDFD`), charcoal `"IMPORT & EXPORT"` (`~#2F2F2F`, contrast **13.06:1** on `#FDFDFD`).
- **Non-Modification Constraints:** Never remove the white background, recolor, redraw, crop, or distort proportions.
- **Integration & Performance Plan:**
  - **Visual Integration:** Match the plaque surface to `#FDFDFD` so the `RGB 253–255` square merges invisibly inside an engineered corporate frame (`#151F2B` header lockup tray + crimson architectural bottom accent + subtle border ring), paired with crisp live Arabic/English HTML company text. Use a larger `96×96px–112×112px` executive crest presentation in the footer.
  - **Payload Warning:** Because the raw PNG is **`1.10 MB`**, never serve it unoptimized via raw `<img>`. Serve through `next/image` with explicit `width`/`height` so Next.js emits compact WebP/AVIF (`~4–12 KB`) while keeping the master PNG completely untouched on disk.

### 2.2 Legacy Logo: `public/images/ahmed-elbeek-logo.png`
- **Technical Specs:** `500 × 500 px` PNG RGBA, `135.84 KB`, `83.5%` transparent with `3,273` semi-transparent edge pixels (`0 < alpha <= 20`) and `34` faint `(255,255,255,1)` halo artifacts.
- **Status:** Retained on disk untouched, superseded as primary logo by [`Ahmed Elbeek Global Trade Logo.png`](public/images/Ahmed%20Elbeek%20Global%20Trade%20Logo.png) per client brand decision.

### 2.3 Hero Photograph: `public/images/al-awja-yard.jpg`
- **Technical Specs:** `1276 × 537 px` JPEG RGB (`2.376:1` panoramic), `120.12 KB`, 96 DPI.
- **Visual Subjects:** Twilight yard of Al-Awja Land Port with warm dusk horizon (`y = 0..33%`), left domed building (`0–22%`), distant gate arch (`38–56%`), dense truck queue (`55–98%`), and prominent **Egyptian Flag** (`70–83%`).
- **Crop & Resolution Rules:**
  - **Desktop Hero:** Cap container max height at **`<= 620px`** (`clamp(520px, 60vh, 620px)`) since native vertical height is `537px`; apply `object-cover object-[68%_45%]`.
  - **Mobile Hero (`360px–430px`):** `270px–310px` edge-to-edge top frame with **`object-cover object-[72%_42%]`** + dual gradient scrims + overlapping diagonal crimson geometric cut so flag, gate, and trucks stay crisp and unobstructed.

### 2.4 Al-Awja Gate Photo: `public/images/al-awja-gate.jpg`
- **Technical Specs:** `1161 × 1161 px` progressive JPEG RGB (`1.00:1`), `94.45 KB`.
- **Visual Subjects:** Arched entrance gateway with crisp Arabic stone inscription `ميناء العوجة البري` (`y = 10%..22%`), green wrought-iron gates below, overcast sky through center arch.
- **Crop Rule:** Always use `aspect-[4/3]` or `aspect-[5/4]` with **`object-cover object-[50%_18%]`** (top-biased focal point) + subtle dark bottom gradient scrim so the Arabic port name on the pediment is never cropped off.

### 2.5 Alexandria Port Photo: `public/images/alexandria-port.webp`
- **Technical Specs:** `860 × 484 px` WebP RGB (`1.7769:1` / `16:9`), `51.81 KB`.
- **Visual Subjects:** Container vessel (`NICOLAS DELMAS` / `CMA CGM` containers) berthed alongside red/grey ship-to-shore gantry cranes (`TCT` terminal signage) across a wet reflective concrete quay apron under partly cloudy sky.
- **Usage & Scaling:** Ideal for the **Alexandria Port (`ميناء الإسكندرية`)** location card (`340px–560px` card widths). Use `object-cover object-[55%_45%]` (keeps vessel stern + red crane booms framed) with a subtle dark bottom scrim so badge/title text stays crisp. Do not upscale beyond `~860px` width.

### 2.6 Generic Reference Photo: `public/images/port-reference.webp`
- **Technical Specs:** `500 × 281 px` WebP RGB (`1.7794:1` / `16:9`), `27.90 KB`.
- **Visual Subjects:** Container terminal quay with blue ZPMC ship-to-shore cranes, stacked containers (`APL`, etc.), and berthed ship under clear blue sky.
- **Critical Usage Constraints:**
  1. **Location Unconfirmed:** Do **NOT** assign to Damietta Port or label with any specific Egyptian port name.
  2. **Low Resolution (`500 × 281 px`):** Any container wider than `~420px` (or `> 250px` on 2x Retina) will show compression softness. Keep strictly unassigned for now, or use only as a subtle/small generic maritime illustration (`<= 400px` wide) without port attribution.

### 2.7 Desktop Design Reference: `design-references/dark.png`
- **Technical Specs:** `1199 × 1312 px` PNG RGB, `1.66 MB`.
- **Confirmed Deltas vs Current Approved Scope:**
  1. **Logo Lockup:** `dark.png` depicts a white-wordmark horizontal logo; actual approved master asset is the `1254×1254` opaque-white plaque crest (`Ahmed Elbeek Global Trade Logo.png`).
  2. **Operating Ports:** `dark.png` displays Rafah (`منفذ رفح البري`) and generic `منافذ أخرى`; current scope replaces Rafah with **Alexandria Port (`ميناء الإسكندرية`)** and **Damietta Port (`ميناء دمياط`)** alongside **Al-Awja Land Port (`منفذ العوجة البري`)**.
  3. **Operations Section Name & Body:** `dark.png` links to `عملياتنا وبضائعنا` in header/footer without rendering the section; renamed to **`من أعمالنا`** with a 4-slot flexible gallery.
  4. **Footer Symmetry:** `dark.png` swaps footer logo & language switcher sides relative to header; standardized to consistent `inline-start` RTL branding.
  5. **Persistent WhatsApp FAB:** Not visible in `dark.png` static canvas; added persistently per updated UX requirement.
  6. **Mobile Reference:** **Still Missing** from `design-references/`.

---

## 3. Missing Assets & Gaps Verified on Disk

| Asset / Item | Expected By Brief | Current Disk State | Impact & Action Needed |
|---|---|---|---|
| **Damietta Port Photograph** | Prompt Section 3 stated a new Damietta port image is available alongside Alexandria | **MISSING from `public/images/`** (only `alexandria-port.webp` and `port-reference.webp` are present on disk) | **Action Required:** Please save the Damietta Port photo into `public/images/` (e.g., `damietta-port.webp`) before implementation. Until provided, Damietta uses a neutral dark architectural port card (never mislabeling `port-reference.webp`). |
| **`frontend-design` Skill** | Prompt Section 1 originally requested `frontend-design` | **MISSING from `.agents/skills/`** | Reported accurately; only `ui-ux-pro-max` is installed and used. |
| **Mobile Design Reference** | Optional visual reference | **MISSING from `design-references/`** | Covered by upgraded layered mobile hero specification in `DESIGN_SYSTEM.md`. |
| **`من أعمالنا` Authentic Photos (or Licensed MVP Stock)** | Future authentic truck/loading/cargo photography inside `public/images/operations/` | `public/images/operations/` folder exists and is currently **empty** | For MVP, clearly labeled illustrative licensed stock visuals (`صور توضيحية`) may be used temporarily with zero false attribution, then swapped 1:1 when authentic field photos arrive. |
