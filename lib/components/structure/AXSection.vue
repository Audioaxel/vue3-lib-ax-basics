<template>
  <AXBackgroundImage :bgImageProps="bgImageProps">
    <section>
      <div class="section-header">
        <h1 v-if="label">
          {{ label }}
        </h1>
        <slot name="header" />
      </div>
      <div class="divider" v-if="!hideDivider" />
      <slot />
    </section>
  </AXBackgroundImage>
</template>

<script setup lang="ts">
import { AXBackgroundImage } from '../..';
import { EColor } from '../../enum/EColor';
import { ColorHelper } from '../../helper/ColorHelper';
import type { FontSize } from '../../helper/SizeHelper';
import { SizeHelper } from '../../helper/SizeHelper';
import type { BackgroundImageProps } from '../basic/AXBackgroundImage.vue';
import { ref } from 'vue';

const props = defineProps<{
  label?: string;
  labelSize?: FontSize;
  hideDivider?: boolean;
  color?: EColor;
  minHeight?: string;
  bgImageProps?: BackgroundImageProps;
}>()

const labelSizeCss = ref(SizeHelper.getFontSize(props.labelSize, 'giant'));
const colorCss = ref(ColorHelper.getColorAsCssVar(props.color));
</script>

<style scoped>
section {
  min-height: v-bind(minHeight);
  color: v-bind(colorCss);
}

h1 {
  font-size: v-bind(labelSizeCss);
  font-weight: 400;
  padding: 8px 0px 8px 0px;
  color: currentColor;
}

.section-header {
  padding: 32px 0px 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  text-align: center;
}

.divider {
  height: 1px;
  width: 80%;
  margin: 0 auto;
  /* Automatische Seitenränder für horizontale Zentrierung */
  background: currentColor;
}

/* Mobile Devices */
@media (max-width: 468px) {
  h1 {
    font-size: calc(v-bind(labelSizeCss) * 0.6);
  }
}

/* Tablets */
@media (min-width: 469px) and (max-width: 1023px) {
  h1 {
    font-size: calc(v-bind(labelSizeCss) * 0.8);
  }
}
</style>../helper/SizeHelper../../helper/SizeHelper../../helper/ColorHelper../../enum/EColor
