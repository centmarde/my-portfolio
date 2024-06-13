<template>
    <div class="parallax-container">
      <div class="parallax-content">
        <h1>Welcome to My Portfolio!</h1>
        <p>This is a simple parallax effect example.</p>  
      </div>
      <div class="mouse"></div>
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


  /*mouse*/
  .mouse {
        overflow:hidden; 
        position:absolute;
        left:50%;
        top:75%;
        width:24px;
        margin: -12px;
        height:50px;
        border:3px solid white;
        border-radius:30px;
        z-index:1;
    }
    
    .mouse::after{
        display: block;
        content:"";
        position:absolute;
        left:13px;
        top:10px;
        width:4px;
        height:4px;
        margin-left: -5.6px;
        background-color:white;
        border-radius:2px;
        animation: mouseWheel 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
    
    @keyframes mouseWheel {
        0% {
            transform: translateY(0);
            opacity: 0;
        }
        10% {
            transform: translateY(0);
            opacity: 1;
        }
        30% {
            transform: translateY(0);
            height: 4px;
        }
        50% {
            transform: translateY(0);
            height: 20px;
        }
        70% {
        transform: translateY(15px);
        height: 4px;
        opacity: 1;
        }
        90% {
        opacity: 0;
        }
        100% {
        transform: translateY(15px);
        opacity: 0;
        }
    }
  </style>
  