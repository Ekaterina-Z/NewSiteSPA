<template>
  <div>
    <section class="center product-box">
      <product-card
        v-for="product in products"
        :title="product.product_name"
        :image="product.product_image_url"
        :price="product.product_price"
        :key="product.id"
      ></product-card>
      <!--      <product-card></product-card>-->
      <!--      <product-card></product-card>-->
      <!--      <product-card></product-card>-->
      <!--      <product-card></product-card>-->
      <!--      <product-card></product-card>-->
      <!--      <product-card></product-card>-->
      <!--      <product-card></product-card>-->

      <router-link class="button" to="/products"
        >Browse All Products</router-link
      >
    </section>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import Api from "@/services/api";
export default {
  name: "CatalogBlock",
  components: { ProductCard },
  data() {
    return {
      products: []
    };
  },
  methods: {
    async loadProducts() {
      try {
        const { data } = await Api.getProducts();
        if (data) {
          this.products = data.products;
          console.log(this.products);
        }
      } catch (err) {
        console.log("error: ", err);
      }
    }
  },
  mounted() {
    this.loadProducts();
  }
};
</script>
