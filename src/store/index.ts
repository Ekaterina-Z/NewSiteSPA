import { createStore } from "vuex";
import { UserCart } from "@/models/base.model";

const state = { cart: UserCart }; //* - Это мы привязываемся к состоянию?
type stateType = typeof state; //* - зачем нам типизация ?

const getters = {
  cart: (state: stateType) => state.cart
};

export default createStore({
  state,
  getters,
  mutations: {
    setCart: (state: stateType, payload: typeof UserCart) => {
      state.cart = payload; //*  Здесь мы отдаем данные в корзину?
    }
  },
  actions: {
    setCart: (context, payload: typeof UserCart) => {
      context.commit("setCart", payload);//*  Здесь мы получаем данные из корзины после обновления state?
    }
  },
  modules: {}
});
