<template>
  <div>
    <section id="home"
      class="flex flex-col-reverse md:flex-row justify-left xl:space-x-54 lg:space-x-34 sm:space-x-12 xl:p-8 xl:pt-1 pt-1 mx-auto mb-10">
      <div class="w-100% flex m-12 mt-4 p-12 rounded-3xl bg-container-background container-shadow">
        <div class="w-2/3 flex flex-col space-y-4 pr-20">
          <div class="mt-4 xl:mt-0">
            <h2 class="3xl:text-2xl text-container-title">
              <span class="lg:text-5xl tracking-normal font-bold">{{ $t('myName') }}</span>
            </h2>
          </div>
          <div>
            <h3 class="text-container-subtitle text-opacity-80 text-3xl 2xl:text-6xl tracking-normal focus-in-expand ">{{ $t('job') }}</h3>
          </div>
          <div>
            <h5 class="text-container-subtitle text-opacity-70 text-xl 2xl:text-3xl tracking-normal focus-in-expand ">{{ $t('education') }}</h5>
          </div>
          <div>
            <p
              class="text-sm lg:text-base leading-loose tracking-relaxed lg:leading-loose lg:tracking-relaxed text-container-subtitle text-opacity-60 whitespace-pre-line">
              Location: {{ $t('location') }}</p>
          </div>
          <div>
            <p
              class="text-sm lg:text-base leading-loose tracking-relaxed lg:leading-loose lg:tracking-relaxed text-container-body text-opacity-50 whitespace-pre-line">
              {{ $t('Aboutme') }}</p>
          </div>
        </div>
        <div class="w-2/5 h-100% flex flex-col">
          <div class="flex w-100% h-3/5 m-4">
            <img class="rounded-3xl" src="../assets/agnel.jpg" alt="Agnel" />
          </div>
          <div class="flex flex flex-col mt-8">
            <a href="/resume.html" target="_blank"
              class="text-xs text-container-body lg:text-base bg-transparent 2xl:w-1/3 font-semibold uppercase text-center hover:bg-accent hover:text-button-text py-2 px-8 border border-border hover:border-transparent rounded mx-20">
              {{ $t('seeResume') }}
            </a>

            <!-- Social media icons -->
            <v-links />
          </div>
        </div>
      </div>
    </section>


    <!-- Skills Section -->
    <section id="skills" class="my-32">
      <Skills />
    </section>

    <section id="timeline" class="my-32">
      <Timeline />
    </section>

    <section id="projects" class="my-32">
      <Projects />
    </section>

    <section id="blogs" class="my-32">
      <Blogs />
    </section>

  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import VLinks from '../components/links.vue'
import Skills from '../components/Skills.vue'
import Timeline from '../components/Timeline.vue';
import Projects from '../components/Projects.vue';
import Blogs from '../components/Blogs.vue';

export default {
  name: "Home",
  components: { VLinks, Skills, Timeline, Projects, Blogs },
  data() {
    return {
      dataTimeline: [
        {
          from: new Date(2017, 5, 22),
          title: "Name",
          showDayAndMonth: true,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2017, 8),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2016, 11),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2018, 7, 19),
          title: "Name",
          showDayAndMonth: true,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2016, 1),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2016, 6),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2013, 1),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2015, 1),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        },
        {
          from: new Date(2012, 1),
          title: "Name",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
        }]
    };
  },
  computed: {
    ...mapGetters({ isTranslated: 'isTranslated' })
  },
  mounted() {
    window.addEventListener('scroll', this.$refs.scrollTop.scrollListener)
  },
  destroyed() {
    this.$store.commit('ToggleIsTranslated')
  }
};
</script>


<style scoped>
.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes slit-in-diagonal-1 {
  0% {
    transform: translateZ(-800px) rotate3d(1, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  54% {
    transform: translateZ(-160px) rotate3d(1, 1, 0, 87deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  100% {
    transform: translateZ(0) rotate3d(1, 1, 0, 0);
    animation-timing-function: ease-out;
  }
}

@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    filter: blur(12px);
    opacity: 0;
  }

  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.slit-in-diagonal-1 {
  -webkit-animation: slit-in-diagonal-1 0.45s ease-out both;
  animation: slit-in-diagonal-1 0.45s ease-out both;
}

.focus-in-expand {
  animation: focus-in-expand 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.container-shadow {
  --tw-shadow: 0 10px 36px -3px rgb(54 115 219), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgb(54 115 219)), var(--tw-ring-shadow, 0 0 rgb(54 115 219)), var(--tw-shadow);
}
</style>
