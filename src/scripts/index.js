import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/ProvinceDetail.css';
import './components/app-bar';
import './components/hero-element';
import './components/skip-to-content';
import './components/footer';
import './views/pages/explore-page';

import App from './views/app';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
  });
  
  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  
  window.addEventListener('load', () => {
    app.renderPage();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".app-header");
    const heroElement = document.querySelector(".hero-element");
    const provinceHeaderContent = document.querySelector(".header-content");

    window.addEventListener("scroll", function() {
        if (window.scrollY < heroElement.offsetHeight) {
          header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


// document.addEventListener("DOMContentLoaded", function() {
//   const header = document.querySelector(".app-header");
//   const heroElement = document.querySelector(".hero-element");
//   const provinceHeaderContent = document.querySelector(".province-detail .header-content");

//   window.addEventListener("scroll", function() {
//       if (window.scrollY < heroElement.offsetHeight || window.scrollY < provinceHeaderContent.offsetHeight) {
//           header.classList.add("scrolled");
//       } else {
//           header.classList.remove("scrolled");
//       }
//   });
// });