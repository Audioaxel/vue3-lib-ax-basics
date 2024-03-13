import AXGlobalStyle from "./components/AXGlobalStyle.vue";

// basic
import AXContentCenter from "./components/basic/AXContentCenter.vue";
import AXText from "./components/basic/AXText.vue";
import AXGap from "./components/basic/AXGap.vue";
import AXGrid from "./components/basic/AXGrid.vue";
import AXGridItem from "./components/basic/AXGridItem.vue";
import AXBackgroundImage from "./components/basic/AXBackgroundImage.vue";

// interactive
import AXButton from "./components/interactive/AXButton.vue";
import AXHoverOverlay from "./components/interactive/AXHoverOverlay.vue";

// structure
import AXSection from "./components/structure/AXSection.vue";

// presentation
import AXCard from "./components/presentation/AXCard.vue";

// types
import BackgroundImageProps from "./components/basic/AXBackgroundImage.vue";
import ButtonProps from "./components/interactive/AXButton.vue";
import GapProps from "./components/basic/AXGap.vue";

// must not be exported seperately
// import { GapSize, FontSize }  from "./helper/SizeHelper";

export { 
  AXContentCenter,
  AXGlobalStyle, 
  AXText,
  AXGap, 
  AXButton,
  AXGrid,
  AXGridItem,
  AXBackgroundImage, 
  AXSection,
  AXCard,
  AXHoverOverlay,

  // types
  BackgroundImageProps,
  ButtonProps,
  GapProps,
};



// mhhhh...
export type ThemeMode = "light" | "dark";