<template>
  <section v-if="products" class="center product-box">
    <product-card
      v-for="product in products"
      :id="product.id"
      :name="product.name"
      :image="product.src"
      :price="product.price"
      :key="product.id"
      @add="addToCart"
    ></product-card>
    <router-link class="button" to="/products">Browse All Products</router-link>
  </section>
  <h3 v-else>No products found</h3>
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
    // Метод для обработки получаемых через emit - id продукта
    addToCart(id) {
      console.log(
        "Was added: ",
        this.products.find(product => product.id === id)
      );
    },
    async loadProducts() {
      try {
        const { data } = await Api.getProducts();
        if (data) {
          this.products = data.product;
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
