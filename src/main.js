import { createApp } from "vue";

import "/assets/styles.scss";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).use(store).mount("#app");
