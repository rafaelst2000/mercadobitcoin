import { toRefs, computed } from 'vue'

export function useSteps(props, emit) {
  const { user } = toRefs(props)

  const customComputed = (key) =>
    computed({
      get() {
        return user.value ? user.value[key] : ''
      },
      set(value) {
        const updatedUser = { ...user.value, [key]: value }
        emit('update:user', updatedUser)
      }
    })

  const email = customComputed('email')
  const personType = customComputed('personType')
  const name = customComputed('name')
  const documentNumber = customComputed('documentNumber')
  const birthDate = customComputed('birthDate')
  const cellphone = customComputed('cellphone')
  const password = customComputed('password')
  const confirmPassword = customComputed('confirmPassword')

  const isFisical = computed(() => user.value?.personType === 'fisical')
  const nameLabel = computed(() => (isFisical.value ? 'Nome' : 'Razão social'))
  const documentLabel = computed(() => (isFisical.value ? 'CPF' : 'CNPJ'))
  const birthDateLabel = computed(() =>
    isFisical.value ? 'Data de nascimento' : 'Data de abertura'
  )

  return {
    email,
    personType,
    name,
    documentNumber,
    birthDate,
    cellphone,
    password,
    confirmPassword,

    isFisical,
    nameLabel,
    documentLabel,
    birthDateLabel
  }
}
