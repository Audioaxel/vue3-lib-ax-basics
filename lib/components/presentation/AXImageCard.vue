<template>
  <div class="card-container">
    <div class="image-item">
      <slot name="imageContent"/>
    </div>
    <div class = "content-item">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type BackgroundImageProps } from '../basic/AXBackgroundImage.vue';

const props = defineProps<{
  bgImageProps?: BackgroundImageProps;
  imageRatio?: number;
  direction?: 'row' | 'column';
}>();

const imageRationCss = ref(props.imageRatio ? props.imageRatio : 1);
const directionCss = ref(props.direction ? props.direction : 'column');

</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: v-bind(directionCss);
  border-radius: 12px;
  overflow: hidden;
  /* Um abgerundete Kanten zu ermöglichen */
  box-shadow: 0 4px 6px hsla(var(--primary-black-hsl), 0.2);;
  /* Schatten für den Card-Effekt */
}

.card-container > .image-item {
  flex: v-bind(imageRationCss);
  position: relative;
  overflow: hidden;
  /* Um das Bild in der Karte zu halten */
  background-color: #f0f0f0;
}

.card-container > .content-item {
  flex: 1;
  overflow: hidden;
  background-color: violet;
}


</style>