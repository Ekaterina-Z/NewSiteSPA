<template>
  <arrivals-nav-menu></arrivals-nav-menu>
  <product-slider></product-slider>
  <products-for-priority></products-for-priority>
</template>

<script>
import ProductSlider from "../components/ProductSlider";
import ProductsForPriority from "../components/ProductsForPriority";
import ArrivalsNavMenu from "../components/ArrivalsNavMenu";
export default {
  name: "ProductDetails",
  components: {
    ArrivalsNavMenu,
    ProductsForPriority,
    ProductSlider
  }
};
</script>

<style scoped></style>
