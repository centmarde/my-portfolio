<template>
    <div>
        <body>
        <section>
            <img src="../assets/back_mountain.png" ref="mountains_behind" id="mountains_behind" />
            <h2 id="text" ref="text">Welcome</h2>
            <a href="#home" ref="btn" id="btn">Explore</a>
            <div id="mouse"></div>
            <div class="mouse"></div>
            <img src="../assets/mountain.png" ref="mountains_front" id="mountains_front" />
        </section>
        <div class="sec" id="sec">
            <h2>Parallax Scrolling</h2>
            <p>
                <!-- Lorem ipsum text -->
            </p>
        </div>
    </body>
    </div>
</template>

<!-- <script>
export default {
    mounted() {
        let mountains_behind = this.$refs.mountains_behind;
        let text = this.$refs.text;
        let btn = this.$refs.btn;
        let mountains_front = this.$refs.mountains_front;
        let header = this.$refs.header;

        window.addEventListener("scroll", function () {
            let value = window.scrollY;
            mountains_behind.style.top = value * 0.5 + "px";
            /* mountains_front.style.top = value * 10 + "px"; */
            text.style.marginRight = value * 4 + "px";
            header.style.marginRight = value * 0.5 + "px";

            // Adjust the scale of mountains_front based on scrollY
            let scaleValue = Math.max(1, 1 + value * 0.001); // Ensure the scale doesn't go below 1
            mountains_front.style.transform = `scale(${scaleValue})`;
        });
        
    },
};
</script> -->

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    overflow-x: hidden;
    background: linear-gradient(#2b1055, #7597de);
}

section {
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

section::before {
    content: ' ';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #1c0522, transparent);
    z-index: 1000;
}

section img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    object-fit: cover;
    pointer-events: none;
}

section img#moon {
    mix-blend-mode: screen;
}

section img#mountains_front {
    transition: transform 0.1s linear;
    will-change: transform;
    z-index: 100;
    top: -20%;
}
section img#mountains_behind {
    margin-top: -10%;
}

#text {
    position: absolute;
    color: #fff;
    font-size: 5vw;
    right: -10px;
}

#btn {
    position: absolute;
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    border-radius: 40px;
    background: #fff;
    color: #2b1055;
    font-size: 1.5em;
    z-index: 999;
    transform: translateY(100px);
}

.sec {
    position: relative;
    padding: 100px;
    background: #1c0522;
    /*  background */
}

.sec h2 {
    font-size: 3.5em;
    margin-bottom: 10px;
    color: #fff;
}

.sec p {
    font-size: 1.2em;
    color: #fff;
}

/*mouse*/
.mouse {
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 75%;
    width: 24px;
    margin: -12px;
    height: 50px;
    border: 3px solid white;
    border-radius: 30px;
    z-index: 1;
}

.mouse::after {
    display: block;
    content: "";
    position: absolute;
    left: 13px;
    top: 10px;
    width: 4px;
    height: 4px;
    margin-left: -5.6px;
    background-color: white;
    border-radius: 2px;
    animation: mouseWheel 2.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

@keyframes mouseWheel {
    0% {
        transform: translateY(0);
        opacity: 0;
    }

    10% {
        transform: translateY(0);
        opacity: 1;
    }

    30% {
        transform: translateY(0);
        height: 4px;
    }

    50% {
        transform: translateY(0);
        height: 20px;
    }

    70% {
        transform: translateY(15px);
        height: 4px;
        opacity: 1;
    }

    90% {
        opacity: 0;
    }

    100% {
        transform: translateY(15px);
        opacity: 0;
    }
}
</style>
