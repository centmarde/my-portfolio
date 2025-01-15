<template>
  <section id="sect" class="carousel-container">
    <div class="carousel">
      <button class="nav prev" @click="prevSlide">&lt;</button>
      <div class="carousel-slide" v-for="(image, index) in images" :key="index" :class="{ active: index === currentSlide }">
        <img :src="image.src" :alt="image.alt" />
      </div>
      <button class="nav next" @click="nextSlide">&gt;</button>
    </div>
    <div class="indicators">
      <span 
        v-for="(image, index) in images" 
        :key="index" 
        :class="{ active: index === currentSlide }" 
        @click="currentSlide = index">
      </span>
    </div>
    <div class="row txt">
      <div class="col text-center">
        <img class="mx-1" src="../../assets/Projects/Auto-Solutions/blender.png" style="width: 2rem;" alt="Blender">
        <img class="mx-1" src="../../assets/Supabase.png" style="width: 2rem;" alt="supabase">
        <img class="mx-1" src="../../assets/Projects/Auto-Solutions/piniaStore.svg" style="width: 1.5rem;" alt="piniaStore">
        <img class="mx-1" src="../../assets/Projects/Auto-Solutions/vuetify.png" style="width: 2rem;" alt="vuetify">
        <img class="mx-1" src="../../assets/Projects/Auto-Solutions/paymongo.png" style="width: 2rem;" alt="paymongo">
        
      </div>
      <div class="col text-center">
        <h3>Auto-Solutions</h3>
        <h5 class="text-center">
        <a href="https://github.com/centmarde/Auto-Solutions-Version2" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </h5>
      </div>
      <div class="col text-center">
        <p class="text-center">
        Assign as a <b>lead developer</b> A school project. Buy, sell, rent, and even loan cars with ease! Featuring AI-powered market value tracking. Auto-Solutions is here to simplify your automotive journey.
      </p>
      
        </div>
      
     
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      images: [
        { src: "/assets/auto1.png", alt: "Auto-Solutions 1" },
        { src: "/assets/auto2.png", alt: "Auto-Solutions 2" },
        { src: "/assets/auto3.png", alt: "Auto-Solutions 3" },
        { src: "/assets/auto4.png", alt: "Auto-Solutions 4" },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
#sect {
  background-color: #151515;
  color: white;
  padding: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}
.carousel-container {
  position: relative;
  top:10rem;
  margin: auto;
}
.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.carousel-slide {
  display: none;
  position: absolute;
  width: 100%;
  transition: opacity 0.5s ease-in-out;
}
.carousel-slide.active {
  display: block;
  opacity: 1;
}
.nav {
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 2;
}
.nav:hover {
  background: rgba(0, 0, 0, 0.8);
}
.indicators {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.indicators span {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
}
.indicators span.active {
  background: white;
}
.txt {
  padding: 1rem;
  position: relative;
  margin-top:13rem;
  background-color: #151515;
}
</style>
