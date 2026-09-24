# NovaBridge Tracker — Google Sheets Setup

## Step 1: Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet
2. Name it **"NovaBridge Course Data"**
3. In Row 1, add these column headers:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Session ID | Started | Completed | Highest Stage | Sim Path | ONAA Used | Avoidance Pattern | Commitment | Device |

## Step 2: Add the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any code in the editor
3. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.sessionId,
    data.startedAt,
    data.completedAt,
    data.highestStage,
    data.simPath,
    data.onaaUsed,
    data.avoidancePattern,
    data.commitmentFilled,
    data.device
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (Ctrl+S)
5. Name the project **"NovaBridge Tracker"**

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon → select **Web app**
3. Set:
   - **Description:** NovaBridge Tracker
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**
5. Click **Authorize access** → choose your Google account → Allow
6. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/ABC.../exec`)

## Step 4: Paste the URL in your course

1. Open `tracker.js` in your project
2. Find this line near the top:
   ```javascript
   const ENDPOINT = '';
   ```
3. Paste your URL between the quotes:
   ```javascript
   const ENDPOINT = 'https://script.google.com/macros/s/ABC.../exec';
   ```
4. Save the file

## What you'll see in the spreadsheet

Each row = one course completion. Example:

| Session ID | Started | Completed | Stage | Sim Path | ONAA | Pattern | Commit | Device |
|------------|---------|-----------|-------|----------|------|---------|--------|--------|
| a3f8b... | 2026-07-08T09:00 | 2026-07-08T09:42 | 5 | effective | O, A1, N, A2 | marcus | yes | desktop |
| 7c2e1... | 2026-07-08T10:15 | 2026-07-08T10:58 | 5 | clumsy | O | sarah | yes | mobile |
| d91a4... | 2026-07-08T11:30 | — | 3 | — | — | amara | no | desktop |

## What each column tells you

- **Sim Path:** Where managers struggle. If most get `clumsy`, they jump to solutions before asking.
- **ONAA Used:** Which framework steps are intuitive vs. which get skipped.
- **Avoidance Pattern:** Which pattern is most common in your org (sarah/marcus/amara).
- **Commitment:** Whether the transfer moment landed.
- **Highest Stage:** Drop-off point if they didn't finish.
