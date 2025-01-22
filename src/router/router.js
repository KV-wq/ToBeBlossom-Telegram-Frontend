import { createRouter, createMemoryHistory } from "vue-router";
import Auth from "../pages/Auth.vue";
import Loading from "../pages/Loading.vue";

const routes = [
  {
    path: "/",
    name: "Loading",
    component: Loading,
  },
  {
    path: "/auth",
    name: "Authorization",
    component: Auth,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
