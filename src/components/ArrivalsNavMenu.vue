<template>
  <nav class="nav_arriv center">
    <h1>NEW ARRIVALS</h1>
    <ul class="menu">
      <li class="menu__list">
        <router-link to="/" class="menu__link">Home/ </router-link>
      </li>
      <li class="menu__list">
        <router-link to="/products" class="menu__link">Man / </router-link>
      </li>
      <li class="menu__list">
        <router-link to="/products" class="menu__link"
          >New Arrivals
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ArrivalsNavMenu"
};
</script>

<style scoped></style>
