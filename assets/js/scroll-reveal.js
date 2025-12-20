/**
 * Scroll Reveal
 *
 * Lightweight scroll-triggered reveal animations using Intersection Observer.
 * Add [data-reveal] attribute to elements you want to animate.
 *
 * Usage:
 *   <div data-reveal="fade-up">Content</div>
 *   <div data-reveal="fade-up" data-reveal-delay="200">Delayed content</div>
 *
 * The script adds the 'revealed' class when elements enter the viewport.
 */

(function() {
  'use strict';

  // Configuration
  const config = {
    root: null,           // viewport
    rootMargin: '0px',    // no margin
    threshold: 0.1        // trigger when 10% visible
  };

  // Initialize when DOM is ready
  function init() {
    const elements = document.querySelectorAll('[data-reveal]');

    if (!elements.length) return;

    // Check for IntersectionObserver support
    if (!('IntersectionObserver' in window)) {
      // Fallback: reveal all immediately
      elements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Stop observing once revealed (one-time animation)
          observer.unobserve(entry.target);
        }
      });
    }, config);

    elements.forEach(el => observer.observe(el));
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
