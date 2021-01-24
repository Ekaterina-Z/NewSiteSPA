<template>
  <header class="header center">
    <div class="header__left">
      <router-link to="/" class="logo">
        <img
          class="logo__img"
          src="@/assets/img/logo.png"
          alt="logo"
        />
        BRAN
        <span>D</span>
      </router-link>
      <form class="header__form" action="#">
        <details class="header__browse">
          <summary>Browse</summary>
          <div class="drop drop_button">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li>
                  <router-link to="/products" class="drop__link"
                    >Dresses</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Tops</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Sweaters/Knits</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Jackets/Coats</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Blazers</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Denim</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Leggings/Pants</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Skirts/Shorts</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Accessories</router-link
                  >
                </li>
              </ul>
              <h3 class="drop__h3">Man</h3>
              <ul class="drop__ul">
                <li>
                  <router-link to="/products" class="drop__link"
                    >Tees/Tank tops</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Shirts/Polos</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Sweaters</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Sweatshirts/Hoodies</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Blazers</router-link
                  >
                </li>
                <li>
                  <router-link to="/products" class="drop__link"
                    >Jacket/vests</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </details>
        <input type="text" placeholder="Search for Item..." />
        <button><img src="@/assets/img/search.png" alt="search" /></button>
      </form>
    </div>
    <div class="header__right">
      <header-cart></header-cart>
      <div class="button">
        <router-link to="/cart">My Account</router-link>
      </div>
    </div>
  </header>
  <header-main-menu></header-main-menu>
</template>

<script>
import HeaderCart from "@/components/HeaderCart";
import HeaderMainMenu from "@/components/HeaderMainMenu";
export default {
  name: "SiteHeader",
  components: { HeaderMainMenu, HeaderCart }
};
</script>
