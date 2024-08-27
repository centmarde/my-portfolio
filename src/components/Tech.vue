<template>
  <div class="card-container">
    <div class="card">
      <img class="pic" src="../assets/laravel.svg" alt="Laravel">
    </div>
    <div class="card">
      <img class="pic" src="../assets/Vue.png" alt="Vue">
    </div>
    <div class="card">
      <img class="pic" src="../assets/Bootstrap_logo.svg.png" alt="Bootstrap">
    </div>
    <div class="card">
      <img class="pic" src="../assets/nodejs.png" alt="Node.js">
    </div>
    <div class="card">
      <img class="pic" src="../assets/Supabase.png" alt="Supabase">
    </div>
    <div class="card">
      <img class="pic" src="../assets/Photoshop.png" alt="Photoshop">
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 0;
}

.card {
  flex: 1 1 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pic {
  max-width: 100%;
  height: auto;
}

@media (max-width: 992px) {
  .pic {
    width: 90px; /* Adjusted width for medium screens */
  }
}

@media (max-width: 768px) {
  .pic {
    width: 75px; /* Adjusted width for small screens */
  }
}

@media (max-width: 576px) {
  .pic {
    width: 50px; /* Adjusted width for extra small screens */
  }
}
</style>
