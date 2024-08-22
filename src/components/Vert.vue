<template>
  <div class="horizontal-scroll-container">
    <div class="horizontal-scroll-content">
      <section id="section1" class="horizontal-scroll-section">
        <div class="row"><div class="col">
          <img class="img-fluid" src="../assets/Bootstrap_logo.svg.png" alt="">
        </div>
        <div class="col">saw</div></div>
      </section>
      <section id="section2" class="horizontal-scroll-section">Section 2</section>
      <section id="section3" class="horizontal-scroll-section">Section 3</section>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HorizontalScrollComponent',
  setup() {
    onMounted(() => {
      // Smooth horizontal scroll animation
      gsap.to(".horizontal-scroll-content", {
        x: () => -(document.querySelectorAll(".horizontal-scroll-section").length - 1) * window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal-scroll-container",
          pin: true,
          scrub: 1, // Smooth scrolling with 1-second scrub duration
          end: () => "+=" + document.querySelector(".horizontal-scroll-content").offsetWidth
        }
      });

      // Fade and slide-in effect for each section
      document.querySelectorAll(".horizontal-scroll-section").forEach((section, index) => {
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
              scrub: 1, // Smooth fade-in and fade-out effect
            },
            duration: 1,
            ease: "power3.out"
          }
        );
      });
    });
  }
};
</script>


<style scoped>
.horizontal-scroll-container {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
}

.horizontal-scroll-content {
  display: flex;
  height: 100%;
  width: 300vw; /* Adjust based on the number of sections */
  position: absolute; /* Fixes horizontal scroll positioning */
}

.horizontal-scroll-section {
  flex: 1 0 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: #ddd;
}
</style>

