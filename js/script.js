function toggleMenu(visible) {
  document.querySelector('.navigation').classList.toggle('show', visible);
  document.querySelector('.manager').classList.toggle('show', visible);
  document.querySelector('.section__topbar-at-sidebar').classList.toggle('show', visible);
}

document.querySelector('.logo-link').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

/* remove class "show" from modal */
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

/* remove class "show" after clicking at button  */
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

/* remove class "show" after clicking at overlay  */
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
});

/* remove class "show" after clicking at escape  */
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});

/* close all modals, than open our modal and overlay  */
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.remove('show');
  });
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

openModal('#myModal');
