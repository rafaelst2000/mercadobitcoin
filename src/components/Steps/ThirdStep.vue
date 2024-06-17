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
const { password } = useSteps(props, emit)
</script>

<template>
  <div class="steper-container">
    <BaseInput v-model="password" label="Sua senha" type="password" id="password" />
  </div>
</template>
