// ── Text size toggle ──
// Reads/writes to localStorage so preference persists across pages.

(function() {
  const SIZES = ['text-sm', 'text-md', 'text-lg'];
  const DEFAULT = 'text-md';

  // Apply saved preference on load
  const saved = localStorage.getItem('nb-text-size') || DEFAULT;
  document.documentElement.classList.add(saved);

  // Wire up toggle buttons
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.text-toggle-btn').forEach(btn => {
      const size = btn.dataset.size;

      // Mark active
      if (size === saved) btn.classList.add('active');

      btn.addEventListener('click', () => {
        // Remove all size classes
        SIZES.forEach(s => document.documentElement.classList.remove(s));
        // Add selected
        document.documentElement.classList.add(size);
        // Update active state
        document.querySelectorAll('.text-toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Persist
        localStorage.setItem('nb-text-size', size);
      });
    });
  });
})();
