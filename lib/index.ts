import AXGlobalStyle from "./components/AXGlobalStyle.vue";

// basic
import AXText from "./components/basic/AXText.vue";
import AXGap from "./components/basic/AXGap.vue";
import AXButton from "./components/basic/AXButton.vue";
import AXGrid from "./components/basic/AXGrid.vue";
import AXGridItem from "./components/basic/AXGridItem.vue";
import AXBackgroundImage from "./components/basic/AXBackgroundImage.vue";

// structure
import AXSection from "./components/structure/AXSection.vue";

// presentation
import AXCard from "./components/presentation/AXCard.vue";

export { 
  AXGlobalStyle, 

  AXText,
  AXGap, 
  AXButton,
  AXGrid,
  AXGridItem,
  AXBackgroundImage,
  
  AXSection,

  AXCard,
};

export type ThemeMode = "light" | "dark";