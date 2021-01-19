<template>
  <form class="shipping_adress">
    <h3>Shipping Adress</h3>
    <label class="country"></label>
    <select class="country_down" required size="1">
      <option v-for="(country, index) in country" :key="index">{{
        country
      }}</option>
    </select>
    <input type="text" placeholder="State" required />
    <input type="text" placeholder="Postcode / Zip" required />
    <button>get a quote</button>
  </form>
</template>

<script>
export default {
  name: "CartShippingAdress",
  data: () => ({
    country: ["Bangladesh", "England", "USA", "Scotland", "Russia"]
  })
};
</script>

<style scoped></style>
