<template>
  <fieldset class="registration__form_right">
    <legend>Already registed?</legend>
    <p>Please log in below</p>
    <label for="email">EMAIL ADDRESS<span>*</span></label>
    <input type="email" id="email" required />
    <label for="password">PASSWORD<span>*</span></label>
    <input type="password" id="password" required />
    <p1><span>* Required Fileds</span></p1>
    <button
      class="registration__form_right_button_submit"
      type="button"
      name="log_in"
      action="#"
    >
      LOG IN
    </button>
    <div><a href="#" class="button_fogot">Forgot Password ?</a></div>
  </fieldset>
</template>

<script>
export default {
  name: "SiteLogOn"
};
</script>

<style scoped></style>
