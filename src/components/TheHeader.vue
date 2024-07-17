<template>
  <v-app-bar class="header" elevation="5">
    <template v-slot:prepend>
      <v-app-bar-nav-icon>
        <v-icon icon="$vuetify"></v-icon>
      </v-app-bar-nav-icon>
    </template>
    <div>
      <v-btn to="/">{{ $t('nav.home') }}</v-btn>
      <v-btn to="/contact">{{ $t('nav.contact') }}</v-btn>
    </div>
    <v-app-bar-title class="title">{{ $t('nav.title') }}</v-app-bar-title>
    <div>
      <v-btn @click="toggleLanguage">{{ currentLanguage }}</v-btn>
      <v-btn to="/login">{{ $t('nav.login') }}</v-btn>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Método para alternar o idioma
const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'ptBr' : 'en'
}

// Computa o idioma atual para exibir no botão toggle
const currentLanguage = computed(() => {
  return locale.value === 'en' ? 'English' : 'Português'
})
</script>

<style scoped>
.header {
  background-color: #1976d2;
  color: white;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
</style>
