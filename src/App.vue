<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script setup lang="ts">
console.log('testando variavel de ambiente', import.meta.env.VITE_TITLE)
console.log('testando variavel de ambiente', import.meta.env.VITE_API_URL)
</script>
