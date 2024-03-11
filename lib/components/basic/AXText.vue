<template>
  <p>
    <slot />
  </p>
</template>

<script setup lang="ts">
import { SizeHelper, FontSize } from '../helper/SizeHelper';

const props = defineProps<{
  size?: FontSize;
}>()

const sizeCss = SizeHelper.getFontSize(props.size);
</script>

<style scoped>
p {
  font-size: v-bind(sizeCss);
}
</style>../helper/SizeHelper