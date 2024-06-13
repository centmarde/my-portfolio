<template>
    <section id="project">
      <div class="container">
        <h2 class="text-center mt-5 mb-4">Projects</h2>
  
        <!-- Example project cards -->
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="../assets/project1.jpg" class="card-img-top" alt="Project 1">
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text">Description of Project 1 goes here.</p>
                <a href="#" class="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
  
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="../assets/project2.jpg" class="card-img-top" alt="Project 2">
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">Description of Project 2 goes here.</p>
                <a href="#" class="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
  
          <!-- Add more project cards as needed -->
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  // No need for imports or additional setup with <script setup>
  </script>
  
  <style scoped>
  #project {
    padding: 80px 0;
   
  }
  
  h2 {
    color: #333; /* Example text color */
    font-size: 2.5rem;
  }
  
  .card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    height: 200px; /* Example image height */
    object-fit: cover;
  }
  
  .card-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
  
  .card-text {
    font-size: 1rem;
    color: #666; /* Example text color */
  }
  </style>
  