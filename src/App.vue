<script setup>
import RegistrationPage from './pages/RegistrationPage.vue'
</script>

<template>
  <RegistrationPage />
</template>

<style lang="scss">
.steper-container {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.form-actions {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 20px;
}
</style>
