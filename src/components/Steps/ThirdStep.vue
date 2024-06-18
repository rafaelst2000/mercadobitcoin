<script setup>
import BaseInput from '../Form/BaseInput.vue'
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

const { password } = useSteps(props, emit)
</script>

<template>
  <div class="steper-container">
    <BaseInput
      id="password"
      v-model="password"
      label="Sua senha"
      type="password"
      :error-messages="
        validations.password.$error ? 'Insira uma senha com no mínimo 8 dígitos' : ''
      "
    />
  </div>
</template>
