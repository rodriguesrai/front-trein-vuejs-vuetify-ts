<template>
  <div>
    <TheHeader />
    <h1>About Page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/TheHeader.vue'

export default defineComponent({
  name: 'AboutPage',
  components: {
    TheHeader
  }
})
</script>
