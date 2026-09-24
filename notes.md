# NovaBridge — Notes & Observations

---

## Course Feedback & Design Diagnosis

**Feedback received (Aug 2026):**
- Trainees were confused — jumped straight into Apply without Understanding foundation
- Reviewer flagged: course scope does not fit 45 minutes at the Apply level
- Root cause: design process was incomplete — learner persona, LOs, and assessment were not locked before content was built
- Flow felt abrupt: no gradual build from "what is this" to "here's how to do it"

**Design decision:**
Rebuild Course 1 at **Understanding** level. Apply course becomes Course 2 (future).

---

## Two-Course Roadmap

| | Course 1 (rebuild now) | Course 2 (future) |
|---|---|---|
| Title | Understanding a performance conversation | Applying ONAA |
| Bloom's level | Understand | Apply |
| Time target | ~30–35 min | ~25–30 min |
| Assessment | Scenario-based knowledge check | Sim paths + AI coaching |
| Status | Redesign from scratch | Hold — revisit after Course 1 ships |

---

## ADDIE Design Process — Full Step List

Priority order: **Learning experience & flow → Visual & content → Assessment**

---

### PHASE 1 — ANALYZE

**A1. Learner persona** ← start here
- Demographics & role context (who exactly is taking this?)
- Prior knowledge (what do they already know about performance conversations?)
- Entry behavior (what can we assume they arrive with vs. need to be taught?)
- Motivation & attitude (do they want to be here? is this mandatory?)
- Context of use (when do they take this — after promotion? during onboarding? as a refresher?)
- Tech access & environment (device, connection, interruption level)

  ⚠️ Warning: Don't make the persona too broad ("all new managers"). The more specific, the tighter the LOs. A manager promoted 1 month ago is different from one 18 months in.

**A2. Needs analysis**
- What is the performance gap? (current state vs. desired state)
- Is it a knowledge gap (don't know what a performance conversation is) or a skill/motivation gap (know but avoid)?
- ⚠️ Warning: This course originally conflated both — Stage 1–2 addressed motivation, Stage 3–4 addressed skill. Understanding level should focus on the knowledge gap only. Motivation and skill belong in separate courses or separate design decisions.

**A3. Context analysis**
- Is this self-paced? Mandatory or voluntary?
- Will learners have manager support after? Or is this standalone?
- ⚠️ Warning: A standalone course with no post-learning support (coaching, follow-up) has much lower transfer rate. Flag this for stakeholders.

**A4. Task analysis** *(minor but important)*
- What does a manager actually DO in a performance conversation? (break it into discrete steps)
- What knowledge does each step require?
- This becomes the backbone of your LOs and flow.
- ⚠️ Warning: The current course skipped this — ONAA was introduced without mapping which task each step addresses. That's why the framework felt abstract to some trainees.

---

### PHASE 2 — DESIGN

**D1. Terminal Learning Objectives (TLOs)**
- Write 2–4 LOs at the Understanding level
- Each LO: condition · behavior (Bloom's verb) · criteria
- Lock these before writing any content.
- ⚠️ Warning: Every piece of content must trace back to an LO. If it doesn't, cut it.

**D2. Enabling Objectives (EOs)** *(minor step — often skipped, shouldn't be)*
- Break each TLO into the smaller knowledge chunks learners need to get there
- These become your content outline and stage structure
- Example: To "explain why avoidance happens" (TLO), learner first needs to "recognize avoidance in a scenario" → "connect behavior to a root cause" → "relate it to their own pattern"

**D3. Assessment strategy**
- What does "achieved the LO" look like at Understanding level?
- Bloom's Understanding ≠ "watched the content" — it means they can explain, interpret, classify, or summarize in their own words or in a new scenario
- ⚠️ Warning: Don't use true/false or simple recall questions for Understanding. Use scenario-based questions where learners must interpret a situation.

**D4. Instructional strategy & sequencing**
- How will content be ordered? (simple → complex, concrete → abstract, known → unknown)
- What's the emotional arc? (this course already does this well in Stages 1–2)
- ⚠️ Warning: Don't sequence by framework logic (O → N → A → A). Sequence by learner readiness. Teach the *why* before the *what*.

**D5. Flow map / learning journey**
- Map each stage: goal → content → interaction → transition
- Identify where cognitive load peaks and build in relief (reflection prompts, transitions, breathing room)
- ⚠️ Warning: The current course has strong narrative content but weak transitions between stages. Learners didn't know why they were moving from one stage to the next.

**D6. Storyboard** *(per screen/interaction)*
- For each screen: narration, UI element, learner action, feedback
- Don't design visuals yet — design the interaction logic first

---

### PHASE 3 — DEVELOP

**Dev 1. Content writing** (follows storyboard)
**Dev 2. Visual design** (follows content — don't design visually before content is locked)
**Dev 3. Prototype / build**
**Dev 4. Internal review** *(formative evaluation — before pilot)*

---

### PHASE 4 — IMPLEMENT

**I1. Pilot with 2–3 real learners** *(don't skip this)*
- Watch them go through it — don't explain, just observe
- Note where they pause, re-read, or look confused
- ⚠️ Warning: The current course was not piloted before release. That's where the "confused trainee" feedback came from.

**I2. Revise based on pilot**
**I3. Launch**

---

### PHASE 5 — EVALUATE

**E1. Kirkpatrick Level 1** — Did learners find it relevant and engaging? (reaction)
**E2. Kirkpatrick Level 2** — Did learners achieve the LOs? (learning — your assessment catches this)
**E3. Kirkpatrick Level 3** — Did behavior change? Did they have the conversation? (transfer — needs a follow-up mechanism)
- ⚠️ Warning: Without a Level 3 mechanism (manager check-in, follow-up nudge, survey 2 weeks later), you'll never know if the course worked in the real world.

---

## Current Step

→ **A1. Learner persona** — work on this next

---

## Learner Persona — NovaBridge Manager Series

**Role:** Individual contributor promoted to people manager at NovaBridge. Managing 3–6 direct reports, typically a former peer or near-peer group.

**Tenure as manager:** 6–12 months. Has gotten enough reps to recognize recurring friction — late deliverables, dropped commitments, declining quality — but hasn't developed a reliable response pattern yet. The IC toolkit (fix it yourself, work harder) is visibly failing. Has not replaced it.

**Prior knowledge:** Knows what a performance conversation is conceptually. Has probably seen one modeled badly (avoidance, indirect feedback, sudden escalation). Has little to no exposure to a framework. Has not been coached on how to have one.

**Entry behavior — what they arrive with:**
- A specific person or pattern already in mind. They are not taking this course abstractly.
- A working theory about why it's hard that is partially wrong (usually: "I'm not good at conflict" rather than "the situation has real structural barriers")
- Mild skepticism that a course can change anything practical

**Motivation and attitude:** Moderately motivated. Manager knows the course exists but is not tracking completion — so there is no external accountability beyond the learner's own discomfort. The course earns continued attention by being worth their time, not by being required.

**Context of use:** Desktop, during a break or a low-meeting block. Not interrupted but also not fully focused. Self-paced, no time pressure. Takes both courses within a few weeks of each other ideally, but this cannot be controlled.

**After the course:** No formal follow-up mechanism. Learner returns to the same environment that taught them avoidance in the first place. Transfer depends on specificity of commitment and strength of the "now" moment at the end of the course.

---

## Manager Awareness — Design Decision

**Framing:** Manager knows the course exists, but is not tracking completion.

This is the most realistic corporate scenario — manager sent the enrollment link or it was in an onboarding checklist, but no one is following up on who finished. It means:
- Reflections can be honest (no one is evaluating them)
- Transfer is at risk (no post-learning reinforcement)

⚠️ Flag to stakeholders: without a Level 3 mechanism (manager check-in, follow-up nudge, survey 2 weeks later), transfer rate will be low. This is an organizational design problem, not a course design problem — but it should be named.

---

## Learning Objectives — Course Series

### Course 1: Understanding a performance conversation
**Bloom's level: Understand**
**Estimated time: 15–20 min** (measured — see below. The old 30–35 min target was
set before the course was built and the course never grew that large.)

These are the four LOs the built course actually measures. They replaced the
U1/U2/U3 set drafted during the ADDIE work.

| # | Learning Objective | Bloom's verb | Criteria |
|---|---|---|---|
| LO1 | Given a manager's own words about delaying a conversation, interpret what is driving it: a threat response rather than a personal weakness, and an instinct that cost little as an IC but now lands on the team | Interpret | Picks the threat-response reading over the "considerate management" distractor, and identifies who absorbs the cost after promotion (check Q1, Q2) |
| LO2 | Given three unseen workplace scenarios, identify the driver behind each manager's avoidance: Fear of Friction, Autonomy Projection, or Political Defense | Identify | All 3 sorted correctly, no false positives on the other two drivers (check Q3) |
| LO3 | Given a team situation, distinguish a cost the manager can see from one that stays invisible until it compounds, across the team, the manager, and the business | Distinguish | Names the invisible cost rather than the visible symptom (check Q4) |
| LO4 | After completing the three self-rating scales, identify which of the three patterns most closely matches their own instinct as a manager | Identify | All three scales completed; screen 8 returns a dominant, mixed, or no-strong-pattern result. Self-report, so not scored |

**Why these verbs.** Nothing in Course 1 asks a learner to produce an explanation
— there is no free-text answer anywhere in the build. What the course collects is
always a *selection*: picking the right reading of a new case (Q1, Q2), sorting
three unseen scenarios (Q3), choosing which cost stays invisible (Q4), and
self-rating on three scales (screen 8). So "explain", "describe" and "recognize"
were replaced with interpret / identify / distinguish. All are still Understand
level; only the evidence claimed has changed.

**Where the time estimate comes from.** Learner-visible word counts, excluding
the sidebar and counting only the branch a single learner sees:

| File | Words |
|------|-------|
| index.html (welcome) | ~340 |
| stage1.html (Module 1) | ~890 |
| stage2.html (Module 2) | ~1,200 |
| stage3.html (Module 3) | ~530 |
| stage4.html (knowledge check) | ~975 |
| **Total read in one pass** | **~3,900** |

At 200 wpm that is ~20 min of reading, plus roughly 3–4 min of choosing, revealing
and answering across ~25 interactions. A thorough learner takes 22–25 min; a
skimmer who doesn't open every reveal lands nearer 13–15. **15–20 min is the
honest range**, and the welcome screen's "~15 min" sits at the optimistic end.

**Note on optional U4:** There was a case for a fourth objective — "Describe what
a performance conversation is and is not, distinguishing it from criticism, HR
escalation, and informal feedback." It was never built, and no screen teaches it.
Add it only if learners arrive unclear on scope.

---

### Course 2: Applying ONAA
**Bloom's level: Apply**
**Time target: 25–30 min**

| # | Learning Objective | Bloom's verb | Criteria |
|---|---|---|---|
| A1 | Use the ONAA framework to prepare for a specific real performance conversation — completing all four components before entering | Use | All four fields completed: specific observed behavior, business consequence, open question, shared next step |
| A2 | Apply ONAA in a simulated performance conversation — navigating at least two decision points using framework-guided responses | Apply | Reaches DP2 or beyond; coaching note reflects actual path taken |
| A3 | Commit to one real performance conversation — naming the person, the behavior observed, the question not yet asked, and a date | Commit | All four fields completed; commitment is specific enough to be acted on without further preparation |

---

## LOs Archive (previous version — superseded)

These were written before the redesign decision. Kept for reference.

⚠️ The LO1–LO4 labels below are the *old* numbering and mean something different
from the LO1–LO4 in the Course 1 table above. Don't mix them up.

| LO | Level | Note |
|----|-------|-------|
| LO1: Explain why avoidance happens | Understand | Still valid for Course 1 |
| LO2: Use ONAA to prepare | Apply | Belongs in Course 2 |
| LO3: Apply ONAA in simulation | Apply | Belongs in Course 2 |
| LO4: Commit to a real conversation | Apply | Belongs in Course 2 |

---

## Reviewer Feedback Log

### Caitlin Bartholic — Aug 2026 (on current Apply course)

**What worked:**
- Engaging even for a skimmer — no fluff, content earns attention
- Observe vs judge activity: strong example of training behavior through experience (pick a response, think through why they differ)

**Issues to fix in Course 2 (Apply):**

| # | Issue | Location | Priority |
|---|---|---|---|
| 1 | Small gray text hard to read on dark background | Throughout | Accessibility — fix before relaunch |
| 2 | Auto-timing on Observe/Judge activity advances without user control — some learners need more time to read and process | Stage 3 | UX — learner needs pacing control |
| 3 | Simulation ends and jumps to next page unexpectedly — no warning, no user control | Stage 4 end | UX — transition needs a user-initiated step |

**Design principles to carry into Course 1:**
- Never auto-advance after a question or interaction — always give learner control of when to move on
- Small text on dark background = accessibility risk, especially on mobile
- Activity design (pick a response, think through why) is validated — use this pattern in Course 1 knowledge check

---

## Dev Notes
*(add bugs, test observations, API issues here)*

---

## Design Notes
*(add copy decisions, tone flags, visual observations here)*
