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

  --primary-white-h: 0;
  --primary-white-s: 0%;
  --primary-white-l: 98%;
  --primary-white-hsl: var(--primary-white-h), var(--primary-white-s), var(--primary-white-l);

  --primary-black-h: 0;
  --primary-black-s: 0%;
  --primary-black-l: 12%;
  --primary-black-hsl: var(--primary-black-h), var(--primary-black-s), var(--primary-black-l);

  --font-family: 'Cascadia Code', 'Courier New', monospace;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: var(--primary-white);
  font-family: var(--font-family);
  color: var(--primary-black);
}

::selection {
  background-color: var(--primary-color);
  color: var(--primary-white);
}

a {
  color: var(--primary-color);
}
</style>