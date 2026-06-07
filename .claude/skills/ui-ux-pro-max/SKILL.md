# UI/UX Pro Max Skill — Safari Wings Travel

## Scope
This skill governs user experience, conversion strategy, accessibility, and interaction design
for the Safari Wings Travel website. It is complementary to the `frontend-design` skill, which
handles visual identity and code standards. This skill handles *how users move through the site
and why they act*.

Read this fully before making any UX change, audit, or recommendation.

---

## Business Model (UX implications)

Safari Wings Travel is a **concierge travel booking service** — not a self-serve booking engine.
The conversion goal is not an instant online checkout. It is a **qualified enquiry**.

```
User goal        →  Find a trusted partner for Lagos hotel / travel
Business goal    →  Receive a WhatsApp message or form submission
Conversion event →  "Request Quote" tap, WhatsApp button tap, form submit
```

**No public prices.** The model is: user sends request → Safari Wings sources best hotel rate →
custom quote sent back. Every UX decision must support this flow. Never introduce UI patterns
that imply instant booking (calendars that block out dates, "in stock" indicators, checkout
steps, payment forms).

**Primary audience:**
- Business travellers and executives needing Lagos accommodation
- Corporate travel managers booking for teams
- Nigerian families planning festive stays
- Visitors to Lagos needing hotel + transfer coordination
- International travellers needing help navigating Nigerian hospitality

**Primary conversion channels (in priority order):**
1. WhatsApp — fastest, preferred by Nigerian audience
2. Contact form — for detailed or corporate enquiries
3. Phone call — listed in nav and contact

---

## Conversion Flow Architecture

### Ideal user journey (5 steps)
```
1. LAND      → Hero communicates value in under 3 seconds
2. TRUST     → Social proof, trust badges, CAC registration, named hotel partners
3. EXPLORE   → Services and packages clarify what's available
4. DECIDE    → CTA guides them to the right action (WhatsApp / Quote form)
5. CONVERT   → Simple, low-friction contact (WhatsApp tap or short form)
```

Every section of the page should serve one of these five jobs. If a section doesn't,
it should be removed or reorganised.

### Critical conversion moments
- **Navbar "WhatsApp" button** — always visible, always green. Primary mobile converter.
- **Hero primary CTA** — "Book via WhatsApp". Must be above the fold on every device.
- **Booking bar "Request Quote"** — secondary capture just below the hero.
- **Offer card CTAs** — micro-conversions that route to the contact form or WhatsApp.
- **Contact form submit** — the deep-funnel conversion for corporate/group clients.

---

## Hero Section — UX Rules

### What must be true above the fold
Every user on every device (including 360px mobile) must see without scrolling:
- [ ] The brand name "Safari Wings Travel"
- [ ] A clear value statement (what the service does)
- [ ] At least one CTA button that initiates contact

### Headline clarity test
Apply the 5-second test to the hero headline: a person who has never heard of Safari Wings
should know within 5 seconds:
- What can I book here? (Hotels in Lagos / travel)
- Why should I trust them? (Concierge, fast, professional)
- What do I do next? (WhatsApp or Request Quote)

Current approved headline: **"Book Premium Lagos Hotels & Travel With Ease"**
Do not change this unless the replacement passes the 5-second test and is shorter.

### Hero CTA hierarchy
- Button 1: `btn-whatsapp` — "Book via WhatsApp" — primary (green)
- Button 2: `btn-outline-navy` — "Request a Quote" — secondary
- Rule: Button 1 comes first, left-aligned or stacked above Button 2
- Rule: Never use more than 2 hero CTAs
- Rule: Both buttons must be at least 48px tall on mobile (touch target minimum)

### Hero trust indicators
Three inline trust signals below the CTAs:
- CAC Registered (authority)
- Fast Confirmations (speed)
- Competitive Rates (value)
These must be visible without scrolling on desktop. On mobile they can scroll below the fold.

---

## Navigation UX

### Navbar principles
- Fixed position always — users must never lose access to contact options mid-scroll.
- On transparent state (hero): logo and links must have sufficient contrast against sky-blue bg.
- On scrolled state: white background, navy text, full visibility.
- The WhatsApp button in the navbar is the highest-priority mobile CTA — never hide it.
- Nav links are anchor-scroll only — no page reloads on this single-page site.
- Active section highlighting: current section's nav link should change colour on scroll.

### Mobile hamburger menu
- Opens as full-screen overlay (white background).
- Links: large font (1.3rem), good spacing (34px+ gap), easy thumb reach.
- Clicking any link closes the menu and scrolls to the section.
- Pressing the hamburger again closes the menu.
- Body scroll must be locked while menu is open (`overflow: hidden` on body).
- The menu close icon (X) must be clearly visible and easy to tap (min 44×44px).

### Navigation link labels (do not rename without UX review)
- Home, Services, Hotels, How It Works, Corporate, Reviews, Contact
- These are short, predictable, and scannable — do not make them clever or long.

---

## Trust Signals — Placement & Priority

Trust is a prerequisite to conversion, especially for a Nigerian travel brand serving
clients who may be unfamiliar. Every trust signal has a UX job.

### Trust signal inventory
| Signal | Type | Location |
|---|---|---|
| CAC RC 8054631 | Authority / Legal | Footer, contact section, hero badge, why-us stats card |
| SSL Secured | Security | Contact section trust badges |
| Google Business Verified | Third-party validation | Contact section trust badges |
| Named hotel partners (Eko, Lagos Continental, Radisson Blu, Marriott) | Credibility by association | Hero card, services intro, offer cards, footer column |
| "Most Booked" badge on offer card | Social proof | Featured Lagos package card |
| Testimonials from named clients | Peer proof | Testimonials section |
| Fast WhatsApp response (<1hr) | Reliability | Contact card |
| Invoice/receipt available | Professionalism | Corporate section, offer card 2 meta |

### Trust signal UX rules
- Authority signals (CAC, legal name) must appear near every conversion point.
- Never bury trust signals below the fold if they are needed to enable conversion.
- Named hotel partners should appear early (hero card, first fold) — they are the strongest
  credibility anchor for a user deciding whether to enquire.
- The testimonials section must appear before the contact section in the page order.
- 4 testimonials is the minimum. All must be Lagos/Nigeria hotel-specific.

---

## Quote Request Journey — UX Specification

Safari Wings does not have a live booking system. The "booking" flow is a quote request.
Design must make this feel fast and trustworthy, not bureaucratic.

### Two paths to conversion

**Path A — WhatsApp (preferred, fastest)**
```
User sees CTA → taps "Book via WhatsApp" → WhatsApp opens with business number
```
- This should work in one tap from any CTA button on the page.
- The WhatsApp number is: +234 816 813 9364
- Link: `https://wa.me/2348168139364`
- Do NOT add pre-filled message text to the wa.me link — users may find it presumptuous.

**Path B — Contact Form (for corporate/group/complex requests)**
```
User clicks "Request a Quote" → scrolls/links to contact section → fills form → submits
```
- Form must feel short and purposeful — not intimidating.
- Required fields only: name (split), email, phone/WhatsApp.
- Optional fields: destination, purpose, message.
- Submit text: "Send My Enquiry" or "Send My Request" — not "Submit".
- On success: replace form with confirmation message. No page reload.
- Confirmation must include: response time expectation ("within 2–3 hours") and
  the WhatsApp number as an alternative faster channel.

### Booking bar (secondary capture)
- Sits just below the hero, overlapping the fold line.
- Fields: Destination/Hotel · Check-In · Check-Out · Guests/Rooms · Travel Type
- Button: "Request Quote"
- On submit: smooth scroll to contact section (do not try to process actual search).
- This is a lead capture device, not a real search. The visual design should feel like
  a search bar (familiar) but the action is an enquiry trigger.

---

## CTA Placement Strategy

### The rule of three appearances
Every major CTA should appear at least three times on the page:
- **First appearance:** Hero section (above the fold)
- **Middle appearance:** Mid-page (after trust is established — within offer cards or CTA strip)
- **Final appearance:** Contact section (the dedicated conversion zone)

### Per-section CTA audit
| Section | CTA present | CTA type | Correct? |
|---|---|---|---|
| Navbar | WhatsApp button | btn-whatsapp-sm | Yes |
| Hero | "Book via WhatsApp" + "Request a Quote" | btn-whatsapp + btn-outline-navy | Yes |
| Booking bar | "Request Quote" | bb-btn (navy) | Yes |
| Services | "Learn More" links × 6 | service-link (text) | Yes |
| Why Choose Us | "Chat With Us Now" | btn-whatsapp | Yes |
| Offers | Per-card CTAs × 6 | btn-navy / btn-outline-navy | Yes |
| How It Works | No CTA | — | Consider adding one below steps |
| Corporate | "Chat With Us" + "Send an Enquiry" | btn-navy + btn-outline-navy | Yes |
| Testimonials | No CTA | — | Acceptable (trust-building, not conversion) |
| Contact | "Send My Enquiry" | btn-navy | Yes |
| Footer | WhatsApp link, newsletter | footer-whatsapp-cta | Yes |

### CTA copy rules
- Use active verbs: "Request", "Send", "Book", "Get", "Chat" — not "Click here", "Learn more" alone.
- Specificity converts better than generics: "Request Hotel Quote" > "Get in Touch".
- WhatsApp CTAs always start with "Book via WhatsApp" or "Chat With Us" — never "Message Us".
- Never use "Submit" on form buttons.
- Offer card CTAs are prescribed — do not change without UX review:
  - Card 1: "Request Hotel Quote"
  - Card 2: "Request Corporate Rate"
  - Card 3: "Request Package Quote"
  - Card 4: "Request Weekend Quote"
  - Card 5: "Get Group Quote"
  - Card 6: "Request Transfer Support"

---

## Form Usability

### Contact form field rules
- **Split name** (First + Last) on one row — feels professional, not like a survey.
- **Email + Phone** on one row — phone/WhatsApp is critical for Nigerian audience.
- **Destination + Purpose** on one row — qualifies the lead for Safari Wings.
- **Message** full width, 5 rows — give space for complex requests.
- **Submit button** full width, prominent (`btn-navy btn-block btn-lg`).

### Field label rules
- Labels above inputs, not inside (placeholder as hint only).
- Labels: uppercase, `0.78rem`, `letter-spacing: 0.5px`, navy — they scan fast.
- Placeholders: friendly, descriptive, not redundant. Examples:
  - Name: "Your first name" / "Your last name"
  - Email: "your@email.com"
  - Phone: "+234 800 000 0000" (placeholder only, not a real number)
  - Message: "Check-in/out dates, number of guests, hotel preference, budget, or any questions..."

### Input interaction rules
- Focus state: `border-color: var(--blue)` + `box-shadow: 0 0 0 3px rgba(30,91,188,0.1)`
- No red error states unless validation is implemented (it currently is not — use `required` only).
- `appearance: none` on selects with custom arrow SVG (avoid OS-default styled selects).
- Date inputs: `min` attribute set to today. Checkout min updates when checkin changes.

### Form success state
- Replaces the form with a success message (no page reload, no redirect).
- Success message must:
  - Confirm receipt ("Enquiry Received!")
  - Set expectation ("within 2–3 hours")
  - Offer WhatsApp as faster alternative with the number (+234 816 813 9364)
  - Use blue icon (not generic green checkmark) to match brand

---

## Mobile UX

### Mobile-first priorities
The majority of Safari Wings' Nigerian audience uses mobile. Desktop is secondary.
Every UX decision must be validated for mobile first.

### Mobile conversion funnel
On mobile, the page must achieve conversion in as few taps as possible:
- **Fastest:** Tap "WhatsApp" in navbar → WhatsApp opens (1 tap from anywhere on page)
- **Standard:** Tap "Book via WhatsApp" in hero → WhatsApp opens (2 taps from landing)
- **Deep:** Scroll to contact → fill form → submit (multiple interactions, for complex requests)

### Mobile touch targets
All interactive elements must meet the 44×44px minimum touch target:
- Navbar WhatsApp button: ≥44px height
- Hero CTA buttons: ≥48px height (use `padding: 16px 34px`)
- Booking bar submit: full width, ≥52px height
- Slider prev/next: `44×44px` circles minimum
- Hamburger icon: minimum 44×44px tap area
- Offer card CTAs: full width, ≥44px height
- Social media links: 38px circle — acceptable at that size

### Mobile navigation priority order
On mobile, the user can only see a narrow strip. Prioritise:
1. Logo (brand recognition)
2. WhatsApp button (top conversion action)
3. Hamburger (access to rest of nav)
The phone number in nav-actions hides on mobile — this is correct.

### Mobile scroll behaviour
- Booking bar overlaps hero bottom at `margin-top: -70px` (desktop).
- On mobile this becomes `margin-top: -50px` or `-40px` — should not cause layout clash.
- Sections: `padding: 64px 0` on mobile (reduced from 96px desktop).
- No horizontal overflow — test `overflow-x: hidden` on body.

---

## Accessibility

### Minimum accessibility requirements
This site must be navigable by keyboard and screen reader users. These are non-negotiable:

**Keyboard navigation:**
- All interactive elements reachable via `Tab`.
- Focus outlines must be visible (do not `outline: none` without a replacement style).
- Hamburger menu: `Escape` key should close it.
- Slider: prev/next buttons keyboard-activatable.
- Modals or overlays (mobile menu): focus must be trapped inside while open.

**Screen readers:**
- All images: `alt` attribute present and descriptive.
- Icon-only buttons: `aria-label` required (hamburger, prev/next slider buttons).
- Form inputs: `<label>` associated with each `<input>` via `for`/`id` or wrapping.
- SVG logos: `role="img"` and `aria-label="Safari Wings Travel"`.
- Decorative SVG elements: `aria-hidden="true"`.

**Colour contrast:**
- Body text (`#1a2c3d`) on white (`#ffffff`): contrast ratio ~12:1 ✓
- Navy text (`#0d2b4e`) on sky-pale (`#f0f7ff`): contrast ratio ~9:1 ✓
- Gold text (`#c8922a`) on white: contrast ratio ~3.3:1 — use for large text/headings only
- Gold text on `--sky-pale` background: insufficient for body text — avoid
- White text on navy (`#0d2b4e`): contrast ratio ~13:1 ✓
- White text on blue (`#1e5bbc`): contrast ratio ~5.2:1 ✓ (meets AA for normal text)
- **Never use gold text on sky-blue background** — fails contrast.
- **Never use light blue text (`#7ec3f0`) on white** — fails contrast.

**WCAG AA targets (minimum):**
- Normal text (< 18pt): 4.5:1 contrast ratio
- Large text (≥ 18pt / 24px or bold ≥ 14pt): 3:1 contrast ratio
- UI components and icons: 3:1 against adjacent colours

### Skip links
A "Skip to main content" visually-hidden link at the top of `<body>` improves keyboard UX:
```html
<a href="#hero" class="skip-link">Skip to main content</a>
```
Only shown on focus (use `.skip-link:focus` to reveal it).

---

## Visual Consistency Audit

When reviewing or implementing, check all of these:

### Spacing consistency
- [ ] Section paddings all use `96px 0` (desktop) / `64px 0` (mobile)
- [ ] Card internal padding is uniform per card type (36-40px main, 22-28px compact)
- [ ] Grid gaps are consistent: `24px` or `28px` — not mixed arbitrarily
- [ ] Margins between label and input: `7–8px` everywhere
- [ ] Margins between button and preceding element: `16–20px`

### Typography consistency
- [ ] All `<h2>` section titles use Playfair Display, navy, clamp sizing
- [ ] All body paragraphs use Poppins, `0.9–1.05rem`, `--text-light`
- [ ] All section tags: `0.72rem`, uppercase, `letter-spacing: 2.5px`, inline-block pill
- [ ] All form labels: `0.78rem`, uppercase, navy, `letter-spacing: 0.5px`
- [ ] All button text: `0.92rem`, `font-weight: 600`, consistent across same btn class

### Component consistency
- [ ] All `.service-card` hover states: same animation (lift + top border reveal + icon swap)
- [ ] All `.offer-card` hover states: same lift (`translateY(-6px)`) + border change
- [ ] All `.corp-card` hover states: same (white bg + blue border + shadow)
- [ ] All social links: same 38px circle, same hover (blue bg + white icon + lift 2px)
- [ ] All `.trust-badge` elements: same pill style, blue icon, same font size

### Icon consistency
- [ ] All icons from Font Awesome 6 (fa-solid / fab prefix)
- [ ] No mixing of icon families or sizes within the same component
- [ ] Icon colour in non-interactive states: `--blue` for functional, `--gold` for accent
- [ ] Icon colour in interactive states: white (when parent bg turns blue)

---

## Typography Readability

### Readable body copy rules
- Line length: 55–75 characters per line for body text. Use `max-width` on prose elements.
- Line height: `1.65–1.85` for body copy. Never below `1.5` for paragraphs.
- Font size: minimum `0.88rem` (14px) for any text that carries meaning.
- Do not use `--text-light` (`#5a6e82`) for text smaller than `0.8rem` — too low contrast.
- Section subtitles: `max-width: 580px; margin: 0 auto` when centred — prevents excessive line length.
- Feature/testimonial text: `0.9–1.05rem`, `line-height: 1.8–1.85`.

### Heading readability rules
- `clamp()` required for all `<h1>` and `<h2>` — prevents overflow on small screens.
- `h1` in hero: `clamp(2.6rem, 5.5vw, 4.2rem)` — tested to not wrap awkwardly on 320px.
- `h2` in sections: `clamp(2rem, 4vw, 2.75rem)`.
- `h3` in cards: fixed `1.15–1.25rem` — no clamp needed at card scale.
- Letter-spacing: `−0.2px` to `−0.5px` on large headings (optically tighter at scale).
- No `text-transform: uppercase` on headings — only on labels and the "TRAVEL" wordmark.

---

## Professional Corporate Feel

Safari Wings serves executives, corporate travel managers, and premium leisure travellers.
The site must feel like it belongs in the same league as booking through a premium hotel
concierge desk — not a budget travel aggregator.

### Corporate feel checklist
- [ ] No stock photo aesthetic in any CSS gradient (they should look like design, not filler)
- [ ] No playful emojis in body text or CTAs
- [ ] No exclamation marks in professional body copy (acceptable in CTAs only: "Chat With Us!")
- [ ] No lowercase brand name — always "Safari Wings Travel" with correct capitalisation
- [ ] No informal language in section headings ("We've Got You Covered!" is wrong)
- [ ] Invoice/receipt language present in corporate offer card metadata
- [ ] CAC registration clearly stated (RC 8054631) — signals legal compliance
- [ ] All testimonials use full names (First + Last) — not just "John D."
- [ ] Response time commitment stated in contact section ("within 2–3 hours")
- [ ] Offer card 2 (Corporate) should always have "Invoice Available" in its meta tags
- [ ] Footer lists the legal business name: "Safari Wings Ventures · RC 8054631"

### What to avoid
| Do NOT include | Why |
|---|---|
| Wildlife / safari adventure imagery | Wrong brand — Safari Wings is a hotel/travel concierge |
| Animal icons (paw, hippo, giraffe etc.) | Were used in v1, removed in v2 — do not re-add |
| Dark green or earthy colour palette | Old brand direction — rejected |
| "Adventure awaits" style copy | Wrong audience positioning |
| Countdown timers or urgency tactics | Inappropriate for a concierge service |
| "Limited offer" or "Sale" badges | No public prices = no public sales |
| Payment icons or Stripe/Paystack UI | Not a payment-taking website |
| Stars/reviews from external platforms | No TripAdvisor/Google review widgets |
| Chatbot widget | WhatsApp is the preferred channel |

---

## Section Order Audit (UX sequence)

The current page order is designed for maximum conversion flow. Do not reorder sections
without a UX justification.

```
1. Navbar          ← always visible, persistent trust + CTA
2. Hero            ← value statement + primary conversion
3. Booking bar     ← secondary capture, segues hero to content
4. Partner strip   ← immediate credibility (named hotels)
5. Services        ← what we offer — educates and qualifies
6. Why Choose Us   ← trust building — stats, features, CAC
7. Featured Offers ← specific packages — triggers micro-conversions
8. How It Works    ← reduces friction — shows the process is simple
9. Corporate       ← B2B audience — separate value prop
10. Testimonials   ← social proof just before the ask
11. Contact        ← the ask — form + WhatsApp + contact info
12. Footer         ← reference + newsletter + legal
```

**Rule:** Testimonials must always come immediately before Contact. This is the trust-then-ask
sequence — the most effective order for service business conversion.

---

## UX Review Checklist

Run this before marking any UX improvement as complete:

### Conversion
- [ ] WhatsApp button visible without scrolling on all screen sizes
- [ ] Hero CTA "Book via WhatsApp" is the dominant above-fold action
- [ ] Contact form has no unnecessary fields
- [ ] Form success state shows response time + WhatsApp fallback
- [ ] All offer card CTAs use the approved quote-based copy
- [ ] No prices, ₦ signs, or $ amounts visible anywhere

### Trust
- [ ] RC 8054631 visible in at least 2 locations
- [ ] Named hotel partners (Eko, Lagos Continental, Radisson Blu, Marriott) appear in first fold
- [ ] At least 4 testimonials present with full names and specific context
- [ ] SSL/Google Verified badges present in contact section

### Navigation
- [ ] Hamburger opens/closes cleanly on mobile
- [ ] Body scroll locked when mobile menu is open
- [ ] All nav links scroll to correct sections
- [ ] Navbar transitions to white on scroll
- [ ] Active section highlighted in nav

### Accessibility
- [ ] All images have alt text
- [ ] All icon-only buttons have aria-label
- [ ] All form inputs have associated labels
- [ ] Focus states are visible (not `outline: none`)
- [ ] Contrast ratios pass WCAG AA for all text

### Mobile
- [ ] No horizontal scroll at 360px width
- [ ] All buttons ≥ 44px touch target
- [ ] Hero CTA visible above the fold on 375px iPhone
- [ ] Booking bar stacks cleanly on mobile
- [ ] Testimonials slider works with touch swipe

### Consistency
- [ ] All section headings use Playfair Display + navy
- [ ] All body text uses Poppins + --text-light
- [ ] All borders use --border (#d8e8f5)
- [ ] No grey (#ccc, #ddd, #eee) borders
- [ ] Button styles consistent with the three-level hierarchy

---

## Companion Skill
This skill pairs with `.claude/skills/frontend-design/SKILL.md` which governs visual
implementation. Use both together for full design + UX coverage:
- `frontend-design` → what it looks like
- `ui-ux-pro-max`  → how it works and converts
