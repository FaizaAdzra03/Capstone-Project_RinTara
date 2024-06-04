class FooterBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="upper">
      <div class="logo">
          <h1>RinTara</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
        <div class="social-media">
            <ul>
              <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-facebook"></i></a>
              </li>
              <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>
  </div>
    
    <div class="bottom">
      <div class="nav">
        <h3>Link</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
    </div>
            `;
    }
  }
  
  customElements.define('footer-bar', FooterBar);
  