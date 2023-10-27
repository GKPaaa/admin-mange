import { createApp } from "vue";
import "./style/antrewrite.css";
import "./style/public.css";
import router from "./router";
import App from "./App.vue";
// AntDesignVue组件
import antdv from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
createApp(App).use(router).use(antdv).mount("#app");
