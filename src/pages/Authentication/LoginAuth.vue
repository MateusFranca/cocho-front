<template>
  <form @submit.prevent="submitformLogin">
    <FormsRegister
      title="Login"
      imgPath="../../../public/image/decorationRegister/decorationLogin.svg"
      class="h-screen flex flex-col justify-center"
    >
      <div class="flex flex-col w-full">
        <label for="nameUser" class="font-medium text-[#3F3D56] mb-1"
          >Nome de usuário:</label
        >
        <input
          v-model="formLogin.user_adm"
          type="text"
          name="nameUser"
          id="nameUser"
          placeholder="Informe seu nome de usuário"
          class="border-2 border-[#3F3D56] p-2 w-full rounded-lg mb-3"
        />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <label for="passwordClient" class="font-medium text-[#3F3D56] mb-1"
          >Senha:</label
        >
        <input
          v-model="formLogin.password_adm"
          type="password"
          name="passwordClient"
          id="passwordClient"
          placeholder="Informe sua senha"
          class="border-2 border-[#3F3D56] p-2 w-full rounded-lg mb-5"
        />
      </div>
      <ButtonSaveComponent title="Entrar" @save="save" />
    </FormsRegister>
  </form>
</template>

<script>
import ButtonSaveComponent from "../../components/ButtonSaveComponent.vue";
import FormsRegister from "../../components/layouts/FormsRegisterComponent.vue";
import { API_BASE_URL } from "../../../api-config.ts";
import axios from "axios";

export default {
  name: "Client",
  components: { FormsRegister, ButtonSaveComponent },
  data() {
    return {
      formLogin: {
        user_adm: "",
        password_adm: "",
      },
    };
  },
  methods: {
    submitformLogin() {
      const requestData = {
        user_adm: this.formLogin.user_adm,
        password_adm: this.formLogin.password_adm,
      };
      axios
        .post(`${API_BASE_URL}/auth/login`, requestData)
        .then((response) => {
          this.$toast.success("Login realizado com sucesso!");
          const token = response.data.token;
          localStorage.setItem("token", token);
          this.formLogin.user_adm = "";
          this.formLogin.password_adm = "";
          this.$router.push({ name: "home-views" });
        })
        .catch((error) => {
          this.$toast.error(
            "Por favor, verifique suas credenciais e tente novamente"
          );
          console.error(error);
        });
    },
    save() {
      this.submitformLogin();
    },
  },
};
</script>
