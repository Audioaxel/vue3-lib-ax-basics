<script setup lang="ts">
import { AXButton, AXGlobalStyle, AXGap, AXGrid, AXGridItem, AXBackgroundImage } from '../lib';
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
      <AXGap
        :gapProps="{ 
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
      </AXGap>
      <div style="margin-bottom: 24px;">
        Test00
      </div>
      <AXGrid
        :colDesktop="4"
        :colTablet="3"
        :colMobile="2"
      >
        <AXGridItem :span="2">
          <AXGap 
            style="background-color: blue;"
            :gapProps="{ 
              size: 'small', 
              justify: 'center',
              align: 'center',
              vertical: false,
            }"  
          >
            <h1>TEST01 2000</h1>
            <h4>hidden</h4>
          </AXGap>
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
          <AXGap 
            style="background-color: blue;"
            :gapProps="{ 
              size: 'small', 
              justify: 'center',
              align: 'center',
              vertical: true,
            }"  
          >
            <h1>TEST01 2000</h1>
            <h4>hidden</h4>
          </AXGap>
        </AXGridItem>
      </AXGrid>
      <div style="margin: 24px;">
        Test00
      </div>
      <AXBackgroundImage
        :bgImageProps="{ 
          bgImgLandscape: 'src/assets/img/backgound/landscape/bg-land-audiobird-pink_white_left.jpg',
          bgImgPortrait: 'src/assets/img/backgound/portrait/bg-port-audiobird-pink_white_right.jpg',
          bgPosition: 'left top', 
          bgFixed: false, 
          minHeight: '100vh', 
          hover: true,
        }"
      >
        <AXGap
          :gapProps="{ 
            size: 'giant', 
            justify: 'left',
            align: 'center',
            vertical: false,
          }"
        >
          <h1>Test</h1>
          <h1>Test</h1>
        </AXGap>
        <template #overlay>
          <div style="background-color: rgba(255, 0, 0, 0.2); height: 100%;">
            <AXGap
              :gapProps="{ 
                size: 'giant', 
                justify: 'center',
                align: 'center',
                vertical: false,
                fullHeight: true
              }"
            >
              Test
            </AXGap>
          </div>
        </template>
      </AXBackgroundImage>
    </AXGlobalStyle>
  </div>
</template>