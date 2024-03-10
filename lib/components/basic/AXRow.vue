<template>
  <div class="row">
    <slot name="default" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RowGapSize, SpacingsHelper } from '../SpacingsHelper';

export type rowProps = {
  size?: RowGapSize;
  justifyContent?: 'left' | 'center' | 'right' | 'space-between' | 'space-around' | 'space-evenly';
  vertical? : boolean;
};

const props = defineProps<{
  rowProps?: rowProps;
}>();

const sizeCss = ref(SpacingsHelper.getRowGapSice(props.rowProps?.size));
const justifyContentCss = ref(props.rowProps?.justifyContent || 'left');
const directionCss = ref(props.rowProps?.vertical ? 'column' : 'row');
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: wrap;
  flex-direction: v-bind(directionCss);
  justify-content: v-bind(justifyContentCss);
  gap: v-bind(sizeCss + 'px');
  width: 100%;
}
</style>