import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product"; // Import your product module
import cart from "./modules/cart";

Vue.use(Vuex);

export default () => {
  return new Vuex.Store({
    modules: {
      product, // Register the product module
      cart,
    },
  });
};
