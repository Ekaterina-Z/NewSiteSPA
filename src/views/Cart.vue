<template>
  <arrivals-nav-menu></arrivals-nav-menu>
  <product-box-cart></product-box-cart>
  <product-box-cart></product-box-cart>
  <product-box-cart></product-box-cart>
  <cart-button></cart-button>
  <div class="adress center">
    <cart-shipping-adress></cart-shipping-adress>
    <cart-cupon></cart-cupon>
    <cart-total-sum></cart-total-sum>
  </div>
</template>

<script>
import ArrivalsNavMenu from "../components/ArrivalsNavMenu";
import ProductBoxCart from "../components/ProductBoxCart";
import CartButton from "../components/CartButton";
import CartShippingAdress from "../components/CartShippingAdress";
import CartCupon from "../components/CartCupon";
import CartTotalSum from "../components/CartTotalSum";
export default {
  name: "Cart",
  components: {
    CartTotalSum,
    CartCupon,
    CartShippingAdress,
    CartButton,
    ProductBoxCart,
    ArrivalsNavMenu
  }
};
</script>

<style scoped></style>
