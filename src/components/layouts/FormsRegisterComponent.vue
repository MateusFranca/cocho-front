<template>
  <div class="container mx-auto py-4 w-5/6">
    <div class="flex flex-col md:flex-row gap-5 md:gap-10">
      <div class="w-full md:w-2/3">
        <div class="w-full h-full flex flex-col justify-center">
            <h3 class="text-3xl mb-3 text-[#3F3D56] text-left">{{ title }}</h3>
          <div class="mb-3">
            <slot></slot>
          </div>
        </div>
      </div>
      <div class="hidden md:flex xl:w-full md:w-3/4 items-center justify-center">
        <img :src="imgPath" alt="Imagem Decorativa" class="w-50 h-auto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imgPath: String,
  },
};
</script>
