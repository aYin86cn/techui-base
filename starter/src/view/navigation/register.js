import { markRaw } from "vue";

const register = {
  adaptiveDemo: () => import("@/view/base/adaptive/index.vue"),
  tuiServiceDemo: () => import("@/view/intro/tservice/index.vue"),
  tuiIntro: () => import("@/view/intro/techui/index.vue"),
}

Object.keys(register).forEach(key => {
  register[key] = markRaw(register[key]);
});

export default register