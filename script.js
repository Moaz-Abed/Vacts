// script.js
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  // Toggle the display of the nav menu on mobile
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '60px';
    nav.style.right = '1.5rem';
    nav.style.background = '#fff';
    nav.style.border = '1px solid #ddd';
    nav.style.padding = '1rem';
  }
});
