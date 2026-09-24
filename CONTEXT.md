# NovaBridge — CONTEXT.md (Version 3)
## Single source of truth

Version 3 replaces the original 5-stage, 45-minute Apply course. That course
confused trainees (see `notes.md`) and was split in two. **This repo is Course 1.**

---

## Project overview

A web-based course for new managers at NovaBridge — a fictional 300-person B2B
SaaS company that promoted 14 individual contributors into manager roles in 18
months with no formal training. Voluntary turnover on new-manager teams hit 34%
within a year.

**Course 1 (this repo) — Understanding a performance conversation**
Bloom's level: Understand. ~30–35 minutes, 12 screens.
It closes the *knowledge* gap: managers can't yet name what avoidance is, what
drives it, or what it costs. No framework is taught here.

**Course 2 (not built) — Applying ONAA**
Bloom's level: Apply. The skill gap: using a framework in a real conversation.
Everything ONAA-related is deferred there (see "Deferred to Course 2").

**Format:** web-based, self-paced, responsive (phone, tablet, desktop).
Fluid layout, no fixed aspect ratio. **No AI calls in Course 1.**

---

## Screen map (as built)

The nav counter runs **1 / 12 → 12 / 12**. `index.html` is the welcome screen and
isn't counted.

| # | Screen | File |
|---|--------|------|
| — | Welcome | `index.html` |
| 1 | The familiar choice | `stage1.html` |
| 2 | Why friction feels like danger | `stage1.html` |
| 3 | The Promotion Paradox | `stage1.html` |
| 4 | Meet the three managers | `stage2.html` |
| 5 | Sarah | `stage2.html` |
| 6 | Marcus | `stage2.html` |
| 7 | Amara | `stage2.html` |
| 8 | Your pattern | `stage2.html` |
| 9 | The hidden costs | `stage3.html` |
| 10 | The $7,500 question | `stage3.html` |
| 11 | The takeaway | `stage3.html` |
| 12 | Check your understanding | `stage4.html` |

Modules: 1 Anatomy of Avoiding · 2 The 3 Patterns · 3 The Cost of Inaction ·
4 Knowledge Check. The course **ends** at the knowledge check.

Within a file, screens are `#screen-0`, `#screen-1`… and `goToScreen(i)` swaps
`.active`. `stage3.html` also accepts a hash (`stage3.html#2` opens screen 11),
which the sidebars on other pages use to deep-link.

---

## Learning objectives

The authoritative list lives in `notes.md`. Course 1 assesses four, all at
Understand level:

| LO | What the learner does |
|----|----------------------|
| LO1 | Given a manager's own words about delaying a conversation, interpret what is driving it: a threat response rather than a personal weakness, and an instinct that cost little as an IC but now lands on the team |
| LO2 | Given a new scenario, identify the driver: Fear of Friction, Autonomy Projection, or Political Defense (the names the modules use) |
| LO3 | Distinguish a cost the manager can see from one that stays invisible until it compounds |
| LO4 | Identify their own dominant pattern (measured by the screen 8 self-diagnostic, **not** by the quiz) |

**Verbs match the evidence.** Nothing in Course 1 asks a learner to produce an
explanation — there is no free-text answer anywhere. What the course actually
collects is a *selection*: picking the right reading of a new case (quiz Q1, Q2),
sorting three unseen scenarios (Q3), choosing which cost stays invisible (Q4),
and self-rating on three scales (screen 8). So the verbs are interpret, identify
and distinguish, not explain or describe. All still Understand level.

**Open issue:** `notes.md` is out of step. Its table still holds the older
U1/U2/U3 set, whose verbs are "explain", "describe" and "recognize" — the first
two promise a constructed answer the course never asks for, and "recognize"
against taught material sits at Remember, below this course's level. The four LOs
above are what the built course measures.

---

## The three patterns (Module 2's spine)

Each character owns one reason for avoiding, one color, and one screen.

| Character | Pattern | Color | Scene | What they don't see |
|-----------|---------|-------|-------|--------------------|
| **Sarah** | Fear of Friction | pink | Daniel's deliverables slipping; they've been friends three years | Daniel already knows. He reads her silence as her giving up on him |
| **Marcus** | Autonomy Projection | indigo | Jin repeats errors; space feels like respect | Marcus is now measured on what his team figures out. Jin reads silence as indifference |
| **Amara** | Political Defense | cyan | Raising problems marks you as the problem in her org | Two teammates quietly absorb the load; one is wondering why they bother |

Screen 8 scores the three self-ratings and names a dominant pattern, a mixed
pattern (a tie), or "No strong pattern yet" (all "Not me").

The knowledge check deliberately uses **new** characters (Dana, Priti, Ben) for
the same three drivers, so it tests the pattern rather than memory of the stories.

---

## The cost statistic

**$7,500 and more than seven workdays, per avoided conversation.**
Source: VitalSmarts (now Crucial Learning), *Costly Conversations*, 2016 — the
average estimate employees gave for what one avoided conversation costs their
organization.

Earlier drafts credited this to CPP Inc. (2008) as a per-employee, per-year
figure, and the original script credited Leadership IQ. Both were wrong. CPP's
2008 study measured something else: 2.8 hours a week spent on conflict, about
$359 billion a year in US paid hours.

---

## Design rules

1. **Emotion before framework.** Why it's hard (M1, M2) before what it costs (M3).
2. **Behavioral-gap framing.** Never "here's what to do." Always "here's why it's hard."
3. **The learner controls pacing.** Never auto-advance after a question or interaction.
4. **The knowledge check is scored.** Shows a score, "Passed" / "Not yet", and a
   retake. Pass mark is 3 of 4 (`PASS_MARK` in `stage4.html`). *This reverses the
   old "no scores, no failure language" rule, which applied to the Apply course.*
5. **Self-ratings are never scored.** The Module 2 scales and the closing
   reflection have no right answer and no mark.
6. **No green/red on anything that isn't right or wrong.** Correct/incorrect
   marking belongs only to the knowledge check.
7. **Responsive-first.** Min tap target 44px. Test at 390px / 768px / 1440px.
8. **Vanilla HTML/CSS/JS.** No frameworks, no build step. One file per module,
   styles inline per file, shared tokens in `tokens.css`.

---

## Visual system

Dark page (`--bg-deep`), light cards. Every content card carries a 4px accent bar
on its left edge, drawn as an inset shadow so it follows the rounded corner:

```css
box-shadow: inset 4px 0 0 var(--accent-bar), 0 12px 32px rgba(0,0,0,0.28);
```

Each screen sets a palette by class — `pattern-screen--sarah`, `--marcus`,
`--amara`, `--mixed`, or `.cost-screen` for Modules 3 and 4:

| Variable | Role |
|----------|------|
| `--accent` | dots, focus rings, icons |
| `--accent-bar` | the 4px card edge |
| `--accent-soft` | pill and avatar backgrounds |
| `--accent-line` | card and button borders |
| `--accent-ink` | text on pale backgrounds |
| `--accent-wash` | pastel card (the reveal side) |
| `--accent-tint` | near-white card, so the accent bar reads the same on both |
| `--accent-strong` | filled selected state |

Repeating layout patterns: a meta row (`.ps-meta`) with breadcrumb left and step
counter right; two equal cards comparing two perspectives; a reveal card that
turns from prompt to content on click; a full-width reflection panel below.

---

## Files

```
index.html                        Welcome
stage1.html                       Module 1 — Anatomy of Avoiding (3 screens)
stage2.html                       Module 2 — The 3 Patterns (5 screens)
stage3.html                       Module 3 — The Cost of Inaction (3 screens)
stage4.html                       Module 4 — Knowledge Check (1 screen)
tokens.css                        Shared design tokens
text-size.js                      Text-size toggle in the nav
tracker.js                        Progress tracking
undraw_*.svg                      Illustrations (three recolored per character)
job-aid.html                      ONAA checklist — Course 2 material
stage4-simulation-course2.html    Archived Priya/ONAA simulation — Course 2
notes.md                          ADDIE process, persona, LOs, reviewer feedback
course-ui-principles.md           Reusable UI checklist
SCRIPT_v2.md                      Original Apply-course script (superseded)
```

---

## Known issues

- **`--space-7` is not defined in `tokens.css`.** It survives in `stage1.html`
  (4 times) and `stage2.html` (3 times), but only inside `.white-frame` and
  `.instructor-voice` rules — classes that no longer appear in either file's
  markup. Nothing renders wrong today. The clean fix is deleting that dead CSS
  rather than defining the token.
- **`--weight-bold` is not defined either**, and nothing uses it now. Use `700`
  directly if you need bold.
- **The sidebar shows a ✓ on screens nobody has visited**, because all screens
  were made freely clickable for reviewers. A ✓ implies completion.
- **Screen 6's title** ("The skills that got you promoted are working against
  you") makes the causal claim that screen 3 deliberately softened.
- **`stage4-simulation-course2.html` links to `stage5.html`**, which has been
  deleted. Rebuild that link when Course 2 starts.

---

## Deferred to Course 2

Nothing below appears in Course 1.

- **ONAA** — Observe · Name the impact · Ask first · Agree on next steps.
- **The simulation** — Jordan (the manager, second person, never pronouns),
  Priya Rajan (missing sprint deadlines, covering for Karan), Karan (absent,
  mentioned only). Three decision points, five paths. Archived in
  `stage4-simulation-course2.html`.
- **The commitment step** — naming a person, a behavior, a question and a date.
  A dated commitment is an Apply action, so it moves with the framework.
  `stage5.html` was deleted; the user holds a copy.
- **Claude API calls** — simulation coaching and commitment polish.
- **`job-aid.html`** — the ONAA pre-conversation checklist. Still linked from the
  nav on every screen, though Course 1 never teaches ONAA. Decide whether to hide
  it until Course 2 ships.
