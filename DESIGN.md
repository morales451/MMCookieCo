---
name: MM Cookie Co.
description: A cookie cake seen from directly above, with the visitor's own message piped across it in buttercream.
colors:
  strawberry-field: "#F06A93"
  raspberry-ink: "#C93A68"
  pink-buttercream: "#F9B8CB"
  baked-dough: "#DDA15E"
  dark-chocolate: "#2B1610"
  cocoa: "#4A2A1C"
  vanilla-buttercream: "#FFF4E6"
  sprinkle-sky: "#4FA3F7"
  sprinkle-lemon: "#FFD447"
  sprinkle-mint: "#5CCB8F"
  sprinkle-tangerine: "#FF8A3D"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "4.75rem"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 80"
  headline:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "5.5rem"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 80"
  title:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 80"
  quote:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 80"
  body:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  price:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.2
    fontFeature: "'tnum' 1"
  label:
    fontFamily: "Bricolage Grotesque Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 90"
  script:
    fontFamily: "Leckerli One, cursive"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1
rounded:
  pill: "9999px"
  frame-inner: "1.25rem"
  frame: "2rem"
spacing:
  gutter-mobile: "16px"
  gutter: "24px"
  section: "96px"
  section-lg: "128px"
  container: "72rem"
  header: "4.5rem"
components:
  button-primary:
    backgroundColor: "{colors.dark-chocolate}"
    textColor: "{colors.vanilla-buttercream}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.cocoa}"
    textColor: "{colors.vanilla-buttercream}"
  button-on-chocolate:
    backgroundColor: "{colors.strawberry-field}"
    textColor: "{colors.dark-chocolate}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-on-chocolate-hover:
    backgroundColor: "{colors.pink-buttercream}"
    textColor: "{colors.dark-chocolate}"
  button-outline:
    textColor: "{colors.dark-chocolate}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  field:
    textColor: "{colors.dark-chocolate}"
    typography: "{typography.body}"
    padding: "6px 0 8px"
  size-switch:
    backgroundColor: "{colors.dark-chocolate}"
    textColor: "{colors.vanilla-buttercream}"
    rounded: "{rounded.pill}"
    padding: "4px"
  size-switch-selected:
    backgroundColor: "{colors.strawberry-field}"
    textColor: "{colors.dark-chocolate}"
    rounded: "{rounded.pill}"
  nav-link:
    textColor: "{colors.dark-chocolate}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  nav-link-hover:
    backgroundColor: "{colors.dark-chocolate}"
    textColor: "{colors.pink-buttercream}"
  framed-object:
    backgroundColor: "{colors.vanilla-buttercream}"
    rounded: "{rounded.frame}"
---

# Design System: MM Cookie Co.

## Overview

**Creative North Star: "The Bakery Table From Above"**

The site is a bakery table seen from directly overhead. It opens on the lead product, Cookie Nachos: cookie chips fanned around a bowl of buttercream dip that they dip into one by one, with the quote form set inside the dip. Every chip, cookie, pack, and cookie cake is drawn top-down at true relative scale, lit from the upper left, and on the cookie cake the visitor's own words are piped in glossy buttercream script. The page is made of the materials of the product itself: strawberry-buttercream pink, baked-dough gold, dark chocolate, and vanilla buttercream, with sprinkle confetti appearing only as sprinkles.

Each section floods a single field color edge to edge and sets its content straight onto that field: headlines, paragraphs, prices, and rules, with no cards between the field and the type. Star-tip rosette borders are piped across the seams where one field meets the next. Headlines are a plump, condensed, extra-bold grotesk set tight and sized fluidly (the frontmatter gives each role's maximum; Typography gives the clamp); anything written by hand (a cake message, a customer's name, the wordmark in the footer) is in a piped script. Choices are all visible at once, and the selected one snaps forward.

The world was built to replace a cream boutique look with a serif title, centered logo, and a row of product cards; it does not return to that look.

**Key Characteristics:**
- Flooded single-color section fields: pink, chocolate, dough, vanilla.
- Baked goods drawn as live SVG from directly above, one light source, one scale.
- Glossy piped script for messages and names; heavy condensed grotesk for everything else.
- Rosette borders on section seams instead of dividers or waves.
- Product entries separated by chocolate rules, never boxed in cards.
- Pill-shaped controls in chocolate; selection snaps forward with scale and a ring.

## Colors

A confectioner's palette: three buttercreams, a baked dough, and a chocolate that does all the inking.

### Primary
- **Strawberry Field** (#F06A93): the hero ground, the header, the Cookie Club and pickup fields. On chocolate fields it becomes the headline and price color. Also the fill of the secondary button and the selected size pill.
- **Raspberry Ink** (#C93A68): small accents that must read on light grounds: testimonial signatures, required-field asterisks, form status text, field focus underline, text caret.
- **Pink Buttercream** (#F9B8CB): hover state for pink buttons and chocolate nav links, text-selection color, focus outline on chocolate fields, the featured Cookie Club tier wash (at 45%).

### Secondary
- **Baked Dough** (#DDA15E): the field for the cake size guide, Instagram, and the order request form; the color of the cake itself in the hero.

### Neutral
- **Dark Chocolate** (#2B1610): the ink of the system. All text on light fields, every rule and border, primary buttons, the size switch track, focus outlines, and the flooded field for the menu, wholesale, story, referral, and footer sections. Also the page background behind overscroll.
- **Cocoa** (#4A2A1C): primary button hover; scrollbar thumb.
- **Vanilla Buttercream** (#FFF4E6): body text and secondary text (at 65 to 90% opacity) on chocolate fields; the field for testimonials and FAQ; the inside of the dozen box and map frame.

### Tertiary (sprinkles only)
- **Sprinkle Sky** (#4FA3F7), **Sprinkle Lemon** (#FFD447), **Sprinkle Mint** (#5CCB8F), **Sprinkle Tangerine** (#FF8A3D): confetti on rosettes and funfetti cookies, mixed with Strawberry Field and Vanilla Buttercream.

### Named Rules
**The Flooded Field Rule.** Each section commits to exactly one field color (pink, dough, vanilla, or chocolate) from edge to edge. Adjacent sections change field; content never sits on a second tinted panel inside its field.

**The Sprinkles-Only Rule.** Sky, lemon, mint, and tangerine exist only as sprinkles. They never color text, buttons, fields, or icons.

**The Chocolate Ink Rule.** Text and rules on light fields are Dark Chocolate, dimmed with opacity (85%, 70%, 55% for placeholders) rather than a separate gray. On chocolate fields, headlines and prices are Strawberry Field and copy is Vanilla Buttercream.

## Typography

**Display Font:** Bricolage Grotesque Variable (with system-ui, sans-serif)
**Body Font:** Bricolage Grotesque Variable (same family, normal width)
**Script Font:** Leckerli One (with cursive)

**Character:** A heavy, slightly condensed bakery-sign grotesk carries every headline, name, and price, set tight enough to feel plump; the glossy round script is reserved for things a hand would pipe or sign.

### Hierarchy
- **Display** (800, width 80%, clamp(2.25rem, 6vw, 4.75rem), line-height 0.92, -0.035em, balanced wrap): the hero headline only.
- **Headline** (800, width 80%, clamp(3rem, 7vw, 5.5rem), 0.92): one section title per section, usually 2 to 6 words.
- **Title** (800, width 80%, 1.75 to 2.4rem, 0.92): product names, cake sizes, club tiers, dialog titles.
- **Quote** (700, width 80%, clamp(1.9rem, 3.6vw, 3rem), 1.08): the lead testimonial, max 30ch.
- **Body** (400, 1.125rem, line-height 1.625): section intros and running copy, 34 to 60ch; secondary notes at 1rem.
- **Price** (800, 1.5 to 2.2rem, tabular figures): every price, aligned to the baseline of its name.
- **Label** (700, width 90%, 0.8125rem, 0.01em): legends on the hero composer. Form labels elsewhere are 1rem at 800.
- **Script** (Leckerli One 400, 1.2 to 3.2rem; in SVG up to ~9vw): piped cake messages, testimonial signatures, and the footer wordmark.

### Named Rules
**The Piped Hand Rule.** Leckerli One is only for what is piped or signed: cake messages, customer names, the wordmark. It never sets a headline, a paragraph, a button, or a label.

**The Tabular Price Rule.** Prices and sizes always use tabular figures and sit on the same baseline as the name they belong to, justified to the opposite edge.

## Layout

A single scrolling page of full-bleed flooded sections. Content sits in a 72rem container with 16px side gutters on phones and 24px from 640px up. Sections are padded 96px top and bottom, 128px from 768px up (the menu runs to 144px at the bottom). The sticky header is 4.5rem tall; anchor scrolling offsets 5rem.

Section openings pair a headline with an intro paragraph, side by side and bottom-aligned on desktop (roughly 1fr to 1.1fr), stacked on mobile. Content below uses asymmetric two-column grids (0.8fr/1.2fr, 0.9fr/1.1fr) or equal thirds; the cake size guide sizes its columns 6:8:10 so the drawn cakes stay to scale. Long left columns stick at top 7rem.

The hero is the exception: a cookie cake wider than the viewport (235vw on phones; max(126vh, 100vw) from 640px) is centered and cropped so its rosette rim arcs in from the sides, with the headline, piped message, and composer stacked on the dough.

Breakpoints are Tailwind defaults: 640px, 768px, 1024px.

## Elevation & Depth

Fields are flat. Depth belongs to objects: the drawn cookies carry their own blurred drop shadows and SVG lighting (a lumpy dough surface and a glossy buttercream specular, both from azimuth 225°), and a short list of real objects lift off the field with chocolate-tinted shadows.

### Shadow Vocabulary
- **Press** (`box-shadow: 0 6px 14px -6px rgba(43, 22, 16, 0.5)`): resting state of buttons and the header logo badge.
- **Lift** (`box-shadow: 0 18px 40px -18px rgba(43, 22, 16, 0.55)`): button hover, and objects that sit on the field: the dozen box, the map frame, the story badge, the email dialog.

### Named Rules
**The Objects-Lift Rule.** Only physical things (buttons, a box, a framed map, a badge, a dialog) cast a shadow. Text blocks, lists, and sections never do.

**The One Light Rule.** Every drawn baked good is lit from the upper left (azimuth 225°) and seen from directly above. Never draw a cookie in perspective or from the side.

## Shapes

Controls are full pills. Framed objects use generous 2rem corners (1.75rem outer and 1.25rem inner for the dozen box); circular objects (logo badge, frosting dollops) are true circles ringed in 2 to 6px of chocolate or pink. Everything baked is a slightly lumpy closed blob, never a true circle. Structure on the field comes from horizontal rules: 3px Dark Chocolate to open and close a list, 2px at 15 to 25% opacity between entries. Section seams are rosette borders: a row of glossy star-tip rosettes, 48px tall, overlapping both sections by 24px.

## Components

### Buttons
Tactile, plump, and pressed into the field.
- **Shape:** full pill (9999px), 14px by 28px, 1rem bold, with an optional 16px arrow icon at a 0.5rem gap.
- **Primary:** Dark Chocolate with Vanilla Buttercream text, Press shadow. Used for every main action on light fields.
- **On chocolate:** Strawberry Field with Dark Chocolate text, same shape and shadow.
- **Hover / Focus:** rises 2px over 200ms ease-out, fill shifts to Cocoa (or Pink Buttercream), shadow grows to Lift; returns on press. Focus is a 3px Dark Chocolate outline at 3px offset (Pink Buttercream on chocolate fields).
- **Outline:** a 2px chocolate pill for the header's secondary destination; fills chocolate on hover.
- **Text link:** bold chocolate with a 2px underline at 40% opacity that goes solid on hover.

### Inputs / Fields
- **Style:** no box. Type sits straight on the field over a 3px Dark Chocolate underline, 1.125rem semibold, placeholders at 55% opacity.
- **Focus:** the underline turns Raspberry Ink; no outline ring.
- **Hero variant:** the message input sets at clamp(1.4rem, 3vw, 2rem) bold, same underline grammar.

### Choice controls (size switch, frosting dollops)
- **Size switch:** a chocolate pill track with every size visible; each option shows inches over price in tabular figures. Selected option fills Strawberry Field with chocolate text.
- **Frosting dollops:** glossy rosettes in each frosting. Unselected sit at 80% opacity; the selected one snaps forward to 110% scale with a 3px chocolate ring.

### Product entries
- **Grammar:** name (Title) and price (Price) on one baseline, justified apart, above a rule; serving or "each" line in bold; notes in Body at 75 to 85% opacity. Drawn cookie or cake to the left or above, at scale. Entries are separated by rules, never cards.

### Navigation
- **Header:** sticky, Strawberry Field at 95% with a light backdrop blur. Logo badge (48px circle, 2px chocolate ring) and the wordmark in Headline style. Links are bold chocolate pills that fill chocolate with Pink Buttercream text on hover. Below 1024px the section links move to a horizontally scrolling row of Pink Buttercream pills under the bar.
- **Footer:** chocolate field, script wordmark in Strawberry Field, column headings in extrabold pink, links in Vanilla at 85% turning pink and underlined on hover.

### Cookie Nachos tray (signature, lead)
The first viewport: a bowl of vanilla buttercream (raspberry rim under a gloss filter, faint swirls, sprinkles near the edge) centred on the pink field, sized wider than the phone on mobile. Cookie chips (wedges cut from a round cookie, outer edge curved) fan around it in two rings; the inner ring rests its tips in the dip. One chip at a time slides 46 units toward the bowl and comes back with a dripping buttercream coat (0.42s in, coat reveal 0.38s), on a 1.9s cadence until the inner ring is coated, and on pointer hover. Under reduced motion three chips are shown already dipped and nothing moves. The headline, headcount and date fields, and the quote button sit inside the dip.

### Nacho Pack
One serving in a clear rounded clamshell: chips fanned on the left, a small dip bowl on the right, a pink MM sticker, and a white glare. A simplified version (three chips, no texture filters) tiles 24-up as "Twenty-four guests, twenty-four packs."

### Cookie Cake (signature)
A top-down cookie cake drawn in SVG: radial dough gradient (#F1C88C to #9C5E25) under a fractal-noise dough lighting filter, chocolate chips scattered outside a clear center, and a ring of star-tip rosettes in one frosting under a gloss filter. It scales from the oversized cake in the cake-builder section to the size guide's three to-scale cakes.

### Piped Message (signature)
The visitor's text in Leckerli One, filled and edged in the chosen frosting, glossed, and revealed line by line left to right over 0.95s (cubic-bezier(0.45, 0.05, 0.35, 1)), each line 0.75s after the last, re-piping after a 450ms pause in typing. Under reduced motion it appears at once.

### Rosette Border (signature)
A 48px band of about 44 glossy rosettes, each with a few sprinkles, laid over the seam between two fields in strawberry or vanilla frosting.

## Do's and Don'ts

### Do:
- **Do** flood each section with one field color (Strawberry Field, Baked Dough, Vanilla Buttercream, or Dark Chocolate) and set content straight onto it.
- **Do** draw every cookie and cake from directly above, lit from the upper left, at true relative scale.
- **Do** use Leckerli One only for piped messages, signatures, and the wordmark.
- **Do** separate product entries with 3px and 2px chocolate rules, with name and tabular price on one baseline.
- **Do** keep every choice visible at once and snap the selection forward (110% scale, 3px chocolate ring, or a pink fill in a chocolate track).
- **Do** use pill buttons in Dark Chocolate on light fields and Strawberry Field on chocolate fields, rising 2px on hover.
- **Do** mark section seams with a rosette border.

### Don't:
- **Don't** return to the cream boutique look: no serif display titles, no centered-logo hero, no row of product cards.
- **Don't** use sky, lemon, mint, or tangerine anywhere except as sprinkles.
- **Don't** put product entries in cards or tinted boxes on top of a field.
- **Don't** cast shadows from text blocks or sections; only physical objects lift.
- **Don't** introduce a gray; dim Dark Chocolate or Vanilla Buttercream with opacity instead.
- **Don't** draw baked goods in perspective, from the side, or as perfect circles.
