<template>
    <section id="graphics">
      <div class="container">
        <h2 class="text-center mt-5 mb-4">Certificates and Achievements</h2>
  
        <!-- Example graphics or images -->
        <div class="row">
          <div class="col-md-4 mb-4">
            <img src="../assets/Basic Building Blocks of the User Interface.pdf.png" alt="Graphic 1" class="img-fluid">
          </div>
  
          <div class="col-md-4 mb-4">
            <img src="../assets/1.png" alt="Graphic 1" class="img-fluid">
          </div>
          <div class="col-md-4 mb-4">
            <img src="../assets/2.png" alt="Graphic 1" class="img-fluid">
          </div>
  
          <!-- Add more graphics or images as needed -->
        </div>
        <div class="row">
          <div class="col"> <img src="../assets/3.png" alt="Graphic 1" class="img-fluid"></div>
          <div class="col"> <img src="../assets/4.png" alt="Graphic 1" class="img-fluid"></div>
          <div class="col"> <img src="../assets/5.png" alt="Graphic 1" class="img-fluid"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No imports or additional setup needed with <script setup>
  </script>
  
  <style scoped>
  #graphics {
    padding: 80px 0;
    
  }
  
  h2 {
    color: #333; /* Example text color */
    font-size: 2.5rem;
  }
  
  .img-fluid {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd; /* Example border styling */
    border-radius: 5px; /* Example border radius */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Example box shadow */
  }
  </style>
  