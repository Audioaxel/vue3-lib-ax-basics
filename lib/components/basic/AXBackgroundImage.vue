<template>
  <div class="image-container">
    <div class="background-image">

      <slot />
    </div>
    <div v-if="$slots.overlay" class="image-overlay">
      <slot name="overlay" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export type BackgroundImageProps = {
  bgImgLandscape?: string;
  bgImgPortrait?: string;
  bgPosition?: 'left' | 'left top' | 'center' | 'right' | 'right top' | 'top' | 'bottom' | 'center center';
  bgFixed?: boolean;
  minHeight?: string;
  hover?: boolean;
  frontColor?: string;
}

const props = defineProps<{
  bgImageProps?: BackgroundImageProps;
}>();

const bgImgLandscapeCss = ref(`url('${props.bgImageProps?.bgImgLandscape}')`);
const bgImgPortraitCss = ref(`url('${props.bgImageProps?.bgImgPortrait ?? props.bgImageProps?.bgImgLandscape}')`);
const bgPositionCss = ref(props.bgImageProps?.bgPosition ? props.bgImageProps.bgPosition : 'center center');
const bgAttachedCss = ref(props.bgImageProps?.bgFixed ? 'fixed' : 'scroll');
const minHeightCss = ref(props.bgImageProps?.minHeight ?? 0);
const hoverOverlay = ref(props.bgImageProps?.hover ? '100%' : '0');
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.background-image {
  width: 100%;
  min-height: v-bind(minHeightCss);
  height: auto;
  background-image: v-bind(bgImgLandscapeCss);
  background-repeat: no-repeat;
  background-position: v-bind(bgPositionCss);
  background-attachment: v-bind(bgAttachedCss);
  background-size: cover;
}

.image-overlay {
  position: absolute;
  top: v-bind(hoverOverlay);
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}

.image-container:hover > .image-overlay {
  top: 0;
}

/*  Orientation portrait */
@media (orientation: portrait) {
  .background-image {
    background-image: v-bind(bgImgPortraitCss);
  }
}
</style>