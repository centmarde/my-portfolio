<template>
  <section id="OtherSkills" class="my-5">
    <div class="container my-5">
      <h2 id="certs" class="text-center mt-1 mb-4">Other Skills</h2>
      <div class="row">
        <div class="col">
          <hr>
          <h5>
            <ul>
              <li>
                Knowledge in Graphic design and Digital art using professional ICT tools like Photoshop
                Canva, Figma and ClipStudio.
              </li>
              <li>
                Knowledge in Git (Distributed Version Control System).
              </li>
              <li>
                Knowledge in Microsoft 360 office.
              </li>
            </ul>
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from("#OtherSkills", {
    scale: 0.8, // Start with the div slightly smaller
    opacity: 0, // Start with the div hidden
    duration: 1.5, // Animation duration
    ease: "power3.out", // Easing function
    scrollTrigger: {
      trigger: "#OtherSkills",
      start: "top 80%", // Trigger when the top of the div is 80% from the top of the viewport
      end: "bottom 60%", // End when the bottom of the div reaches 60% of the viewport
      toggleActions: "play none none reverse", // Play the animation when entering, reverse when leaving
    }
  });
});


</script>

<style scoped>
section {
  color: #EEEEEE;
}
</style>
