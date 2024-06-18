<script setup>
import BaseInput from '../Form/BaseInput.vue'
import BaseRadio from '../Form/BaseRadio.vue'
import { useSteps } from '../../composables/useSteps'

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

const { email, personType } = useSteps(props, emit)
const personTypes = [
  { label: 'Física', value: 'fisical' },
  { label: 'Jurídica', value: 'legal' }
]
</script>

<template>
  <div class="steper-container">
    <BaseInput
      id="email"
      v-model="email"
      :error-messages="validations.email.$error ? 'Insira um e-mail válido' : ''"
      label="Endereço de e-mail"
    />
    <BaseRadio v-model="personType" :options="personTypes" name="personType" />
  </div>
</template>
