<template>
  <v-app-bar class="header" elevation="5">
    <template v-slot:prepend>
      <v-app-bar-nav-icon>
        <v-icon icon="$vuetify"></v-icon>
      </v-app-bar-nav-icon>
    </template>
    <div>
      <v-btn to="/" data-testid="home-button">{{ $t('nav.home') }}</v-btn>
      <v-btn to="/contact" data-testid="contact-button">{{ $t('nav.contact') }}</v-btn>
    </div>
    <v-app-bar-title class="title">{{ $t('nav.title') }}</v-app-bar-title>
    <v-btn-toggle v-model="toggle_exclusive">
      <v-btn @click="changeLanguage('en')" class="transparent-button">EN</v-btn>
      <v-btn @click="changeLanguage('ptBr')" class="transparent-button">BR</v-btn>
    </v-btn-toggle>
    <div class="user-actions">
      <div v-if="isLogged">
        <v-btn to="/profile">{{ store.username }}</v-btn>
        <v-btn @click="handleLogout">{{ $t('nav.logout') }}</v-btn>
      </div>
      <v-btn v-else to="/login" data-testid="login-button">{{ $t('nav.login') }}</v-btn>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store/useUserStore'
import { logout } from '@/services/request'

const store = useUserStore()

const { locale } = useI18n()

const toggle_exclusive = ref(false)

const changeLanguage = (lang: string) => {
  store.setLanguage(lang)
  locale.value = lang
}

const isLogged = computed(() => store.username !== '')

const handleLogout = () => {
  logout()
}
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
