<template>
  <div class="product" id="product">
    <router-link to="/product">
      <img class="product__img"
           :src="image"
           alt="img" />
    </router-link>
    <div class="product__content">
      <router-link to="/product" class="product__name">{{ name }}</router-link>
      <div class="product__price">$ {{ price }}</div>
    </div>
    <a class="product__add" href="#">Add to Cart</a>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    name: {
      type: String,
      require: true
    },
    image: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
      // validator: value => (value = 0)
    }
  }
};
</script>

<style scoped></style>
<!--      "require ('../assets/img/product/'+ product.product_img_url)"
при указании вот такого пути картинки работают - но где его тогда прописать ?-->
