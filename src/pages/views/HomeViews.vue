<template>
  <!-- Global -->
  <div class="w-full flex flex-col items-center justify-center gap-12">
    <!-- Logo -->
    <div class="md:flex xl:w-full md:w-2/3 justify-center">
      <img src="../../../public/image/icons/layouts/sille.svg" alt="SILLE-LOGO">
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Home",
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$toast.info("Deslogado com sucesso!");
    }
  }
};
</script>