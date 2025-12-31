<template>
  <div class="flex md:justify-start justify-center">
    <button :class="{ 'flex': !!imgPath, 'justify-center': !!imgPath, 'items-center': !!imgPath, 'gap-3': !!imgPath, 'bg-[#001d38]': true, 'text-white': true, 'py-[.5rem]': true, 'px-[2.5rem]': true, 'rounded-[.5rem]': true,'w-full': true, 'md:w-auto': true } ">
      {{ title }}
      <img v-if="imgPath" :src="imgPath" alt="">
    </button>
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
