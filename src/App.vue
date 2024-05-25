<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <div>
                <router-link class="link text-light" to="/">Home</router-link>
                <router-link class="link text-light" to="/about">About</router-link>
            </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
    <main>
        <RouterView/>
    </main>
</template>