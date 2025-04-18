<template class="dark font-sans">
  <div id="app" class="bg-jet">
    <div class="container mx-auto pt-1 w-full max-width=100%">
      <!-- <v-navbar /> -->
      <router-view />
    </div>
    <v-footer/>
  </div>
</template>

<script>
// import VNavbar from "./components/Navbar.vue";
import VFooter from "./components/Footer.vue"
export default {
  components: { VFooter }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

html {
  scroll-behavior: smooth;
  font-family: 'Poppins', sans-serif;
}
</style>
