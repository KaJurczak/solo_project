function toggleMenu(visible) {
  document.querySelector('.navigation').classList.toggle('show', visible);
  document.querySelector('.manager').classList.toggle('show', visible);
  document.querySelector('.section__topbar-at-sidebar').classList.toggle('show', visible);
}

document.querySelector('.logo-link').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});
