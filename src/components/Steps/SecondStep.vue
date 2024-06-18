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
  name,
  documentNumber,
  birthDate,
  cellphone,
  nameLabel,
  documentLabel,
  birthDateLabel,
  isFisical
} = useSteps(props, emit)

const documentNumberErrorMessage = computed(() =>
  isFisical ? 'Insira um CPF válido' : 'Insira um CNPJ válido'
)
</script>

<template>
  <div class="steper-container">
    <BaseInput
      v-model="name"
      :label="nameLabel"
      id="name"
      :error-messages="validations.name.$error ? 'Insira um nome' : ''"
    />
    <BaseInput
      :variant="isFisical ? 'cpf' : 'cnpj'"
      v-model="documentNumber"
      :label="documentLabel"
      :error-messages="validations.documentNumber.$error ? documentNumberErrorMessage : ''"
      id="documentNumber"
    />
    <BaseInput
      variant="date"
      v-model="birthDate"
      :label="birthDateLabel"
      id="birthDate"
      :error-messages="validations.birthDate.$error ? 'Insira uma data válida' : ''"
    />
    <BaseInput
      variant="cellphone"
      v-model="cellphone"
      label="Telefone"
      id="cellphone"
      :error-messages="validations.cellphone.$error ? 'Insira um telefone' : ''"
    />
  </div>
</template>
