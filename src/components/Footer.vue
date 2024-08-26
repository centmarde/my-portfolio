<template>
  <footer id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <!-- Footer content example -->
          <h5>Curriculum Vitae: </h5>
          <h5>
            <a href="https://www.dropbox.com/scl/fi/ju882jgxo07go6yax91cv/The-Strongest-Algorithm-CV.pdf?rlkey=pxwakx1eadrb6mn4q115ic2p0&st=xi6uuy1t&dl=0"
              target="_blank">
              <img src="../assets/dropbox.png" style="width: 50%;" alt="Dropbox">
            </a>
          </h5>

        </div>
        <div class="col-md-4">
          <!-- Quick Links example -->
          <h3>Contacts</h3>
          <ul>
            <li><i class="fa fa-phone" aria-hidden="true"></i>
              096339490312</li>
            <li><i class="fa fa-envelope" aria-hidden="true"></i>

             centmarde.campado@gmail.com
            </li>
          
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
          <p>&copy; 2024 Centmarde Campado. All rights reserved.</p>
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
  background: #A91D3A;
  color: #FFFFFF;
  /* Example text color */
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