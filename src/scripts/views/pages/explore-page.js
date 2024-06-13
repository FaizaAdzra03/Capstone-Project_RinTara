import { kategoriTemplate } from "../template/template-creator";
import data from '../../data/DATA.json';

const ExplorePage = {
  async render() {
    return `
        <div class="explore-page">
        <h2 class="explore-title">Explore</h2>

        <div class="search-section">
            <div class="search-bar">
                <input type="text" placeholder="Search">
            </div>
        </div>

        <div class="kategori"></div>
    </div>
      `;
  },

  async afterRender() {
      const header = document.querySelector(".app-header");
      header.classList.add("scrolled");

      const container = document.querySelector('.kategori');
      data.provinces.forEach((province) => {
        container.innerHTML += kategoriTemplate(province);
      });

  },
};

export default ExplorePage;
