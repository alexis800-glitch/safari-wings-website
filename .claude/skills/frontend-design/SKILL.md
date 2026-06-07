# Frontend Design Skill — Safari Wings Travel

## Purpose
This skill activates premium frontend design judgment for the Safari Wings Travel website.
It prevents generic, template-looking output and keeps every design decision grounded in
the specific context, brand, and audience of this project.

---

## Business Context (read before every design task)

**Company:** Safari Wings Travel (legal: Safari Wings Ventures · RC 8054631)
**What they do:** Premium hotel and travel booking concierge — not a self-serve booking engine.
Clients (individuals, families, executives, corporates) send requests; Safari Wings sources the
best available hotel rate and responds with a custom quote.

**Core services:** Lagos hotel stays · Corporate & executive accommodation · Airport transfers ·
Group & event bookings · Festive/Christmas packages · Lagos experiences

**Hotel partners named on site:** Eko Hotels & Suites · Lagos Continental Hotel · Radisson Blu · Marriott

**No public prices.** All pricing is quote-based (rates depend on hotel, dates, room type, season,
and client type). Never add fixed prices. Use: "Request Quote", "Best Available Rates",
"Corporate Rate Available", "Custom Rate Available", "Rates based on hotel, dates & availability".

**Contact:** +234 816 813 9364 · bookings@safariwings.net · WhatsApp: https://wa.me/2348168139364
**Address:** No. 4 Campbell Street, Lagos Island, Lagos State

---

## Brand & Visual Identity

### Color Palette (strict — do not introduce new palette colors)
```
--navy:        #0d2b4e   ← headings, footer, dark elements
--navy-mid:    #1a4070   ← hover states on navy
--blue:        #1e5bbc   ← accent links, icons, borders, step icons
--blue-mid:    #4a9edd   ← lighter blue accents
--blue-light:  #7ec3f0   ← very light blue accents

--sky:         #c6e0f5   ← hero background start
--sky-mid:     #dbeeff   ← hero gradient mid
--sky-pale:    #f0f7ff   ← section alternate background
--off-white:   #f8faff   ← very light blue-tinted white

--gold:        #c8922a   ← CTA buttons, TRAVEL wordmark, key accents
--gold-light:  #e8b96a   ← lighter gold highlights
--gold-pale:   #fdf4e7   ← gold tag backgrounds

--wa-green:    #25D366   ← WhatsApp button only
--wa-dark:     #1da851   ← WhatsApp button hover only

--white:       #ffffff
--border:      #d8e8f5   ← all borders (blue-tinted, never grey)
--text:        #1a2c3d   ← body text
--text-light:  #5a6e82   ← muted/secondary text
```

### Logo Files
- `assets/logo-main.svg` — horizontal (navbar) — height 36px in nav
- `assets/logo-full.svg` — stacked (footer white card)
- `assets/logo-icon.svg` — icon mark only (small spaces)
- PNG exports: `logo-main.png`, `logo-white.png`, `logo-icon.png`, `logo-square.png`, `logo-print.png`

### Typography
- **Headings:** `'Playfair Display', Georgia, serif` — elegant, premium
- **Body/UI:** `'Poppins', sans-serif` — clean, corporate
- **SVG text:** `Georgia, 'Times New Roman', serif` (web-font safe for SVGs used as `<img>`)
- Scale: `clamp()` for all headings so they scale between mobile and desktop
- No system-default fonts (Arial, Helvetica) in HTML — only as SVG fallback

---

## Design Principles

### 1. Reject Generic AI Layouts
- Do NOT produce a layout that looks like a WordPress template or a Figma community file.
- Every section should feel composed, not assembled from a kit.
- Avoid: equal-weight card grids with identical padding everywhere, symmetrical left-right
  hero splits with a stock-looking card visual, plain blue gradient backgrounds with a
  centered headline and two buttons.
- Instead: introduce subtle asymmetry, intentional whitespace, and typographic contrast.

### 2. Visual Hierarchy — Three Levels
Every screen area must have a clear dominant, supporting, and tertiary element:
- **Dominant:** Large Playfair Display heading, major CTA, or hero headline
- **Supporting:** Body copy (Poppins, 0.9–1.05rem), section subtitles
- **Tertiary:** Tags, meta info, trust badges, small labels

### 3. Spacing & Rhythm
- Use multiples of 8px for spacing (8, 16, 24, 32, 40, 48, 64, 80, 96).
- Section padding: `96px 0` desktop, `64px 0` tablet, `48px 0` mobile.
- Card internal padding: `36–40px` for main cards, `22–28px` for compact cards.
- Never use arbitrary values like `17px`, `23px`, `37px`.
- Maintain consistent `gap` in grids — prefer `24px` or `28px`.

### 4. Color Balance Rules
- Maximum 20% of any section should use the gold (#c8922a). It is an accent, not a base.
- Dark navy (#0d2b4e) is reserved for: headings, footer background, navbar-scrolled state,
  primary CTA buttons, contact info card.
- Sky-blue palette is the background system — never used for text.
- White (#ffffff) is for card surfaces and the scrolled navbar.
- `--sky-pale` (#f0f7ff) is for alternating section backgrounds — subtle, not jarring.
- Borders: always `--border` (#d8e8f5) — never `#ccc`, `#ddd`, or grey variants.

### 5. Buttons — CTA Hierarchy
Three levels, only one per primary action:
- **Level 1 (primary):** `btn-navy` or `btn-whatsapp` — main conversion actions
- **Level 2 (secondary):** `btn-gold` — featured emphasis actions
- **Level 3 (tertiary):** `btn-outline-navy` — supporting actions
- Never place two Level 1 buttons side-by-side in the same card or section.
- WhatsApp button (`btn-whatsapp`, green) is ONLY for WhatsApp-linked actions — never used
  for scroll anchors or general nav.

---

## Section-Specific Design Rules

### Navbar
- Always fixed at top, `z-index: 1000`.
- Transparent on the hero, transitions to `background: var(--white)` on scroll.
- Logo: `logo-main.svg` at `height: 36px` — never use text-only fallback.
- Nav links: `0.88rem`, `font-weight: 500`, navy text, blue underline on hover.
- Phone number visible on desktop, hidden on mobile.
- WhatsApp CTA button always visible in `nav-actions`.
- Mobile: hamburger opens full-screen overlay (white bg, large nav links).
- No dropdown menus — single-page with anchor links only.

### Hero
- Full viewport height (`min-height: 100vh`).
- Background: sky-blue CSS gradient — NOT a photo, NOT a dark overlay, NOT a solid color.
- Gradient direction: `135deg`, from `--sky` → `--sky-mid` → `--sky-pale`.
- Left side: badge, h1, subtitle, two CTAs (WhatsApp + outline), trust indicators.
- Right side: hotel card visual (CSS-drawn, not a photo placeholder).
- Booking bar overlaps hero bottom (`margin-top: -70px`), white card, horizontal fields.
- No dark hero. No full-bleed background image without a real image. No video backgrounds.

### Booking Bar
- Horizontal white card with `border-radius: var(--radius-lg)` and `box-shadow: var(--shadow-lg)`.
- Fields separated by `1px` dividers (using `--border`).
- Field labels: `0.7rem`, uppercase, `letter-spacing: 0.8px`, `--text-light`.
- Button: `btn-navy` flush on the right end. Text: "Request Quote".
- Collapses gracefully on tablet/mobile — stacked field layout.

### Services Section
- 3-column grid, 6 cards. White background.
- Each card: icon (in `--sky-pale` rounded square), h3, body paragraph, "Learn More" link.
- Top border reveals on hover: 3px gradient left-to-right (`--blue` → `--blue-mid`).
- Icon animates on hover: background turns `--blue`, icon turns white, slight rotation.
- No card images — icon + typography only.
- Body copy: `0.92rem`, `--text-light`, `line-height: 1.75`.

### Why Choose Us
- 2-column split: text/features left, stats right.
- Left: section tag, h2, descriptive paragraph, 4 feature rows (icon + title + description).
- Right: 2×2 stats grid (white cards with blue top accent), award badge below.
- Stats animate with count-up via IntersectionObserver.
- Trust strip below stats: "CAC Registered", "SSL Secured", "Google Verified".

### Featured Offers (Hotel Packages)
- 3×2 grid using `.offers-grid-6`.
- No prices — use `.offer-quote-note` (blue left-border, italic, info icon) instead.
- Image areas: CSS gradients — never placeholder greys. Each has a distinct gradient tone.
- CTAs per card follow the prescribed text: "Request Hotel Quote", "Request Corporate Rate",
  "Request Package Quote", "Request Weekend Quote", "Get Group Quote", "Request Transfer Support".
- `.offer-card-sm` (bottom row) — more compact, description hidden on tablet.

### How It Works
- 4-column step grid on white background (alternates with `--sky-pale`).
- Large ghost numbers (`--sky-mid` color) as decorative background behind step icons.
- Step icons: circular navy bg, gold icon, white ring shadow.
- Horizontal connector line between steps (visible desktop only, hidden mobile).
- Steps must match the actual booking process: Send Request → Receive Options → Confirm → Enjoy Stay.

### Corporate Section
- White background with subtle top/bottom borders.
- 2-column: text/list left, 2×2 feature cards right.
- Cards: `--sky-pale` background, hover to white with blue border and lift shadow.
- CTA pair: "Chat With Us" (WhatsApp) + "Send an Enquiry" (outline).
- Body copy and list items must reflect hotel booking — not safari/adventure language.

### Testimonials
- `--sky-pale` background.
- Single-card slider (one testimonial at a time, full width).
- Large decorative opening quote in `--sky-mid`.
- Avatar: navy-to-blue gradient circle, initials in white.
- Stars: `--gold` color.
- Auto-advance every 5.5s, touch/swipe enabled, dot indicators.
- Never use fake testimonials — all four on the site are Lagos/hotel-booking specific.

### Contact Section
- White background.
- 3:2 grid: form left, contact info card + socials + trust badges right.
- Contact info card: dark navy background with icon circle highlights.
- WhatsApp listed first and marked as "Preferred".
- Form success state replaces form (no page reload).
- Trust badges: RC 8054631, SSL Secured, Google Verified.

### Footer
- Dark navy background (`#060d17`).
- Logo inside white rounded card (`.footer-logo-wrap`) — never raw on dark background.
- 5-column grid: brand/reg/socials, Navigation, Services, Hotels We Book, Newsletter.
- Footer legal name: "Safari Wings Ventures · RC 8054631".
- Footer copyright line includes: email, phone, RC number.
- Newsletter form: navy footer background form with blue submit button.
- WhatsApp CTA link in newsletter column.
- Footer bottom: two lines, muted text (`rgba(255,255,255,0.3)`).

---

## Mobile Responsiveness Rules

### Breakpoints
```
max-width: 1100px  → tablet large (3→2 column grids, booking bar wraps)
max-width: 900px   → tablet (nav hamburger, hero stacks, why/corporate stack)
max-width: 600px   → mobile (most grids → 1 column, font sizes reduce)
max-width: 400px   → small mobile (footer → 1 column, hero CTAs stack)
```

### Mobile-Specific Rules
- Hero right column (hotel card visual) hides at 900px — left content only.
- Hamburger menu: full-screen white overlay, centered links at `1.3rem`.
- Booking bar: each field becomes full-width; button full-width at bottom.
- All `clamp()` font sizes: headings min `2rem`, body min `0.88rem`.
- Touch targets: minimum `44px` height for all buttons and interactive elements.
- No horizontal scroll — test with `overflow-x: hidden` on body.
- Cards never collapse below `280px` width.

### What Never Changes on Mobile
- Brand colors, logo, and button style hierarchy.
- The quote-based language (no prices ever appear).
- Contact details: phone, WhatsApp, email, address.
- WhatsApp button always visible.

---

## Code Quality Rules

### HTML
- Semantic elements: `<nav>`, `<section>`, `<footer>`, `<form>`, `<article>` where appropriate.
- Every `<img>` has descriptive `alt` text.
- `aria-label` on icon-only buttons (hamburger, slider prev/next).
- Forms: `<label>` elements linked to inputs, `required` on mandatory fields.
- No inline styles except when dynamically set by JavaScript.

### CSS
- All layout via CSS Grid or Flexbox — no floats, no `position: absolute` for layout.
- CSS custom properties (variables) for all colors, shadows, radii, transitions.
- `clamp()` for responsive font sizes.
- `transition: var(--transition)` (`all 0.3s ease`) for interactive states.
- Mobile-first when writing new media queries.
- No `!important` unless overriding a third-party library.
- Class names: BEM-adjacent, descriptive (`.offer-quote-note`, `.hero-trust`, `.cinfo-item`).

### JavaScript
- Vanilla JS only — no frameworks, no jQuery, no build tools.
- IntersectionObserver for: scroll animations (`[data-aos]`), counter animation (`[data-count]`).
- Testimonial slider: auto-advance, touch/swipe, dot nav, prev/next buttons.
- Navbar: scroll class toggle, hamburger toggle, active link highlight.
- Forms: prevent default, show success state — no actual submission.
- Date inputs: `min` set to today's date; checkout `min` updates when checkin changes.
- No `console.log` in production code.

---

## What to Avoid (Anti-Patterns)

| Anti-pattern | Correct alternative |
|---|---|
| Dark hero with gradient overlay on stock photo | Light sky-blue CSS gradient hero |
| Fixed prices (e.g. "From $120/night") | Quote note: "Rates based on hotel, dates & availability" |
| "Check Rates" suggesting instant online pricing | "Request Quote" or "Request Hotel Quote" |
| Safari/wildlife/adventure language | Hotel, travel, concierge, Lagos, business language |
| Generic card grid with equal visual weight | Intentional card hierarchy: featured card larger |
| System font fallback (Arial/Helvetica) in body | Always Poppins (loaded via Google Fonts) |
| Grey borders (#ccc, #ddd) | Blue-tinted borders: `--border` (#d8e8f5) |
| Centred hero text only | Split hero: text left, visual card right (desktop) |
| Empty section with just a heading and paragraph | Every section has a clear CTA or functional element |
| Placeholder "#" hrefs on real CTAs | Anchor links to sections or WhatsApp link |
| Multiple price-like numbers (₦, $) | Quote-based language only |

---

## File Map (current)

```
Safari_Wings_Website/
├── index.html          ← single page, all sections
├── style.css           ← all styles (variables at top)
├── script.js           ← vanilla JS (slider, nav, forms, counters, AOS)
└── assets/
    ├── logo-main.svg   ← navbar logo (horizontal SVG)
    ├── logo-full.svg   ← footer logo (stacked SVG)
    ├── logo-icon.svg   ← icon mark only
    ├── logo-main.png   ← 896×160 PNG export
    ├── logo-white.png  ← 896×160 white-on-transparent PNG
    ├── logo-icon.png   ← 600×456 icon PNG
    ├── logo-square.png ← 1500×1500 social media PNG
    ├── logo-print.png  ← 2240×400 high-res print PNG
    ├── favicon.ico     ← multi-res (48/32/16)
    ├── favicon-16.png
    ├── favicon-32.png
    ├── favicon-192.png
    └── apple-touch-icon.png
```

---

## Activation Checklist

Before starting any frontend design task on this project, confirm:

- [ ] I am keeping the light-blue, white, navy, gold palette — no new colors
- [ ] No prices appear anywhere (quote-based only)
- [ ] Logo is `logo-main.svg` in navbar, `logo-full.svg` in footer
- [ ] All contact details use the real business info (not placeholders)
- [ ] The design does not look like a generic template or AI-generated layout
- [ ] Typography uses Playfair Display for headings, Poppins for body
- [ ] All spacing follows the 8px grid system
- [ ] Mobile breakpoints are respected
- [ ] CTAs follow the three-level hierarchy
- [ ] WhatsApp button links to `https://wa.me/2348168139364`
