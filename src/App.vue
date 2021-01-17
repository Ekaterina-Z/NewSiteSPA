<template>
  <site-header></site-header>
  <!--  <site-promo></site-promo>-->
  <!--  <home-product-catalog></home-product-catalog>-->
  <!--  <site-main-offer></site-main-offer>-->
  <router-view />
  <site-footer></site-footer>
</template>

<script>
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
// import SitePromo from "@/components/SitePromo";
// import HomeProductCatalog from "@/components/HomeProductCatalog";
// import SiteMainOffer from "@/components/SiteMainOffer";

export default {
  components: {
    SiteFooter,
    SiteHeader
    // SitePromo,
    // HomeProductCatalog,
    // SiteMainOffer
  }
};
</script>
