<script setup lang="ts">
import { AXButton, AXGlobalStyle, AXRow } from '../lib';
</script>

<template>
  <header>
    <a href="https://vitejs.dev" target="_blank">
      Link A
    </a>
    <a href="https://vuejs.org/" target="_blank">
      Link B
    </a>
  </header>
  <div>
    <AXGlobalStyle>
      <AXRow
        :rowProps="{ 
          size: 'small', 
          justifyContent: 'center',
          vertical: false,
        }"
      >
        <div>
          Test001
        </div>
        <div>
          Test002
        </div>
        <AXButton 
          :disabled="false"
          :btnProps="{ 
            filled: true 
          }"
        >
          Klick mich
        </AXButton>
      </AXRow>
      <div>
        Test00
      </div>
      <div>
        <h1>TEST01</h1>
      </div>
    </AXGlobalStyle>
  </div>
  TEST01
</template>