/* create function for humburger button */
function toggleMenu(visible) {
  document.querySelector('.navigation').classList.toggle('show', visible);
  document.querySelector('.manager').classList.toggle('show', visible);
  document.querySelector('.section__topbar-at-sidebar').classList.toggle('show', visible);
}

document.querySelector('.logo-link').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

/* MODALS */
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

/* CHART */
/* Find canva's element and get context?? */
const ctx = document.getElementById('myChart').getContext('2d');

/* chart configuration */
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [ 350, 190, 210, 350, 410, 380, 370, 360, 300 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 400, 150, 290, 250, 450, 120, 220, 510, 320 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 400, 100, 200, 300, 400, 300, 300, 300, 400 ],
      hidden: true,
    }],
  },
});
