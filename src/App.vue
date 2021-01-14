<template>
  <site-header></site-header>
  <router-view />
  <site-footer></site-footer>
</template>

<script>
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
export default {
  components: { SiteFooter, SiteHeader }
};
</script>
