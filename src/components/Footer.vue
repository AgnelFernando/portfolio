<template>
    <div class="w-full h-44 shadow flex flex-col lg:flex-row justify-between items-center py-4 px-0 sm:px-52 mt-32">
      <div class="flex flex-col mb-5 xl:mb-0">
          <div><h4 class="text-3xl mb-2 text-text-title">{{$t('ContactMe')}}:</h4></div>
          <hr class="mb-2">
          <div class="flex space-x-1 my-3 text-text-body xl:tracking-tight text-sm lg:text-base">
              <h6 class="font-semibold">{{$t('Phone')}}: </h6><a class="hover:text-text-hover" href="tel:+17798045404"> {{$t('PhoneNumber')}}</a>
          </div>
          <div class="flex space-x-1 my-3 text-text-body xl:tracking-tight text-sm lg:text-base">
              <h6 class="font-semibold">{{$t('Email')}}: </h6><a class="hover:text-text-hover" href="mailto:gilesagnel@gmail.com">gilesagnel@gmail.com</a>
          </div>
      </div>
      <div>
          <v-links/>
      </div>
    </div>
  </template>
  
  
  <script>
  import VLinks from "./links.vue"
  
  export default {
      name: 'VFooter',
      components:{VLinks}
  }
  </script>