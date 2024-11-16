import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "../components/HomeScreen.vue";
import SuccessScreen from "../components/SuccessScreen.vue";

const routes = [
  { path: "/", component: HomeScreen },
  { path: "/success", component: SuccessScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;