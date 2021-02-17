<template>
  <section class="slider center" >
    <ul>
      <li id="slider-1" class="slide">
        <img src="@/assets/img/product/2490.png" />
        <a class="prev" href="#slider-1"></a>
        <a class="next" href="#slider-2"></a>
      </li>
      <li id="slider-2" class="slide">
        <img src="@/assets/img/product/product-1.png" />
        <a class="prev" href="#slider-2"></a>
        <a class="next" href="#slider-3"></a>
      </li>
      <li id="slider-3" class="slide">
        <img src="@/assets/img/product/product-5.png" />
        <a class="prev" href="#slider-3"></a>
        <a class="next" href="#slider-1"></a>
      </li>
    </ul>
  </section>

  <div class="slider__product center">
    <section class="slider__product_box">
      <h5>WOMEN COLLECTION</h5>
      <h4>Moschino Cheap And Chic</h4>
      <p>
        Compellingly actualize fully researched processes before proactive
        outsourcing. Progressively syndicate collaborative architectures before
        cutting-edge services. Completely visualize parallel core competencies
        rather than exceptional portals.
      </p>
      <p class="slider_p">
        MATERIAL: <span>COTTON</span> DESIGNER: <span>BINBURHAN</span>
      </p>
      <h3>$561</h3>
      <section class="slider__product_box_chose center">
        <form class="slider__product_choose">
          <h5>CHOOSE COLOR</h5>
          <input
            class="slider__product_choose_color"
            type="color"
            id="product_color"
            name="productColor"
            value="#FF0000"
          />
        </form>
        <form class="slider__product_choose">
          <h5>CHOOSE SIZE</h5>
          <select id="sizes" name="product_size">
            <option value="XXL" selected>XXL</option>
            <option value="XL">X</option>
            <option value="L">L</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
          </select>
        </form>
        <form class="slider__product_choose">
          <h5>QUANTITY</h5>
          <select id="quntyti" name="product_quzntity">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </form>
      </section>
      <button class="slider__product_box_chose_but">
        <img @click.prevent="$emit('add', id)" />Add to Cart
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProductSlider",
};
</script>

<style scoped></style>
