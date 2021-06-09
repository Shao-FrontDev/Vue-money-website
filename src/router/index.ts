import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Money from "../views/Money.vue";
import Labels from "../views/Labels.vue";
import Statistics from "../views/Statistics.vue";
import NotFound from "../views/NotFound.vue";
import EditLabel from "../views/EditLabel.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/money"
  },
  {
    path: "/money",
    name: "Money",
    component: Money
  },
  {
    path: "/labels",
    name: "Labels",
    component: Labels
  },
  { path: "/labels/edit", component: EditLabel },

  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
