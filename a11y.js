/* Shared accessibility helpers — loaded by every course page.
 *
 * The sidebar is built from <div onclick="..."> elements. Rather than rewrite
 * ~70 of them across five files, give them button semantics and keyboard
 * operation here, in one place. Enter and Space then do what a click does.
 *
 * WCAG 2.1.1 Keyboard (A), 4.1.2 Name Role Value (A).
 */
(function () {
  'use strict';

  var SELECTOR = '.sidebar-item, .sidebar-module-toggle, .sidebar-module-heading';

  function makeOperable(el) {
    if (el.dataset.a11yReady) return;          // never double-bind
    el.dataset.a11yReady = '1';

    if (!el.hasAttribute('role'))     el.setAttribute('role', 'button');
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');

    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();                     // Space would scroll the page
        el.click();
      }
    });
  }

  // A module toggle opens and closes the screen list beneath it, so it needs to
  // report that state. The inline onclick runs first; this listener runs after,
  // so it reads the class the toggle just set.
  function trackExpanded(toggle) {
    var panel = toggle.nextElementSibling;
    if (!panel || !panel.classList.contains('sidebar-collapsible')) return;

    var sync = function () {
      toggle.setAttribute('aria-expanded',
        panel.classList.contains('sidebar-collapsible--open') ? 'true' : 'false');
    };
    sync();
    toggle.addEventListener('click', sync);
    toggle.addEventListener('keyup', sync);
  }

  function init() {
    var els = document.querySelectorAll(SELECTOR);
    for (var i = 0; i < els.length; i++) makeOperable(els[i]);

    var toggles = document.querySelectorAll('.sidebar-module-toggle');
    for (var j = 0; j < toggles.length; j++) trackExpanded(toggles[j]);

    // Mark the screen the learner is on, for screen readers
    var current = document.querySelector('.sidebar-item--active');
    if (current) current.setAttribute('aria-current', 'true');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
