<template>
  <section class="catalog center">
    <h2 class="catalog__h2">you may like also</h2>
  </section>
  <section class="center product_single_box">
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
    <product-card></product-card>
    <!--    <div class="product_single_box_card">-->
    <!--      <router-link to="/product"-->
    <!--        ><img-->
    <!--          class="product_single_box_card_img"-->
    <!--          src="@/assets/img/product/2781.png"-->
    <!--          alt="product 1"-->
    <!--      /></router-link>-->
    <!--      <div class="product__content">-->
    <!--        <router-link to="/product" class="product__name"-->
    <!--          >BLAZE LEGGINGS</router-link-->
    <!--        >-->
    <!--        <div class="product__price">$52.00</div>-->
    <!--      </div>-->
    <!--      <a class="product__add" href="#">Add to Cart</a>-->
    <!--    </div>-->
    <!--    <div class="product_single_box_card">-->
    <!--      <router-link to="/product"-->
    <!--        ><img-->
    <!--          class="product_single_box_card_img"-->
    <!--          src="@/assets/img/product/2782.png"-->
    <!--          alt="product 2"-->
    <!--      /></router-link>-->
    <!--      <div class="product__content">-->
    <!--        <router-link to="/product" class="product__name"-->
    <!--          >ALEXA SWEATER</router-link-->
    <!--        >-->
    <!--        <div class="product__price">$52.00</div>-->
    <!--      </div>-->
    <!--      <a class="product__add" href="#">Add to Cart</a>-->
    <!--    </div>-->
    <!--    <div class="product_single_box_card">-->
    <!--      <router-link to="/product"-->
    <!--        ><img-->
    <!--          class="product_single_box_card_img"-->
    <!--          src="@/assets/img/product/2783.png"-->
    <!--          alt="product 3"-->
    <!--      /></router-link>-->
    <!--      <div class="product__content">-->
    <!--        <router-link to="/product" class="product__name"-->
    <!--          >AGNES TOPt</router-link-->
    <!--        >-->
    <!--        <div class="product__price">$52.00</div>-->
    <!--      </div>-->
    <!--      <a class="product__add" href="#">Add to Cart</a>-->
    <!--    </div>-->
    <!--    <div class="product_single_box_card">-->
    <!--      <router-link to="/product"-->
    <!--        ><img-->
    <!--          class="product_single_box_card_img"-->
    <!--          src="@/assets/img/product/2772.png"-->
    <!--          alt="product 3"-->
    <!--      /></router-link>-->
    <!--      <div class="product__content">-->
    <!--        <router-link to="/product" class="product__name"-->
    <!--          >SYLVA SWEATER</router-link-->
    <!--        >-->
    <!--        <div class="product__price">$52.00</div>-->
    <!--      </div>-->
    <!--      <a class="product__add" href="#">Add to Cart</a>-->
    <!--    </div>-->
  </section>
</template>

<script>
import ProductCard from "./ProductCard";
export default {
  name: "ProductsForPriority",
  components: { ProductCard }
};
</script>

<style scoped></style>
