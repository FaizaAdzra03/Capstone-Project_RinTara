const recentItemTemplate = () => ``;

const exploreItemTemplate = () => ``;

const kategoriTemplate = (data) => `
        <a href="#/province-detail/${data.id}" class="kategori-items">
            <div class="kategori-img">
                <img src="${data.image}" alt="">
            </div>
            <p>${data.title}</p>
        </a>
    `;
    

    const provinceDetailTemplate = (data) => `
    <div class="header-content">
      <img src="${data.image}" alt="${data.title}">
      <div class="overlay-text">
        <h1>${data.title}</h1>
        <p>${data.description}</p>
      </div>
    </div>
  
    <div class="province-main-content">
      <section class="tentang">
        <h2>Tentang</h2>
        <p>Ibu Kota : ${data.ibuKota}</p>
        <p>Luas : ${data.luas}</p>
        <p>Bahasa : ${data.bahasa}</p>
        <p>Situs Sejarah : ${data.situs}</p>
        <p>Tokoh Sejarah : ${data.tokoh}</p>
      </section>
  
      <section class="culture">
        <h2>Budaya</h2>
        <div class="culture-card-list">
          <div class="culture-cards">

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
          <div class="article-item">
            <span class="favorite">&#x2661;</span>
            <a href="#/article">
              <h3>Judul Artikel</h3>
            </a>
            <p class="release-date">Release date: xx-xx-xxxx</p>
            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum quasi, rerum voluptate quae excepturi distinctio cum blanditiis, nobis praesentium voluptas obcaecati necessitatibus deserunt optio laboriosam beatae? Corporis consectetur magni officia quod quibusdam minus officiis rerum, itaque fuga nam expedita excepturi aperiam eligendi. Quia enim quo neque vitae voluptates. Mollitia numquam accusantium minus quam eius delectus harum, ex ipsam nihil aut nisi natus commodi fuga aliquam recusandae perferendis ullam quasi officiis? Architecto adipisci dolore, voluptate quasi facere, inventore officia alias possimus deserunt consequuntur corrupti perspiciatis doloribus. Maiores quis, dolore sunt et doloremque quos, deleniti placeat vero assumenda delectus repudiandae? Perspiciatis.</h4>
          </div>
        </div>
      </section>
    </div>
  `;

export {
    recentItemTemplate,
    exploreItemTemplate,
    kategoriTemplate,
    provinceDetailTemplate,
}