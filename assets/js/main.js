// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const saved = localStorage.getItem('site-theme');
if (saved) body.classList.toggle('theme-dark', saved === 'dark');

themeToggle?.addEventListener('click', () => {
  const isDark = body.classList.toggle('theme-dark');
  localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
});

// Year in footer
document.getElementById('year')?.replaceWith(document.createTextNode(new Date().getFullYear()));

// Simple mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav ul');
hamburger?.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
  if (nav) nav.style.display = expanded ? 'none' : 'flex';
});

// Basic form UX: show simple confirmation without server response
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    // allow default submission if you have a backend; otherwise prevent and show message
    // e.preventDefault();
    // alert('Thanks — we received your request.');
  });
}
