<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (name: 'click', event: MouseEvent): void;
}>()

function onClick(event: MouseEvent) {
  console.log('click', event);
  emit('click', event);
}
</script>

<style scope>
button {
  background-color: var(--primary-color);
  color: var(--primary-white);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--primary-color-accent-bright);
}
</style>