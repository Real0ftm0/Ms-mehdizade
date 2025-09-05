// Toggle mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // بستن منو بعد از کلیک روی لینک
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
