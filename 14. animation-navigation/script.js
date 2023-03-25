const toggle = document.getElementById('toggle');
// button to toggle
const nav = document.getElementById('nav');
// nav container to toggle

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
