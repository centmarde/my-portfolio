<template>
    <div class="about_container my-5">
        <hr />
        <div class="row mt-5 justify-content-between">
            <section id="resume" class="col resume secton">
                <div class="section-decorator"></div> <!-- Vertical line wrapping the section -->
                <h2 id="certs2" class="resume-title">Professional Highlights</h2>

                <div class="container">
                    <div class="resume-item pb-0">
                        <h4>Mobile Developer</h4>
                        <ul>
                            <li>6 months experience in Mobile Development (NodeJs).</li>
                        </ul>
                    </div>
                    <div class="resume-item pb-0">
                        <h4>Web Developer</h4>
                        <ul>
                            <li>6 months experience in Web Development (JavaScript, React).</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="resume" class="col resume section">
                <div class="section-decorator"></div> <!-- Vertical line wrapping the section -->
                <h2 id="certs2" class="resume-title">Work Experience</h2>
                <div class="resume-item">
                    <h4>Freelance Digital Artist/Graphic Designer</h4>
                    <span>Jan 2020 - Nov 2020</span>
                    <ul>
                        <li>Created fan arts and graphic designs in JPEG and PNG formats for use on stickers,
                            tarpaulins, and canvases for HoloLive artists living overseas.</li>
                        <li>Developed a personalized codeless website for a HoloLive performer.</li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
    <Education />
    <Club/>

</template>

<script setup>
import Education from './AboutLayers/Education.vue';
import Club from './AboutLayers/Club.vue';

</script>

<style lang="scss" scoped>
.about_container {
    color: #EEEEEE;
}

.resume {
    position: relative;
    padding-left: 40px;
    /* Add padding to make room for the decorator */
}

.section-decorator {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #EEEEEE;
    /* White vertical line */
}

.section-decorator::before {
    content: "";
    position: absolute;
    top: 30px;
    /* Adjust this value to align with h4 */
    left: -8px;
    width: 16px;
    height: 16px;
    background-color: #A91D3A;
    /* Circle background color */
    border: 2px solid #A91D3A;
    /* White circle border */
    border-radius: 50%;
}

.resume-title {
    color: var(--heading-color);
    font-size: 26px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 20px;
}

.resume-item {
    padding: 0 0 20px 20px;
    position: relative;
}

.resume-item ul {
    list-style-type: none;
    /* Remove default list styling */
    padding-left: 0;
    /* Remove default padding */
}

.resume-item ul li {
    position: relative;
    padding-left: 20px;
    /* Space for the dot */
    margin-bottom: 10px;
    /* Space between items */
}

.resume-item ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 30%;
    /* Center vertically */
    width: 8px;
    height: 8px;
    background-color: #EEEEEE;
    /* Dot color */
    border-radius: 50%;
    /* Make it a circle */
    transform: translateY(-50%);
    /* Adjust for perfect vertical centering */
}

.resume-item h4 {
    margin-top: 0;
    margin-bottom: 10px;
}

.resume-item span {
    display: block;
    margin-bottom: 10px;
}
</style>
