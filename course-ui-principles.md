# Course UI Principles

A reusable checklist for designing or reviewing the UI of any e-learning /
training course. Grew out of comparing two real courses — a bank-teller
compliance module ("Cascade") and an emotional-arc management course
("NovaBridge") — and separating what was actually *structural* (transfers
to any course) from what was *voice* (should change per course).

The core idea: structure and voice are different decisions. Structure —
navigation, layout, hierarchy — mostly transfers between courses. Voice —
color palette, tone, animation, copy style — should match *this* course's
specific purpose and audience. Don't let "borrow the structure" turn into
"copy the palette" unless two courses actually serve the same purpose.

---

## 1. Persistent navigation

**Rule:** Give the learner a permanent, visible map of the whole course —
not just "step 2 of 5."

**Do this:** A sidebar (or equivalent persistent nav) that:
- Lists every section, grouped under labeled categories
- Shows a checkmark on anything already completed
- Highlights the current section
- Lets the learner jump anywhere, forward or backward, at any time

**Relax it when:** the course is deliberately linear or emotional and
revisiting a section early would break intended pacing. Even then, still
show completed sections with checkmarks — just don't reveal upcoming
section titles ahead of time if that would spoil the arc.

**Build it once:** implement the nav as a single shared component
(one JS file that renders the sidebar into a placeholder element) so
every page in the course reuses it instead of duplicating markup.

---

## 2. Panel-on-page contrast

**Rule:** Give your main content a visibly different surface than the
page behind it, so it reads as an object sitting on a background —
not one flat wash of the same color.

**Do this:** page background one shade, content panel a different shade
(lighter or darker, whichever direction your theme goes), plus a soft
shadow under the panel. Never let the panel and page sit at nearly
identical tone/opacity — that's what makes a UI look flat instead of
layered.

---

## 3. Metadata stat grid

**Rule:** When a landing/overview screen needs to convey a handful of
quick facts (duration, audience, modules, assessment format, etc.),
present them as a compact grid of label-over-value pairs — not a
vertical icon list.

**Do this:** 3–5 columns, a tiny uppercase label on top, a bold value
underneath, no icon required. This is the "spec sheet" pattern — it
reads at a glance. Icons and vertical lists are fine deeper in the
course; landing screens benefit from a scannable grid.

---

## 4. Preview / teaser content

**Rule:** Give the learner a taste of what's inside before they commit.

**Do this:** 2–4 flat cards below the main CTA on the landing screen,
each with a small icon, a short title, and one line of description,
previewing the biggest ideas, moments, or skills in the course.

---

## 5. Progress checkmarks

**Rule:** Progress should be legible at a glance from anywhere in the
course — not just a fraction like "1/18," but visible checkmarks or
filled states on the sections actually completed.

**Do this:** tie the checkmark to whatever completion-tracking the
course already stores (localStorage, a backend flag, etc.) — don't
build new tracking, just surface what's already recorded.

---

## 6. CTA contrast

**Rule:** The primary action button should be the highest-contrast
element on whatever screen it's on.

**Do this:** a solid, opaque fill in your one true accent color for the
main "Continue" / "Begin" button. Reserve gradients, glows, and
translucency for secondary or decorative elements — never for the one
thing you most need someone to click.

---

## 7. Color system — choose deliberately, don't copy

**Rule:** Pick a palette based on the course's job, not on what looked
good in a screenshot of a different course.

- **Procedural / compliance / high-stakes accuracy** (teller training,
  safety certification, legal/regulatory modules): a flat two-tone
  palette — one dark neutral + one accent color used consistently
  everywhere (checkmarks, active nav state, CTA). Reads as authoritative
  and scannable.
- **Narrative / emotional / behavior-change** (management skills, soft
  skills, DEI, wellness): a warmer multi-hue palette — gradients, glow,
  more color variety. Reads as inviting and human, and supports an
  emotional arc across the course.

If a course has explicit design rules already written down (a style
guide, a CONTEXT.md, a brand doc), the palette decision is already made
— don't override it just because another course's screenshot looked
sharper. Copy that course's *structure* instead.

---

## How to apply this to a new course

1. **Identify the course's purpose and tone first.** This single
   decision drives item 7 (palette) and how strictly to apply item 1
   (whether revealing the full map upfront helps or hurts).
2. **Apply items 1–6 regardless of tone.** Navigation, panel contrast,
   stat grid, preview cards, checkmarks, and CTA contrast are structural
   — they improve almost any course without fighting its voice.
3. **Build or extend the palette to match tone** (item 7), using colors
   already established for that course/brand rather than inventing a
   new one.
4. **Reuse shared components.** One nav/sidebar component and one
   progress-tracking store, referenced from every page — never
   duplicate the sidebar markup or reimplement progress logic per page.
5. **When comparing to a reference course:** separate every observed
   difference into "structure" (candidate to borrow) or "voice"
   (candidate to leave alone unless the two courses share a purpose).
