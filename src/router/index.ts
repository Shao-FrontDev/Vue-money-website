import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Money from "../views/Money.vue";
import Tags from "../views/Tags.vue";
import Statistics from "../views/Statistics.vue";

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
    path: "/tags",
    name: "Tags",
    component: Tags
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(
    //     /* webpackChunkName: "about" */ "../views/Tags.vue"
    //   ),
  },

  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
