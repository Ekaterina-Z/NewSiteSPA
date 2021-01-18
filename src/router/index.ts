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
      import(/* webpackChunkName: "products" */ "../views/MainProductCatalog.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductsPage.vue")
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
