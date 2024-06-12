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

        <div class="kategori">
            <a href="#/province-detail" class="kategori-items">
                <div class="kategori-img">
                    <img src="../images/image3.png" alt="">
                </div>
                <p>Jawa Timur</p>
            </a>

            <!-- Tambahan aja -->
            <a href="#/province" class="kategori-items">
                <div class="kategori-img">
                    <img src="../images/image3.png" alt="">
                </div>
                <p>Jawa Timur</p>
            </a>
            <a href="#/province" class="kategori-items">
                <div class="kategori-img">
                    <img src="../images/image3.png" alt="">
                </div>
                <p>Jawa Timur</p>
            </a>
            <a href="#/province" class="kategori-items">
                <div class="kategori-img">
                    <img src="../images/image3.png" alt="">
                </div>
                <p>Jawa Timur</p>
            </a>
            <a href="#/province" class="kategori-items">
                <div class="kategori-img">
                    <img src="../images/image3.png" alt="">
                </div>
                <p>Jawa Timur</p>
            </a>

            
        </div>
    </div>
      `;
  },

  async afterRender() {
      const header = document.querySelector(".app-header");
      header.classList.add("scrolled");

  },
};

export default ExplorePage;
