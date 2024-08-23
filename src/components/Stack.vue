<template>
  <section id="stack" class="mt-5">
    <div class="container tech">
      <h2 id="certs" class="text-center mt-1 mb-4 py-1">Tech. Stack Ratings</h2>
      <div class="row">
        <div class="col">
          <div class="skills-content skills-animation">
            <h5>Frontend Frameworks/Libraries & Tools</h5>

            <div class="progress">
              <span class="skill"><span>Vue3</span> <i class="val">84%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>Bootstrap5</span> <i class="val">98%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>Vanilla JavaScript</span> <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>GreenSock (GSAP)</span> <i class="val">69%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="69" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>ReactJS</span> <i class="val">76%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>Photoshop</span> <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

          </div>
          <hr>
        </div>

        <div class="col">
          <div class="skills-content skills-animation">
            <h5>Backend Frameworks/Database</h5>

            <div class="progress">
              <span class="skill"><span>postgresql</span> <i class="val">86%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>mySQL</span> <i class="val">87%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>supabase</span> <i class="val">96%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>Laravel</span> <i class="val">91%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="91" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>CapacitorJS</span> <i class="val">94%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>NodeJS</span> <i class="val">88%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->
          </div>
          <hr>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    let progressBars = document.querySelectorAll('.skills-animation .progress-bar');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-animation',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    progressBars.forEach((bar) => {
      let value = bar.getAttribute('aria-valuenow');
      tl.fromTo(bar,
        { width: '0%' },
        {
          width: value + '%',
          duration: 1.5,
          ease: 'power1.out'
        },
        0 // Sync all animations
      );
    });
  }
};
</script>

<style scoped>
.skills-content h5 {
  font-size: 18px;
  font-weight: 700;
  margin: 30px 0 15px 0;
}

.progress {
  height: 36px;
  display: block;
  background: none;
  border-radius: 0;
  margin-top: 15px;
}

.progress .skill {
  color: var(--default-color);
  padding: 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: var(--heading-font);
}

.progress .skill .val {
  float: right;
  font-style: normal;
}

.progress-bar-wrap {
  background: #ddd;
  height: 10px;
}

.progress-bar {
  width: 1px;
  height: 10px;
  background-color: #A91D3A;
}

.tech {
  color: #ddd;
}
</style>
