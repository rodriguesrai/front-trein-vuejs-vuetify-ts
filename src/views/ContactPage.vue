<template>
  <TheHeader />
  <v-main>
    <div>
      <h1>Contact Page</h1>
    </div>
  </v-main>
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
