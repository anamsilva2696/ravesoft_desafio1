import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "../components/HomeScreen.vue";
import SuccessScreen from "../components/SuccessScreen.vue";
import LoginScreen from "../components/LoginScreen.vue";
import ApplicationsScreen from "@/components/ApplicationsScreen.vue";

const routes = [
  { path: "/", component: LoginScreen, 
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem("token"); // Check authentication
      if (isAuthenticated) {
        next("/home"); // Redirect to HomeScreen if authenticated
      } else {
        next(); // Stay on LoginScreen
      }
    },
  },
  { path: "/home", component: HomeScreen, meta: { requiresAuth: true } },
  { path: "/success", component: SuccessScreen, meta: { requiresAuth: true } }, // Protected route
  { path: "/applications", name:"applications", component: ApplicationsScreen, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard to Protect Routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/"); // Redirect to login if not authenticated
  } else {
    next(); // Proceed to the route
  }
});

export default router;
