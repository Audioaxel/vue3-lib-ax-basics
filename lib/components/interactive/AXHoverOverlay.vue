<template>
  <div class="overlay-container">
    <slot />
    <div v-if="$slots.overlay" class="hover-overlay">
      <slot name="overlay" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  positionFixed?: boolean;
  disabled?: boolean;
}>();

const hoverOverlay = computed(() => {
  if (props.disabled) {
    return '100%';
  }

  return props.positionFixed ? '0' : '100%';
});

const disableHoverOverlay = computed(() => {
  return props.disabled ? '100%' : '0';
});

</script>

<style scoped>
.overlay-container {
  position: relative;
  overflow: hidden;
}

.hover-overlay {
  position: absolute;
  top: v-bind(hoverOverlay);
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}

.overlay-container:hover .hover-overlay {
  top: v-bind(disableHoverOverlay);
}
</style>