<template>
  <div class="product" id="product">
    <router-link to="/product">
      <img
        class="product__img"
        src="@/assets/img/product/product-1.png"
        alt="product 1"
      />
    </router-link>

    <div class="product__content">
      <router-link to="/product" class="product__name"
        >Mango People T-shirt</router-link
      >
      <div class="product__price">$52.00</div>
    </div>
    <a class="product__add" href="#">Add to Cart</a>
  </div>
</template>

<script>
export default {
  name: "ProductCard"
};
</script>

<style scoped></style>
