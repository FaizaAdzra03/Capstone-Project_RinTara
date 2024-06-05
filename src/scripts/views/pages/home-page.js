const HomePage = {
  async render() {
    return `
    <div class="recently-add">
            <h2>Recently Added Articles</h2>
            <div class="recent-content">

                <a href="" class="recent-item">
                    <div class="recent-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <div class="recent-item-content">
                        <h3>Judul</h3>
                        <p>Lorem ipsum Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. Delectus, deserunt. dolor sit amet consectetur adipisicing elit. Totam, repellat!</p>
                    </div>
                </a>

                <a href="" class="recent-item">
                    <div class="recent-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <div class="recent-item-content">
                        <h3>Judul</h3>
                        <p>Lorem ipsum Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. Delectus, deserunt. dolor sit amet consectetur adipisicing elit. Totam, repellat!</p>
                    </div>
                </a>

                <a href="" class="recent-item">
                    <div class="recent-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <div class="recent-item-content">
                        <h3>Judul</h3>
                        <p>Lorem ipsum Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. Delectus, deserunt. dolor sit amet consectetur adipisicing elit. Totam, repellat!</p>
                    </div>
                </a>


                <a href="" class="recent-item">
                    <div class="recent-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <div class="recent-item-content">
                        <h3>Judul</h3>
                        <p>Lorem ipsum Lorem ipsum 
                            dolor sit amet consectetur adipisicing elit. Delectus, deserunt. dolor sit amet consectetur adipisicing elit. Totam, repellat!</p>
                    </div>
                </a>

            </div>
        </div>

        <div class="about-indo">
            <h2>About Indonesia</h2>
            <div class="about-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo et veritatis perspiciatis minus rerum inventore dolorem expedita odit reiciendis voluptatibus praesentium exercitationem aperiam, dolorum, consectetur animi excepturi voluptas, fugit perferendis doloribus veniam autem a! Asperiores, amet? Laudantium sunt qui facilis magnam. A magni voluptas sit accusamus nulla odit debitis. Hic, iste harum. Aliquam ducimus, labore blanditiis sapiente ea sint, culpa recusandae obcaecati fugit alias a hic nostrum excepturi vel omnis consectetur quia officia architecto iusto ad quam quas. Quo nihil odit doloremque culpa temporibus odio ex incidunt possimus impedit unde! Atque et dicta voluptatem exercitationem nam vero corporis aliquid cum dolore, tenetur quisquam nisi adipisci inventore consectetur, quasi nulla tempora pariatur. Sapiente magnam impedit numquam voluptatum, nisi quasi saepe?</p>
                <img src="./images/volcano-with-mist-sunset 2.jpg" alt="about-indonesia-picture">
            </div>
        </div>

        <div class="explore">
            <h2>Explore</h2>
            <div class="explore-content">
                <a href="#/explore" class="explore-items">
                    <div class="explore-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <p>Jawa Barat</p>
                </a>
                <a href="#/explore" class="explore-items">
                    <div class="explore-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <p>Jawa Barat</p>
                </a>
                <a href="#/explore" class="explore-items">
                    <div class="explore-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <p>Jawa Barat</p>
                </a>
                <a href="#/explore" class="explore-items">
                    <div class="explore-item-img">
                        <img src="./images/image3.png" alt="">
                    </div>
                    <p>Jawa Barat</p>
                </a>
            </div>

        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default HomePage;
