<template>
  <v-footer class="footer-container">
    <v-container>
      <v-row class="footer-wrapper">
        <v-row class="">
          <v-btn
            v-for="link in links"
            :key="link"
            class="mx-2"
            color="white"
            rounded="xl"
            variant="text"
          >
            {{ t(`footer.links.${link}`) }}
          </v-btn>
        </v-row>
        <v-col class="icon-container">
          <v-btn icon>
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
        <v-row> {{ year }} Areopagus </v-row>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const year = ref(new Date().getFullYear())
const links = ref(['home', 'aboutUs', 'team', 'services', 'blog', 'contactUs'])
</script>

<style scoped>
.footer-container {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  width: 100%;
}

.icon-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer-items-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
