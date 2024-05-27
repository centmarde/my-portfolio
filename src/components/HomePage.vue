<template>
   <div id="index_body_home">
      <br><br><br><br><br><br><br>
      <div class="container">
         <div class="row">
            
            <div class="col text-center">
               <h1 id="title" >Creativity 
               </h1>
               <h1>is a must,
                  but the way to solve new problem is 🖤
               </h1>
            </div>
         </div>
         <br><br><br><br><br>
         <br><br><br><br><br>
         <br><br><br><br><br>
         <div class="row">
            <div class="col text-light">
               <br><br>
               <h1>Hi There,</h1>
            </div>
            <div class="d-flex">
               <h2>I'm</h2>
               <h2 class="ms-3">Centmarde</h2>

            </div>
            <h1 id="typing-text"></h1>
            <br><br><br>
            <div class="mt-5">
               <h5>I'm a dedicated developer living in the Philippines. <br>
                  I enjoy creating things that live on the internet. <br>
                  I'm always looking for new and exciting projects to work on.
               </h5>
               <a href="https://github.com/Centmarde" target="_blank" class="text-light">
                  <UiGithub class="mt-3" style="width: 30px; height: 30px;" />
               </a>
               <a href="https://web.facebook.com/centmarde.campado" target="_blank" class="text-light ms-3">
                  <AkFacebookFill class="mt-3" style="width: 30px; height: 30px;" />
               </a>
            </div>


            <div class="col"></div>
         </div>

      </div>
      <br><br><br>
   </div>
</template>
<script setup>
import { UiGithub } from "@kalimahapps/vue-icons";
import { AkFacebookFill } from "@kalimahapps/vue-icons";
</script>

<script>
export default {
   mounted() {
      const textArray = ['A FullStack Developer.', 'A Web Designer.', 'Im also a digital artist.', 'Nice to meet you.'];
      const typingElement = document.getElementById('typing-text');
      let index = 0;
      let letterIndex = 0;
      let direction = 1;
      let delay = 50;
      let isFinished = false;

      function typeText() {
         typingElement.textContent = textArray[index].substring(0, letterIndex);


         if (letterIndex === textArray[index].length && !isFinished) {
            isFinished = true;
            setTimeout(() => {
               isFinished = false;
               index = (index + 1) % textArray.length;
               letterIndex = 0; t
               direction = 1;
            }, 2000);
         } else if (letterIndex === 0) {
            direction = 1;
         }

         letterIndex += direction;
         setTimeout(typeText, delay);
      }

      typeText();
   }
}


</script>

<style>
#title {
  font-size: 120px;
  font-family: "Poetsen One", sans-serif;
  color: #000; /* Set text color */
  text-shadow: 
    -2px -2px 0 #fff, /* Top left */
    2px -2px 0 #fff, /* Top right */
    -2px 2px 0 #fff, /* Bottom left */
    2px 2px 0 #fff; /* Bottom right */
}
#index_body_home{
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;
  height: auto;
  /* overflow-y: hidden; */
}
</style>
