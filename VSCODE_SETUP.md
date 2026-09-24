# NovaBridge — VS Code Setup Guide
## Step-by-step from zero to first running page

---

## Step 1 — Create the project folder

Open VS Code.
Open Terminal (Ctrl+` or Cmd+`)
Run these commands one by one:

```bash
mkdir novabridge
cd novabridge
mkdir styles stages api utils data assets
```

---

## Step 2 — Add your reference files

Copy these files into the novabridge/ root:
- CONTEXT.md
- SCRIPT_v2.md
- tokens.css (put in styles/tokens.css)

Your folder should now look like:

```
novabridge/
├── CONTEXT.md
├── SCRIPT_v2.md
└── styles/
    └── tokens.css
```

---

## Step 3 — Create empty files

In your terminal, run:

```bash
touch index.html job-aid.html
touch styles/reset.css styles/components.css
touch stages/s0-intro.js stages/s1-recognition.js
touch stages/s2-understanding.js stages/s3-tool.js
touch stages/s4-sim.js stages/s5-transfer.js
touch api/proxy.js
touch utils/state.js utils/router.js utils/download.js
touch data/sim-dialogue.js data/onaa-content.js
touch assets/job-aid-print.css
```

---

## Step 4 — Open Cursor

Open Cursor (it works inside VS Code or standalone).
Make sure your project folder is open.

---

## Step 5 — First Cursor prompt (scaffold)

Copy and paste this exactly:

---

@CONTEXT.md @SCRIPT_v2.md

Build the project foundation in this order:

1. styles/reset.css
   A minimal CSS reset:
   - box-sizing border-box on everything
   - remove default margin and padding
   - img max-width 100%
   - nothing else

2. index.html
   A single-page app shell:
   - Link to Google Fonts: Plus Jakarta Sans 400, 500, 600
   - Link to styles/reset.css, styles/tokens.css, styles/components.css
   - A sticky top nav: left = "NovaBridge" brand text,
     center = stage progress dots (s0 through s5 + job aid),
     right = "Job aid" link
   - A main <div id="app"> where all stages will mount
   - Script tags loading in order: utils/state.js, utils/router.js,
     then all stages/s*.js files, then utils/download.js
   - Background: var(--bg-deep) on body
   - Add 3 background orb divs (.orb-1, .orb-2, .orb-3) for decoration
   - On load, call showStage(0) to display the intro page
   - Responsive: no fixed width on outer shell

3. utils/state.js
   The learnerState object exactly as defined in CONTEXT.md.
   Export it as window.learnerState so all stage files can access it.

4. utils/router.js
   A showStage(n) function:
   - Clears the #app div
   - Calls the render function for stage n
   - Updates the nav progress dots:
     done = stages before n, active = n, upcoming = stages after n
   - Scrolls to top of page
   Export as window.showStage.

Do not build any stage content yet.
Do not add placeholder text or lorem ipsum.
Vanilla HTML/CSS/JS only — no frameworks.

---

## Step 6 — Second Cursor prompt (Stage 1)

After Step 5 is working and you can open index.html in a browser:

---

@CONTEXT.md @SCRIPT_v2.md

Build stages/s1-recognition.js

This is Stage 1 — Recognition.
Copy from the STAGE 1 — RECOGNITION section of SCRIPT_v2.md exactly.

Rules:
- The render function is called renderStage1()
  It injects HTML into document.getElementById('app')
- Export as window.renderStage1
- Three screens: 1.1 (Sarah scene), 1.2 (Marcus + Amara scenes), 
  and the bridge to Stage 2
- Screen 1.1: no heading, no label — drops straight into the Sarah scene
  The scene text appears as styled prose inside a .card component
  The button "That's familiar. Keep going →" appears after a 3 second delay
- Screen 1.2: Sarah scene leads into Marcus scene leads into Amara scene
  Each scene in its own .card component
  Scenes fade in with a 0.3s stagger between them using IntersectionObserver
- The final narration ("Before we give you a framework...") appears after
  all three scenes are visible
- Button at the end: "Show me →" calls showStage(2)
- Use only classes from tokens.css and components.css
  Never hardcode any color, font size, or spacing value
- All copy must match SCRIPT_v2.md Stage 1 exactly — do not paraphrase

---

## Step 7 — Continue stage by stage

After Stage 1 looks right in the browser, continue:

Stage 2 prompt:
"@CONTEXT.md @SCRIPT_v2.md Build stages/s2-understanding.js
following the STAGE 2 — UNDERSTANDING section of SCRIPT_v2.md exactly.
[same rules as Stage 1 above]
The $7,500 stat should be a large centered display number that counts up
when it enters the viewport using IntersectionObserver.
Button at the end calls showStage(3)."

Stage 3 prompt:
"@CONTEXT.md @SCRIPT_v2.md Build stages/s3-tool.js
following the STAGE 3 — THE TOOL section of SCRIPT_v2.md exactly.
Each ONAA step (O, N, A, A) is its own screen section.
Each section shows: the step letter in a gradient circle,
the fear it solves in small pink label text,
then the contrast (without/with) side by side on wider screens,
stacked on mobile.
Button at end calls showStage(4)."

Stage 4 prompt:
"@CONTEXT.md @SCRIPT_v2.md Build stages/s4-sim.js
following the STAGE 4 — PRACTICE section of SCRIPT_v2.md exactly.
Import dialogue from data/sim-dialogue.js.
The sim uses the chat UI pattern from CONTEXT.md.
The branching logic uses learnerState.simChoices and learnerState.onaaUsed.
The AI coaching call uses the prompt in CONTEXT.md Call 1.
Do not build the API call yet — add a placeholder function getAIFeedback()
that returns a hardcoded string for now."

Stage 5 prompt:
"@CONTEXT.md @SCRIPT_v2.md Build stages/s5-transfer.js
following the STAGE 5 — TRANSFER section of SCRIPT_v2.md exactly.
The commitment fill-in has four inputs: person, behavior, question, date.
Add a placeholder function polishCommitment() for now.
Button: 'Download as reminder card' calls window.downloadCard()
from utils/download.js (build that separately)."

---

## Step 8 — Wire the API (do this after all stages work)

Prompt:
"@CONTEXT.md Build api/proxy.js as a simple Node.js Express server.
It should:
- Listen on port 3001
- Have one POST endpoint: /api/claude
- Read ANTHROPIC_API_KEY from process.env
- Forward the request body to https://api.anthropic.com/v1/messages
  with the API key in the header
- Return the response to the client
- Include CORS headers so the frontend can call it

Then update s4-sim.js and s5-transfer.js to call
http://localhost:3001/api/claude instead of the Anthropic API directly.
On Fly.dev deployment the proxy and frontend will be on the same server."

---

## Step 9 — Responsive QA

Test in Chrome DevTools at these sizes:
- 375px — iPhone SE (smallest common phone)
- 390px — iPhone 14
- 768px — iPad
- 1280px — laptop

Check:
- No horizontal scroll at any size
- Chat bubbles don't overflow their container
- Choice buttons are at least 44px tall (tap target)
- Font size feels comfortable (17px body minimum)
- Orb decorations don't cause overflow
- Progress nav doesn't wrap weirdly on small screens

---

## Step 10 — Deploy to Fly.dev

When everything is working locally:

```bash
npm init -y
npm install express cors
```

Create a simple server.js that serves the static files
AND runs the API proxy on the same server.

Then:
```bash
fly launch
fly secrets set ANTHROPIC_API_KEY=your_key_here
fly deploy
```

---

## Common Cursor mistakes to watch for

1. Cursor hardcodes a color like #4f46e5
   → Tell it: "Use var(--indigo-600) from tokens.css instead"

2. Cursor imports React or uses npm packages
   → Tell it: "Vanilla JS only — no imports, no npm packages for the frontend"

3. Cursor puts all code in one file
   → Tell it: "Put this in stages/s1-recognition.js only"

4. Cursor writes fetch() calls directly to api.anthropic.com in frontend JS
   → Tell it: "API calls go through api/proxy.js — call /api/claude not anthropic directly"

5. Cursor makes font size too small
   → Tell it: "Body text minimum 17px, use var(--text-base)"

6. Cursor adds a congratulations screen or learning objectives recap
   → Tell it: "Remove this — see design rule 3 in CONTEXT.md"

---

## Files to keep in sync

Every time you significantly change the course:
- Update SCRIPT_v2.md if dialogue or copy changes
- Update CONTEXT.md if architecture or design rules change
- Re-reference both in your next Cursor prompt

These two files are your insurance.
If Cursor goes in the wrong direction,
paste both files again and it resets.

---
