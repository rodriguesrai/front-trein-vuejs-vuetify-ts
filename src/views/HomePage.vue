<template>
  <v-main class="main-container">
    <TheHeader data-testid="header" />
    <v-carousel :show-arrows="false" cycle hide-delimiter-background>
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} {{ $t('home.slideText') }}</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="card-container">
      <CardItem v-for="index in 3" :key="index" />
    </div>
    <TheFooter data-testid="footer" />
  </v-main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import CardItem from '@/components/CardItem.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const slides = ref<string[]>([])
const colors = ref(['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'])

const updateSlides = () => {
  slides.value = [
    t('home.slides.first'),
    t('home.slides.second'),
    t('home.slides.third'),
    t('home.slides.fourth'),
    t('home.slides.fifth')
  ]
}
updateSlides()
watch(locale, () => {
  updateSlides()
})
</script>

<style scoped>
h1 {
  padding: 2rem;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem;
  gap: 1rem;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.carousel {
  margin-bottom: 2rem; /* Ajuste o valor conforme necessário */
}
</style>
