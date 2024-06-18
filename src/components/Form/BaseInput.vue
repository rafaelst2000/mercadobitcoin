<script setup>
import { mask } from 'vue-the-mask'
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: '',
    validator: (value) => ['', 'cpf', 'cnpj', 'cellphone', 'date'].includes(value)
  },
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    default: ''
  },
  errorMessages: {
    type: String,
    default: ''
  }
})
const vMask = props.variant ? mask : undefined
const masks = {
  cpf: '###.###.###-##',
  cnpj: '##.###.###/####-##',
  cellphone: '(##) #####-####',
  date: '##/##/####'
}
const selectedMask = masks[props.variant]
</script>

<template>
  <div class="base-input">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      v-bind="$attrs"
      :class="{ 'base-input--error': !!errorMessages }"
      @input="$emit('update:modelValue', $event.target.value)"
      v-mask="selectedMask"
    />
    <p>{{ errorMessages }}</p>
  </div>
</template>

<style scoped lang="scss">
.base-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }

  input {
    width: 100%;
    padding: 8px 12px;
    border-radius: $rounded;
    border: 1px solid $black;
    outline: none;
    font-size: 1rem;

    &:focus {
      border-color: $primary;
    }
  }

  .base-input--error,
  .base-input--error:focus {
    border-color: $error;
  }

  p {
    font-size: 0.875rem;
    margin: 4px 8px 0;
    color: $error;
  }
}
</style>
