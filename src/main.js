import "./style.css";
import "aos/dist/aos.css";
import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/router";

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount("#app");
