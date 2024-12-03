<template>
  <!-- Product Details Section -->
  <section
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border shadow-lg rounded-lg my-28"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 divide-x-2">
      <!-- Product Image -->
      <div class="flex justify-center items-center">
        <img
          :src="proDetails.img"
          alt="Product Image"
          class="w-10/12 h-fit rounded-lg"
        />
      </div>

      <!-- Product Info -->
      <div class="px-8">
        <h1 class="text-3xl font-semibold text-gray-900 mb-4">Product Name</h1>
        <p class="text-lg text-gray-600 mb-6">{{ proDetails.name }}</p>

        <!-- Price -->
        <div class="mb-6">
          <span class="text-3xl font-bold text-green-600"
            >£{{ proDetails.price }}</span
          >
          <p class="text-gray-500 text-sm line-through mt-1">£249.99</p>
        </div>

        <!-- Product Description -->
        <div class="mb-6">
          <h2 class="text-2xl font-medium text-gray-800 mb-2">
            Product Description
          </h2>
          <p class="text-gray-600 text-base">
            {{ proDetails.description }}
          </p>
        </div>

        <!-- Add to Cart Button -->
        <div class="flex items-center space-x-4">
          <button
            class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
            @click="addToCart(proDetails)"
          >
            Add to Cart
          </button>
          <button
            class="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-400 transition duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  async asyncData({ params, store }) {
    // Fetch product details using the product ID from the route
    await store.dispatch("product/fetchProDetails", params.id); // Ensure you're referencing the module correctly
  },
  computed: {
    ...mapGetters("product", ["proDetails"]), // Map the proDetails getter from the product module
  },

  // addtocart method
  methods: {
    ...mapActions("cart", ["addToCart"]),
  },
};
</script>
