<script setup>
import BaseInput from '../Form/BaseInput.vue'
import BaseRadio from '../Form/BaseRadio.vue'
import { useSteps } from '../../composables/useSteps'

const emit = defineEmits(['update:user'])
const props = defineProps({
  user: {
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
    <BaseInput v-model="email" label="Endereço de e-mail" type="email" id="email" />
    <BaseRadio v-model="personType" :options="personTypes" name="personType" />
  </div>
</template>
