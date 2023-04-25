import React from 'react'
import img1 from '../Images/jewlpl.webp';
import img2 from '../Images/jewlcos.webp';
import img3 from '../Images/jewlwrst.webp';

const Home = () => {
  return (
    <div id='home'>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>FRESH WATER... NATURAL...</h5>
        <h2>PEARL JEWELLERY</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block" >
        <h5>COSMOS LOVE</h5>
        <h2>ZODIAC COLLECTION</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>HEAL IN STYLE</h5>
        <h2>NATURAL STONE BRACELETS</h2>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home