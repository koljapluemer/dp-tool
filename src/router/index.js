import { createWebHistory, createRouter } from "vue-router";
import PracticeLoop from "@/views/PracticeLoop.vue";

const routes = [
  {
    path: "/practice",
    name: "PracticeLoop",
    component: PracticeLoop,
  },
  {
    path: "/",
    name: "Library",
    component: () => import("@/views/Library.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;