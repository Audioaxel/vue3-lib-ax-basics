<template>
  <div class="gap">
    <slot name="default" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type GapSize, SizeHelper } from '../../helper/SizeHelper';

export type GapProps = {
  size?: GapSize;
  justify?: 'left' | 'center' | 'right' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'start' | 'center' | 'end';
  vertical? : boolean;
  fullHeight?: boolean;
};

const props = defineProps<{
  gapProps?: GapProps;
}>();

const sizeCss = ref(SizeHelper.getGapSice(props.gapProps?.size));
const justifyContentCss = ref(props.gapProps?.justify || 'left');
const alignCss = ref(props.gapProps?.align || 'start');
const directionCss = ref(props.gapProps?.vertical ? 'column' : 'row');
const fullHeightCss = ref(props.gapProps?.fullHeight ? '100%' : 'auto');
</script>

<style scoped>
.gap {
  display: flex;
  flex-flow: wrap;
  flex-direction: v-bind(directionCss);
  justify-content: v-bind(justifyContentCss);
  align-items: v-bind(alignCss);
  gap: v-bind(sizeCss + 'px');
  width: 100%;
  height: v-bind(fullHeightCss);
}
</style>../SizeHelper../helper/SizeHelper../../helper/SizeHelper