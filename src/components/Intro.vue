<template>
  <div class="intro-loader" ref="loader">
    <div class="loader-text text-center">"Where there is no Struggle, there is no Strenght"</div>
    <div class="loader-spinner"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import gsap from 'gsap';

export default {
  name: 'IntroLoader',
  setup() {
    onMounted(() => {
      // Animate the loader text appearance
      gsap.fromTo(
        '.loader-text',
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      // Manually create a scramble effect
      const targetText = '"Where there is no Struggle, there is no Strength"';
      const scrambleText = (element, text, duration) => {
        let interval;
        const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        const scramble = () => {
          const scrambled = text
            .split('')
            .map(char =>
              Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char
            )
            .join('');
          element.textContent = scrambled;
        };

        scramble(); // Start scramble immediately
        interval = setInterval(scramble, 50); // Scramble every 50ms

        setTimeout(() => {
          clearInterval(interval); // Stop scrambling
          element.textContent = text; // Set final text
        }, duration * 350); // Duration in seconds
      };

      const loaderTextElement = document.querySelector('.loader-text');
      scrambleText(loaderTextElement, targetText, 5);

      // Animate the spinner rotation
      gsap.fromTo(
        '.loader-spinner',
        { rotation: 0 },
        { rotation: 360, duration: 2, repeat: -1, ease: 'linear' }
      );

      // Fade out and hide the loader after animations
      gsap.to('.intro-loader', {
        opacity: 0,
        duration: 0.5,
        delay: 3,
        onComplete: () => {
          // Change z-index to -1 to remove the loader from view
          gsap.to('.intro-loader', {
            zIndex: -1,
            duration: 0
          });
        }
      });
    });
  }
};
</script>




<style scoped>
.intro-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #151515;
  color: #EEEEEE;
  z-index: 10002;
}

.loader-text {
  font-size: 2rem;
  margin-bottom: 20px;
}

.loader-spinner {
  border: 8px solid #151515;
  border-top: 8px solid #A91D3A;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
