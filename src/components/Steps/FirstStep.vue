<script setup>
import BaseInput from '../Form/BaseInput.vue'
import BaseButton from '../Form/BaseButton.vue'
import BaseRadio from '../Form/BaseRadio.vue'
import { computed, toRefs } from 'vue'

const emit = defineEmits(['update:user'])
const props = defineProps({
  user: {
    type: Object,
    default: () => {}
  }
})
const { user } = toRefs(props)

const email = computed({
  get() {
    return user?.value?.email
  },
  set(value) {
    const updatedUser = { ...user.value, email: value }
    emit('update:user', updatedUser)
  }
})

const personType = computed({
  get() {
    return user?.value?.personType
  },
  set(value) {
    const updatedUser = { ...user.value, personType: value }
    emit('update:user', updatedUser)
  }
})

const personTypes = [
  { label: 'Física', value: 'fisical' },
  { label: 'Jurídica', value: 'legal' }
]
</script>

<template>
  <div class="steper-container">
    <BaseInput v-model="email" label="Endereço de e-mail" type="email" id="email" />
    <BaseRadio v-model="personType" :options="personTypes" name="personType" />
    <BaseButton label="Continuar" full-size />
  </div>
</template>

<style scoped lang="scss">
.first-step {
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
</style>
