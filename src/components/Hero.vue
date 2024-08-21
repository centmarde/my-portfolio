<template>
    <div>
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
    </div>
</template>

<script setup>
  import { ref } from 'vue';

</script>

<style lang="scss" scoped>
#title {
  animation: rgb 20s infinite alternate;
  font-family: "Poetsen One", sans-serif;
  text-shadow: -2px -2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, 2px 2px 0 #000000;
}
@media (max-width: 467px) {
  #title {
   font-size: 60px;
  }
  #float_img {
    width: 150px; /* Adjusted width for small screens */
    height: 150px; /* Adjusted height for small screens */
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
@media (min-width: 468px) and (max-width: 767px) {
  #title {
   font-size: 80px;
  }
}

/* Large screens (min-width: 768px) */
@media (min-width: 768px) {
  #title {
    font-size: 120px;
  }
}

</style>