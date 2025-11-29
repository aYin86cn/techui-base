
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes :[
    { path: "/", name: "Home", redirect:"/componentNav",},
    { path: "/componentNav", name: "componentNav", component:()=>import("@view/navigation/index-nav.vue"), meta: { hideInTab: true }},
  ]
});

export default router;

