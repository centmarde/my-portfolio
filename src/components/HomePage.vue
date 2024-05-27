<template>
   <div id="index_body_home">
      <br><br><br><br><br><br>
      <div class="container">
         <section id="home">
            <div class="row">

               <div class="col text-center">
                  <h1 id="title" class="bg-details">Creativity
                  </h1>
                  <h1>is a must,
                     but the way to solve new problem is 🖤
                  </h1>
               </div>
            </div>
         </section>

         <br><br><br><br><br>
         <br><br><br><br><br>
         <br><br><br><br><br>
         <div class="row">
            <div class="col ms-5">
               <br><br>
               <h1>Hi There,</h1>
               <div class="d-flex">
               <h2 class="mt-2">I'm</h2>
               <h2 id="centmarde" class="ms-3">Centmarde</h2>
                  </div><h1 id="typing-text"></h1>
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
          
            </div>
          
            

            
            <div class="col d-flex justify-content-center">
               <img id="float_img" src="../assets/marde.png" class="rounded-circle" style="width: 350px; height: 350px; border: 5px solid #000000;">
            </div>


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
#typing-text{
   position: absolute;
}
:root {
   /* Light Mode */
   --clr-primary: rgb(232, 232, 232);
   --clr-dark: #0B0B0B;
   --clr-semi-dark: #101010;
   --clr-light: #888888;
   --clr-very-dark: rgb(8, 8, 8);

   /* Font Size */
   --head: 50px;
   --subhead: 25px;
   --paragraph: 20px;

   /* Font weights */
   --bold: 700;
   --regular: 400;
   --medium: 500;
}

#centmarde {
   font-family: "Pacifico", cursive;
   font-size: 80px;
   color: #ffffff;
   text-shadow:
      -2px -2px 0 #000000,
      /* Top left */
      2px -2px 0 #000000,
      /* Top right */
      -2px 2px 0 #000000,
      /* Bottom left */
      2px 2px 0 #000000;
   /* Bottom right */

}

#title {
   animation: rgb 20s infinite alternate;
}

#title {
   font-size: 120px;
   font-family: "Poetsen One", sans-serif;

   text-shadow:
      -2px -2px 0 #000000,
      /* Top left */
      2px -2px 0 #000000,
      /* Top right */
      -2px 2px 0 #000000,
      /* Bottom left */
      2px 2px 0 #000000;
   /* Bottom right */
}

#index_body_home {
   background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), radial-gradient(at top center, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.40) 120%) #989898;
   background-blend-mode: multiply, multiply;
   height: auto;
   /* overflow-y: hidden; */
}

@keyframes rgb {
   0% {
      color: #3300FF;
   }

   10% {
      color: #0057FF;
   }

   20% {
      color: #FF00F5;
   }

   30% {
      color: #FF008A;
   }

   40% {
      color: #e252e0;
   }

   50% {
      color: #fdea96;
   }

   60% {
      color: #3551a4;
   }

   70% {
      color: #2c8ec4;
   }

   80% {
      color: #31cdb0;
   }

   90% {
      color: #f8c7d5;
   }

   100% {
      color: var(--clr-primary);
   }
}
@keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }

    #float_img {
      position: relative;
        animation: float 3s infinite ease-in-out;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        z-index: 0;
        top: 50px;
        left: 20px;
    }
</style>
