<template>
  <div>
    <section class="center product-box">
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
      <!--      <div class="product">-->
      <!--        <router-link to="/product"-->
      <!--          ><img-->
      <!--            class="product__img"-->
      <!--            src="@/assets/img/product/product-2.png"-->
      <!--            alt="product 2"-->
      <!--          />-->
      <!--        </router-link>-->
      <!--        <div class="product__content">-->
      <!--          <router-link to="/product" class="product__name"-->
      <!--            >Mango People T-shirt</router-link-->
      <!--          >-->
      <!--          <div class="product__price">$52.00</div>-->
      <!--        </div>-->
      <!--        <a class="product__add" href="#">Add to Cart</a>-->
      <!--      </div>-->
      <!--      <div class="product">-->
      <!--        <router-link to="/product">-->
      <!--          <img-->
      <!--            class="product__img"-->
      <!--            src="@/assets/img/product/product-3.png"-->
      <!--            alt="product 3"-->
      <!--        /></router-link>-->
      <!--        <div class="product__content">-->
      <!--          <router-link to="/product" class="product__name"-->
      <!--            >Mango People T-shirt</router-link-->
      <!--          >-->
      <!--          <div class="product__price">$52.00</div>-->
      <!--        </div>-->
      <!--        <a class="product__add" href="#">Add to Cart</a>-->
      <!--      </div>-->
      <!--      <div class="product">-->
      <!--        <router-link to="/product">-->
      <!--          <img-->
      <!--            class="product__img"-->
      <!--            src="@/assets/img/product/product-4.png"-->
      <!--            alt="product 4"-->
      <!--          />-->
      <!--        </router-link>-->
      <!--        <div class="product__content">-->
      <!--          <router-link to="/product" class="product__name"-->
      <!--            >Mango People T-shirt</router-link-->
      <!--          >-->
      <!--          <div class="product__price">$52.00</div>-->
      <!--        </div>-->
      <!--        <a class="product__add" href="#">Add to Cart</a>-->
      <!--      </div>-->
      <!--      <div class="product">-->
      <!--        <router-link to="/product"-->
      <!--          ><img-->
      <!--            class="product__img"-->
      <!--            src="@/assets/img/product/product-5.png"-->
      <!--            alt="product 5"-->
      <!--        /></router-link>-->
      <!--        <div class="product__content">-->
      <!--          <router-link to="/product" class="product__name"-->
      <!--            >Mango People T-shirt</router-link-->
      <!--          >-->
      <!--          <div class="product__price">$52.00</div>-->
      <!--        </div>-->
      <!--        <a class="product__add" href="#">Add to Cart</a>-->
      <!--      </div>-->
      <!--      <div class="product">-->
      <!--        <router-link to="/product"-->
      <!--          ><img-->
      <!--            class="product__img"-->
      <!--            src="@/assets/img/product/product-6.png"-->
      <!--            alt="product 6"-->
      <!--        /></router-link>-->
      <!--        <div class="product__content">-->
      <!--          <router-link to="/product" class="product__name"-->
      <!--            >Mango People T-shirt</router-link-->
      <!--          >-->
      <!--          <div class="product__price">$52.00</div>-->
      <!--        </div>-->
      <!--        <a class="product__add" href="#">Add to Cart</a>-->
      <!--      </div>-->
      <!--      <div class="product">-->
      <!--        <router-link to="/product"-->
      <!--          ><img-->
      <!--            class="product__img"-->
      <!--            src="@/assets/img/product/product-7.png"-->
      <!--            alt="product 7"-->
      <!--        /></router-link>-->
      <!--        <div class="product__content">-->
      <!--          <router-link to="/product" class="product__name"-->
      <!--            >Mango People T-shirt</router-link-->
      <!--          >-->
      <!--          <div class="product__price">$52.00</div>-->
      <!--        </div>-->
      <!--        <a class="product__add" href="#">Add to Cart</a>-->
      <!--      </div>-->
      <!--      <div class="product">-->
      <!--        <router-link to="/product"-->
      <!--          ><img-->
      <!--            class="product__img"-->
      <!--            src="@/assets/img/product/product-8.png"-->
      <!--            alt="product 8"-->
      <!--        /></router-link>-->
      <!--        <div class="product__content">-->
      <!--          <router-link to="/product" class="product__name"-->
      <!--            >Mango People T-shirt</router-link-->
      <!--          >-->
      <!--          <div class="product__price">$52.00</div>-->
      <!--        </div>-->
      <!--        <a class="product__add" href n="#">Add to Cart</a>-->
      <!--      </div>-->
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
  components: { ProductCard },
  data: () => ({
    products: [
      {
        title: "Product",
        productDetails: [
          {
            id: "1",
            product_name: "Mango People T-shirt",
            product_price: 52,
            product_img_url: ".../assets/img/product/product-1.png"
          },
          {
            id: "2",
            product_name: " People T-shirt",
            product_price: 45,
            product_img_url: ".../assets/img/product/product-2.png"
          },
          {
            id: "3",
            product_name: " Mango People T-shirt",
            product_price: 40,
            product_img_url: ".../assets/img/product/product-3.png"
          },
          {
            id: "4",
            product_name: " Mango People T-shirt",
            product_price: 40,
            product_img_url: ".../assets/img/product/product-4.png"
          },
          {
            id: "5",
            product_name: " Mango People T-shirt",
            product_price: 30,
            product_img_url: ".../assets/img/product/product-5.png"
          },
          {
            id: "6",
            product_name: " People T-shirt",
            product_price: 50,
            product_img_url: ".../assets/img/product/product-6.png"
          },
          {
            id: "7",
            product_name: " Mango People T-shirt",
            product_price: 40,
            product_img_url: ".../assets/img/product/product-7.png"
          },
          {
            id: "8",
            product_name: " Mango People T-shirt",
            product_price: 45,
            product_img_url: ".../assets/img/product/product-8.png"
          }
        ]
      }
    ]
  })
};
</script>
