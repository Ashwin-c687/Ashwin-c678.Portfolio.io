// script.js
// Dark mode toggle (example)
// Theme toggle logic
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Initialize AOS animations
AOS.init({
  duration: 800,
  offset: 100,
});
