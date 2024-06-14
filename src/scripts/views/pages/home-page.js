import initSlider from "../../utils/scrollHandler";
import { exploreItemTemplate } from "../template/template-creator";
import data from '../../data/DATA.json';

const HomePage = {
  async render() {
    return `
    <hero-element></hero-element>
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
            <div class="seemore">
                <a class="seeMoreBtn" href="#/explore">See more →</a>
            </div>            
            <button id="prev-slide" class="slide-button material-symbols-rounded">chevron_left</button>

           <div class="explore-content"></div>

            <button id="next-slide" class="slide-button material-symbols-rounded">chevron_right</button>


                <div class="slider-scrollbar">
                    <div class="scrollbar-track">
                        <div class="scrollbar-thumb"></div>
                    </div>
                </div>

            </div>
      `;
  },

  async afterRender() {
    const header = document.querySelector(".app-header");
    const heroElement = document.querySelector(".hero-element");
    const container = document.querySelector('.explore-content');

    window.scrollTo(0, 0);
    data.provinces.slice(0, 8).forEach((province) => {
    container.innerHTML += exploreItemTemplate(province);
    });

    window.addEventListener("scroll", function() {
        if (window.scrollY > heroElement.offsetHeight) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    window.addEventListener("resize", initSlider());
    window.addEventListener("load", initSlider());
 
    
  },
};

export default HomePage;