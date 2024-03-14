/// <reference types="vite/client" />
/// <reference types="vite/types" />
 
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}