<template>
  <section id="graphics">
    <div class="container">
  <h2 class="text-center mt-1 mb-4">Certificates and Achievements</h2>

  <h5 class="text-center mb-5">
    I appreciate acquiring credentials since it allows me to gain knowledge in an unexpected field. and I can try
    out new techniques. So that I may include it into my work.
  </h5>

  <div class="run-animation">
    <div class="run-animation-inner">
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/Basic Building Blocks of the User Interface.pdf.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <a href="#"> <img src="../assets/1.png" alt="Graphic 1" class="img-fluid"></a>
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/2.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/3.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/4.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/5.png " alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/6.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/7.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/8.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/9.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/10.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/11.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/12.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/13.png" alt="Graphic 1" class="img-fluid">
      </div>
      <div class="col-md-4 mb-4 mx-3">
        <img src="../assets/14.png" alt="Graphic 1" class="img-fluid">
      </div>
    </div>
  </div>
</div>



  </section>
</template>



<script setup lang="ts">
// No imports or additional setup needed with <script setup>
</script>

<style scoped>

#graphics {
  padding: 80px 0;

}

.img-fluid {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Smooth transition for transform property */
}

.img-fluid:hover {
  transform: scale(1.1); /* Scale up by 10% on hover */
}

h2 {
  color: #333;
  /* Example text color */
  font-size: 2.5rem;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  /* Example border styling */
  border-radius: 5px;
  /* Example border radius */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Example box shadow */
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
  
  white-space: nowrap;
}

.run-animation-inner {
  display: inline-flex;
  animation: runRightToLeft 100s linear infinite; /* Adjust the duration for desired speed */
}

</style>