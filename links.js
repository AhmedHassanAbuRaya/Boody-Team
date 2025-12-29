// Small enhancements specific to the links page.
// (Home.js handles navbar behavior + dynamic year if present.)

document.addEventListener('DOMContentLoaded', function () {
  // Ensure external links have rel for security if developers forget
  document.querySelectorAll('a[target="_blank"]').forEach(function (a) {
    if (!a.hasAttribute('rel')) a.setAttribute('rel', 'noopener noreferrer');
  });

  // Optional: Announce that an external link will open in new tab to screen readers
  document.querySelectorAll('a[target="_blank"]').forEach(function (a) {
    // If aria-label missing, append a short note to accessible name
    if (!a.getAttribute('aria-label')) {
      const text = a.textContent.trim();
      a.setAttribute('aria-label', text + ' (opens in a new tab)');
    }
  });
});