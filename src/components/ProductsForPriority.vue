<template>
  <section class="catalog center">
    <h2 class="catalog__h2">you may like also</h2>
  </section>
  <section class="center product_single_box">
    <catalog-block></catalog-block>
  </section>
</template>

<script>
import ProductCard from "./ProductCard";
import CatalogBlock from "./CatalogBlock";
export default {
  name: "ProductsForPriority",
  components: {CatalogBlock  },

};
</script>

<style scoped></style>
