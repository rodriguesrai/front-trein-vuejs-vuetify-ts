<template>
  <v-main>
    <TheHeader />
    <v-container class="profile-main-container">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-5">
          <v-card-title class="headline">Profile</v-card-title>
          <v-card-subtitle class="subtitle"> Welcome, {{ store.username }}! </v-card-subtitle>
          <v-card-text>
            <v-avatar size="100" class="mx-auto my-4">
              <v-img src="https://via.placeholder.com/100" alt="User Avatar"></v-img>
            </v-avatar>
            <v-list>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Username</v-list-item-title>
                  <v-list-item-subtitle>{{ store.username }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Email</v-list-item-title>
                  <v-list-item-subtitle>{{ store.username }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import { useUserStore } from '@/store/useUserStore'

const store = useUserStore()
</script>

<style scoped>
.profile-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Alterado para 100vh para ocupar a tela inteira */
}

.headline {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #757575;
}

.v-card-text {
  text-align: center;
}

.v-avatar {
  margin: 0 auto;
}

.v-list-item-icon {
  color: #1976d2;
}
</style>
