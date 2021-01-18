<template>
  <div>
    <site-promo></site-promo>
    <catalog-header></catalog-header>
    <catalog-block></catalog-block>
    <site-main-offer></site-main-offer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SitePromo from "@/components/SitePromo.vue";
import CatalogBlock from "@/components/CatalogBlock.vue";
import SiteMainOffer from "@/components/SiteMainOffer.vue";
import CatalogHeader from "@/components/CatalogHeader.vue";

export default defineComponent({
  name: "Home",
  components: { CatalogHeader, SiteMainOffer, SitePromo, CatalogBlock }
});
</script>
