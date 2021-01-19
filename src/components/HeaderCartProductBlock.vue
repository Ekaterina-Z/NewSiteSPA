<template>
  <div class="header__right_cart_box1" id="product1">
    <router-link to="/product" class="header__right_cart_img"
      ><img src="@/assets/img/product/1821.png"
    /></router-link>
    <div class="header__right_cart_content">
      <h3>Rebox Zane</h3>
      <br />
      <p>1 <span>x</span> $250</p>
    </div>
    <div class="header__right_cart_close"><p>&#9421;</p></div>
  </div>
</template>

<script>
export default {
  name: "HeaderCartProductBlock"
};
</script>

<style scoped></style>
