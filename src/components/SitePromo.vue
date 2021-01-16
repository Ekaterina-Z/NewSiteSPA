<template>
    <section class="promo">
        <div class="center promo__content">
            <div class="promo__text">
                <h1 class="promo__h1">THE BRAND</h1>
                <h3 class="promo__h3">OF LUXERIOUS <span>FASHION</span></h3>
            </div>
        </div>
    </section>
    <site-promo-offers></site-promo-offers>
</template>

<script>
    import SitePromoOffers from "@/components/SitePromoOffers";
    export default {
        name: "SitePromo",
        components: {SitePromoOffers}
    };
</script>

<style scoped>

</style>