<template>
  <div class="flex">
    <div
      class="fixed border shadow-md overflow-y-auto top-0 right-0 w-80 h-full bg-white transform z-20 transition-transform duration-500 ease-in-out"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Sidebar content goes here  -->
      <div class="mt-[75px]">
        <span
          class="cursor-pointer rounded-md text-3xl bg-gray-100 px-3 py-1"
          @click="toggleSidebar"
        >
          {{ isOpen ? "x" : "->" }}
        </span>
      </div>
      <div class="px-4">
        <p class="text-xl text-center">
          <span class="font-bold">
            {{ cartLength }}
            items</span
          >
          in the cart
        </p>
        <div class="text-center my-9 animate-bounce" v-if="cartLength === 0">
          Your cart is empty
        </div>

        <!-- CartList -->
        <CartList v-for="cart in cartItems" :key="cart.id" :cart="cart" />
      </div>
      <div class="mx-auto mt-5 max-w-56 border-t border-gray-400"></div>
      <div class="text-right mr-10 py-3 text-green-600 text-lg">
        Total £{{ totalPrice }}
      </div>
      <div
        class="text-center mx-auto w-32 bg-gray-300 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-200 cursor-pointer"
      >
        Buy Now
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    isOpen: {
      type: false,
      required: true,
    },
  },

  computed: {
    cartLength() {
      return this.cart.length;
    },
  },
  computed: {
    ...mapGetters("cart", ["cartItems", "totalPrice"]),

    cartLength() {
      return this.cartItems.length;
    },
  },
  async mounted() {
    await this.$store.dispatch("cart/fetchCartItems");
  },

  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
