import {select, classNames} from './settings.js';

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* create function for humburger button */
const app = {
  initHamburger: function(){
    function toggleMenu(visible){
      document.querySelector('.navigation').classList.toggle('show', visible);
      document.querySelector('.manager').classList.toggle('show', visible);
      document.querySelector('.section__topbar-at-sidebar').classList.toggle('show', visible);
    }

    document.querySelector('.logo-link').addEventListener('click', function(e) {
      e.preventDefault();
      console.log('toggleMenu()');
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
        console.log('closeModal() - btn');
        closeModal();
      });
    });

    /* remove class "show" after clicking at overlay  */
    document.querySelector('#overlay').addEventListener('click', function(e) {
      if(e.target === this) {
        console.log('closeModal() - overlay');
        closeModal();
      }
    });

    /* remove class "show" after clicking at escape  */
    document.addEventListener('keyup', function(e) {
      if(e.keyCode === 27) {
        console.log('closeModal() - esc');
        closeModal();
      }
    }),

    /* close all modals, than open our modal and overlay  */
    function openModal(modal) {
      document.querySelectorAll('#overlay > *').forEach(function(modal) {
        modal.classList.remove('show');
      });
      document.querySelector('#overlay').classList.add('show');
      document.querySelector(modal).classList.add('show');
      console.log('openModal()');
    };

    // openModal('#myModal');
  },

  /* CHART */
  /* Find canva's element and get context?? */
  createChart: function(){
    const ctx = document.getElementById('myChart').getContext('2d');
    console.log('ctx was create:', ctx);

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
    console.log('chart was create');
  },

  /* PAGES */
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children; //we właściwości pages znajda się all dzieci kontenera pages

    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    //console.log('pageMatchingHash', pageMatchingHash);
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', ''); //replace - zmiana # na pusty ciąg znaków, bo # nie jest częścią id

        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id; //zmiana adresu strony (po #), / zapobiegnie przewinięciu strony bo nie odnajdzie już id np /order
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    /* add class 'active' to matching pages, remove from non-matching */
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId); //klasa zostanie dodana gdy warununek page.id==pageId będzie spełniony, odebrana gdy niespełniony
    }
    /* add class 'active' to matching link, remove from non-matching */
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  init: function(){
    const thisApp = this;
    thisApp.initHamburger();
    thisApp.createChart();
    thisApp.initPages();
  },
};

app.init();
