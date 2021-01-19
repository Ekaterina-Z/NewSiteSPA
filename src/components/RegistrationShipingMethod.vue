<template>
  <details class=" registration__form">
    <summary> <h3>04. SHIPPING METHOD</h3></summary>
    <form class="registration__form_shipping">
      <fieldset class="registration__form_left">
        <legend>Check as a guest or register</legend>
        <p>Register with us for future convenience</p>
        <label><input type="radio" name="chose" />checkout as guest</label>
        <label><input type="radio" checked name="chose" />register</label>
        <h5>register and save time!</h5>
        <p>Register with us for future convenience</p>
        <br />
        <p>>> Fast and easy checkout</p>
        <p>>> Easy access to your order history and status</p>
        <button
          class="registration__form_left_button_submit"
          type="button"
          name="cont"
        >
          Continue
        </button>
      </fieldset>
    </form>
  </details>
</template>

<script>
export default {
  name: "RegistrationShipingMethod"
};
</script>

<style scoped></style>
