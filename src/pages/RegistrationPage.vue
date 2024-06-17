<script setup>
import FirstStep from '@/components/Steps/FirstStep.vue'
import SecondStep from '@/components/Steps/SecondStep.vue'
import ThirdStep from '@/components/Steps/ThirdStep.vue'
import FinalStep from '@/components/Steps/FinalStep.vue'
import ActionButtons from '@/components/ActionButtons.vue'
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

// User data
const user = ref({
  email: '',
  personType: 'fisical',
  name: '',
  documentNumber: '',
  birthDate: '',
  cellphone: '',
  password: '',
  confirmPassword: ''
})

const currentStep = ref(0)
const vuelidateRules = computed(() => ({
  email: { required, email }
}))
const v$ = useVuelidate(vuelidateRules, user)

const stepsComponents = {
  0: FirstStep,
  1: SecondStep,
  2: ThirdStep,
  3: FinalStep
}

const stepLabels = computed(() => ({
  0: 'Seja bem vindo(a)',
  1: user.value.personType === 'fisical' ? 'Pessoa Física' : 'Pessoa Jurídica',
  2: 'Senha de acesso',
  3: 'Revise suas informações'
}))

const buttonsLabels = [
  {
    primary: 'Continuar',
    secondary: ''
  },
  {
    primary: 'Continuar',
    secondary: 'Voltar'
  },
  {
    primary: 'Continuar',
    secondary: 'Voltar'
  },
  {
    primary: 'Cadastrar',
    secondary: 'Voltar'
  }
]

const handleClickPrimaryButton = async () => {
  v$.value.$touch()
  const isValid = await v$.value.$validate()
  if (!isValid) return
  currentStep.value++
}

const handleClickSecondaryButton = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>

<template>
  <main>
    <section class="registration">
      <p class="registration__step">
        Etapa <span class="registration__step--highlight">{{ currentStep + 1 }}</span> de 4
      </p>
      <h1>{{ stepLabels[currentStep] }}</h1>
      <form>
        <component
          :is="stepsComponents[currentStep]"
          v-model:user="user"
          :validations="v$"
          @primary-click="handleClickPrimaryButton"
          @secondary-click="handleClickSecondaryButton"
        />
        <ActionButtons
          :primary-label="buttonsLabels[currentStep].primary"
          :secondary-label="buttonsLabels[currentStep].secondary"
          full-size
          @primary-click="handleClickPrimaryButton"
          @secondary-click="handleClickSecondaryButton"
        />
        <!-- @submit.prevent="handleSubmitForm" -->
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
