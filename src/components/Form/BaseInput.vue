<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  id: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="base-input">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
}
</style>
