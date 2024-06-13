<template>
    <div class="parallax-container">
      <div class="parallax-content">
        <h1>Welcome to Parallax!</h1>
        <p>This is a simple parallax effect example.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const parallaxRef = ref(null);
  
  onMounted(() => {
    window.addEventListener('scroll', parallaxScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', parallaxScroll);
  });
  
  const parallaxScroll = () => {
    if (parallaxRef.value) {
      let scrollPosition = window.pageYOffset;
      parallaxRef.value.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
  };
  </script>
  
  <style scoped>
  .parallax-container {
    height: 500px; /* Adjust as needed */
    overflow: hidden;
    position: relative;
  }
  
  .parallax-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ffffff; /* Example text color */
  }
  
  .parallax-content h1 {
    font-size: 3rem; /* Example heading font size */
  }
  
  .parallax-content p {
    font-size: 1.5rem; /* Example paragraph font size */
  }
  
  /* Background styling */
  .parallax-container {
    background-image: url('../assets/background.jpg'); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  </style>
  