import { createStore } from "vuex";

const mutations = {
    addToCart(state) {
      state.cartValue += 1;
    },
  },
  state = {
    cartValue: 0,
  };

export default createStore({ mutations, state, strict: true });
