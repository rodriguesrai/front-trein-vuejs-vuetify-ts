<template>
  <v-app-bar class="header" elevation="5">
    <template v-slot:prepend>
      <v-app-bar-nav-icon>
        <v-icon icon="$vuetify"></v-icon>
      </v-app-bar-nav-icon>
    </template>
    <div>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/contact">Contact</v-btn>
    </div>
    <v-app-bar-title class="title">Application Front-End</v-app-bar-title>
    <div>
      <v-btn to="/login">Login</v-btn>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

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
