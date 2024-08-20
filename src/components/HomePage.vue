<template>
  <div id="index_body_home">
    <div>
      <Parallax />

      <!-- Home Section -->
      <section id="home" class="text-center">
        <br><br><br><br><br><br>
        <div class="row">
          <div class="col" style="z-index: 999;">
            <h1 id="title" class="bg-details">Creativity</h1>
            <h1>is a must, but the way to solve new problems is 🖤</h1>
          </div>
        </div>
      </section>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

      <!-- Introduction Section -->
      <section id="background" class="py-5">
        <div class="container">
          <div class="row mt-5 mx-5">
            <div class="col-md-12 col-sm-12 col-lg-7 mt-5">
              <div class="container text-center">
                <h1>Hi There,</h1>
                <div class="row align-items-center justify-content-center">
                  <div class="col-12 col-md-auto">
                    <h1 class="mt-2 im">I'm</h1>
                  </div>
                  <div class="col-12 col-md-auto text-center">
                    <h1 class="glitch mt-2 mx-1">
                      
                      Centmarde
                     
                    </h1>
                  </div>
                </div>
              </div>
              <h1 id="typing-text"></h1>
              <div class="mt-5 col-12">
                <h5 style="z-index: 20;" class="text-center">
                  I'm a dedicated developer living in the Philippines.<br>
                  I enjoy creating things that live on the internet.<br>
                  I'm always looking for new and exciting projects to work on.
                </h5>
              </div>
            </div>

            <!-- Image Section -->
            <div class="col-md-12 col-sm-12 col-lg-4">
              <div class="container" style="">
                <!-- Kaguya image -->
                <img id="float_img" src="../assets/kaguya.jpg" class="rounded-circle d-block mx-auto"
                  style="border: 5px solid #000000;">
              </div>
            </div>
          </div>
        </div>
      </section>

      <br><br><br><br><br><br>

      <Stack />
      <br><br><br><br><br>
      <Projects />
      <br><br><br><br><br>
      <Certs />
      <Contacts />
    </div>
    <br><br><br>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import Stack from './Stack.vue';
import Projects from './Projects.vue';
import Certs from './Certs.vue';
import Contacts from './Contact.vue';
import Footer from './Footer.vue';
import Parallax from './Parallax.vue';

const textArray = ['A FullStack Developer.', 'A Web Designer.', 'I\'m also a digital artist.', 'Nice to meet you.'];
let index = 0;
let letterIndex = 0;
let direction = 1;
let isFinished = false;
const typingElement = ref(null);

function typeText() {
  if (typingElement.value) {
   /*  console.log(`Updating text content to: ${textArray[index].substring(0, letterIndex)}`); */
    typingElement.value.textContent = textArray[index].substring(0, letterIndex);
  } else {
    console.log("typingElement is null");
  }

  if (letterIndex === textArray[index].length && !isFinished) {
    isFinished = true;
    setTimeout(() => {
      isFinished = false;
      index = (index + 1) % textArray.length;
      letterIndex = 0;
      direction = 1;
    }, 2000);
  } else if (letterIndex === 0) {
    direction = 1;
  }

  letterIndex += direction;
  setTimeout(typeText, 50);
}

onMounted(() => {
  typingElement.value = document.getElementById('typing-text');
  if (typingElement.value) {
    console.log("typingElement found");
  } else {
    console.log("typingElement not found");
  }
  typeText();
});
</script>

<style scoped>
/* General Styles */
body {
  background: #222;
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: white;
  font-family: sans-serif;
}

#typing-text {
  position: absolute;
  z-index: 99;
}

.im {
  font-size: 2rem;
}

#title {
  animation: rgb 20s infinite alternate;
  font-size: 120px;
  font-family: "Poetsen One", sans-serif;
  text-shadow: -2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, 2px 2px 0 #000000;
}

.glitch {
  bottom: 13px;
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  color: white;
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
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 0;
  top: 50px;
  left: 20px;
  opacity: 0;
}

/* Animations */
@keyframes glitch {
  0%, 14%, 50%, 99% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                 -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                 -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15%, 49% {
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

@keyframes rgb {
  0%, 100% {
    color: var(--clr-primary);
  }
  10% {
    color: #0057FF;
  }
  20% {
    color: #FF00F5;
  }
  30% {
    color: #FF008A;
  }
  40% {
    color: #e252e0;
  }
  50% {
    color: #fdea96;
  }
  60% {
    color: #3551a4;
  }
  70% {
    color: #2c8ec4;
  }
  80% {
    color: #31cdb0;
  }
  90% {
    color: #f8c7d5;
  }
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
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.bg-details {
  color: #FFFFFF;

  padding: 10px;
  border-radius: 10px;
}

@media (max-width: 576px) {
  .glitch {
    font-size: 2.5rem; /* Adjusted size for small screens */
  }
}
@media (min-width: 468px) and (max-width: 767px) {
  .glitch {
   font-size: 3.5rem; /* Adjusted size for medium screens */
  }
}
 

/* Small screens (max-width: 467px) */
@media (max-width: 467px) {
  #float_img {
    width: 100px; /* Adjusted width for small screens */
    height: 100px; /* Adjusted height for small screens */
  }
}

/* Medium screens (min-width: 468px and max-width: 767px) */
@media (min-width: 468px) and (max-width: 767px) {
  #float_img {
    width: 150px; /* Adjusted width for medium screens */
    height: 150px; /* Adjusted height for medium screens */
  }
}

/* Large screens (min-width: 768px) */
@media (min-width: 768px) {
  #float_img {
    width: 350px; /* Adjusted width for large screens */
    height: 350px; /* Adjusted height for large screens */
  }
}


</style>
