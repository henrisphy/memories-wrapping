import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Family from "@/pages/Family.vue";
import Friends from "@/pages/Friends.vue";
import About from "@/pages/About.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/family", name: "Family", component: Family },
  { path: "/friends", name: "Friends", component: Friends },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
