<template>
  <div id="index_body_home">

    <div class="container">
      <Parallax />
      <section id="home">
        <br><br><br><br><br><br>
        <div class="row">
          <div class="col text-center">
            <h1 id="title" class="bg-details">Creativity</h1>
            <h1>is a must, but the way to solve new problem is 🖤</h1>
          </div>
        </div>
      </section>

      <br><br><br><br><br><br><br><br><br><br><br><br><br>

      <section id="background">
        <div class="row">
          <div class="col ms-5">
            <br><br>
            <h1>Hi There,</h1>
            <div class="d-flex">
              <h1 class="mt-2 im">I'm</h1>
              <h1 class="glitch mt-2 ms-4">
                <span aria-hidden="true">Centmarde</span>
                Centmarde
                <span aria-hidden="true">Centmarde</span>
              </h1>
            </div>
            <h1 id="typing-text"></h1>

            <div class="mt-5">
              <br>
              <h5>
                I'm a dedicated developer living in the Philippines. <br>
                I enjoy creating things that live on the internet. <br>
                I'm always looking for new and exciting projects to work on.
              </h5>

            </div>
          </div>
          <div class="col d-flex justify-content-center">
            <img id="float_img" src="../assets/kaguya.jpg" class="rounded-circle"
              style="width: 350px; height: 350px; border: 5px solid #000000;">
          </div>
        </div>

      </section>

      <br><br><br><br><br>
      <Stack />
      <br><br><br>
      <Projects />
      <br><br><br>
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
    typingElement.value.textContent = textArray[index].substring(0, letterIndex);
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
  typeText();
});
</script>

<style scoped>
#typing-text {
  position: absolute;
}

:root {
  /* Light Mode */
  --clr-primary: rgb(232, 232, 232);
  --clr-dark: #0B0B0B;
  --clr-semi-dark: #101010;
  --clr-light: #888888;
  --clr-very-dark: rgb(8, 8, 8);

  /* Font Size */
  --head: 50px;
  --subhead: 25px;
  --paragraph: 20px;

  /* Font weights */
  --bold: 700;
  --regular: 400;
  --medium: 500;
}

body {
  background: #222;
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: white;
  font-family: sans-serif;
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
}

.glitch span:first-child {
  animation: glitch 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.025em, -0.0125em);
  /* color: green; */
  opacity: 0.8;
}

.glitch span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
  transform: translate(0.0125em, 0.025em);
  /* color: red; */
  opacity: 0.8;
}


@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }

  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }

  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }

  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }

  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }

  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }

  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
}

@media (prefers-reduced-motion: reduce) {

  *,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}

#title {
  animation: rgb 20s infinite alternate;
  font-size: 120px;
  font-family: "Poetsen One", sans-serif;
  text-shadow: -2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, 2px 2px 0 #000000;
}

#index_body_home {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), radial-gradient(at top center, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.40) 120%) #989898;
  background-blend-mode: multiply, multiply;
  height: auto;
}

@keyframes rgb {
  0% {
    color: #3300FF;
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

  100% {
    color: var(--clr-primary);
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

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

#float_img {
  position: relative;
  animation: show 1s forwards, float 2s ease-in-out 1s infinite;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 0;
  top: 50px;
  left: 20px;
  opacity: 0;
  /* initially hidden */
}

.im {
  font-size: 70px;
}
</style>