import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFound from "@/views/NotFound.vue";
import JobView from "@/views/JobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "Job",
      component: JobView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
