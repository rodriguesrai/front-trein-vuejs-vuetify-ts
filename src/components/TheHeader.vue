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
    <v-btn-toggle v-model="toggle_exclusive">
      <v-btn @click="changeLanguage('en')" class="transparent-button"> EN </v-btn>
      <v-btn @click="changeLanguage('ptBr')" class="transparent-button">BR</v-btn>
    </v-btn-toggle>
    <div v-if="store.email">
      <span>{{ store.email }}</span>
    </div>
    <v-btn v-if="!isLogged" to="/login">{{ $t('nav.login') }}</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store/useUserStore'

const store = useUserStore()

const { locale } = useI18n()

const toggle_exclusive = ref(false)

const changeLanguage = (lang: string) => {
  locale.value = lang
}

const isLogged = computed(() => store.email !== '')
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

.transparent-button {
  background-color: transparent;
  color: white;
}
</style>
