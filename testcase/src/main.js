import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import TechUIInit from "@techui/base";
// locale("de");
import "./utils/license.js";

const app = createApp(App);
const params={
  app,
  debug:true,
  // license, 
  // subLicense,
  features:{
    // echarts:true,
    // advanced:true,
  }
}
TechUIInit(params).then(()=>{
  // app.use(locales)
  app.use(router)
  app.use(store)
  app.mount('#app')
})