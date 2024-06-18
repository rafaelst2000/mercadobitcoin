<script setup>
import FirstStep from '@/components/Steps/FirstStep.vue'
import SecondStep from '@/components/Steps/SecondStep.vue'
import ThirdStep from '@/components/Steps/ThirdStep.vue'
import FinalStep from '@/components/Steps/FinalStep.vue'
import ActionButtons from '@/components/ActionButtons.vue'
import { ref, computed } from 'vue'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { validateCpf, validateCnpj, validateBirthDate } from '@/helpers/customValidators'
import useVuelidate from '@vuelidate/core'

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
const isFisical = computed(() => user.value.personType === 'fisical')

const currentStep = ref(0)
const vuelidateRules = computed(() => {
  const rules = {
    0: {
      email: { required, email }
    },
    1: {
      name: { required, minLength: minLength(3) },
      documentNumber: {
        required,
        minLength: minLength(isFisical.value ? 14 : 18),
        custom: isFisical.value ? validateCpf : validateCnpj
      },
      birthDate: { required, minLength: minLength(10), custom: validateBirthDate },
      cellphone: { required, minLength: minLength(15) }
    },
    2: {
      password: { required, minLength: minLength(8) }
    },
    3: {
      email: { required, email },
      name: { required, minLength: minLength(3) },
      documentNumber: {
        required,
        minLength: minLength(isFisical.value ? 14 : 18),
        custom: isFisical.value ? validateCpf : validateCnpj
      },
      birthDate: { required, minLength: minLength(10), custom: validateBirthDate },
      cellphone: { required, minLength: minLength(15) },
      confirmPassword: { required, minLength: minLength(8), sameAs: sameAs(user.value.password) }
    }
  }
  return rules[currentStep.value]
})
const v$ = useVuelidate(vuelidateRules, user)

const stepsComponents = {
  0: FirstStep,
  1: SecondStep,
  2: ThirdStep,
  3: FinalStep
}

const stepLabels = computed(() => ({
  0: 'Seja bem vindo(a)',
  1: isFisical.value ? 'Pessoa Física' : 'Pessoa Jurídica',
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
  if (currentStep.value === 3) await createUser()
  else currentStep.value++
}

const handleClickSecondaryButton = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const createUser = async () => {
  console.log('create user', user.value)
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
