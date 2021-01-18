<template>
  <div>
    <section class="center product-box">
      <product-card></product-card>
      <div class="product">
        <a href="#"
          ><img
            class="product__img"
            src="@/assets/img/product/product-2.png"
            alt="product 2"
        /></a>
        <div class="product__content">
          <a href="#" class="product__name">Mango People T-shirt</a>
          <div class="product__price">$52.00</div>
        </div>
        <a class="product__add" href="#">Add to Cart</a>
      </div>
      <div class="product">
        <a href="#"
          ><img
            class="product__img"
            src="@/assets/img/product/product-3.png"
            alt="product 3"
        /></a>
        <div class="product__content">
          <a href="#" class="product__name">Mango People T-shirt</a>
          <div class="product__price">$52.00</div>
        </div>
        <a class="product__add" href="#">Add to Cart</a>
      </div>
      <div class="product">
        <a href="#"
          ><img
            class="product__img"
            src="@/assets/img/product/product-4.png"
            alt="product 4"
        /></a>
        <div class="product__content">
          <a href="#" class="product__name">Mango People T-shirt</a>
          <div class="product__price">$52.00</div>
        </div>
        <a class="product__add" href="#">Add to Cart</a>
      </div>
      <div class="product">
        <a href="#"
          ><img
            class="product__img"
            src="@/assets/img/product/product-5.png"
            alt="product 5"
        /></a>
        <div class="product__content">
          <a href="#" class="product__name">Mango People T-shirt</a>
          <div class="product__price">$52.00</div>
        </div>
        <a class="product__add" href="#">Add to Cart</a>
      </div>
      <div class="product">
        <a href="#"
          ><img
            class="product__img"
            src="@/assets/img/product/product-6.png"
            alt="product 6"
        /></a>
        <div class="product__content">
          <a href="#" class="product__name">Mango People T-shirt</a>
          <div class="product__price">$52.00</div>
        </div>
        <a class="product__add" href="#">Add to Cart</a>
      </div>
      <div class="product">
        <a href="#"
          ><img
            class="product__img"
            src="@/assets/img/product/product-7.png"
            alt="product 7"
        /></a>
        <div class="product__content">
          <a href="#" class="product__name">Mango People T-shirt</a>
          <div class="product__price">$52.00</div>
        </div>
        <a class="product__add" href="#">Add to Cart</a>
      </div>
      <div class="product">
        <a href="#"
          ><img
            class="product__img"
            src="@/assets/img/product/product-8.png"
            alt="product 8"
        /></a>
        <div class="product__content">
          <a href="#" class="product__name">Mango People T-shirt</a>
          <div class="product__price">$52.00</div>
        </div>
        <a class="product__add" href n="#">Add to Cart</a>
      </div>
      <router-link class="button" to="/products"
        >Browse All Products</router-link
      >
    </section>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "CatalogBlock",
  components: { ProductCard }
};
</script>
