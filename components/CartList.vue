<template>
  <div class="flex items-center w-full gap-4 my-4 border-b pb-6">
    <div class="flex-grow flex gap-4">
      <div class="w-20 h-20">
        <img :src="cart.img" alt="" class="rounded-lg bg-gray-100 p-1" />
      </div>
      <div>
        <p>{{ cart.name }}</p>
        <p class="my-1 text-green-600">£{{ cart.price }}</p>
        <button
          class="bg-gray-100 px-2 text-gray-800"
          @click="decrement(cart.id)"
        >
          -
        </button>
        <button class="w-8 bg-gray-100 text-center">{{ cart.qty }}</button>
        <button
          class="bg-gray-100 px-2 text-gray-800"
          @click="increment(cart.id)"
        >
          +
        </button>
      </div>
    </div>
    <div class="col-span-1 mr-3 bg-gray-100 p-1 rounded-md">
      <svg
        class="fill-current text-gray-900 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        @click="deleteCartItem(cart)"
      >
        <path
          d="M3 6h18v2H3zm2 2v12c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2V8H5zm3 2h2v8H8zm4 0h2v8h-2zm4 0h2v8h-2z"
        />
        <path d="M9 3h6v2H9z" />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions("cart", [
      "deleteCartItem",
      "incrementItemQty",
      "decrementItemQty",
    ]),

    increment(cartId) {
      this.incrementItemQty(cartId); // Dispatch increment action
    },
    decrement(cartId) {
      this.decrementItemQty(cartId); // Dispatch decrement action
    },
  },
};
</script>
