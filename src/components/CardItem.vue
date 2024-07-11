<!-- src/components/CardItem.vue -->

<template>
  <v-card class="mx-auto" max-width="400">
    <v-img src="https://via.placeholder.com/400x200" alt="Card image"></v-img>
    <v-card-title>Card Title</v-card-title>
    <v-card-text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </v-card-text>
    <v-card-actions>
      <v-btn> Action </v-btn>
      <v-btn>Another Action</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardItem'
})
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
