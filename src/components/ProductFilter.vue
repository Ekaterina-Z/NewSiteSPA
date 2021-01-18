<template>
  <div>
    <form class="main_filter">
      <fieldset class="trending">
        <legend>Trending Now</legend>
        <a href="#">Bohemian</a>
        <a href="#">Floral</a>
        <a href="#">Lace</a>
        <a href="#">Floral</a>
        <a href="#">Lace</a>
        <a href="#">Bohemian</a>
      </fieldset>
      <fieldset class="size">
        <legend>Size</legend>
        <ul>
          <li>
            <input
              v-model="selectedSize"
              type="checkbox"
              value="XXS"
              class="checkbox"
              id="XXS"
            /><label for="XXS">XXS</label>
          </li>
          <li>
            <input
              v-model="selectedSize"
              type="checkbox"
              value="XS"
              class="checkbox"
              id="XS"
            /><label for="XS">XS</label>
          </li>
          <li>
            <input
              v-model="selectedSize"
              type="checkbox"
              value="S"
              class="checkbox"
              id="S"
            /><label for="S">S</label>
          </li>
          <li>
            <input
              v-model="selectedSize"
              type="checkbox"
              value="M"
              class="checkbox"
              id="M"
            /><label for="M">M</label>
          </li>
          <li>
            <input
              v-model="selectedSize"
              type="checkbox"
              value="L"
              class="checkbox"
              id="L"
            /><label for="L">L</label>
          </li>
          <li>
            <input
              v-model="selectedSize"
              type="checkbox"
              value="XL"
              class="checkbox"
              id="XL"
            /><label for="XL">XL</label>
          </li>
          <li>
            <input
              v-model="selectedSize"
              type="checkbox"
              value="XXL"
              class="checkbox"
              id="XXL"
            /><label for="XXL">XXL</label>
          </li>
        </ul>
      </fieldset>
      <fieldset class="price ">
        <legend>Price</legend>
        <input
          v-model.number="priceValue"
          type="range"
          id="price"
          min="$52"
          max="$512"
          step="5"
        />
        <p>Price:{{ priceValue }}</p>
      </fieldset>
    </form>
    <div class="sort">
      <form class="sort_block">
        <p>
          <label>Sort by</label>
          <select class="sort__block">
            <option
              v-for="(choose, index) in selectedSortByName"
              :key="index"
              >{{ choose }}</option
            >
            <!--            <option value="value2" selected>Size</option>-->
            <!--            <option value="value3">Brend</option>-->
          </select>
        </p>
      </form>
      <form class="show sort_block">
        <p>
          <label>Show</label>
          <select name="select" class="sort__block">
            <option
              v-for="(quantity, index) in quantityProductOnPage"
              :key="index"
              value="value1"
              selected
              >{{ quantity }}</option
            >
            <!--            <option value="value2">10</option>-->
            <!--            <option value="value3">11</option>-->
          </select>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductFilter",
  data: () => ({
    selectedSize: [],
    priceValue: "",
    selectedSortByName: ["Name", "Size", "Brend"],
    quantityProductOnPage: ["10", "20", "30"]
  })
};
</script>

<style scoped></style>
