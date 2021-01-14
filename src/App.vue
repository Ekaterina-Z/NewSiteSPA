<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <site-footer></site-footer>
</template>

<script>
import SiteFooter from "@/components/SiteFooter";
export default {
  components: { SiteFooter }
};
</script>
