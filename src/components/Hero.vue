<template>
  <section id="home"><section id="index" class="lottie-container">
    <div class="animation"></div>
  </section>
  <section class="gradient"></section>
  <section class="website-content">
    
    <div class="end-lottie"></div>
    
  </section>
 
</section>
<div class="text-center titleIntro">Creativity is a must, but the way to solve new problems is 🖤</div>
</template>


<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const lottieContainers = document.querySelectorAll(".animation");

  lottieContainers.forEach(container => {
    LottieScrollTrigger({
      trigger: container,
      start: "top center",
      endTrigger: ".end-lottie",
      end: `bottom center += ${container.offsetHeight}`,
      renderer: "svg",
      target: container,
      path: "/assets/VideoCont.json", // Path adjusted
      scrub: 0.5, // Adjust scrub for smoother animation
      fps: 60, // Request high FPS for smoother animation
    });
  });
});

function LottieScrollTrigger(vars) {
  let playhead = { frame: 0 },
      target = gsap.utils.toArray(vars.target)[0],
      speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
      st = {
        trigger: vars.trigger || ".trigger",
        end: speeds[vars.speed] || "+=1000",
        scrub: vars.scrub || 1,
        markers: false,
      },
      ctx = gsap.context && gsap.context(),
      animation = lottie.loadAnimation({
        container: target,
        renderer: vars.renderer || "svg",
        loop: false,
        autoplay: false,
        path: vars.path,
        rendererSettings: vars.rendererSettings || {
          preserveAspectRatio: "xMidYMid slice",
        },
      });

  for (let p in vars) {
    st[p] = vars[p];
  }

  animation.addEventListener("DOMLoaded", function () {
    let createTween = function () {
      animation.frameTween = gsap.to(playhead, {
        frame: animation.totalFrames - 1,
        ease: "none",
        onUpdate: () => animation.goToAndStop(playhead.frame, true),
        scrollTrigger: st,
      });
      return () => animation.destroy && animation.destroy();
    };
    ctx && ctx.add ? ctx.add(createTween) : createTween();
  });

  return animation;
}
</script>



<style scoped>
* {
  margin: 0;
  padding: 0%;
  box-sizing: border-box;
  overflow: hidden;
}

#index {
  width: 100%;
  height: 800vh;
  background-color: #151515;
}

.lottie-container {
  position: fixed;
  width: 100vw;
  height: 5vh;
  top: 0;
  z-index: -1;
  filter: saturation(2);
}

.animation::after {
  content: "";
  background-image: ("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png"
    );
  width: 200%;
  height: 200%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.1;
  animation: animateGrain 8s steps(10) infinite;
}

.gradient {
  width: 100vw;
  height: 200vh; /* Adjust height as needed */
  position: relative;
  background: linear-gradient(180deg,
      rgba(21, 21, 21, 0) 0%, /* Transparent */
      rgba(21, 21, 21, 1) 100%); /* Solid base color */
  z-index: 1;
}


.website-content {
  position: relative;
  width: 100%;
  height: 10vh;
  padding: 2em;
  background: #151515;
  color: #EEEEEE;
  z-index: 1;
}

.end-lottie {
  position: absolute;
  top: 100vh;
  width: 100%;
  height: 1px;
}

@keyframes animateGrain {

  0%,
  100% {
    transfrom: transtale (0, 0);
  }

  10% {
    transform: translate(-5%, -10%);
  }

  20% {
    transform: translate(15%, 20%);
  }

  30% {
    transfrom: transtale(-5%, 10%);
  }

  40% {
    transfrom: transtale(15%, 20%);
  }

  50% {
    transfrom: transtale(-5%, -10%);
  }

  60% {
    transfrom: transtale(15%, 20%);
  }

  70% {
    transfrom: transtale(-5%, 10%);
  }

  80% {
    transfrom: transtale(15%, 20%);
  }

  90% {
    transfrom: transtale(-5%, -10%);
  }

  100% {
    transfrom: transtale(-15%, -20%);
  }
}
@media (max-width: 768px) {
  .animation {
    height: 100vh; /* Adjust for smaller screens */
    position: absolute; /* Ensure it's positioned absolutely */
  }
}





.intro-container {
  padding: 20px;
  text-align: center;
}

#titleIntro {
  font-size: 3rem; /* Default font size for large screens */
  margin-top: 5rem; /* Default margin */
}



@media (max-width: 992px) {
  #titleIntro {
    font-size: 2.5rem; /* Smaller font size for medium screens */
    margin-top: 4rem;  /* Adjust margin for medium screens */
  }

  
}

@media (max-width: 768px) {
  #titleIntro {
    font-size: 2rem; /* Smaller font size for tablets */
    margin-top: 3rem;  /* Adjust margin for tablets */
  }

 
}

@media (max-width: 576px) {
  #titleIntro {
    font-size: 1.8rem; /* Smaller font size for small screens */
    margin-top: 2rem;  /* Adjust margin for small screens */
  }

 
}
.titleIntro {
  background-color: #151515;
  width: 100%;
  font-family: "Pacifico", cursive;
  font-size: 50px;
  color: #EEEEEE;
  text-shadow: 
    0 0 5px #C73659, 
    0 0 10px #C73659, 
    0 0 15px #C73659;
  animation: neon 2s infinite alternate;
  overflow: hidden;
  min-height: 200px; /* Adjust this value as needed */
  animation: neon 2s infinite alternate;
}
.textIntro {
  position: absolute;
  margin-bottom: 50px;
  background-color: #151515;
  width: 100%;
  font-size: 20px;
  color: #EEEEEE;
  overflow: hidden;
  min-height: 50px; /* Adjust this value as needed */
}

@keyframes neon {
  0% {
    text-shadow: 
      0 0 5px #C73659, 
      0 0 10px #C73659;
     
  }
  50% {
    text-shadow: 
      0 0 10px #C73659, 
      0 0 20px #C73659;
     
  }
  100% {
    text-shadow: 
      0 0 5px #C73659, 
      0 0 10px #C73659;
  }
}

@media (max-width: 992px) {
  .titleIntro {
    font-size: 90px; /* Adjusted font size for medium screens */
    min-height: 250px; /* Adjusted min-height for medium screens */
  }
}

@media (max-width: 768px) {
  .titleIntro {
    font-size: 75px; /* Adjusted font size for small screens */
    min-height: 200px; /* Adjusted min-height for small screens */
  }
}

@media (max-width: 576px) {
  .titleIntro {
    font-size: 40px; /* Adjusted font size for extra small screens */
    min-height: 200px; /* Adjusted min-height for extra small screens */
  }
}
</style>
