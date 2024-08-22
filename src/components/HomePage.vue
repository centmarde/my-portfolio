<template>
  <div id="index_body_home">
    <Intro />
    <Hero />
   

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

    <!-- Introduction Section -->
    <section id="background" class="py-5">
      <div class="container">
        <div class="row mx-5">
          <div class="col-lg-7 col-md-12 col-sm-12 mt-5">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-12 col-md-auto"></div>
                <div class="col-12 col-md-auto text-start">
                  <h1 id="certs">Hi There, Im</h1>
                  <!-- <h1 style="color: aliceblue;" class="mt-2 im justify-content-start">I'm</h1> -->
                  <h1 class="glitch mt-2 mx-1">Centmarde</h1>
                  <h1 id="typing-text">{{ typingText }}</h1>
                  <h5 class="text-start" style="z-index: 20;color: #ddd;">
                    <br><br><br>
                     I'm a dedicated developer living in the Philippines.<br>
                    I enjoy creating things that live on the internet.<br>
                    I'm always looking for new and exciting projects to work on.
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Section -->
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="container">
              <!-- Kaguya image -->
              <img id="float_img" src="../assets/marde.jpg" class="rounded-circle d-block mx-auto"
                style="border: 5px solid #000000;">
            </div>

          </div>
          <About />
        </div>

      </div>


    </section>

    <br><br><br><br><br><br>

    <Stack />
    <br><br><br><br><br>
    <Certs />
    <br><br><br><br><br>
    <Vert />
    <Projects />
    <Contacts />
    <br><br><br>
    <Footer />
  </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ref, onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import Intro from './Intro.vue';
import Stack from './Stack.vue';
import Projects from './Projects.vue';
import Certs from './Certs.vue';
import Contacts from './Contact.vue';
import Footer from './Footer.vue';
import Hero from './Hero.vue';
import About from './About.vue';
import Vert from './Vert.vue'

gsap.registerPlugin(ScrollTrigger);

const textArray = ref(['A FullStack Developer.', 'A Web Designer.', 'I\'m also a digital artist.', 'Nice to meet you.']);
const index = ref(0);
const letterIndex = ref(0);
const direction = ref(1);
const isFinished = ref(false);
const typingText = ref('');


function typeText() {
  typingText.value = textArray.value[index.value].substring(0, letterIndex.value);

  if (letterIndex.value === textArray.value[index.value].length && !isFinished.value) {
    isFinished.value = true;
    setTimeout(() => {
      isFinished.value = false;
      index.value = (index.value + 1) % textArray.value.length;
      letterIndex.value = 0;
      direction.value = 1;
    }, 2000);
  } else if (letterIndex.value === 0) {
    direction.value = 1;
  }

  letterIndex.value += direction.value;
  setTimeout(typeText, 50);
}
//gsap
onMounted(() => {
  typeText();

  gsap.from("#certs", {
    scrollTrigger: {
      trigger: "#certs",
      start: "top 80%",
      end: "top 50%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: -100,
    scale: 0.5,
    duration: 1.5,
    ease: "bounce.out",
  });
});





</script>


<style scoped>
/* General Styles */
body {
  background: #333;
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: #ddd;
  font-family: sans-serif;
}

@keyframes show {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

#typing-text {
  margin-bottom: 5rem;
  color: #ddd;
  position: absolute;
  z-index: 99;
}

.im {
  font-size: 2rem;
}
.orange {
  color:#ff8709;
  background: none;
}

.demo {
  padding: 2rem;
  font-size: 1.5rem;
  text-align: left;
  height: 100vh;

}


.glitch {
  bottom: 13px;
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  color: #ddd;
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  animation: glitch 500ms infinite;
}

.glitch span {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

.glitch span:first-child {
  animation: glitch 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.025em, -0.0125em);
  opacity: 0.8;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
  transform: translate(0.0125em, 0.025em);
  opacity: 0.8;
}

#float_img {
  position: relative;
  animation: show 1s forwards, float 2s ease-in-out 1s infinite;
  box-shadow: #333;
  z-index: 0;
  top: 50px;
  left: 20px;
  opacity: 0;
}

/* Animations */
@keyframes glitch {

  0%,
  14%,
  50%,
  99% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }

  15%,
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }

  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
}



.bg-details {
  color: #ddd;

  padding: 10px;
  border-radius: 10px;
}

@media (max-width: 576px) {
  .glitch {
    font-size: 2.5rem;
    /* Adjusted size for small screens */
  }
}

@media (min-width: 468px) and (max-width: 767px) {
  .glitch {
    font-size: 3.5rem;
    /* Adjusted size for medium screens */
  }
}

@media (max-width: 468px) {
  #float_img {
    width: 150px;
    /* Adjusted width for medium screens */
    height: 150px;
    /* Adjusted height for medium screens */
  }

}

/* Medium screens (min-width: 468px and max-width: 767px) */
@media (min-width: 468px) and (max-width: 767px) {
  #float_img {
    width: 200px;
    /* Adjusted width for medium screens */
    height: 200px;
    /* Adjusted height for medium screens */
  }

  #title {
    font-size: 80px;
  }
}

/* Large screens (min-width: 768px) */
@media (min-width: 768px) {
  #float_img {
    width: 350px;
    /* Adjusted width for large screens */
    height: 350px;
    /* Adjusted height for large screens */
  }

  #title {
    font-size: 120px;
  }
}
</style>
