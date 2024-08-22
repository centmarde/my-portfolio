<template>
  <nav id="nav" class="navbar">
    <div id="navcont" class="container d-flex justify-content-between align-items-center">
      <div class="logo-container" :class="{ hidden: isMenuVisible }">
        <img
          src="./assets/tribal-circle-png.png"
          width="30px"
          alt="spinner"
          class="spin-infinite"
        />
      </div>
      <div class="hamburger mx-2" @click="toggleMenu">
        <div class="bar" :class="{ open: isMenuVisible }"></div>
        <div class="bar" :class="{ open: isMenuVisible }"></div>
        <div class="bar" :class="{ open: isMenuVisible }"></div>
      </div>
      <div class="nav-links" :class="{ show: isMenuVisible }">
        <NavLink href="#home" @click="closeMenu">Home</NavLink>
        <NavLink href="#background" @click="closeMenu">Background</NavLink>
        <NavLink href="#stack" @click="closeMenu">Stack</NavLink>
        <NavLink href="#graphics" @click="closeMenu">Certificates</NavLink>
        <NavLink href="#project" @click="closeMenu">Projects</NavLink>
        <NavLink href="#contact" @click="closeMenu">Contact</NavLink>
      </div>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavLink from './components/NavLink.vue';

const isMenuVisible = ref(false);

const closeMenu = () => {
  isMenuVisible.value = false;
};
const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};
</script>

<style scoped>
/* Base Styles */

body {
  margin: 0;
  font-family: "Roboto Condensed", sans-serif;
}

.navbar {
  border-radius: 10px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  background: #111;
}

#navcont {
  height: 6vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 10px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-container.hidden {
  display: none; /* Hide the logo container */
}

.spin-infinite {
  animation: spin 3s infinite linear;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10001;
  position: relative;
}

.bar {
  width: 100%;
  height: 4px;
  background-color: white;
  transition: all 0.3s ease;
}

.bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.nav-links {
  display: flex;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s, transform 0.3s;
}

.nav-link:hover {
  color: lightblue;
}

.nav-link.active {
  color: lightblue;
}

.nav-text {
  color: white;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Mobile Styles */

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .logo-container {
    display: none; /* Hide the logo container on mobile screens */
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    height: 100vh; /* Full height on mobile screens */
    background-color: #333;
    position: fixed; /* Fixed position to overlay the content */
    top: 0;
    left: 0;
    z-index: 10000;
    padding: 10px 0;
    text-align: center;
    transition: opacity 0.3s ease; /* Smooth transition */
  }

  .nav-links.show {
    display: flex;
    opacity: 1;
  }

  .nav-link {
    margin: 20px 0; /* Adjust spacing for full screen */
    font-size: 24px; /* Adjust font size for better readability */
  }

  #navcont {
    justify-content: space-between;
  }
}
#nav{
  background-color: #111;
}

</style>
