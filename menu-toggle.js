const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

console.log(toggle);

toggle.addEventListener('click', function() {
  toggle.classList.toggle('menu-toggle-active');
  nav.classList.toggle('nav-active');
});
