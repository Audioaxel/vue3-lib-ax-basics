<template>
  <h1>
    <slot />
  </h1>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { type FontSize, SizeHelper } from '../../helper/SizeHelper';

export type TitleMode = 'normal' | 'fancy';

const props = defineProps<{
  size?: FontSize;
  mode?: TitleMode;
}>()

const sizeCss = ref(SizeHelper.getFontSize(props.size, 'giant'));

const rotateCss = computed(() => {
  if (props.mode === 'fancy') {
    return 'rotate(-5deg)skewX(-5deg)';
  }
  return 'none';
});
</script>

<style scoped>
h1 {
  font-size: v-bind(sizeCss);
  text-align: center;
  transform: v-bind(rotateCss);
}
</style>