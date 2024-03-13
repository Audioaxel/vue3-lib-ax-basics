<template>
  <div class="position-center">
    <slot name="default" />
  </div>
</template>

<style scoped>
.position-center {
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>