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

              // Menambahkan event listener untuk navigasi ke halaman detail provinsi
              container.addEventListener("click", async function(event) {
                if (event.target.classList.contains("kategori-items")) {
                    event.preventDefault();
                    const provinceId = event.target.getAttribute("href").split('/').pop();
                    await this.navigateToProvinceDetail(provinceId);
                }
            }.bind(this));
        },
    
        async navigateToProvinceDetail(provinceId) {
            const url = `#/province-detail/${provinceId}`;
            window.location.hash = url;
        

  },
};

export default ExplorePage;
