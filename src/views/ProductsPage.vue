<template>
  <!--  эти компоненты у нас будут на каждой странице (см. App.vue - все что подключено в template-->
  <!--  будет на каждой странице, а тег <router-view /> будет заменяться уникальным контентом страниц-->
  <!--  которые указаны в @/router/index.ts-->

  <!--  <site-header></site-header>-->
  <!--   <site-footer></site-footer>-->
  <product-page-nav-menu></product-page-nav-menu>
  <div class="center catalog_product">
    <product-left-side-bar></product-left-side-bar>
    <div class="filter_right">
      <product-filter></product-filter>
      <catalog-block></catalog-block>
    </div>
  </div>
  <product-offers></product-offers>
</template>

<!-- Тут ты указываешь, что скрипт будет иметь синтаксис TypeScript. Если с ts не сталкивалась,-->
<!-- то лучше не надо его использовать - с непривычки запутаешься.-->
<!--<script lang="ts">-->
<script lang="ts">
import { defineComponent } from "vue";
import ProductPageNavMenu from "@/components/ProductPageNavMenu.vue";
import CatalogBlock from "@/components/CatalogBlock.vue";
import ProductLeftSideBar from "@/components/ProductLeftSideBar.vue";
import ProductFilter from "@/components/ProductFilter.vue";
import ProductOffers from "@/components/ProductOffers.vue";

export default defineComponent({
  name: "ProductPage",
  components: {
    ProductOffers,
    ProductFilter,
    ProductLeftSideBar,
    CatalogBlock,
    ProductPageNavMenu
  }
});
</script>
