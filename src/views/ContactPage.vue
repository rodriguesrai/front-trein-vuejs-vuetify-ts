<template>
  <div>
    <TheHeader />
    <h1>Contact Page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/TheHeader.vue'

export default defineComponent({
  name: 'ContactPage',
  components: {
    TheHeader
  }
})
</script>
