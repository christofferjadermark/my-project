import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import HomeView from "./views/HomeView.vue";
import GameView from "./views/GameView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AboutView,
      path: "/about",
    },
    {
      component: ContactView,
      path: "/contact",
    },
    {
      component: HomeView,
      path: "/",
    },
    {
      component: GameView,
      path: "/game",
    },
  ],
});
