<script setup>
import BaseInput from '../Form/BaseInput.vue'
import BaseButton from '../Form/BaseButton.vue'
import { computed, toRefs } from 'vue'

const emit = defineEmits(['update:user'])
const props = defineProps({
  user: {
    type: Object,
    default: () => {}
  }
})
const { user } = toRefs(props)

const customComputed = (key) =>
  computed({
    get() {
      return user?.value?.[key]
    },
    set(value) {
      const updatedUser = { ...user.value, [key]: value }
      emit('update:user', updatedUser)
    }
  })

const password = customComputed('password')
</script>

<template>
  <div class="steper-container">
    <BaseInput v-model="password" label="Sua senha" id="password" />
    <div class="form-actions">
      <BaseButton label="Voltar" variant="outlined" full-size />
      <BaseButton label="Continuar" full-size />
    </div>
  </div>
</template>

<style scoped lang="scss">
.first-step {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
</style>
