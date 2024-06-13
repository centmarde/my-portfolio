<template>
    <section id="stack">
      <div class="container">
        <h2 class="text-center mt-5 mb-4">Tech Stack</h2>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <ul class="list-group">
              <li class="list-group-item">Vue.js</li>
              <li class="list-group-item">TypeScript</li>
              <li class="list-group-item">HTML5</li>
              <li class="list-group-item">CSS3 / SCSS</li>
              <li class="list-group-item">JavaScript (ES6+)</li>
              <li class="list-group-item">Vue Router</li>
              <li class="list-group-item">Vuex</li>
              <li class="list-group-item">Bootstrap or Tailwind CSS</li>
              <!-- Add more items as needed -->
            </ul>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No need for imports or additional setup with <script setup>
  </script>
  
  <style scoped>
  #stack {
    padding: 80px 0;
  
  }
  
  h2 {
    color: #333; /* Example text color */
    font-size: 2.5rem;
  }
  
  .list-group {
    margin-top: 20px;
  }
  
  .list-group-item {
    background-color: #fff; /* Example list item background color */
    border-color: #ddd; /* Example border color */
    font-size: 1.2rem;
    padding: 12px 20px;
  }
  </style>
  