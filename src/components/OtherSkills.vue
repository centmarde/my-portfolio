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
                Knowledge in microsoft 360 office.
              </li>
            </ul>
           </h5>
          </div>
  
          
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const formData = ref({
    name: '',
    email: '',
    message: ''
  });
  
  function submitForm() {
    // Example submission logic
    console.log('Form submitted:', formData.value);
    // Implement your actual form submission logic here
  }
  </script>
  
  <style scoped>
 section{
  color: #EEEEEE;
 }
  </style>
  