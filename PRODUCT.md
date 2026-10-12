# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences, weighted equally:

- **Celebration buyers:** Houston locals ordering cookie cakes and dozens for birthdays, showers, graduations, anniversaries, and gifts. They arrive with an occasion and a date, and need to know what's offered, what it costs, how much notice is needed, and how to request an order.
- **Event and corporate buyers:** the Cookie Nachos audience. Offices, conferences, real-estate closings, and corporate gifting in Houston ordering bulk cookie boxes, sometimes with custom branding (served by `/wholesale`).

## Product Purpose

MM Cookie Co. is a small-batch Houston bakery. Its lead product, and what the owner most wants to promote, is **Cookie Nachos**: cookie chips served with a buttercream dip, like chips and queso, individually packed for events and corporate events. Custom cookie cakes are the second offer, and boutique cookies by the dozen round out the menu, all for pickup or local delivery. The site exists to turn visitors into order requests (retail form at `#order`, wholesale inquiries at `/wholesale`) and to capture interest in upcoming offerings (Cookie Club waitlist). Success is a submitted request with enough detail to quote and confirm.

## Positioning

Cookie Nachos are the differentiator: cookie chips plus buttercream dip, packed one per guest, so an office party, conference, or event gets a dessert nobody else in Houston is serving. Everything is handmade, small-batch, and baked fresh per order, with custom cookie cakes on request. Most orders come from word of mouth.

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
- **Cookie Nachos:** chip and dip flavors are not decided yet; say flavors rotate and never name one. Pricing is per pack but not yet set; quote by headcount until the owner supplies the price, minimum, and lead time.
- **Unconfirmed, do not treat as final:** the menu flavors and prices ($4–$4.50 cookies; $35/$55/$75 cake sizes), lead times and minimums in the FAQ, accepted payment methods, and the Cookie Club tiers ($15/$28/$40). These are on the site today but the owner has not confirmed them as current.
- **Unconfirmed:** the founder story (the father having led an HEB bakery) and the founder's name, which the site does not state.

## Brand Commitments

- Name: MM Cookie Co.
- Logo: `public/unnamed.png` (binding).
- The owner granted full creative liberty over the look and lifted the old cream/mauve/Playfair styling as a commitment. The current visual system lives in DESIGN.md.
- Voice on the site today is warm, personal, and lightly playful ("quiet weeknight wins", "made with a little extra love").

## Evidence on Hand

- **Testimonials (confirmed real):** six customer quotes with names in `src/components/Testimonials.jsx`.
- No real product photography is on hand. The site draws its baked goods as illustrations; never present stock imagery as the founder, the kitchen, or real products. Real photos of Cookie Nachos would be the most valuable asset to add.
- No press, case studies, customer counts, ratings, or corporate client logos exist. Do not invent them.

## Product Principles

1. Cookie Nachos lead: the first thing a visitor sees and can act on is chips and dip for their event.
2. Every page leads toward one clear next step: request a quote or an order, or start a wholesale inquiry.
3. Answer the pre-order questions (price, notice, pickup/delivery, allergens, payment) before the visitor has to ask.
4. Personal and handmade beats polished-corporate; the small-batch story is the advantage.
5. Use only real proof: real testimonials, real photos, real policies.
6. Serve the celebration buyer and the corporate buyer without letting either crowd out the other.
