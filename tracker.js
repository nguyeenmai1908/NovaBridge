// ── NovaBridge Anonymous Tracker ──
// Collects completion data and sends to Google Sheets.
// No names. No reflection content. Just behavioral patterns.

(function () {
  const STORAGE_KEY = 'nb-tracker';
  const ENDPOINT = ''; // Add your Google Apps Script deployment URL here — see GOOGLE_SHEETS_SETUP.md

  // ── Read / write local state ──
  function getData() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || createFresh();
    } catch { return createFresh(); }
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function createFresh() {
    const data = {
      sessionId: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2),
      startedAt: new Date().toISOString(),
      highestStage: 0,
      simPath: '',
      onaaUsed: [],
      avoidancePattern: '',
      commitmentFilled: false,
      completedAt: '',
      device: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop'
    };
    save(data);
    return data;
  }

  // ── Public API ──
  window.NBTracker = {
    // Call when entering a stage
    stageReached: function (stageNum) {
      const data = getData();
      if (stageNum > data.highestStage) {
        data.highestStage = stageNum;
        save(data);
      }
    },

    // Call when sim ends with path result
    simCompleted: function (path, onaaUsed) {
      const data = getData();
      data.simPath = path;
      data.onaaUsed = onaaUsed || [];
      save(data);
    },

    // Call when avoidance pattern is determined in Stage 2
    patternIdentified: function (pattern) {
      const data = getData();
      data.avoidancePattern = pattern;
      save(data);
    },

    // Call when commitment form is filled
    commitmentMade: function () {
      const data = getData();
      data.commitmentFilled = true;
      save(data);
    },

    // Call when course is finished (Stage 5 complete)
    courseCompleted: function () {
      const data = getData();
      if (data.completedAt) return; // Already sent
      data.completedAt = new Date().toISOString();
      data.highestStage = 5;
      save(data);
      this._send(data);
    },

    // Send data to Google Sheets
    _send: function (data) {
      if (!ENDPOINT) {
        console.log('[NBTracker] No endpoint configured. Data:', data);
        return;
      }

      const payload = {
        sessionId: data.sessionId,
        startedAt: data.startedAt,
        completedAt: data.completedAt,
        highestStage: data.highestStage,
        simPath: data.simPath,
        onaaUsed: data.onaaUsed.join(', '),
        avoidancePattern: data.avoidancePattern,
        commitmentFilled: data.commitmentFilled ? 'yes' : 'no',
        device: data.device
      };

      fetch(ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(function (err) {
        console.log('[NBTracker] Send failed, will retry on next completion:', err);
      });
    }
  };
})();
