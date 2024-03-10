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
  justify?: 'left' | 'center' | 'right' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'left' | 'center' | 'right' | 'space-between' | 'space-around' | 'space-evenly';
  vertical? : boolean;
};

const props = defineProps<{
  rowProps?: rowProps;
}>();

const sizeCss = ref(SpacingsHelper.getRowGapSice(props.rowProps?.size));
const justifyContentCss = ref(props.rowProps?.justify || 'left');
const alignCss = ref(props.rowProps?.align || 'left');
const directionCss = ref(props.rowProps?.vertical ? 'column' : 'row');
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: wrap;
  flex-direction: v-bind(directionCss);
  justify-content: v-bind(justifyContentCss);
  align-items: v-bind(alignCss);
  gap: v-bind(sizeCss + 'px');
  width: 100%;
}
</style>