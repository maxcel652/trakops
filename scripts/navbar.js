const navIcon = document.querySelector('.navIcon');
const navLinks = document.querySelector('.nav_links');

navIcon.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
});
// Close mobile menu when clicking outside
// document.addEventListener('click', (event) => {
//   if (!navIcon.contains(event.target) && !navLinks.contains(event.target)) {
//     navLinks.classList.add('hidden');
//   }
// });