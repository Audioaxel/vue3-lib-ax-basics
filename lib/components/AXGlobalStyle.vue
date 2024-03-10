<template>
  <div>
    <slot />
  </div>
</template>

<style>
:root {
  --primary-color: #5b2843;
  --primary-white: #fafafa;
  --primary-black: #1f1f1f;

  /* HSL */
  --primary-color-h: 330;
  --primary-color-s: 40%;
  --primary-color-l: 25%;
  --primary-color-hsl: var(--primary-color-h), var(--primary-color-s), var(--primary-color-l);

  --font-family: 'Cascadia Code', 'Courier New', monospace;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: var(--font-family);
}
</style>