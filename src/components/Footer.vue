<template>
    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <!-- Footer content example -->
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non nisi sed nisi molestie consequat.</p>
          </div>
          <div class="col-md-3">
            <!-- Quick Links example -->
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-md-3">
            <!-- Social Links example -->
            <h3>Connect With Me</h3>
            <div class="social-links">
                <a href="https://github.com/Centmarde" target="_blank" class="text-light">
                 <UiGithub class="mt-3" style="width: 30px; height: 30px;" />
               </a>
               <a href="https://web.facebook.com/centmarde.campado" target="_blank" class="text-light ms-3">
                 <AkFacebookFill class="mt-3" style="width: 30px; height: 30px;" />
               </a>
             
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col text-center">
            <!-- Copyright notice example -->
            <p>&copy; 2024 Your Website Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
 import { UiGithub } from "@kalimahapps/vue-icons";
 import { AkFacebookFill } from "@kalimahapps/vue-icons";
  </script>
  
  <style scoped>
  #footer {
    background-color: #343a40; /* Example background color */
    color: #ffffff; /* Example text color */
    padding: 50px 0;
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
  