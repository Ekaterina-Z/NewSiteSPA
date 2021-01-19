<template>
  <div class="header__right">
    <router-link to="/cart" class="header__cart"
      ><img src="@/assets/img/cart.png" alt="cart"
    /></router-link>
    <!-- <input type="checkbox"  class="header__right_cart_img" id="cart_menu">
        <label for="cart_menu"><i class="fas fa-cart-arrow-down"></i></label> -->
    <div class="header__right_cart">
      <header-cart-product-block></header-cart-product-block>
      <div class="header__right_cart_price">
        <h2>Total</h2>
        <h2>$ 500.00</h2>
      </div>
      <button class="header__right_cart_button1">Check OUT</button>
      <button class="header__right_cart_button2">Go to cart</button>
    </div>
  </div>
</template>

<script>
import HeaderCartProductBlock from "@/components/HeaderCartProductBlock";
export default {
  name: "HeaderCart",
  components: { HeaderCartProductBlock }
};
</script>

<style scoped></style>
