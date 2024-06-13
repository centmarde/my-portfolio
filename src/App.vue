<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavLink from './components/NavLink.vue';
</script>

<template>
  <nav id="nav" class="navbar bg-dark">
    <div id="navcont" class="container d-flex justify-content-around">
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#background">Background</NavLink>
      <NavLink href="#stack">Stack</NavLink>
      <NavLink href="#project">Projects</NavLink>
      <NavLink href="#graphics">Graphics</NavLink>
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
  z-index: 1000;
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

.is-active {
  color: lightblue;
}
</style>
