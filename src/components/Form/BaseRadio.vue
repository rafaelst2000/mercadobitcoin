<script setup>
defineEmits(['update:modelValue'])
defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="radio-buttons">
    <div v-for="option in options" :key="option.value" class="radio-buttons__container">
      <input
        :id="`radio-button-${option.value}`"
        type="radio"
        :name="name"
        :value="option.value"
        :checked="option.value === modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <label :for="`radio-button-${option.value}`">{{ option.label }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.radio-buttons {
  display: flex;
  align-items: center;
  gap: 0.875rem;

  .radio-buttons__container {
    padding: 0.5rem 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    label {
      font-size: 1rem;
    }

    input {
      accent-color: $primary;
    }
  }
}
</style>
