<template>
  <section id="project">
    <div class="horizontal-scroll-container">
      <div class="horizontal-scroll-content">
        <section id="section1" class="horizontal-scroll-section">
          <div class="row">
            <div class="col-12">
              <div class="container no-overlap-container">
                <h2 id="project_title" class="text-center mt-1 mb-4">Projects</h2>
              </div>
            </div>
          </div>
        </section>
        <section id="section2" class="horizontal-scroll-section">
          <!-- Example project cards -->
          <div class="row p-5">
            <div class="col">
              <img src="../assets/Projects/snooze/stars.png" class="bottom-image" alt="stars">
              <div class="image-wrapper">
                <img src="../assets/Projects/snooze/moon.png" class="moon" alt="moon" ref="moonRef">
                <h4 class="moontext">Snooze Tutor</h4>
                <img src="../assets/Projects/snooze/last.png" class="top-image" alt="mountains">
              </div>
            </div>
          </div>
        </section>
        <section id="section3" class="horizontal-scroll-section">Section 3
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis non odio molestias doloribus, suscipit
            ex nostrum illo iusto porro aliquam nemo voluptatibus fuga ipsa ipsum blanditiis soluta nesciunt repellat
            exercitationem.</h1>
        </section>
        <section id="section3" class="horizontal-scroll-section">Section 3
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis non odio molestias doloribus, suscipit
            ex nostrum illo iusto porro aliquam nemo voluptatibus fuga ipsa ipsum blanditiis soluta nesciunt repellat
            exercitationem.</h1>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const moonRef = ref(null);

onMounted(() => {
  // Smooth horizontal scroll animation
  gsap.to(".horizontal-scroll-content", {
    x: () => -(document.querySelectorAll(".horizontal-scroll-section").length - 1) * window.innerWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-scroll-container",
      pin: true,
      scrub: 1,
      end: () => "+=" + document.querySelector(".horizontal-scroll-content").offsetWidth
    }
  });

  // Fade and slide-in effect for each section
  document.querySelectorAll(".horizontal-scroll-section").forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: section,
          start: "left center",
          end: "right center",
          scrub: 1,
        },
        duration: 1,
        ease: "power3.out"
      }
    );
  });

  // Continuous rotation for bottom image
  gsap.to(".bottom-image", {
    rotation: 360,
    transformOrigin: "center",
    ease: "none",
    duration: 100,
    repeat: -1
  });

});

</script>

<style scoped>
#project_title {
  font-family: "Pacifico", cursive;
  font-size: 10rem;
  color: #151515;
  position: relative;
  display: inline-block;
  text-shadow: 1px 1px 0 #A91D3A, -1px -1px 0 #A91D3A, 1px -1px 0 #A91D3A, -1px 1px 0 #A91D3A;
}

#project_title_child {
  font-family: "Pacifico", cursive;
  font-size: 5rem;
  color: #151515;
  text-shadow: 1px 1px 0 #A91D3A, -1px -1px 0 #A91D3A, 1px -1px 0 #A91D3A, -1px 1px 0 #A91D3A;
}

.horizontal-scroll-container {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
}

.horizontal-scroll-content {
  display: flex;
  height: 100%;
  width: 300vw;
  /* Adjust based on the number of sections */
  position: absolute;
}

.horizontal-scroll-section {
  flex: 1 0 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EEEEEE;
}

.project-description {
  font-size: 1.25rem;
  color: #333;
  line-height: 1.5;
  margin-top: 1rem;
}

#project {
  padding: 80px 0;
}

h2 {
  color: #151515;
  font-size: 2.5rem;
}

#section1 {
  background: linear-gradient(to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(187, 158, 202, 0.5) 70%,
      rgba(187, 158, 202, 0.2) 90%,
      rgba(255, 255, 255, 0) 100%);
}

#section2,
#section3 {
  background: none;
}

.horizontal-scroll-content {
  background: linear-gradient(to left,
      rgba(60, 16, 83, 0) 0%,
      rgb(21, 0, 32) 20%,
      rgb(27, 1, 61) 80%,
      rgba(173, 83, 137, 0) 100%);
}

.image-wrapper {
  position: relative;
  width: 800px;
  height: auto;
}

.top-image {
  position: relative;
  bottom: -7rem;
  width: 100%;
  z-index: 5;
}

.moon {
  position: absolute;
  width: 50%;
  z-index: 1;
}

.moontext {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50%;
  height: 50%;
  /* Adjust height as needed */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  color: #EEEEEE;
  font-size: 30px;
}

.bottom-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  transform-origin: center;
}
</style>
