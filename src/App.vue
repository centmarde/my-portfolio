<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <nav id="nav" class="navbar bg-dark">
        <div id="navcont" class="container">
            <div>
                <router-link class="link mx-3" to="/">Home </router-link>
                <router-link class="link mx-3" to="/about">About </router-link>
                <router-link class="link mx-3" to="/portfolio">My Portfolio </router-link>
                <router-link class="link ms-3 me-4" to="/contact">Contact </router-link>
            </div>
           
        </div>
    </nav>
    <main>
        <RouterView/>
    </main>
</template>

<style>
   /* CSS for hover effect */
   .link-container {
        display: inline-block; 
        overflow: hidden; /* Ensure the container doesn't overflow when zooming */
    }

    .link {
        color: white; 
        text-decoration: none; 
       
    }

    /* Zoom effect */
    .link:hover {
        color: lightblue; 
        transition: color 0.3s, transform 0.3s;
    }
</style>