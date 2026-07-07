/**
 * Shared utilities for Repo Atlas pages
 */

/**
 * Initialize scroll-based reveal animations.
 * Observes all elements with the `.reveal` class and adds `.visible`
 * when they enter the viewport.
 * @param {Object} [options]
 * @param {number} [options.threshold=0.1] - IntersectionObserver threshold
 */
function initScrollReveal(options = {}) {
  const threshold = options.threshold || 0.1;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/**
 * Initialize nav scroll behavior — toggles a class on the nav when the
 * page is scrolled past a threshold.
 * @param {Object} [options]
 * @param {string} [options.navId='navbar'] - The ID of the nav element
 * @param {string} [options.className='scrolled'] - Class to toggle
 * @param {number} [options.offset=20] - Scroll offset in px to trigger
 */
function initNavScroll(options = {}) {
  const navId = options.navId || 'navbar';
  const className = options.className || 'scrolled';
  const offset = options.offset || 20;
  const nav = document.getElementById(navId);
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle(className, window.scrollY > offset);
  });
}

/**
 * Initialize filter buttons that toggle an active state and call
 * a render function with the selected filter value.
 * @param {Object} options
 * @param {string} options.selector - CSS selector for filter buttons
 * @param {string} options.dataAttr - data attribute holding the filter value (e.g. 'filter')
 * @param {function} options.onFilter - callback receiving the selected filter value
 */
function initFilterButtons(options) {
  const buttons = document.querySelectorAll(options.selector);
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const value = btn.dataset[options.dataAttr];
      if (options.onFilter) options.onFilter(value);
    });
  });
}

/**
 * Render a skills marquee by duplicating the skill list for seamless looping.
 * @param {Object} options
 * @param {string} options.elementId - ID of the marquee track container
 * @param {string[]} options.skills - Array of skill names
 */
function initMarquee(options) {
  const el = document.getElementById(options.elementId);
  if (!el) return;
  const skills = options.skills || [];
  el.innerHTML = [...skills, ...skills].map(s =>
    `<span class="skill-chip"><span class="dot"></span>${s}</span>`
  ).join('');
}
