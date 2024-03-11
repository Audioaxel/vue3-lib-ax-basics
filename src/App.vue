<script setup lang="ts">
import { AXButton, AXGlobalStyle, AXGap, AXGrid, AXGridItem, AXBackgroundImage, AXSection, AXText, AXCard } from '../lib';
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
      <AXGap :gapProps="{
        size: 'small',
        align: 'center',
        vertical: false,

      }">
        <div>
          Test001
        </div>
        <div>
          Test002
        </div>
        <AXButton :disabled="false" :btnProps="{
          filled: false,
        }">
          Klick mich
        </AXButton>
      </AXGap>
      <div style="margin-bottom: 24px;">
        Test00
      </div>
      <AXGrid :colDesktop="4" :colTablet="3" :colMobile="2">
        <AXGridItem :span="2">
          <AXGap style="background-color: blue;" :gapProps="{
        size: 'small',
        justify: 'center',
        align: 'center',
        vertical: false,
      }">
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
          <AXGap style="background-color: blue;" :gapProps="{
        size: 'small',
        justify: 'center',
        align: 'center',
        vertical: true,
      }">
            <h1>TEST01 2000</h1>
            <h4>hidden</h4>
          </AXGap>
        </AXGridItem>
      </AXGrid>
      <div style="margin: 24px;">
        Test00
      </div>
      <AXBackgroundImage :bgImageProps="{
        bgImgLandscape: 'src/assets/img/backgound/landscape/bg-land-audiobird-pink_white_left.jpg',
        bgImgPortrait: 'src/assets/img/backgound/portrait/bg-port-audiobird-pink_white_right.jpg',
        bgPosition: 'left top',
        bgFixed: false,
        minHeight: '100vh',
        hover: true,
      }">
        <AXGap :gapProps="{
        size: 'giant',
        justify: 'left',
        align: 'center',
        vertical: false,
      }">
          <h1>Test</h1>
          <h1>Test</h1>
        </AXGap>
        <template #overlay>
          <div style="background-color: rgba(255, 0, 0, 0.2); height: 100%;">
            <AXGap :gapProps="{
        size: 'giant',
        justify: 'center',
        align: 'center',
        vertical: false,
        fullHeight: true
      }">
              Test
            </AXGap>
          </div>
        </template>
      </AXBackgroundImage>
      <div style="margin: 24px;">
        Test00
      </div>
      <AXSection
        :label="'Test Section'"
        :labelSize="'giant'"
        :minHeight="'100vh'"
        :bgImageProps="{ 
          bgImgLandscape: 'src/assets/img/backgound/landscape/bg-land-audiobird-pink_white_left.jpg',
          bgImgPortrait: 'src/assets/img/backgound/portrait/bg-port-audiobird-pink_white_right.jpg',
          bgPosition: 'left top', 
          bgFixed: true,  
          hover: true,
        }"
      >
        <AXGap :gapProps="{
            size: 'large',
            justify: 'center',
            align: 'center',
            vertical: true,
            fullHeight: true
          }"
          style="padding: 24px;"
        >
          <h4>Test Überschrift</h4>
          <p>Section Test</p>
          <AXText :size="'large'" style="text-align: center;">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </AXText>
          <h1 style="font-size: 2rem;">Headline h1</h1>
          <h2>Headline h2</h2>
          <h3>Headline h3</h3>
          <h4>Headline h4</h4>
          <h5>Headline h5</h5>
          <h6>Headline h6</h6>
          <p style="font-size: .5rem;">Paragraph</p>
        </AXGap>
      </AXSection>
      <div style="margin: 24px;">
        Test00
      </div>
      <AXSection
        :label="'Test Cards'"
        :labelSize="'giant'"
        :minHeight="'100vh'"
        :bgImageProps="{ 
          bgImgLandscape: 'src/assets/img/backgound/landscape/bg-land-audiobird-pink_white_left.jpg',
          bgImgPortrait: 'src/assets/img/backgound/portrait/bg-port-audiobird-pink_white_left.jpg',
          bgPosition: 'left top',   
        }"
      >
        <AXGap :gapProps="{
            size: 'large',
            justify: 'center',
            align: 'center',
            vertical: true,
            fullHeight: true
          }"
          style="padding: 24px;"
        >
          <AXCard>
            <template #overlay>
              <h2>Card Title</h2>
            </template>
            Card Content
          </AXCard>
        </AXGap>
      </AXSection>
    </AXGlobalStyle>
  </div>
</template>