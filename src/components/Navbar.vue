<template>
  <nav class="flex flex-nowrap justify-between items-center text-gray-700 dark:text-gray-300 xl:text-xl text-base pb-8 xl:pb-12 flex-col lg:flex-row lg:space-y-0 space-y-5">

  </nav>
</template>


<script>
import i18n from "../i18n/index.js"

export default {
    name:'VNavbar',
    data(){
      return{
        IamNotInHome: true,
        choosenLanguage: "",
        choosenLan: "",
        isDarkMode: false,
        languages: [
          { id: 0, flag: "us", language: "en", title: "English" },
        ],
      }
    },
    watch:{
        $route (to){
            if(to.path != "/"){
              this.IamNotInHome = false
            }else{
              this.IamNotInHome = true
            }
        }
    },
    methods: {
      changeLocale(index) {
        i18n.locale = this.languages[index].language
        this.choosenLanguage = this.languages[index].flag
        this.choosenLan = this.languages[index].title
        this.$store.commit('ToggleIsTranslated')
        this.$refs.dropDown.hide()
      },
      goToRouter(destination){
        this.$router.push({ name: destination })
      },
      ToogleDarkMode(){
        this.isDarkMode ? localStorage.theme = 'light' : localStorage.theme = 'dark'
        print(this.isDarkMode)
        this.$router.go(0)
      }
    },
    mounted() {
      this.choosenLanguage = 'us'
    }
};
</script>

<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Fuggles&display=swap");
</style>