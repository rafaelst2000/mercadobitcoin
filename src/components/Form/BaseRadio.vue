<script setup>
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
    <div class="radio-buttons__container" v-for="option in options" :key="option.value">
      <input
        type="radio"
        :id="`radio-button-${option.value}`"
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
    padding: 8px 12px;
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
