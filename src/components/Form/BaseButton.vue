<script setup>
defineProps({
  label: {
    type: String,
    default: '',
    required: true
  },
  variant: {
    type: String,
    default: 'fill',
    validator: (value) => ['fill', 'outlined'].includes(value)
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    class="base-button"
    :disabled="isDisabled"
    :class="{
      'base-button--fill': variant === 'fill',
      'base-button--outlined': variant === 'outlined'
    }"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.base-button {
  padding: 0.75rem 1rem;
  border-radius: $rounded;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.2s;
  font-size: 1rem;
  width: 100%;

  &:disabled,
  &:disabled:hover {
    background-color: rgba($primary, 0.5);
    cursor: not-allowed;
  }
}

.base-button--fill {
  background-color: $primary;
  color: $white;

  &:hover {
    background-color: rgba($primary, 0.8);
  }
}

.base-button--outlined {
  background-color: transparent;
  color: $primary;
  border-color: $primary;

  &:hover {
    border-color: rgba($primary, 0.8);
    color: rgba($primary, 0.8);
  }

  &:disabled,
  &:disabled:hover {
    border-color: rgba($primary, 0.5);
    color: rgba($primary, 0.5);
    background-color: transparent;
  }
}
</style>
