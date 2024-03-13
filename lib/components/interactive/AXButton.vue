<template>
  <span :class="{
    'btn-container': true,
    'btn-container-clicked': buttonClicked
  }">
    <button 
      @mousedown="onMouseDown" 
      @click="onClick" 
      :disabled="disabled"
      :class="{
        'btn-filled': btnProps?.filled
      }"
    >
      <slot></slot>
    </button>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

export type ButtonProps = {
  filled?: boolean;
};

const props = defineProps<{
  btnProps?: ButtonProps;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (name: 'click', event: MouseEvent): void;
}>();

const buttonClicked = ref(false);

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
  background-color: hsla(var(--primary-color-hsl), 0);
  color: var(--primary-color);
  font-weight: 500;
  padding: 8px 24px;
  border: 2px solid var(--primary-color);
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
}

button.btn-filled {
  background-color: hsla(var(--primary-color-hsl), 1);
  color: var(--primary-white);
}

button:hover {
  background-color: 
    hsla(
      var(--primary-color-h), 
      var(--primary-color-s), 
      calc(var(--primary-color-l) + 5%), 
      1
    );
  color: var(--primary-white);
  border: 2px solid hsla(
      var(--primary-color-h), 
      var(--primary-color-s), 
      calc(var(--primary-color-l) + 5%), 
      1
    );
}

button:disabled {
  background-color: 
    hsla(
      var(--primary-color-h), 
      15%, 
      var(--primary-color-l),
      0.2
    );
  cursor: not-allowed;
  border: 2px solid 
    hsla(
      var(--primary-color-h), 
      15%, 
      var(--primary-color-l),
      0.2
    );
  color: 
    hsla(
      var(--primary-color-h), 
      15%, 
      var(--primary-color-l),
      0.2
    );
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
  max-width: fit-content;
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
      0px 0px 1px 3px hsla(var(--primary-color-hsl), .2) inset;
  }

  100% {
    border: 1px solid hsla(var(--primary-color-hsl), 0);
    border-radius: 6px;
    box-shadow: none;
  }
}
</style>
