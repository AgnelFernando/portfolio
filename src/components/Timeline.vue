<template>
  <div class="flex container px-36 py-8 flex-col">
    <Title titlename="Experiences" />
    <div class="relative flex flex-col container">
      <div class="absolute border-accent border-2 h-full left-1/2"></div>
      <transition-group name="expand" tag="div">
        <div v-for="event in expanded ? events : events.slice(0, 2)" :key="event.title"
          :class="['flex my-5', isExp(event) ? 'flex-row' : 'flex-row-reverse']">
          <div class="p-4 bg-card-background rounded-lg hover:shadow-lg w-45p text-card-body">
            <h3 class="text-lg text-card-title">{{ event.title }}
              <a v-if="event.link" :href="event.link" target="_blank">
                <img class="inline h-5 w-5 mx-1 hover:shadow" src="../assets/link-icon.svg" alt="Link Icon">
              </a>
            </h3>
            <h4 class="text-md">{{ event.subtitle }}</h4>
            <div class="mt-2" v-html="event.description"></div>
          </div>
          <div class="flex w-10p justify-center z-10 ml-1">
            <div class="p-1.5 bg-accent2 rounded-full border-border border-m h-1 w-1 self-center" />
          </div>
          <div :class="['text-sm text-text-title self-center w-45p', isExp(event) ? 'text-left' : 'text-right']">
            {{ event.date }}
          </div>
        </div>
      </transition-group>
    </div>
    <div class="flex justify-center mt-2">
      <button @click="expanded = !expanded" class="flex py-3 text-text-subtitle flex items-center hover:text-text-hover transition">
        <span class="transition-opacity duration-300">{{ expanded ? 'View Less' : 'View More' }}</span>
        <svg v-if="!expanded" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
          <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"/>
          <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue';

export default {
  name: 'Timeline',
  components: { Title },
  data() {
    return {
      expanded: false,
      events: [
        { title: 'National Engineering college', subtitle: 'Bachelor of Engineering', date: 'Jun 2013 - Apr 2017', description: 'Completed Bachelor of Engineering in Mechanical Engineering', type: 'edu', link: "https://nec.edu.in/" },
        { title: 'Zoho', subtitle: 'Software Engineer Intern', date: 'Jan 2019 - Mar 2019', description: 'I worked on the Zoho Creator app which uses java struts framework and ReactJs.', type: 'exp', link: "https://www.zoho.com/" },
        {
          title: 'Pentabay', subtitle: 'Senior Software Engineer', date: 'Apr 2019 - May 2020', description: `<b>Sprout Financial</b>:<br> Led a team of 5 in developing a 
              financial management web app. It's built on Spring Boot for the API and Angular for the front end, hosted on AWS servers in the USA. 
              The app connects with users' bank accounts via Plaid, updating transactions on Plaid webhooks. Features include budgeting, wallet, emotional tracking, bills, and notifications.<br> 
              <b>Naqdina payment services</b>: <br>Converted 11 microservices from Java Struts to Spring Boot, focusing on the authentication microservice.`, type: 'exp', link: "https://pentabay.com/"
        },
        {
          title: 'Petnion', subtitle: 'CEO/CTO', date: 'Aug 2020 - Jan 2022', description: `I started my own company, a social media application for connecting pets, pet lovers, and people who love pets. I developed, managed, hosted, and marketed these applications.
              <br><b>Web Application</b>:<br>
                A social media platform for sharing document-type posts with images and markdown text. Built with Vue.js, ProseMirror, Spring Boot, Ejabberd, and MySQL, and hosted on AWS. Users can create personal and page accounts, form mutual friendships, and follow page accounts.
              <br><b>Android Application</b>:<br>
              A social media app for sharing images and videos. Developed in Kotlin with a Spring Boot backend, video processing handled by Fastapi, Celery, Python, and FFmpeg, and chat by Go (Tinode). Hosted on AWS and available on the Google Play Store. Users can maintain profiles, create multiple pet profiles, and follow other users and pets.`, type: 'exp'
        },
        {
          title: 'Bazaarvoice', subtitle: 'Senior Software Engineer', date: 'May 2022 - Aug 2023',
          description: `I worked on the applications and services that enabled customers to configure the software they purchased from Bazaarvoice.<br>
                  <ul style="list-style: inside;"">
                    <li>Significantly improved the performance of an application, cutting its load time in half.</li>
                    <li>Participated in training and integrating Review Coach AI into the existing product. Review Coach is a generative AI that helps customers write better reviews.</li>
                    <li>Took on a leadership role by mentoring a team of six, overseeing software development, bug fixing, and testing.</li>
                    <li>Transformed monolithic applications into a server-client architecture.</li>
                  </ul>`, type: 'exp', link: "https://www.bazaarvoice.com/"
        },
        { title: 'Depaul University', subtitle: 'MS in Artificial Intelligence', date: 'Aug 2023 - Present', description: `Currently pursuing a Master's degree in Artificial Intelligence, with a focus on Deep Reinforcement Learning and Computer Vision.`, type: 'edu', link: "https://www.depaul.edu/" },
      ].reverse(),
    };
  },
  methods: {
    isExp(event) {
      return event.type == 'exp'
    }
  }
};
</script>

<style scoped>
.w-10p {
  width: 10%;
}

.w-45p {
  width: 45%;
}

.border-m {
  border-width: medium;
}

/* Smooth expand animation */
.expand-move {
  transition: transform 1.0s ease;
}

.expand-enter-active, .expand-leave-active {
  transition: all 1.0s ease-in-out;
}

.expand-enter, .expand-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.expand-enter-to, .expand-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>