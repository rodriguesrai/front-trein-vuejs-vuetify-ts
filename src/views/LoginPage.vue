<template>
  <TheHeader />
  <v-container class="login-main-container">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-3">
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field v-model="email" label="Email" type="email" required></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary" :disabled="!email || !password">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  if (email.value === 'user@example.com' && password.value === '123456') {
    router.push('/')
  } else {
    console.log('Credenciais inválidas. Por favor, tente novamente.')
  }
}
</script>

<style scoped>
.headline {
  text-align: center;
}

.login-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
