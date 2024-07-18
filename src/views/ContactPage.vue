<template>
  <v-main class="main-container">
    <TheHeader />
    <aside class="aside-container">
      <h2 class="faq-title">{{ $t('contact.faq') }}</h2>
      <v-expansion-panels class="faq-container">
        <v-expansion-panel
          :title="$t('contact.expansionPainelTitle')"
          :text="$t('contact.expansionPanelText')"
        >
        </v-expansion-panel>
        <v-expansion-panel
          :title="$t('contact.expansionPainelTitle')"
          :text="$t('contact.expansionPanelText')"
        >
        </v-expansion-panel>
        <v-expansion-panel
          :title="$t('contact.expansionPainelTitle')"
          :text="$t('contact.expansionPanelText')"
        >
        </v-expansion-panel>
        <v-expansion-panel
          :title="$t('contact.expansionPainelTitle')"
          :text="$t('contact.expansionPanelText')"
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </aside>
    <article class="contact-container">
      <h2>{{ $t('contact.header') }}</h2>
      <address class="contact-info-container">
        <p>{{ $t('contact.name') }}: João da Silva</p>
        <p>{{ $t('contact.email') }}: joao.silva@example.com</p>
        <p>{{ $t('contact.phone') }}: (11) 1234-5678</p>
        <p>{{ $t('contact.address') }}: Rua Exemplo, 123, Bairro Exemplo, Cidade Exemplo, SP</p>
      </address>
      <div class="social-buttons">
        <v-btn icon href="https://facebook.com" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon href="https://twitter.com" target="_blank">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon href="https://linkedin.com" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon href="https://instagram.com" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </div>
    </article>
  </v-main>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  height: 100vh;
}

.aside-container {
  width: 20%;
  padding: 1rem;
  border-right: solid 1px rgb(85, 84, 84);
  gap: 20px;
}

.faq-container {
  gap: 0.5rem;
}

.faq-title {
  margin-bottom: 1rem;
}

.contact-container {
  padding: 1rem;
  text-align: left;
}

.contact-info-container {
  margin-top: 1rem;
  gap: 0.5rem;
}

address {
  font-style: normal;
}

.social-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.contact-info-container > p {
  margin-bottom: 1rem;
  gap: 0.5rem;
}
</style>
