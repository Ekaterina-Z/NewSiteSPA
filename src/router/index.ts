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
    name: "ProductsPage",
    component: () => import("../views/ProductsPage.vue")
  },
  {
    path: "/product",
    name: "ProductDetails",
    component: () => import("../views/ProductDetails.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue")
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/Registration.vue")
  },

  {
    path: "/404",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound.vue")
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404"
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
