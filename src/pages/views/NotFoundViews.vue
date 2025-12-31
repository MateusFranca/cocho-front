<template>
  <div class="flex flex-col items-center justify-center gap-1">
    <div class="w-2/3 lg:w-1/3 justify-center items-center">
      <img
        src="../../../public/image/icons/layouts/img-not-found.svg"
        alt="Imagem de Erro"
      />
    </div>
    <!-- <p >
      Desculpe, a página que você está procurando não existe. Em breve, você
      será redirecionado para a página inicial. Se preferir, clique<router-link
        :to="{ name: 'home-views' }"
      >
        aqui</router-link
      >
      para voltar agora.
    </p> -->
    <p class="font-medium text-[#3F3D56] text-1 text-center">
      A página que você está procurando não foi encontrada.
    </p>
    <router-link :to="{ name: 'home-views' }">
      <p
        class="font-medium text-[#3F3D56] text-1xl text-center hover:underline"
      >
        Ir para a página inicial
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "home-views" });
    }, 5000);
  },
};
</script>

<style scoped></style>
