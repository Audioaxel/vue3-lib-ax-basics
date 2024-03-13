<template>
  <div class="background-image">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export type BackgroundImageProps = {
  bgImgLandscape?: string;
  bgImgPortrait?: string;
  bgPosition?: 'left' | 'left top' | 'center' | 'right' | 'right top' | 'top' | 'bottom' | 'center center';
  bgFixed?: boolean;
  height?: string;
}

const props = defineProps<{
  bgImageProps?: BackgroundImageProps;
}>();

const bgImgLandscapeCss = ref(`url('${props.bgImageProps?.bgImgLandscape}')`);
const bgImgPortraitCss = ref(`url('${props.bgImageProps?.bgImgPortrait ?? props.bgImageProps?.bgImgLandscape}')`);
const bgPositionCss = ref(props.bgImageProps?.bgPosition ? props.bgImageProps.bgPosition : 'center center');
const bgAttachedCss = ref(props.bgImageProps?.bgFixed ? 'fixed' : 'scroll');
const heightCss = ref(props.bgImageProps?.height ?? 0);
</script>

<style scoped>
.background-image {
  width: 100%;
  min-height: v-bind(heightCss);
  background-image: v-bind(bgImgLandscapeCss);
  background-repeat: no-repeat;
  background-position: v-bind(bgPositionCss);
  background-attachment: v-bind(bgAttachedCss);
  background-size: cover;
}

/*  Orientation portrait */
@media (orientation: portrait) {
  .background-image {
    background-image: v-bind(bgImgPortraitCss);
  }
}
</style>