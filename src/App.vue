<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavLink from './components/NavLink.vue';
</script>

<template>
  <nav id="nav" class="navbar bg-dark">
    <div id="navcont" class="container d-flex justify-content-around">
      <div>
    <img
      src="./assets/tribal-circle-png.png"
      width="30px"
      alt="spinner"
      style="transform: rotate(-15.2899deg) translateZ(0px);"
      class="spin-infinite"
    />
  </div>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#background">Background</NavLink>
      <NavLink href="#stack">Stack</NavLink>
      <NavLink href="#project">Projects</NavLink>
      <NavLink href="#graphics">Achievements</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
#nav {
  border-radius: 10px;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
}

#navcont {
  height: 6vh;
  display: flex;
  align-items: center;
}

a {
  color: white;
  text-decoration: none;
  font-family: "Roboto Condensed", sans-serif;
}
.NavLink {
  display: inline-block;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

/* Tilt effect on hover */
.NavLink:hover {
  transform: rotate(-5deg); /* Adjust the tilt angle as needed */
}
.is-active {
  color: lightblue;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Apply animation */
.spin-infinite {
  animation: spin 3s infinite linear; /* Adjust duration and timing as needed */
}
</style>
