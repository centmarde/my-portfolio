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
      fps: 30, // Request high FPS for smoother animation
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
  padding: 0;
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

.gradient {
  width: 100vw;
  height: 200vh;
  position: relative;
  background: linear-gradient(180deg, rgba(21, 21, 21, 0) 0%, rgba(21, 21, 21, 1) 100%);
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

@media (max-width: 768px) {
  .animation {
    height: 100vh;
    position: absolute;
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
  min-height: 200px;
}

@keyframes neon {
  0%, 100% {
    text-shadow: 
      0 0 5px #C73659, 
      0 0 10px #C73659;
  }
  50% {
    text-shadow: 
      0 0 10px #C73659, 
      0 0 20px #C73659;
  }
}

@media (max-width: 992px) {
  .titleIntro {
    font-size: 40px;
    min-height: 200px;
    padding: 5rem;
  }
}
</style>

