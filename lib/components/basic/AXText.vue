<template>
  <p>
    <slot />
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FontSize, SizeHelper } from '../../helper/SizeHelper';

const props = defineProps<{
  size?: FontSize;
}>()

const sizeCss = ref(SizeHelper.getFontSize(props.size));
</script>

<style scoped>
p {
  font-size: v-bind(sizeCss);
}
</style>../helper/SizeHelper../../helper/SizeHelper