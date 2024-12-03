const state = () => ({
  cartItems: [],
});

const getters = {
  cartItems: (state) => state.cartItems,

  // getting the total price all item
  totalPrice: (state) => {
    return state.cartItems
      .reduce((total, item) => {
        return total + item.qty * item.price;
      }, 0)
      .toFixed(2);
  },
};

const mutations = {
  SET_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },

  ADD_TO_CART(state, newItem) {
    // increament the qty if the item exist
    const existingItem = state.cartItems.find((item) => item.id === newItem.id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      state.cartItems.unshift({ ...newItem, qty: 1 });
    }
  },

  DELETE_CART_ITEM(state, payload) {
    state.cartItems = state.cartItems.filter((item) => item.id !== payload.id);
  },

  // Increament and Decreament
  INCREMENT_ITEM_QTY(state, cartId) {
    const item = state.cartItems.find((item) => item.id === cartId);
    if (item) {
      item.qty += 1;
    }
  },

  DECREMENT_ITEM_QTY(state, cartId) {
    const item = state.cartItems.find((item) => item.id === cartId);
    if (item && item.qty > 1) {
      item.qty -= 1;
    }
  },
};

// actions
const actions = {
  // fetching all the cartItems
  async fetchCartItems({ commit }) {
    try {
      const { data } = await this.$axios.get("/carts");

      if (data) {
        commit("SET_CART_ITEMS", data);
      }
    } catch (error) {
      console.log("Error Fetching Cart ", error.message);
    }
  },

  // add to cart
  async addToCart({ commit, state }, payload) {
    try {
      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find(
        (item) => item.id === payload.id
      );

      if (existingItem) {
        // If it exists, just commit the mutation to increment the quantity
        commit("ADD_TO_CART", existingItem); // Pass the existing item to increment
      } else {
        // If it doesn't exist, make the API call to add the item
        const { data } = await this.$axios.post("/carts", {
          ...payload,
          qty: 1,
        });
        if (data) {
          commit("ADD_TO_CART", data); // Commit the new item with qty 1
        }
      }
    } catch (error) {
      console.log("Error adding to cart", error.message);
    }
  },

  // delete item
  async deleteCartItem({ commit }, payload) {
    try {
      await this.$axios.delete(`/carts/${payload.id}`);
      commit("DELETE_CART_ITEM", payload);
    } catch (error) {
      console.log("Error deleting cart item", error.message);
    }
  },

  // Increatment
  async incrementItemQty({ commit }, cartId) {
    try {
      // Make an API call to increment the quantity
      const { data } = await this.$axios.patch(`/carts/${cartId}`);
      if (data) {
        commit("INCREMENT_ITEM_QTY", cartId); // Commit mutation to update state
      }
    } catch (error) {
      console.log("Error incrementing item quantity", error.message);
    }
  },

  // Decreatment
  async decrementItemQty({ commit }, cartId) {
    try {
      // Make an API call to decrement the quantity
      const { data } = await this.$axios.patch(`/carts/${cartId}`);

      if (data) {
        commit("DECREMENT_ITEM_QTY", cartId); // Commit mutation to update state
      }
    } catch (error) {
      console.log("Error decrementing item quantity", error.message);
    }
  },
};

const cartModule = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default cartModule;
