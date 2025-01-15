<template>
  <section id="project" class="container-fluid">
    <div class="horizontal-scroll-container">
      <div class="horizontal-scroll-content">
        <section id="section0" class="horizontal-scroll-section">
          <div class="row">
            <div class="col-12">
              <div class="container no-overlap-container">
                <h2 id="project_title" class="text-center mt-1 mb-4">Projects</h2>
              </div>
            </div>
          </div>
        </section>

        <section id="section2" class="horizontal-scroll-section">
          <!-- Example project cards -->
          <div class="row p-5">
            <div class="col">
              <img src="../assets/Projects/snooze/stars.png" class="bottom-image" alt="stars">
              <div class="image-wrapper">
                <img src="../assets/Projects/snooze/moon.png" class="moon" alt="moon" ref="moonRef">
                <h4 class="moontext">Snooze Tutor</h4>
                <img src="../assets/Projects/snooze/last.png" class="top-image" alt="mountains">
              </div>
            </div>
          </div>
        </section>
        <section id="section3" class="horizontal-scroll-section">
          <SnoozeContents />
        </section>

        <section id="section11" class="horizontal-scroll-section secteleven">
             <div class="row">
              <AutoSolutionsContents />
             </div>
        </section>
       
        <section id="section4" class="horizontal-scroll-section secfour">
          <div class="row text-center">
            <div class="col-6 my-1">
              <img class="bordered-image" src=".././assets/RMI.png" style="width: 100%;" alt="snooze img">
            </div>
            <div class="col-6 my-1">
              <img class="bordered-image" src=".././assets/RMI2.png" style="width: 97.8%;" alt="snooze img">
            </div>
            <div class="col mt-2">
              <img class="mx-1" src="../assets/java.png" style="width: 2rem;" alt="Java">
              <img class="mx-1" src="../assets/mysql.png" style="width: 2.5rem;" alt="mysql">
              <img class="mx-1" src="../assets/nodejs.png" style="width: 2rem;" alt="Nodjs">
              <img class="mx-1" src="../assets/laravel.svg" style="width: 2rem;" alt="Laravel">
            </div>
            <h3>RMI Enrollment System</h3>
            <span>Assign as a main developer for both the front and back end. <br> This project is all about how to
              integrate different machines/tech. <br>
              Examples include shared databases, Parsing, and invocation using REST API and CRUD
              functionalities.</span>
            <h5>
              <a href="https://github.com/TheStrongestAlgorithm/RemoteMethodInvocation-Laravel.git" target="_blank"
                rel="noopener noreferrer">
                View on GitHub
              </a>
            </h5>
          </div>


        </section>
        <section id="section5" class="horizontal-scroll-section secfive">
          <div class="row">
            <div class="col text-center mb-3">
              <h3>Flames Desktop App</h3>
              <span></span>Assign as a main developer. <br> A simple school project. Using pure Java's Library AWS and
              SWING It's all about the
              traditional game FLAMES. <br> In which you enter two names and determine your compatibility.

            </div>
            <div class="row ">
              <div class="col d-flex justify-content-center">
                <img class="mx-1 bordered-image flames" src="../assets/flames1.png" alt="">

                <img class="mx-1 bordered-image flames" src="../assets/flames3.png" alt="">
              </div>

            </div>
            <div class="col d-flex justify-content-center mt-2">

              <h5>
                <a href="https://github.com/TheStrongestAlgorithm/Flames-queue-Java-algorithm.git" target="_blank"
                  rel="noopener noreferrer">
                  View on GitHub
                </a>
              </h5>
            </div>
          </div>

        </section>
        <section id="section6" class="horizontal-scroll-section secsix">
          <div class="row">
            <div class="col d-flex justify-content-center">
              <img class="mx-2 bordered-image learnit" src="../assets/learnit1.jpg" alt="">
              <img class="mx-2 bordered-image learnit" src="../assets/learnit2.jpg" alt="">
            </div>

            <div class="row">
              <div class="col text-center mt-3"><img class="mx-1" src="../assets/HTML.png" style="width: 2rem;"
                  alt="HTML">
                <img class="mx-1" src="../assets/Supabase.png" style="width: 2rem;" alt="supabase">
                <img class="mx-1" src="../assets/nodejs.png" style="width: 2rem;" alt="Nodjs">
                <img class="mx-1" src="../assets/Bootstrap_logo.svg.png" style="width: 2rem;" alt="bootstrap">
                <h3 class="mt-2">Learn-It Mobile App.</h3>
              </div>
              <p class="text-center">Assign as a <b>Contributor</b> for back end. A school project. It's all about the
                Q&A
                mobile application.</p>
              <h5 class="text-center">
                <a href="https://github.com/TheStrongestAlgorithm/LearnIt.git" target="_blank"
                  rel="noopener noreferrer">
                  View on GitHub
                </a>
              </h5>
            </div>

          </div>
        </section>
        <section id="section7" class="horizontal-scroll-section secseven">
          <div class="container innerseven text-center">
            <div class="col d-flex justify-content-center">
              <img class="mx-2 bordered-image cocktailcove" src="../assets/cocktailcove1.jpg" alt="">
              <img class="mx-2 bordered-image cocktailcove" src="../assets/cocktailcove2.jpg" alt="">

            </div>

            <div class="row">
              <div class="col text-center mt-3"><img class="mx-1" src="../assets/HTML.png" style="width: 2rem;"
                  alt="HTML">
                <img class="mx-1" src="../assets/Supabase.png" style="width: 2rem;" alt="supabase">
                <img class="mx-1" src="../assets/nodejs.png" style="width: 2rem;" alt="Nodjs">
                <img class="mx-1" src="../assets/Bootstrap_logo.svg.png" style="width: 2rem;" alt="bootstrap">
                <h3 class="mt-2">Cocktail Cove</h3>
              </div>
              <p class="text-center"> Assign as a Contributor for back end. A school project. It's all about the
                Cocktail mixed menu/ingredients mobile app.</p>
              <h5 class="text-center">
                <a href="https://github.com/TheStrongestAlgorithm/CocktailCove.git" target="_blank"
                  rel="noopener noreferrer">
                  View on GitHub
                </a>
              </h5>
            </div>
          </div>
        </section>
        <section id="section11" class="horizontal-scroll-section secteleven">

          <div class="row">

            <div class="container innerten">



              <div class="row">
                <h3 class="mt-2 text-center">Chic-Nails</h3>
                <p class="text-center"> Assign as a Contributor for User authentication,role-base and made some
                  minor fixes. <br> A school project. It's all about the nail service reservation/scheduling.</p>

              </div>
              <div class="col d-flex justify-content-center">
                <img class="mx-2 bordered-image chiccnails" src="../assets/Chic-nails1.jpg">
                <img class="mx-2 bordered-image chiccnails" src="../assets/Chic-nails2.jpg">


              </div>


              <h5 class="text-center">
                <div class="col text-center mt-3"><img class="mx-1" src="../assets/HTML.png" style="width: 2rem;"
                    alt="HTML">
                  <img class="mx-1" src="../assets/Supabase.png" style="width: 2rem;" alt="supabase">
                  <img class="mx-1" src="../assets/nodejs.png" style="width: 2rem;" alt="Nodjs">
                  <img class="mx-1" src="../assets/Bootstrap_logo.svg.png" style="width: 2rem;" alt="bootstrap">

                </div>
                <a href="https://github.com/TheStrongestAlgorithm/Chic-Nails.git" target="_blank"
                  rel="noopener noreferrer">
                  View on GitHub
                </a>
              </h5>

            </div>
          </div>
        </section>
        <section id="section8" class="horizontal-scroll-section seceight">
          <div class="container innereight text-center">
            <div class="row">
              <h2>RENTECH</h2>
              <div class="col d-flex justify-content-center my-1">
                <img class="bordered-image mx-2 rentechimg" src="../assets/rentech1.jpg" alt="snooze img">
                <img class="bordered-image mx-2 rentechimg" src="../assets/rentech4.jpg" alt="snooze img">
                <img class="bordered-image mx-2 rentechimg" src="../assets/rentech3.jpg" alt="snooze img">
              </div>

              <div class="row">
                <div class="col text-center mt-2">
                  <img class="mx-1" src="../assets/Bootstrap_logo.svg.png" style="width: 2rem;" alt="Java">
                  <img class="mx-1" src="../assets/nodejs.png" style="width: 2.5rem;" alt="mysql">
                  <img class="mx-1" src="../assets/Supabase.png" style="width: 2rem;" alt="Nodjs">
                  <img class="mx-1" src="../assets/HTML.png" style="width: 2rem;" alt="Laravel">
                </div>
                <h5>Assign a Contributor for the backend. <br> A school project. It's all about buying
                  laptops through a mobile app.</h5>
                <div></div>
                <h5> <a href="https://github.com/TheStrongestAlgorithm/RenTech.git" target="_blank"
                    rel="noopener noreferrer">
                    Github Repository version 1
                  </a></h5>
                <h5> <a href="https://github.com/TheStrongestAlgorithm/rentechv2.git" target="_blank"
                    rel="noopener noreferrer">
                    Github Repository version 2
                  </a></h5>
              </div>
            </div>
          </div>

        </section>
        <section id="section9" class="horizontal-scroll-section secnine">

          <div class="contaier innernine text-center">
            <div class="row">
              <h2 class="text-light">CampusCare</h2>
              <div class="col d-flex justify-content-center my-1">
                <img class="bordered-image mx-2 campuscare" src="../assets/CampusCare1.jpg" alt="snooze img">

              </div>

              <div class="row">
                <div class="col text-center mt-2">
                  <img class="mx-1" src="../assets/Bootstrap_logo.svg.png" style="width: 2rem;" alt="Java">
                  <img class="mx-1" src="../assets/nodejs.png" style="width: 2.5rem;" alt="mysql">
                  <img class="mx-1" src="../assets/Supabase.png" style="width: 2rem;" alt="Nodjs">
                  <img class="mx-1" src="../assets/HTML.png" style="width: 2rem;" alt="Laravel">
                </div>
                <h5>Assign a Contributor for the backend. <br> A school project. It's all about buying
                  laptops through a mobile app.</h5>
                <div></div>
                <h5> <a href=" Repository:https://github.com/TheStrongestAlgorithm/campusCare.git" target="_blank"
                    rel="noopener noreferrer">
                    View on GitHub
                  </a></h5>
              </div>
            </div>
          </div>
        </section>

       

        <div class="row">

        </div>
        <section id="section10" class="horizontal-scroll-section secten">
          <div class="row innerten">
            <div class="col d-flex justify-content-center">

              <img class="mx-2 bordered-image smartai" src="../assets/noteai2.jpg">
              <img class="mx-2 bordered-image smartai" src="../assets/noteai3.png">
            </div>

            <div class="row">
              <div class="col text-center mt-3"><img class="mx-1" src="../assets/HTML.png" style="width: 2rem;"
                  alt="HTML">
                <img class="mx-1" src="../assets/Supabase.png" style="width: 2rem;" alt="supabase">
                <img class="mx-1" src="../assets/nodejs.png" style="width: 2rem;" alt="Nodjs">
                <img class="mx-1" src="../assets/Bootstrap_logo.svg.png" style="width: 2rem;" alt="bootstrap">
                <h3 class="mt-2 text-light">Smart Notes</h3>
              </div>
              <p class="text-center text-light"> Assign as a Contributor for both the front and back end. <br> A
                school project. It's all Note taking application with a AI ChatBot.</p>
              <h5 class="text-center">
                <a href="https://github.com/TheStrongestAlgorithm/Note-Ai-version-2.git" target="_blank"
                  rel="noopener noreferrer">
                  View on GitHub
                </a>
              </h5>
            </div>

          </div>
        </section>

       
        <section id="section12" class="horizontal-scroll-section secttwelve">

          <div class="row">

          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import SnoozeContents from './SnoozeTutor/SnoozeContents.vue';
import AutoSolutionsContents from './Auto-Solutions/AutoSolutionsContents.vue';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const moonRef = ref(null);

onMounted(() => {


  // Smooth horizontal scroll animation
  gsap.to(".horizontal-scroll-content", {
    x: () => -(document.querySelectorAll(".horizontal-scroll-section").length - 1) * window.innerWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-scroll-container",
      pin: true,
      scrub: 1,
      end: () => "+=" + document.querySelector(".horizontal-scroll-content").offsetWidth
    }
  });

  // Fade and slide-in effect for each section
  document.querySelectorAll(".horizontal-scroll-section").forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: section,
          start: "left center",
          end: "right center",
          scrub: 1,
        },
        duration: 1,
        ease: "power3.out"
      }
    );
  });

  // Continuous rotation for bottom image
  gsap.to(".bottom-image", {
    rotation: 360,
    transformOrigin: "center",
    ease: "none",
    duration: 100,
    repeat: -1
  });

});

</script>

<style scoped>
#project_title {
  font-family: "Pacifico", cursive;
  font-size: 10rem;
  color: #EEEEEE;
  position: relative;
  display: inline-block;
  text-shadow: 1px 1px 0 #151515, -1px -1px 0 #151515, 1px -1px 0 #151515, -1px 1px 0 #151515;
}

/* Large screens (desktops) */
@media (min-width: 1024px) {
  #project_title {
    font-size: 10rem;
  }
}

/* Medium screens (tablets) */
@media (min-width: 768px) and (max-width: 1023px) {
  #project_title {
    font-size: 6rem;
  }
}

/* Small screens (phones) */
@media (max-width: 767px) {
  #project_title {
    font-size: 4rem;
  }
}

#project_title_child {
  font-family: "Pacifico", cursive;
  font-size: 5rem;
  color: #151515;
  text-shadow: 1px 1px 0 #A91D3A, -1px -1px 0 #A91D3A, 1px -1px 0 #A91D3A, -1px 1px 0 #A91D3A;
}

.horizontal-scroll-container {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
}

.horizontal-scroll-content {
  display: flex;
  height: 100%;
  width: 1200vw;
  /* Let the width be determined by the content */
  position: absolute;
  /* Or relative, depending on the use case */
}


.horizontal-scroll-section {
  flex: 1 0 87vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EEEEEE;
}

.project-description {
  font-size: 1.25rem;
  color: #333;
  line-height: 1.5; 
  margin-top: 1rem;
}

#project {
  padding: 80px 0;
}

h2 {
  color: #151515;
  font-size: 2.5rem;
}

#section3 {
  background: linear-gradient(109.6deg,
      rgb(28, 0, 46) 0%,
      rgb(28, 0, 46) 60%,
      #151515 80%);
}

#section2 {
  background-color: rgb(28, 0, 46);
}

#section4 {
  background: linear-gradient(109.6deg,
      rgba(0, 0, 0, 0.014) 0%,
      rgba(0, 0, 0, 0.014) 30%,
      #151515 40%,
      #2c2c2c 60%,
      #151515 80%);
}


.secfour {
  color: #EEEEEE;
  background-color: #f8f8f8;
}

.secfive {
  background: linear-gradient(109.6deg, #151515 12%, #2c2c2c 50%, #EEEEEE 80%);
}


.secsix {
  background: #EEEEEE;
}



#section5 {
  color: #EEEEEE;
}

.horizontal-scroll-content {
  background-color: #151515;
}

.seceight {
  background-image: linear-gradient(289.6deg,
      #303030 0%,
      /* Dark green */
      #3b3b3b 16%,
      /* Slightly lighter green */
      #4b4b4b 22%,
      /* Medium green */
      #616161d8 30%,
      /* Bright green */
      #7070706e 40%,
      /* Lighter green */
      #94949434 70%,
      /* Very light green */
      rgba(255, 255, 255, 0) 80%);
  /* Fade to transparency */
}

.secnine {
  background-image: linear-gradient(289.6deg,
      #131313 0%,
      /* Starting with the last color from previous gradient */
      #141414 20%,
      /* Slightly darker green */
      #1d1d1d 40%,
      /* Medium dark green */
      #222222 60%,
      /* Dark green */
      #2c2c2c 80%,
      /* Very dark green */
      #303030 90%);
  /* Darkest green */
}






.image-wrapper {
  position: relative;
  width: 800px;
  height: auto;
}

.top-image {
  position: relative;
  bottom: -11rem;
  width: 100%;
  z-index: 5;
}

@media (min-width: 1024px) {
  .top-image {
    bottom: -1rem;
    /* Adjust this value as needed */
  }
}

.moon {
  position: absolute;
  width: 50%;
  z-index: 1;
}

.moontext {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50%;
  height: 50%;
  /* Adjust height as needed */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  color: #EEEEEE;
  font-size: 30px;
}

.bottom-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  transform-origin: center;
}

.bordered-image {
  border: 4px solid #EEEEEE;
  /* White border with 4px thickness */
  border-radius: 8px;
  /* Optional: Rounded corners for the border */
  padding: 2px;
  /* Optional: Space between the image and the border */
  box-shadow: 0 0 5px #151515;
  /* Optional: Shadow effect */
}

.innernine {
  color: #EEEEEE;
}

#section10 {
  background: #151515;
}

#section11 {
  background: #151515;
  color: #151515;
  position: relative;
  overflow: hidden;
}

#section12 {
  background: #151515;
  position: relative;
  overflow: hidden;
}

#section11::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 800px;
  /* Increase the size of the circle */
  height: 800px;
  /* Increase the size of the circle */
 
  /* fade out to transparent */
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: -1;
  /* Place the circle in the background */
}

#section0 {
  background: linear-gradient(109.6deg,
      #eeeeeec5 0%,
      rgb(28, 0, 46) 80%);
}






@media (min-width: 1024px) {

  .rentechimg,
  .chiccnails,
  .smartai {
    width: 10rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {

  .rentechimg,
  .chiccnails,
  .smartai {
    width: 10rem;
  }
}

/* Small screens (phones) */
@media (max-width: 767px) {

  .rentechimg,
  .chiccnails,
  .smartai {
    width: 10ch;
  }
}

@media (min-width: 1024px) {
  .campuscare {
    width: 40rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .campuscare {
    width: 20rem;
  }
}

/* Small screens (phones) */
@media (max-width: 767px) {
  .campuscare {
    width: 20ch;
  }
}

@media (min-width: 1024px) {

  .cocktailcove,
  .learnit,
  .flames {
    width: 30ch;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {

  .cocktailcove,
  .learnit,
  .flames {
    width: 25ch;
  }
}

/* Small screens (phones) */
@media (max-width: 767px) {

  .cocktailcove,
  .learnit,
  .flames {
    width: 15ch;
  }
}
</style>
