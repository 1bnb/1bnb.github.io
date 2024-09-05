import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Particles from "vue3-particles";
import Copy from "vue-clipboard3";

createApp(App).use(router).use(Particles).use(Copy).mount("#app");
