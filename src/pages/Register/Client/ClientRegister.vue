<template>
  <form @submit.prevent="submitFormClient">
    <FormsRegister
      title="Cadastro Pecuarista"
      imgPath="../../../../public/image/decorationRegister/decorationClient.svg"
    >
      <div class="flex flex-col w-full">
        <label for="nameClient" class="font-medium text-[#3F3D56] mb-1"
          >Nome:</label
        >
        <input
          v-model="formClient.name_cus"
          type="text"
          name="nameClient"
          id="nameClient"
          placeholder="Digite o nome"
          class="border-2 border-[#3F3D56] p-2 w-full rounded-lg mb-3"
        />
      </div>
      <div class="flex flex-col gap-1 w-full">
        <label for="phoneClient" class="font-medium text-[#3F3D56] mb-1"
          >Número de Telefone (WhatsApp):</label
        >
        <input
          v-model="formClient.phone_cus"
          v-mask="'(##) #####-####'"
          type="text"
          name="phoneClient"
          id="phoneClient"
          placeholder="Digite o telefone"
          class="border-2 border-[#3F3D56] p-2 w-full rounded-lg mb-5"
        />
      </div>
      <ButtonSaveComponent title="Salvar" imgPath="../../public/image/icons/register/iconSave.svg" @click.prevent="save" />
    </FormsRegister>
  </form>
</template>

<script>
import ButtonSaveComponent from "../../../components/ButtonSaveComponent.vue";
import FormsRegister from "../../../components/layouts/FormsRegisterComponent.vue";
import { API_BASE_URL } from "../../../../api-config.ts";
import axios from "axios";

export default {
  name: "Client",
  components: { FormsRegister, ButtonSaveComponent },
  data() {
    return {
      formClient: {
        name_cus: "",
        phone_cus: "",
      },
    };
  },
  methods: {
    submitFormClient() {
      const requestData = {
        name_cus: this.formClient.name_cus,
        phone_cus: this.removeNonNumeric(this.formClient.phone_cus),
      };
      axios
        .post(`${API_BASE_URL}/customers`, requestData)
        .then((response) => {
          this.$toast.success("Pecuarista cadastrado com sucesso!");
          this.formClient.name_cus = "";
          this.formClient.phone_cus = "";
        })
        .catch((error) => {
          this.$toast.error("Erro ao cadastrar pecuarista");
          console.error(error);
        });
    },
    save() {
      this.submitFormClient();
    },
    removeNonNumeric(value) {
      return value.replace(/[\D\s\-]/g, "");
    },
  },
};
</script>
