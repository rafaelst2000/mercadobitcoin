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
  }
})
</script>

<template>
  <div :class="secondaryLabel ? 'form-actions' : 'form-actions-single'">
    <BaseButton
      v-if="secondaryLabel"
      :label="secondaryLabel"
      variant="outlined"
      full-size
      @click.prevent="emit('secondaryClick')"
    />
    <BaseButton :label="primaryLabel" full-size @click.prevent="emit('primaryClick')" />
  </div>
</template>

<style scoped lang="scss"></style>
