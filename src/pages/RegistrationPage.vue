<script setup>
import FirstStep from '@/components/Steps/FirstStep.vue'
import SecondStep from '@/components/Steps/SecondStep.vue'
import { ref } from 'vue'

const user = ref({
  email: '',
  personType: 'fisical',
  name: '',
  documentNumber: '',
  birthDate: '',
  cellphone: '',
  password: ''
})
</script>

<template>
  <main>
    <section class="registration">
      <p class="registration__step">
        Etapa <span class="registration__step--highlight">1</span> de 4
      </p>
      <h1>Seja bem vindo(a)</h1>
      <form>
        <!-- @submit.prevent="handleSubmitForm" -->
        <!-- <FirstStep v-model:user="user" /> -->
        <SecondStep v-model:user="user" />
      </form>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 32px 0;
  display: flex;
  justify-content: center;

  .registration {
    .registration__step {
      font-size: 1rem;

      .registration__step--highlight {
        color: $primary;
      }
    }

    form {
      width: 360px;
    }

    h1 {
      font-size: 2.5rem;
      margin: 0.5rem 0 1.5rem;
    }
  }
}
</style>
