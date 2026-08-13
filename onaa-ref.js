// ── ONAA Quick Reference Floating Button ──
// Shows after learner reaches Stage 3. Accessible from any page.

(function () {
  // Only show after learner has seen the framework (stage3.html = position 4)
  // stage3.html = framework page, stage5.html = transfer, job-aid = always
  // stage4.html = sim — only on retry (after framework)
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var allowed = ['stage4.html', 'stage5.html', 'job-aid.html'];

  if (allowed.indexOf(page) === -1) {
    return;
  }

  // Build the floating button
  const fab = document.createElement('button');
  fab.className = 'onaa-fab';
  fab.innerHTML = '<span class="onaa-fab-letters">ONAA</span>';
  fab.title = 'Quick reference';
  document.body.appendChild(fab);

  // Build the overlay
  const overlay = document.createElement('div');
  overlay.className = 'onaa-overlay';
  overlay.innerHTML = `
    <div class="onaa-overlay-backdrop"></div>
    <div class="onaa-overlay-panel">
      <div class="onaa-overlay-header">
        <span class="onaa-overlay-title">ONAA Framework</span>
        <button class="onaa-overlay-close">&times;</button>
      </div>
      <div class="onaa-overlay-body">
        <div class="onaa-ref-step">
          <div class="onaa-ref-letter" style="background:linear-gradient(135deg,#4f46e5,#7c3aed);">O</div>
          <div class="onaa-ref-content">
            <div class="onaa-ref-name">Observe</div>
            <div class="onaa-ref-desc">Describe the specific behavior. Facts only.</div>
            <div class="onaa-ref-template">"I noticed _______ on _______."</div>
          </div>
        </div>
        <div class="onaa-ref-step">
          <div class="onaa-ref-letter" style="background:linear-gradient(135deg,#f43f5e,#7c3aed);">N</div>
          <div class="onaa-ref-content">
            <div class="onaa-ref-name">Name the impact</div>
            <div class="onaa-ref-desc">Connect the behavior to a business consequence.</div>
            <div class="onaa-ref-template">"When this happens, it means _______."</div>
          </div>
        </div>
        <div class="onaa-ref-step">
          <div class="onaa-ref-letter" style="background:linear-gradient(135deg,#06b6d4,#6366f1);">A</div>
          <div class="onaa-ref-content">
            <div class="onaa-ref-name">Ask first</div>
            <div class="onaa-ref-desc">Ask an open question before proposing anything.</div>
            <div class="onaa-ref-template">"Is there something _______ I'm not aware of?"</div>
          </div>
        </div>
        <div class="onaa-ref-step">
          <div class="onaa-ref-letter" style="background:linear-gradient(135deg,#f59e0b,#f43f5e);">A</div>
          <div class="onaa-ref-content">
            <div class="onaa-ref-name">Agree on next steps</div>
            <div class="onaa-ref-desc">Co-create a specific, time-bound action.</div>
            <div class="onaa-ref-template">"I'll _______ by _______. Can you _______ by _______?"</div>
          </div>
        </div>
      </div>
      <a href="job-aid.html" class="onaa-overlay-link">Open full job aid &rarr;</a>
    </div>
  `;
  document.body.appendChild(overlay);

  // Toggle
  fab.addEventListener('click', () => overlay.classList.add('open'));

  overlay.querySelector('.onaa-overlay-close').addEventListener('click', () => overlay.classList.remove('open'));
  overlay.querySelector('.onaa-overlay-backdrop').addEventListener('click', () => overlay.classList.remove('open'));

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.classList.remove('open');
  });
})();
