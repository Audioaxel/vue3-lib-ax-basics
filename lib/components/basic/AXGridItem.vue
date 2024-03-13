<template>
  <div class="grid-item">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  span?: number;
}>();
</script>

<style scoped>
.grid-item {
  grid-column: span v-bind(span) / span 1;
  display: block;
  background-color: aqua;
  width: 100%;
  height: 100%;
}
.grid-item1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>