<template>
  <div :class="{
    'btn-container': true,
    'btn-container-clicked': buttonClicked
  }">
    <button @mousedown="onMouseDown" @click="onClick" :disabled="disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export type ButtonProps = {
  btnProps: {
    type: 'button' | 'submit' | 'reset';
  };
};

const props = defineProps<{
  btnProps?: ButtonProps;
  disabled?: boolean;
}>();

const buttonClicked = ref(false);

const emit = defineEmits<{
  (name: 'click', event: MouseEvent): void;
}>();

function onClick(event: MouseEvent) {
  if (props.disabled) return;
  buttonClicked.value = true;
  emit('click', event);
}

function onMouseDown() {
  buttonClicked.value = false;
}
</script>

<style scoped>
button {
  background-color: var(--primary-color);
  color: var(--primary-white);
  padding: 12px 36px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
}

button:hover {
  background-color: 
    hsla(
      var(--primary-color-h), 
      var(--primary-color-s), 
      calc(var(--primary-color-l) + 5%), 
      1
    );
}

button:active {
  background-color: 
    hsla(
      var(--primary-color-h), 
      var(--primary-color-s), 
      var(--primary-color-l), 
      1
    );
}

button:disabled {
  background-color: 
    hsla(
      var(--primary-color-h), 
      15%, 
      var(--primary-color-l),
      0.4
    );
  cursor: not-allowed;
}

button:disabled:hover {
  background-color: 
    hsla(
      var(--primary-color-h), 
      0%, 
      var(--primary-color-l),
      0.4
    );
}

.btn-container {
  padding: 2px;
  border: 1px solid #3d6cb300;
  border-radius: 6px;
}

.btn-container-clicked {
  animation: btnClicked 0.5s forwards;
}

@keyframes btnClicked {
  0% {
    border: 1px solid hsla(var(--primary-color-hsl), 0);
    border-radius: 6px;
    box-shadow: none;
  }
  10% {
    border: 1px solid hsla(var(--primary-color-hsl), 0.2);
    border-radius: 6px;
    box-shadow:
      0px 0px 2px 1px hsla(var(--primary-color-hsl), 0.2),
      0px 0px 3px 3px hsla(var(--primary-color-hsl), .2) inset,
      0px 0px 1px 1px hsla(var(--primary-color-hsl), .2) inset;
  }

  100% {
    border: 1px solid hsla(var(--primary-color-hsl), 0);
    border-radius: 6px;
    box-shadow: none;
  }
}
</style>
