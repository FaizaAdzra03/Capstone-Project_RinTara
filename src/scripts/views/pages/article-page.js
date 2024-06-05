const ArticlePage = {
    async render() {
      return `
      <div class="article-page">
        <h2>Artikel Page</h2>
      </div>
        `;
    },
  
    async afterRender() {
      const hero = document.querySelector('.hero-element');
      hero.style.display = 'none';
    },
  };
  
  export default ArticlePage;
  