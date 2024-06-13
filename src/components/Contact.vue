<template>
    <section id="contact">
      <div class="container">
        <h2 class="text-center mt-5 mb-4">Contact</h2>
  
        <div class="row">
          <div class="col-md-6">
            <!-- Contact form example -->
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" id="name" v-model="formData.name" class="form-control" required>
              </div>
  
              <div class="mb-3">
                <label for="email" class="form-label">Your Email</label>
                <input type="email" id="email" v-model="formData.email" class="form-control" required>
              </div>
  
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" v-model="formData.message" rows="5" class="form-control" required></textarea>
              </div>
  
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
  
          <div class="col-md-6">
            <!-- Contact information example -->
            <div class="contact-info">
              <h3>Contact Information</h3>
              <ul>
                <li><strong>Email:</strong> example@example.com</li>
                <li><strong>Phone:</strong> +1234567890</li>
                <li><strong>Address:</strong> 123 Street, City, Country</li>
              </ul>
  
              <div class="social-links mt-4">
                <a href="#" target="_blank" class="btn btn-outline-dark me-2"><i class="bi bi-github"></i></a>
                <a href="#" target="_blank" class="btn btn-outline-dark me-2"><i class="bi bi-twitter"></i></a>
                <a href="#" target="_blank" class="btn btn-outline-dark me-2"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
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
  #contact {
    padding: 80px 0;
    background-color: #f8f9fa; /* Example background color */
  }
  
  .contact-info {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .social-links .btn {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    line-height: 36px;
    border-radius: 50%;
    text-align: center;
  }
  </style>
  