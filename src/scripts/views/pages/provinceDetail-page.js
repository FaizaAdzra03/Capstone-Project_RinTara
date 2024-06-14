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


      window.scrollTo(0, 0);
      // Ambil id provinsi dari URL
      const provinceId = url.id;
      const provinceData = data.provinces.find(province => province.id.toString() === provinceId);

      if (!provinceData) {
          provinceDetailContainer.innerHTML = '<p>Province not found!</p>';
          return;
      }

      if (header && provinceHeaderContent) {
        window.addEventListener("scroll", function() {
          if (window.scrollY > provinceHeaderContent.offsetHeight) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        });
      }

      container.innerHTML = provinceDetailTemplate(provinceData);
    },
  };
  
  export default ProvinceDetail;
  