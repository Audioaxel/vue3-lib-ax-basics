<template>
  <div class="base-card">
    <AXBackgroundImage :bgImageProps="{
      bgImgLandscape: 'src/assets/img/backgound/bg_larks_right_grey.jpg',
      bgPosition: 'left top',
      bgFixed: false,
      minHeight: '200px',
      hover: true,
    }">
      <slot />
      <template #overlay>
        <slot name="overlay" />
      </template>
    </AXBackgroundImage>
  </div>
</template>

<script setup lang="ts">
import AXBackgroundImage from '../basic/AXBackgroundImage.vue';


</script>

<style scoped>
.base-card {
  background-color: var(--primary-white);
  border-radius: 24px;
  overflow: hidden;
  /* Um abgerundete Kanten zu ermöglichen */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Schatten für den Card-Effekt */
  display: flex;
  flex-direction: column;
}
</style>