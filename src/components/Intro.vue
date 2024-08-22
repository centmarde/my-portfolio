<template>
  <div class="intro-loader" ref="loader">
    <div class="loader-text">Welcome to My Site</div>
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
      gsap.fromTo(
        '.loader-text',
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
      
      gsap.fromTo(
        '.loader-spinner',
        { rotation: 0 },
        { rotation: 360, duration: 2, repeat: -1, ease: 'linear' }
      );
      
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
          // Additional logic can be added here, e.g., redirect to another component
          // e.g., router.push('/home');
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
  background: #333;
  color: #fff;
  z-index: 10002;
}

.loader-text {
  font-size: 2rem;
  margin-bottom: 20px;
}

.loader-spinner {
  border: 8px solid rgba(255, 255, 255, 0.2);
  border-top: 8px solid #fff;
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
