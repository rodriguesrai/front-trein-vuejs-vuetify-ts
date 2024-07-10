<template>
  <div>
    <TheHeader />
    <h1>Home Page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/TheHeader.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    TheHeader
  }
})
</script>
