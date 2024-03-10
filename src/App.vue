<script setup lang="ts">
import { AXButton, AXGlobalStyle, AXRow, AXGrid, AXGridItem } from '../lib';
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
      <div style="margin-bottom: 24px;">
        Test00
      </div>
      <AXGrid
        :colDesktop="4"
        :colTablet="3"
        :colMobile="2"
      >
        <AXGridItem :span="2">
          <AXRow 
            style="background-color: blue;"
            :rowProps="{ 
              size: 'small', 
              justify: 'center',
              align: 'center',
              vertical: false,
            }"  
          >
            <h1>TEST01 2000</h1>
            <h4>hidden</h4>
          </AXRow>
        </AXGridItem>
        <AXGridItem>
          <h1>TEST02</h1>
        </AXGridItem>
        <AXGridItem>
          <h1>TEST03</h1>
        </AXGridItem>
        <AXGridItem>
          <h1>TEST04</h1>
        </AXGridItem>
        <AXGridItem>
          <h1>TEST05</h1>
        </AXGridItem>
        <AXGridItem>
          <h1>TEST06</h1>
        </AXGridItem>
        <AXGridItem>
          <AXRow 
            style="background-color: blue;"
            :rowProps="{ 
              size: 'small', 
              justify: 'center',
              align: 'center',
              vertical: true,
            }"  
          >
            <h1>TEST01 2000</h1>
            <h4>hidden</h4>
          </AXRow>
        </AXGridItem>
      </AXGrid>
    </AXGlobalStyle>
  </div>
</template>