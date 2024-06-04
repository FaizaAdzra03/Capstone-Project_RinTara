const AboutUs = {
    async render() {
      return `
      <div class="aboutUs">
      <div class="jumbotron">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        rutrum, diam a pulvinar vulputate, urna sem pellentesque sem, quis
        vestibulum leo ex tincidunt neque. Phasellus porta ornare turpis, quis
        maximus urna feugiat sit amet. Etiam mattis diam ac porta lacinia.
      </p>
      </div>
    
  <section class="vission">
    <img
      src="./images/desain2.webp"
      alt="Visi Kami Image"
      class="vission-image"
    />
    <div class="vission-card">
      <h2>Visi Kami</h2>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </section>

  <!-- section -->
  <section class="mission">
    <h2>Misi Kami</h2>
      <div class="mission-item">
          <div class="mission-image">
              <img
                  src="./images/teacher.jpg"
                  alt="Education Mission Image"
                  class="mission-image"
              />
              <figcaption>Pendikan</figcaption>
          </div>
        <div class="mission-content">
          <p>
            Kami membantu para guru, siswa, dan sekolah dengan menyediakan
            sumber daya yang dapat diandalkan, mudah dibaca
          </p>
        </div>
      </div>
      <div class="mission-item">
          <div class="mission-content">
          <p>
            Kami membantu para guru, siswa, dan sekolah dengan menyediakan
            sumber daya yang dapat diandalkan, mudah dibaca
          </p>
      </div>
      <div class="mission-image">
              <img
                  src="./images/teacher.jpg"
                  alt="Public Awareness Mission Image"
                  class="mission-image"
              />
              <figcaption>Kesadaran Public</figcaption>
          </div>
          
      </div>
    </div>
  </section>
      </div>
        `;
    },
  
    async afterRender() {
      const hero = document.querySelector('hero-element');
      hero.style.display = 'none';
    },
  };
  
  export default AboutUs;
  