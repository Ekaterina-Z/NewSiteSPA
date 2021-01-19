<template>
  <header class="header center">
    <div class="header__left">
      <router-link to="/" class="logo">
        <img class="logo__img" src="@/assets/img/logo.png" alt="logo" />
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
      <!--      <router-link to="/cart" class="header__cart"-->
      <!--        ><img src="@/assets/img/cart.png" alt="cart"-->
      <!--      /></router-link>-->
      <!--      &lt;!&ndash; <input type="checkbox"  class="header__right_cart_img" id="cart_menu">-->
      <!--      <label for="cart_menu"><i class="fas fa-cart-arrow-down"></i></label> &ndash;&gt;-->
      <!--      <div class="header__right_cart">-->
      <!--        <div class="header__right_cart_box1">-->
      <!--          <router-link to="/cart" class="header__right_cart_img"-->
      <!--            ><img src="@/assets/img/product/1821.png"-->
      <!--          /></router-link>-->
      <!--          <div class="header__right_cart_content">-->
      <!--            <h3>Rebox Zane</h3>-->
      <!--            <br />-->
      <!--            <p>1 <span>x</span> $250</p>-->
      <!--          </div>-->
      <!--          <div class="header__right_cart_close"><p>&#9421;</p></div>-->
      <!--        </div>-->
      <!--        <div class="header__right_cart_box2">-->
      <!--          <a class="header__right_cart_img"-->
      <!--            ><img src="@/assets/img/product/1830.png"-->
      <!--          /></a>-->
      <!--          <div class="header__right_cart_content">-->
      <!--            <h3>Rebox Zane</h3>-->
      <!--            <br />-->
      <!--            <p>1 x $250</p>-->
      <!--          </div>-->
      <!--          <div class="header__right_cart_close"><p>&#9421;</p></div>-->
      <!--        </div>-->
      <!--        <div class="header__right_cart_price">-->
      <!--          <h2>Total</h2>-->
      <!--          <h2>$ 500.00</h2>-->
      <!--        </div>-->
      <!--        <button class="header__right_cart_button1">Check OUT</button>-->
      <!--        <button class="header__right_cart_button2">Go to cart</button>-->
      <!--      </div>-->
      <div class="button">
        <router-link to="/cart">My Account</router-link>
      </div>
    </div>
  </header>
  <nav class="nav center">
    <ul class="menu">
      <li class="menu__list">
        <router-link class="menu__link" to="/">Home</router-link>
      </li>
      <li class="menu__list">
        <router-link class="menu__link" to="/products">Man</router-link>
        <!--        <a href="#" class="menu__link">Man </a>-->
        <div class="drop">
          <div class="drop__flex">
            <h3 class="drop__h3">Man</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
              <li><a href="#" class="drop__link">Blazers</a></li>
              <li><a href="#" class="drop__link">Leggings/Pants</a></li>
              <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
              <li><a href="#" class="drop__link">Accessories</a></li>
            </ul>
          </div>
          <div class="drop__flex">
            <h3 class="drop__h3">Man</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
            </ul>
            <h3 class="drop__h3">Man</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
            </ul>
          </div>
          <div class="drop__flex">
            <h3 class="drop__h3">Man</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
              <li>
                <a href="#" class="drop__link">
                  <h2 class="drop_sale">Super <br />sale!</h2></a
                >
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="menu__list">
        <router-link class="menu__link" to="/products">Women</router-link>
        <!--        <a href="#" class="menu__link">Women </a>-->
        <div class="drop">
          <div class="drop__flex">
            <h3 class="drop__h3">WOMEN</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
              <li><a href="#" class="drop__link">Blazers</a></li>
              <li><a href="#" class="drop__link">Leggings/Pants</a></li>
              <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
              <li><a href="#" class="drop__link">Accessories</a></li>
            </ul>
          </div>
          <div class="drop__flex">
            <h3 class="drop__h3">WOMEN</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
            </ul>
            <h3 class="drop__h3">WOMEN</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
            </ul>
          </div>
          <div class="drop__flex">
            <h3 class="drop__h3">WOMEN</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
              <li>
                <a href="#" class="drop__link">
                  <h2 class="drop_sale">Super <br />sale!</h2></a
                >
              </li>
            </ul>
          </div>
        </div>
      </li>
      <!--      <li class="menu__list">Kids </a>-->
      <router-link class="menu__link" to="/products">Kids</router-link>
      <div class="drop">
        <div class="drop__flex">
          <h3 class="drop__h3">KIDS</h3>
          <ul class="drop__ul">
            <li><a href="#" class="drop__link">Dresses</a></li>
            <li><a href="#" class="drop__link">Tops</a></li>
            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
            <li><a href="#" class="drop__link">Jackets/Coats</a></li>
            <li><a href="#" class="drop__link">Blazers</a></li>
            <li><a href="#" class="drop__link">Leggings/Pants</a></li>
            <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
            <li><a href="#" class="drop__link">Accessories</a></li>
          </ul>
        </div>
        <div class="drop__flex">
          <h3 class="drop__h3">KIDS</h3>
          <ul class="drop__ul">
            <li><a href="#" class="drop__link">Dresses</a></li>
            <li><a href="#" class="drop__link">Tops</a></li>
            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
            <li><a href="#" class="drop__link">Jackets/Coats</a></li>
          </ul>
          <h3 class="drop__h3">KIDS</h3>
          <ul class="drop__ul">
            <li><a href="#" class="drop__link">Dresses</a></li>
            <li><a href="#" class="drop__link">Tops</a></li>
            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
          </ul>
        </div>
        <div class="drop__flex">
          <h3 class="drop__h3">KIDS</h3>
          <ul class="drop__ul">
            <li><a href="#" class="drop__link">Dresses</a></li>
            <li><a href="#" class="drop__link">Tops</a></li>
            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
            <li><a href="#" class="drop__link">Jackets/Coats</a></li>
            <li>
              <a href="#" class="drop__link">
                <h2 class="drop_sale">Super <br />sale!</h2></a
              >
            </li>
          </ul>
        </div>
      </div>

      <li class="menu__list">
        <router-link class="menu__link" to="/products">Accoseriese</router-link>
        <!--        <a href="#" class="menu__link">Accoseriese</a>-->
        <div class="drop drop__last">
          <div class="drop__flex">
            <h3 class="drop__h3">Accoseriese</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
              <li><a href="#" class="drop__link">Blazers</a></li>
              <li><a href="#" class="drop__link">Leggings/Pants</a></li>
              <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
              <li><a href="#" class="drop__link">Accessories</a></li>
            </ul>
          </div>
          <div class="drop__flex">
            <h3 class="drop__h3">Accoseriese</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
            </ul>
            <h3 class="drop__h3">Accoseriese</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
            </ul>
          </div>
          <div class="drop__flex">
            <h3 class="drop__h3">Accoseriese</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
              <li>
                <a href="#" class="drop__link">
                  <h2 class="drop_sale">Super <br />sale!</h2></a
                >
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="menu__list">
        <!--        <a href="#" class="menu__link">Featured </a>-->
        <router-link class="menu__link" to="/products">Featured</router-link>
        <div class="drop drop__last">
          <div class="drop__flex">
            <h3 class="drop__h3">Featured</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
              <li><a href="#" class="drop__link">Blazers</a></li>
              <li><a href="#" class="drop__link">Leggings/Pants</a></li>
              <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
              <li><a href="#" class="drop__link">Accessories</a></li>
            </ul>
          </div>
          <div class="drop__flex">
            <h3 class="drop__h3">Featured</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
            </ul>
            <h3 class="drop__h3">Featured</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
            </ul>
          </div>
          <div class="drop__flex">
            <h3 class="drop__h3">Featured</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
              <li>
                <a href="#" class="drop__link">
                  <h2 class="drop_sale">Super <br />sale!</h2></a
                >
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="menu__list">
        <router-link to="/products" class="menu__link">Hot Deals</router-link>
        <div class="drop drop__last">
          <div class="drop__flex">
            <h3 class="drop__h3">Hot Deals</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
              <li><a href="#" class="drop__link">Blazers</a></li>
              <li><a href="#" class="drop__link">Leggings/Pants</a></li>
              <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
              <li><a href="#" class="drop__link">Accessories</a></li>
            </ul>
          </div>
          <div class="drop__flex">
            <h3 class="drop__h3">Hot Deals</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
            </ul>
            <h3 class="drop__h3">Hot Deals</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
            </ul>
          </div>
          <div class="drop__flex">
            <h3 class="drop__h3">Hot Deals</h3>
            <ul class="drop__ul">
              <li><a href="#" class="drop__link">Dresses</a></li>
              <li><a href="#" class="drop__link">Tops</a></li>
              <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
              <li><a href="#" class="drop__link">Jackets/Coats</a></li>
              <li>
                <a href="#" class="drop__link">
                  <h2 class="drop_sale">Super <br />sale!</h2></a
                >
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import HeaderCart from "@/components/HeaderCart";
export default {
  name: "SiteHeader",
  components: { HeaderCart }
};
</script>
