<template>
  <div class="flex-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    colMobile?: number;
    colTablet?: number;
    colDesktop?: number;
    xGap?: number;
    yGap?: number;
  }>(),
  {
    colMobile: 1,
    colTablet: 1,
    colDesktop: 1,
  }
);

// was macht eigentlich das minmax???
const columnsMobile = ref<string>(`repeat(${props.colMobile}, minmax(0, 1fr))`);
const columnsTablet = ref<string>(`repeat(${props.colTablet}, minmax(0, 1fr))`);
const columnsDesktop = ref<string>(`repeat(${props.colDesktop}, minmax(0, 1fr))`);
</script>

<style scoped>
/* Desktops */
.flex-container {
  display: grid;
  grid-template-columns: v-bind(columnsDesktop);
  column-gap: v-bind(xGap + 'px');
  row-gap: v-bind(yGap + 'px');
  place-items: center center;
  height: 100%;
}

/* Mobile Devices */
@media (max-width: 468px) {
  .flex-container {
  grid-template-columns: v-bind(columnsMobile);
  }
}

/* Tablets */
@media (min-width: 469px) and (max-width: 1023px) {
  .flex-container {
  grid-template-columns: v-bind(columnsTablet);
  }
}
</style>