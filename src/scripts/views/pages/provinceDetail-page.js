const ProvinceDetail = {
    async render() {
      return `
      <div class="province-detail">
            <div class="header-content">
                <img src="./images/pura.jpg" alt="">
                <div class="overlay-text">
                    <h1>BALI</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officia minima ducimus! Totam autem dicta delectus consequatur ad odit perspiciatis consequuntur, ipsam dolorum quis reiciendis illo asperiores error neque a, amet illum voluptatem distinctio possimus at minus corrupti quisquam saepe! Ducimus dolorum quia expedita corporis officia error quidem, deserunt illum.</p>
                </div>
            </div>
    
            <div class="province-main-content">
                <section class="tentang">
                    <h2>Tentang</h2>
                    <p>Ibu Kota :</p>
                    <p>Luas :</p>
                    <p>Situs Sejarah :</p>
                    <p>Tokoh Sejarah :</p>
                  </section>
    
                  <section class="culture">
                    <h2>Budaya</h2>
                    <div class="culture-card-list">
                        <div class="culture-cards">
                          <div class="culture-card">
                            <img src="./images/pura.jpg" alt="Icon" />
                            <div class="culture-info">
                              <h3>Judul</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                        </div>
                        <div class="culture-cards">
                            <div class="culture-card">
                              <img src="./images/pura.jpg" alt="Icon" />
                              <div class="culture-info">
                                <h3>Judul</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                            </div>
                          </div>
                          <div class="culture-cards">
                            <div class="culture-card">
                              <img src="./images/pura.jpg" alt="Icon" />
                              <div class="culture-info">
                                <h3>Judul</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                            </div>
                          </div>
                          <div class="culture-cards">
                            <div class="culture-card">
                              <img src="./images/pura.jpg" alt="Icon" />
                              <div class="culture-info">
                                <h3>Judul</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </div>
                            </div>
                          </div>
                    </div>
                  </section>
    
                  <section class="history">
                    <h2>Sejarah Terkait</h2>
                    <div class="province-search-bar">
                      <input type="text" placeholder="Search" />
                      <button>Search</button>
                    </div>
                    <div class="article-container">
                      <div class="article-list">
                        <div class="article-item">
                          <span class="favorite">&#x2661;</span>
                          <a href="#/article">
                              <h3>Judul Artikel</h3>
                          </a>
                          <p class="release-date">Release date: xx-xx-xxxx</p>
                          <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum quasi, rerum voluptate quae excepturi distinctio cum blanditiis, nobis praesentium voluptas obcaecati necessitatibus deserunt optio laboriosam beatae? Corporis consectetur magni officia quod quibusdam minus officiis rerum, itaque fuga nam expedita excepturi aperiam eligendi. Quia enim quo neque vitae voluptates. Mollitia numquam accusantium minus quam eius delectus harum, ex ipsam nihil aut nisi natus commodi fuga aliquam recusandae perferendis ullam quasi officiis? Architecto adipisci dolore, voluptate quasi facere, inventore officia alias possimus deserunt consequuntur corrupti perspiciatis doloribus. Maiores quis, dolore sunt et doloremque quos, deleniti placeat vero assumenda delectus repudiandae? Perspiciatis.</h4>
                        </div>
                        <div class="article-item">
                            <span class="favorite">&#x2661;</span>
                            <a href="#/article">
                                <h3>Judul Artikel</h3>
                            </a>
                            <p class="release-date">Release date: xx-xx-xxxx</p>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum quasi, rerum voluptate quae excepturi distinctio cum blanditiis, nobis praesentium voluptas obcaecati necessitatibus deserunt optio laboriosam beatae? Corporis consectetur magni officia quod quibusdam minus officiis rerum, itaque fuga nam expedita excepturi aperiam eligendi. Quia enim quo neque vitae voluptates. Mollitia numquam accusantium minus quam eius delectus harum, ex ipsam nihil aut nisi natus commodi fuga aliquam recusandae perferendis ullam quasi officiis? Architecto adipisci dolore, voluptate quasi facere, inventore officia alias possimus deserunt consequuntur corrupti perspiciatis doloribus. Maiores quis, dolore sunt et doloremque quos, deleniti placeat vero assumenda delectus repudiandae? Perspiciatis.</h4>
                          </div>
                          <div class="article-item">
                            <span class="favorite">&#x2661;</span>
                            <a href="">
                                <h3>Judul Artikel</h3>
                            </a>
                            <p class="release-date">Release date: xx-xx-xxxx</p>
                            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum quasi, rerum voluptate quae excepturi distinctio cum blanditiis, nobis praesentium voluptas obcaecati necessitatibus deserunt optio laboriosam beatae? Corporis consectetur magni officia quod quibusdam minus officiis rerum, itaque fuga nam expedita excepturi aperiam eligendi. Quia enim quo neque vitae voluptates. Mollitia numquam accusantium minus quam eius delectus harum, ex ipsam nihil aut nisi natus commodi fuga aliquam recusandae perferendis ullam quasi officiis? Architecto adipisci dolore, voluptate quasi facere, inventore officia alias possimus deserunt consequuntur corrupti perspiciatis doloribus. Maiores quis, dolore sunt et doloremque quos, deleniti placeat vero assumenda delectus repudiandae? Perspiciatis.</h4>
                          </div>
                      </div>
                    </div>
                  </section>
            </div>
        </div>
        `;
    },
  
    async afterRender() {

      const header = document.querySelector(".app-header");
      const provinceHeaderContent = document.querySelector(".province-detail .header-content");

      if (header && provinceHeaderContent) {
        window.addEventListener("scroll", function() {
          if (window.scrollY > provinceHeaderContent.offsetHeight) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        });
      }
    },
  };
  
  export default ProvinceDetail;
  