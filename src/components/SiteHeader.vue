<template>
  <header class="header center">
    <div class="header__left">
      <a href="index.html" class="logo">
        <img class="logo__img" src="@/assets/img/logo.png" alt="logo" />
        BRAN
        <span>D</span>
      </a>
      <form class="header__form" action="#">
        <details class="header__browse">
          <summary>Browse</summary>
          <div class="drop drop_button">
            <div class="drop__flex">
              <h3 class="drop__h3">Women</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Dresses</a></li>
                <li><a href="#" class="drop__link">Tops</a></li>
                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                <li><a href="#" class="drop__link">Blazers</a></li>
                <li><a href="#" class="drop__link">Denim</a></li>
                <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                <li><a href="#" class="drop__link">Accessories</a></li>
              </ul>
              <h3 class="drop__h3">Man</h3>
              <ul class="drop__ul">
                <li><a href="#" class="drop__link">Tees/Tank tops</a></li>
                <li><a href="#" class="drop__link">Shirts/Polos</a></li>
                <li><a href="#" class="drop__link">Sweaters</a></li>
                <li><a href="#" class="drop__link">Sweatshirts/Hoodies</a></li>
                <li><a href="#" class="drop__link">Blazers</a></li>
                <li><a href="#" class="drop__link">Jacket/vests</a></li>
              </ul>
            </div>
          </div>
        </details>
        <input type="text" placeholder="Search for Item..." />
        <button><img src="@/assets/img/search.png" alt="search" /></button>
      </form>
    </div>
    <div class="header__right">
      <a href="shoping_card.html" class="header__cart"
        ><img src="@/assets/img/cart.png" alt="cart"
      /></a>
      <!-- <input type="checkbox"  class="header__right_cart_img" id="cart_menu">
      <label for="cart_menu"><i class="fas fa-cart-arrow-down"></i></label> -->
      <div class="header__right_cart">
        <div class="header__right_cart_box1">
          <a href="#" class="header__right_cart_img"
            ><img src="@/assets/img/product/1821.png"
          /></a>
          <div class="header__right_cart_content">
            <h3>Rebox Zane</h3>
            <br />
            <p>1 <span>x</span> $250</p>
          </div>
          <div class="header__right_cart_close"><p>&#9421;</p></div>
        </div>
        <div class="header__right_cart_box2">
          <a class="header__right_cart_img"
            ><img src="@/assets/img/product/1830.png"
          /></a>
          <div class="header__right_cart_content">
            <h3>Rebox Zane</h3>
            <br />
            <p>1 x $250</p>
          </div>
          <div class="header__right_cart_close"><p>&#9421;</p></div>
        </div>
        <div class="header__right_cart_price">
          <h2>Total</h2>
          <h2>$ 500.00</h2>
        </div>
        <button class="header__right_cart_button1">Check OUT</button>
        <button class="header__right_cart_button2">Go to cart</button>
      </div>
      <!--        </details>-->
      <div class="button">
        <a href="#">My Account</a>
      </div>
    </div>
  </header>
  <nav class="nav center">
    <ul class="menu">
      <li class="menu__list">
        <a href="index.html" class="menu__link">Home </a>
      </li>
      <li class="menu__list">
        <a href="#" class="menu__link">Man </a>
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
        <a href="#" class="menu__link">Women </a>
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
      <li class="menu__list">
        <a href="#" class="menu__link">Kids </a>
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
      </li>
      <li class="menu__list">
        <a href="#" class="menu__link">Accoseriese</a>
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
        <a href="#" class="menu__link">Featured </a>
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
        <a href="#" class="menu__link">Hot Deals</a>
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
export default {
  name: "SiteHeader"
};
</script>
