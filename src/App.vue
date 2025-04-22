<template class="dark font-sans">
  <div id="app" class="min-h-screen bg-contain bg-center overflow-y-auto" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="container mx-auto pt-1 w-full max-width=100%">
      <router-view />
    </div>
    <v-footer/>
  </div>
</template>

<script>
import VFooter from "./components/Footer.vue"
import bgImage from '@/assets/images/bg.jpg';
export default {
  components: { VFooter },
  data() {
    return {
      bgImage
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');


html {
  scroll-behavior: smooth;
  font-family: 'Poppins', sans-serif;
}
</style>
