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

const customGetter = (key) =>
  computed({
    get() {
      return user?.value?.[key]
    },
    set(value) {
      const updatedUser = { ...user.value, [key]: value }
      emit('update:user', updatedUser)
    }
  })

const name = customGetter('name')
const documentNumber = customGetter('documentNumber')
const birthDate = customGetter('birthDate')
const cellphone = customGetter('cellphone')

const isPhysical = computed(() => user?.value?.personType === 'physical')
const nameLabel = isPhysical.value ? 'Nome' : 'Razão social'
const documentLabel = isPhysical.value ? 'CPF' : 'CNPJ'
const birthDateLabel = isPhysical.value ? 'Data de nascimento' : 'Data de abertura'
</script>

<template>
  <div class="steper-container">
    <BaseInput v-model="name" :label="nameLabel" id="email" />
    <BaseInput v-model="documentNumber" :label="documentLabel" id="documentNumber" />
    <BaseInput v-model="birthDate" :label="birthDateLabel" id="birthDate" />
    <BaseInput v-model="cellphone" label="Telefone" id="cellphone" />
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
