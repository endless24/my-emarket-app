const state = () => ({
  products: [],
  proDetails: null,
});

const getters = {
  products: (state) => state.products,

  proDetails: (state) => state.proDetails,
};

const mutations = {
  SET_PRODUCTS(state, payload) {
    state.products = payload;
  },

  SET_PRO_DETAILS(state, product) {
    state.proDetails = product;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      const { data } = await this.$axios.get("/products");
      if (data) {
        commit("SET_PRODUCTS", data);
      }
    } catch (err) {
      console.error("Error fetching products", err.message);
    }
  },

  async fetchProDetails({ commit }, productId) {
    try {
      const { data } = await this.$axios.get(`/products/${productId}`);
      commit("SET_PRO_DETAILS", data);
    } catch (err) {
      console.log("Error fetching product details", err.message);
    }
  },
};

const productModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default productModule;
