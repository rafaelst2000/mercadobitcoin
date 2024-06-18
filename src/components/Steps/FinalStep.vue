<script setup>
import BaseInput from '../Form/BaseInput.vue'
import { useSteps } from '../../composables/useSteps'
import { computed } from 'vue'

const emit = defineEmits(['update:user'])
const props = defineProps({
  user: {
    type: Object,
    default: () => {}
  },
  validations: {
    type: Object,
    default: () => {}
  }
})

const {
  email,
  name,
  documentNumber,
  birthDate,
  cellphone,
  nameLabel,
  documentLabel,
  birthDateLabel,
  confirmPassword,
  isFisical
} = useSteps(props, emit)

const documentNumberErrorMessage = computed(() =>
  isFisical ? 'Insira um CPF válido' : 'Insira um CNPJ válido'
)
</script>

<template>
  <div class="steper-container">
    <BaseInput
      id="email"
      v-model="email"
      label="Endereço de e-mail"
      :error-messages="validations.email.$error ? 'Insira um e-mail válido' : ''"
    />
    <BaseInput
      id="name"
      v-model="name"
      :label="nameLabel"
      :error-messages="validations.name.$error ? 'Insira um nome' : ''"
    />
    <BaseInput
      id="documentNumber"
      v-model="documentNumber"
      :variant="isFisical ? 'cpf' : 'cnpj'"
      :label="documentLabel"
      :error-messages="validations.documentNumber.$error ? documentNumberErrorMessage : ''"
    />
    <BaseInput
      id="birthDate"
      v-model="birthDate"
      variant="date"
      :label="birthDateLabel"
      :error-messages="validations.birthDate.$error ? 'Insira uma data válida' : ''"
    />
    <BaseInput
      id="cellphone"
      v-model="cellphone"
      variant="cellphone"
      label="Telefone"
      :error-messages="validations.cellphone.$error ? 'Insira um telefone' : ''"
    />
    <BaseInput
      id="confirmPassword"
      v-model="confirmPassword"
      type="password"
      label="Confirme sua senha"
      :error-messages="validations.confirmPassword.$error ? 'As senhas não correspondem' : ''"
    />
  </div>
</template>
