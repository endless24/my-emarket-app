<template>
  <div class="carousel relative container mx-auto" style="max-width: 1600px">
    <div class="carousel-inner relative overflow-hidden w-full">
      <!--Slide 1-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-1"
        name="carousel"
        aria-hidden="true"
        hidden=""
        checked="checked"
      />
      <div class="carousel-item absolute opacity-0" style="height: 75vh">
        <div
          class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
          style="background-image: url('/banner/banner.jpg')"
        >
          <div class="container mx-auto">
            <div
              class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
            >
              <p class="text-black text-2xl my-4">
                Welcome to Endless Online Shopping
              </p>
              <a
                class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                href="#store"
                >view product</a
              >
            </div>
          </div>
        </div>
      </div>
      <label
        for="carousel-3"
        class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >‹</label
      >
      <label
        for="carousel-2"
        class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >›</label
      >

      <!--Slide 2-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-2"
        name="carousel"
        aria-hidden="true"
        hidden=""
      />
      <div
        class="carousel-item absolute opacity-0 bg-cover bg-right"
        style="height: 75vh"
      >
        <div
          class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-top"
          style="background-image: url('/banner/fruit.webp')"
        >
          <div class="container mx-auto">
            <div
              class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
            >
              <p class="text-gray-300 text-2xl my-4">Fresh Variety of Fruit</p>
              <a
                class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                href="#"
                >view product</a
              >
            </div>
          </div>
        </div>
      </div>
      <label
        for="carousel-1"
        class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >‹</label
      >
      <label
        for="carousel-3"
        class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >›</label
      >

      <!--Slide 3-->
      <input
        class="carousel-open"
        type="radio"
        id="carousel-3"
        name="carousel"
        aria-hidden="true"
        hidden=""
      />
      <div class="carousel-item absolute opacity-0" style="height: 75vh">
        <div
          class="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-center"
          style="background-image: url('/banner/pillo.avif')"
        >
          <div class="container mx-auto">
            <div
              class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide"
            >
              <p class="text-black text-2xl my-4">
                Stripy Zig Zag Jigsaw Pillow and Duvet Set
              </p>
              <a
                class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                href="#"
                >view product</a
              >
            </div>
          </div>
        </div>
      </div>
      <label
        for="carousel-2"
        class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >‹</label
      >
      <label
        for="carousel-1"
        class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >›</label
      >

      <!-- Add additional indicators for each slide-->
      <ol class="carousel-indicators">
        <li class="inline-block mr-3">
          <label
            for="carousel-1"
            class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >•</label
          >
        </li>
        <li class="inline-block mr-3">
          <label
            for="carousel-2"
            class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >•</label
          >
        </li>
        <li class="inline-block mr-3">
          <label
            for="carousel-3"
            class="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
            >•</label
          >
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {};
</script>
