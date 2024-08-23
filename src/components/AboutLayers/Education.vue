!<template>
    <div class="body-index">
        <hr>
        <div class="row mt-5 justify-content-between">
            <section id="resume" class="col resume section">
                <div class="section-decorator"></div> <!-- Vertical line wrapping the section -->
                <h2 id="certs2" class="resume-title">Education</h2>

                <div class="container">
                    <div class="resume-item pb-0">
                        <h4>Bachelor of Science in Information Technology
                        </h4>
                        <span>Aug 2021 - Present
                        </span>
                        <ul>
                            <li>Caraga State Univeristy</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="resume" class="col resume section">
                <div class="section-decorator"></div> <!-- Vertical line wrapping the section -->
                <h2 id="certs2" class="resume-title">Training and Seminars Attended
                </h2>
                <div class="resume-item">
                    <h4>PSITE Caraga</h4>

                    <ul>
                        <li>11th ICT Student Congress and Skills Competition hosted by the Philippine
                            Society of Information Technology Educators (PSITE), Caraga region.</li>
                    </ul>
                </div>
            </section>
        </div>
        <br>
        <br>
        <hr>
    </div>
    <br>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style lang="scss" scoped>
.body-index {
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