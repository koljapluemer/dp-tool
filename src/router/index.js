import { createWebHistory, createRouter } from "vue-router";
import PracticeLoop from "@/views/PracticeLoop.vue";

const routes = [
  {
    path: "/practice",
    name: "PracticeLoop",
    component: PracticeLoop,
  },
  {
    path: "/topic",
    name: "Topic",
    component: () => import("@/views/TopicOverview.vue"),
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