<script setup>
defineProps({
  label: {
    type: String,
    default: '',
    required: true
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit'].includes(value)
  },
  variant: {
    type: String,
    default: 'fill',
    validator: (value) => ['fill', 'outline'].includes(value)
  },
  fullSize: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button
    class="base-button"
    :class="{ 'base-button--full-size': fullSize, 'base-button--fill': variant === 'fill' }"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.base-button {
  padding: 12px 16px;
  border-radius: $rounded;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  font-size: 1rem;

  &:hover {
    background-color: rgba($primary, 0.8);
  }
}

.base-button--full-size {
  width: 100%;
}

.base-button--fill {
  background-color: $primary;
  color: $white;
}
</style>
