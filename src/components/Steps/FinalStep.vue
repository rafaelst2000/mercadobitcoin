<script setup>
import BaseInput from '../Form/BaseInput.vue'
import { useSteps } from '../../composables/useSteps'

const emit = defineEmits(['update:user'])
const props = defineProps({
  user: {
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
  confirmPassword
} = useSteps(props, emit)
</script>

<template>
  <div class="steper-container">
    <BaseInput v-model="email" label="Endereço de e-mail" type="email" id="email" />
    <BaseInput v-model="name" :label="nameLabel" id="name" />
    <BaseInput v-model="documentNumber" :label="documentLabel" id="documentNumber" />
    <BaseInput v-model="birthDate" :label="birthDateLabel" id="birthDate" />
    <BaseInput v-model="cellphone" label="Telefone" id="cellphone" />
    <BaseInput
      v-model="confirmPassword"
      type="password"
      label="Confirme sua senha"
      id="confirmPassword"
    />
  </div>
</template>
