<template>
  <div class="base-card">
    <AXBackgroundImage 
      :bgImageProps="bgImageProps"
    >
      <slot name="imageContent"/>
    </AXBackgroundImage>
    <slot />
  </div>
</template>

<script setup lang="ts">
import AXBackgroundImage, { type BackgroundImageProps } from '../basic/AXBackgroundImage.vue';

export type CardProps = {
  imageRatio?: number;
  height?: string | number;
};

defineProps<{
  bgImageProps?: BackgroundImageProps;
}>();

</script>

<style scoped>
.base-card {
  background-color: var(--primary-white);
  border-radius: 12px;
  overflow: hidden;
  /* Um abgerundete Kanten zu ermöglichen */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Schatten für den Card-Effekt */
  display: flex;
  flex-direction: column;
}
</style>