import "element-plus/dist/index.css";
import "@/styles/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import App from "@/App.vue";
import router from "@/router";

import "@/permission";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus, { locale: zhCn });
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.mount("#app");
