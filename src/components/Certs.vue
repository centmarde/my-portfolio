<template>
  <section id="graphics">
    <div class="container">
      <h2 id="certs" class="text-center mt-1 mb-4">Achievements</h2>
      <h5 class="text-center mb-5">
        I appreciate acquiring credentials since it allows me to gain knowledge in an unexpected field, and I can try out new techniques so that I may include them in my work.
      </h5>

      <div class="run-animation">
        <div class="run-animation-inner">
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/Basic Building Blocks of the User Interface.pdf.png" alt="Graphic 1" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/1.png" alt="Graphic 2" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/2.png" alt="Graphic 4" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/3.png" alt="Graphic 5" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/4.png" alt="Graphic 6" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/5.png" alt="Graphic 7" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/6.png" alt="Graphic 8" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/7.png" alt="Graphic 9" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/8.png" alt="Graphic 10" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/9.png" alt="Graphic 11" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/10.png" alt="Graphic 12" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/11.png" alt="Graphic 13" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/12.png" alt="Graphic 14" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/13.png" alt="Graphic 15" class="img-fluid clickable">
          </div>
          <div class="col-12 col-md-4 mb-4 mx-3">
            <img src="../assets/14.png" alt="Graphic 16" class="img-fluid clickable">
          </div>
        </div>
      </div>
    </div>

    <div id="overlay" class="overlay">
      <span class="close-btn">&times;</span>
      <img id="fullscreen-img" src="" alt="Fullscreen Image">
    </div>
  </section>
</template>

<script setup lang="ts">
  // Function to open the image in fullscreen
  const openFullscreen = (event: Event) => {
    const overlay = document.getElementById('overlay')!;
    const fullscreenImg = document.getElementById('fullscreen-img') as HTMLImageElement;
    const target = event.target as HTMLImageElement;
    
    fullscreenImg.src = target.src;
    overlay.style.display = 'flex';

    // Trigger transition by setting opacity from 0 to 1
    setTimeout(() => {
      overlay.style.opacity = '1';
    }, 50); // Small delay to ensure transition starts properly
  };

  // Function to close the fullscreen view
  const closeFullscreen = () => {
    const overlay = document.getElementById('overlay')!;
    overlay.style.opacity = '0'; // Fade out by setting opacity to 0
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300); // Match transition duration in CSS
  };

  // Attach event listeners after the component is mounted
  window.addEventListener('load', () => {
    const images = document.querySelectorAll('.clickable');
    images.forEach(image => image.addEventListener('click', openFullscreen));
    
    const closeBtn = document.querySelector('.close-btn')!;
    closeBtn.addEventListener('click', closeFullscreen);
  });
</script>

<style scoped>

#graphics {
  padding: 80px 0;
  overflow-x: hidden; /* Prevent horizontal overflow */

}

.img-fluid {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.img-fluid:hover {
  transform: scale(1.1);
}

h2 {
  color: #333;
  font-size: 2.5rem;
}

@keyframes runRightToLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-425%);
  }
}

.run-animation {
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.run-animation-inner {
  display: inline-flex;
  animation: runRightToLeft 100s linear infinite;
}

.overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
  opacity: 0; /* Initial opacity for transition */
  transition: opacity 0.3s ease; /* Add transition for fade effect */
  z-index: 999;
}

.overlay.active {
  display: flex; /* Ensure overlay is displayed when active */
  opacity: 1; /* End state for transition */
}

.overlay img {
  max-width: 90%;
  max-height: 90%;
}

.close-btn {
  position: absolute;
  top: 20px;
  left: 30px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}
</style>

