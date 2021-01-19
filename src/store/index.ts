import { createStore } from "vuex";
import { UserCart } from "@/models/base.model";

const state = {cart: UserCart}
type stateType = typeof state;

const getters = {
  cart: (state: stateType) => state.cart
}

export default createStore({
  state,
  getters,
  mutations: {
    setCart: (state: stateType, payload: typeof UserCart) => {
      state.cart = payload;
    }
  },
  actions: {
    setCart: (context, payload: typeof UserCart) => {
      context.commit("setCart", payload);
    }
  },
  modules: {}
});
