<template>
   <div id="index_body">
      <br><br><br>
      <div class="container">
         <div class="row">
            <div class="col text-light">
               <br><br>
               <h1>Hi There,</h1>
            </div>
            <div class="d-flex">
               <h2>I'm</h2>
               <h2 class="ms-3">Centmarde</h2>
            </div>
            <h1 id="typing-text"></h1>
            <div class="col"></div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
    mounted() {
        const textArray = ['A FullStack Developer.', 'A Web Designer.', 'Im also a digital artist.', 'Nice to meet you.'];
        const typingElement = document.getElementById('typing-text');
        let index = 0;
        let letterIndex = 0;
        let direction = 1;
        let delay = 50;
        let isFinished = false; 
        
        function typeText() {
            typingElement.textContent = textArray[index].substring(0, letterIndex);
            
            
            if (letterIndex === textArray[index].length && !isFinished) {
                isFinished = true;
                setTimeout(() => {
                    isFinished = false; 
                    index = (index + 1) % textArray.length; 
                    letterIndex = 0; t
                    direction = 1; 
                }, 2000); 
            } else if (letterIndex === 0) {
                direction = 1;
            }
            
            letterIndex += direction;
            setTimeout(typeText, delay);
        }
        
        typeText();
    }
}


</script>
