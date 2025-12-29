
document.addEventListener('DOMContentLoaded', function () {
  // Elements
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const yearEl = document.getElementById('year');

  // Set dynamic year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Toggle mobile nav
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function (e) {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
      navLinks.setAttribute('aria-hidden', String(expanded)); // when expanded=true -> aria-hidden=false
    });
  }

  // Handle dropdown toggles (keyboard + click)
  dropdownToggles.forEach(function (btn) {
    const parent = btn.closest('.dropdown-parent');

    btn.addEventListener('click', function (e) {
      const isOpen = parent.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close dropdown on Escape
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        parent.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  });

  // Close menus when clicking outside
  document.addEventListener('click', function (e) {
    const target = e.target;
    // Close dropdowns if click outside
    document.querySelectorAll('.dropdown-parent.open').forEach(function (openParent) {
      if (!openParent.contains(target)) {
        openParent.classList.remove('open');
        const toggle = openParent.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
    // Close mobile nav when click outside (optional)
    if (navLinks.classList.contains('open') && !navLinks.contains(target) && !navToggle.contains(target)) {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.setAttribute('aria-hidden', 'true');
    }
  });

  // Close open menus with Escape key globally
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dropdown-parent.open').forEach(function (p) {
        p.classList.remove('open');
        const toggle = p.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.setAttribute('aria-hidden', 'true');
        navToggle.focus();
      }
    }
  });
});