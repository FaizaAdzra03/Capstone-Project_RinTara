import { provinceDetailTemplate } from "../template/template-creator";
import UrlParser from '../../routes/url-parser';
import data from '../../data/DATA.json';

const ProvinceDetail = {
    async render() {
      return `
      <div class="province-detail">
            
        </div>
        `;
    },
  
    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const header = document.querySelector(".app-header");
      const provinceHeaderContent = document.querySelector(".province-detail .header-content");
      const container = document.querySelector('.province-detail');


      if (header && provinceHeaderContent) {
        window.addEventListener("scroll", function() {
          if (window.scrollY > provinceHeaderContent.offsetHeight) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        });
      }

      container.innerHTML = provinceDetailTemplate(data);
    },
  };
  
  export default ProvinceDetail;
  