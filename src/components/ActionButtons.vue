<script setup>
import BaseButton from './Form/BaseButton.vue'
const emit = defineEmits(['primaryClick', 'secondaryClick'])
defineProps({
  primaryLabel: {
    type: String,
    default: '',
    required: true
  },
  secondaryLabel: {
    type: String,
    default: ''
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="secondaryLabel ? 'form-actions' : 'form-actions-single'">
    <BaseButton
      v-if="secondaryLabel"
      :label="secondaryLabel"
      variant="outlined"
      :is-disabled="isDisabled"
      @click.prevent="emit('secondaryClick')"
    />
    <BaseButton
      :label="primaryLabel"
      :is-disabled="isDisabled"
      @click.prevent="emit('primaryClick')"
    />
  </div>
</template>

<style scoped lang="scss">
.form-actions {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 0.875rem;
  margin-top: 0.875rem;
}

.form-actions-single {
  width: 100%;
  margin-top: 0.875rem;
}

@media (max-width: 768px) {
  .form-actions {
    grid-template-columns: 1fr;
    gap: 0.875rem;

    & button:first-child {
      order: 1;
    }
  }
}
</style>
