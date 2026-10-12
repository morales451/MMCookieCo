# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences, weighted equally:

- **Celebration buyers:** Houston locals ordering cookie cakes and dozens for birthdays, showers, graduations, anniversaries, and gifts. They arrive with an occasion and a date, and need to know what's offered, what it costs, how much notice is needed, and how to request an order.
- **Corporate and wholesale buyers:** offices, conferences, real-estate closings, and corporate gifting in Houston ordering bulk cookie boxes, sometimes with custom branding (served by `/wholesale`).

## Product Purpose

MM Cookie Co. is a small-batch Houston bakery selling custom cookie cakes and boutique cookies for pickup or local delivery. The site exists to turn visitors into order requests (retail form at `#order`, wholesale inquiries at `/wholesale`) and to capture interest in upcoming offerings (Cookie Club waitlist). Success is a submitted request with enough detail to quote and confirm.

## Positioning

Handmade, small-batch, baked fresh per order in Houston, with custom designs and messages on request. Most orders come from word of mouth.

## Operating Context

- Ordering is request-based, not checkout: the visitor submits a Netlify form, the bakery reviews it, confirms details, and sends an invoice. Payment never happens on the site.
- Pickup is by appointment in the Houston Heights area (exact address sent on confirmation); local delivery within Houston for a fee.
- Referral program: a new customer names their referrer in the order form; both get $5 off, applied at invoicing.
- Cookie Club monthly subscription is waitlist-only ("launching soon").
- Hosted on Netlify (`netlify.toml`, Netlify Forms); canonical domain currently `mmcookieco.netlify.app`.
- Instagram: `@mm_cookie_co`.

## Capabilities and Constraints

- Stack: Vite + React 18 + Tailwind CSS 3 single-page site, plus static HTML pages in `public/` (`/wholesale`, `/thanks`, `form.html`).
- Shared kitchen with peanut butter and nuts: no allergen-free guarantee may be claimed.
- **Unconfirmed, do not treat as final:** the menu flavors and prices ($4–$4.50 cookies; $35/$55/$75 cake sizes), lead times and minimums in the FAQ, accepted payment methods, and the Cookie Club tiers ($15/$28/$40). These are on the site today but the owner has not confirmed them as current.
- **Unconfirmed:** the founder story (the father having led an HEB bakery) and the founder's name, which the site does not state.

## Brand Commitments

- Name: MM Cookie Co.
- Logo: `public/unnamed.png` (binding).
- The current look is binding: the boutique cream/beige/tan/mauve/lilac/brown palette, Playfair Display headings with Montserrat body text, as implemented in `tailwind.config.js` and `public/wholesale/index.html`.
- Voice on the site today is warm, personal, and lightly playful ("quiet weeknight wins", "made with a little extra love").

## Evidence on Hand

- **Testimonials (confirmed real):** six customer quotes with names in `src/components/Testimonials.jsx`.
- Product photos: some are real, but several images (including the founder portrait in `OurStory.jsx`) are stock Unsplash URLs. Do not present stock imagery as the founder, the kitchen, or real products.
- No press, case studies, customer counts, ratings, or corporate client logos exist. Do not invent them.

## Product Principles

1. Every page leads toward one clear next step: request an order (retail) or start a wholesale inquiry.
2. Answer the pre-order questions (price, notice, pickup/delivery, allergens, payment) before the visitor has to ask.
3. Personal and handmade beats polished-corporate; the small-batch story is the advantage.
4. Use only real proof: real testimonials, real photos, real policies.
5. Serve the celebration buyer and the corporate buyer without letting either crowd out the other.
