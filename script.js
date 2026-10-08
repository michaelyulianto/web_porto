// Mobile navigation: maintain correct aria-expanded and hidden states.
const menuButton = document.querySelector('.menu-toggle');
const mobileNavigation = document.querySelector('#mobile-nav');

if (menuButton && mobileNavigation) {
  menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuButton.setAttribute('aria-label', isExpanded ? 'Buka menu navigasi' : 'Tutup menu navigasi');
    mobileNavigation.hidden = isExpanded;
  });

  mobileNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNavigation.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Buka menu navigasi');
    });
  });
}

const yearElement = document.querySelector('#current-year');
if (yearElement) yearElement.textContent = new Date().getFullYear();
