import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    name: "ProductPage",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/ProductsPage.vue")
  },
  {
    path: "/main",
    name: "MainProductCatalog",
    component: () =>
      import(/* webpackChunkName: "main" */ "../views/MainProductCatalog.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
