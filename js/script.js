function toggleMenu(visible) {
  document.querySelector('.navigation').classList.toggle('show', visible);
}

document.querySelector('.logo-link').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});
