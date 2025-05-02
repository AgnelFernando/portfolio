<template>
    <div class="flex justify-self-center my-24">
      <div class="flex-col items-center justify-center bg-container-background text-center px-44 py-32 rounded-2xl">
        <h1 class="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p class="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</p>
        <p class="text-gray-600 mb-6">Sorry, the page you're looking for doesn't exist.</p>
        <router-link
          to="/"
          class="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow"
        >
          Go Back Home
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound"
  };
  </script>
  