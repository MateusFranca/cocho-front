<template>
  <div class="container mx-auto p-8">
    <h3 class="text-4xl text-[#3F3D56] mb-5">Consultar Cocho</h3>
    <!--  Pesquisa  -->
    <div class="flex md:flex-nowrap flex-wrap w-full gap-3 mb-3">
      <div class="flex flex-col md:w-1/2 w-full">
        <label for="nameClient" class="font-medium text-[#3F3D56] mb-1"
          >Nome do Cocho:</label
        >
        <input
          v-model="formClient.name_cus"
          type="text"
          name="nameClient"
          id="nameClient"
          placeholder="Digite o nome do cocho"
          class="border-2 border-[#3F3D56] p-2 w-full rounded-lg"
        />
      </div>
      <div class="flex flex-col md:w-1/2 w-full">
        <label for="customer" class="font-medium text-[#3F3D56] mb-1"
          >Pecuarista:</label
        >
        <Multiselect
          id="customer"
          v-model="formClient.id_cus_fk"
          placeholder="Selecionar pecuarista"
          noOptionsText="Nenhuma opção disponíveis" 
          noResultsText="Nenhum resultado encontrado"
          searchable
          :limit="5"
          :options="
            customerList.map((customer) => ({
              label: customer.name_cus,
              value: customer.id_cus,
            }))
          "
          :classes="{
            container:
              'relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-[#03223f] rounded-md bg-white leading-snug outline-none',
            optionSelected: 'text-white bg-green-500',
            optionPointed: 'bg-gray-100',
            optionSelectedPointed: 'text-white bg-red-500',
          }"
        />
      </div>
      <div class="md:w-1/2 w-full">
        <StatusFilterComponent
          ref="statusFilterComponent"
          @filter="handleStatusFilter"
        />
      </div>
      <div class="flex flex-1 mt-5 items-center">
        <ButtonSaveComponent
          @click.prevent="searchTroughs"
          title="Procurar"
          imgPath="../../public/image/icons/register/iconSearch.svg"
          class=""
        />
      </div>
    </div>
    <!--Tabela  -->
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto mt-5">
        <div class="min-w-full inline-block align-middle">
          <div class="overflow-hidden border rounded-lg border-gray-300">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-black uppercase border-b"
                  >
                    Nome do Cocho
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-black uppercase border-l border-b"
                  >
                    Nome Pecuarista
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-black uppercase border-l border-b"
                  >
                    Limite Suprimento
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-black uppercase border-l border-b"
                  >
                    Suprimento Atual
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-black uppercase border-l border-b"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-black uppercase border-l border-b"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-300 divide-r-gray-200">
                <tr
                  v-if="!loadingAnimation"
                  v-for="trough in troughs"
                  :key="trough.id_cat"
                  class="hover:bg-gray-200 odd:bg-gray-100 even:bg-white"
                >
                  <td
                    class="px-6 py-4 whitespace-normal text-sm border-1 border-r border-gray-300 break-words max-w-[300px]"
                  >
                    {{ trough.name_tro }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-normal text-sm border-1 border-r border-gray-300 break-words max-w-[300px]"
                  >
                    {{ trough.customerName }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-normal text-sm border-1 border-r border-gray-300 break-words max-w-[300px]"
                  >
                    {{ trough.status_tro }} m
                  </td>
                  <td
                    class="px-6 py-4 whitespace-normal text-sm border-1 border-r border-gray-300 break-words max-w-[300px]"
                  >
                    {{ trough.fillingStatus_tro || "Em Analise" }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-normal text-sm border-1 border-r border-gray-300 break-words max-w-[300px]"
                  >
                    <div class="badge-container">
                      <div
                        :class="[
                          trough.deletedAt === null
                            ? 'bg-green-100 text-green-600'
                            : 'bg-red-100 text-red-600',
                          'text-center font-semibold py-1 rounded-md',
                        ]"
                      >
                        {{ trough.deletedAt === null ? "Ativo" : "Desativado" }}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left text-sm">
                    <div
                      class="flex flex-col gap-2 justify-center sm:flex-row sm:gap-5"
                    >
                      <button
                        @click="openEditTroughModal(trough)"
                        type="button"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold text-blue-500 hover:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Editar
                      </button>
                      <button
                        @click="
                          trough.deletedAt === null
                            ? openDeleteTroughModal(trough.id_tro)
                            : openActivateTroughModal(trough.id_tro)
                        "
                        type="button"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <div class="badge-container">
                          <div
                            :class="[
                              trough.deletedAt === null
                                ? 'text-red-500 hover:text-red-600'
                                : 'text-green-600 hover:text-green-700 sm:ml-5 xl:ml-4',
                              'text-center font-semibold py-1 rounded-md',
                            ]"
                          >
                            {{
                              trough.deletedAt === null ? "Desativar" : "Ativar"
                            }}
                          </div>
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              v-if="loadingAnimation"
              class="flex justify-center items-center gap-6 p-5"
            >
              <span class="text-md font-semibold">Carregando...</span>
              <svg
                class="animate-spin h-6 w-6 mr-3 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke-width="4"
                  fill="transparent"
                  stroke-dasharray="25.132741228718345"
                  stroke-dashoffset="0"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal de Desativar -->
  <ModalDeleteComponent
    :is-modal-controller-delete="isModalControllerDelete"
    @delete-request="deleteDataTroughs"
    @close-modal="isModalControllerDelete = false"
    :delete-data="troughToDelete"
    delete-data-name="name_tro"
  />
  <!-- Modal de Ativar -->
  <ModalAtivarComponent
    :is-modal-controller-ativar="isModalControllerAtivar"
    @alter-request="activateDataTroughs"
    @close-modal="isModalControllerAtivar = false"
    :activate-data="troughToActivate"
    activate-data-name="name_tro"
  />
  <!-- Modal de Edição -->
  <ModalEditComponent
    :is-modal-controller-edit="isModalControllerEdit"
    :edited-data="editedTrough"
    @edit-request="editTrough"
    @close-modal="isModalControllerEdit = false"
    title="Editar Cocho"
  >
    <template #content>
      <div>
        <label for="editName" class="text-black text-sm font-semibold"
          >Nome do Cocho:</label
        >
        <input
          v-model="editedTrough.name_tro"
          id="editName"
          type="text"
          class="text-black border-2 border-[#03223f] focus:outline-none rounded-lg p-1 w-full mt-2"
        />
      </div>
      <div class="mt-5">
        <label for="editStatus" class="text-black text-sm font-semibold"
          >Limite Suprimento:</label
        >
        <input
          v-model="editedTrough.status_tro"
          disabled
          id="editStatus"
          type="number"
          class="text-black border-2 border-[#03223f] focus:outline-none rounded-lg p-1 w-full mt-2"
        />
      </div>
    </template>
  </ModalEditComponent>
</template>

<script>
import ButtonSaveComponent from "../../../components/ButtonSaveComponent.vue";
import ModalDeleteComponent from "../../../components/ModalDeleteComponent.vue";
import ModalEditComponent from "../../../components/ModalEditComponent.vue";
import ModalAtivarComponent from "../../../components/ModalAtivarComponent.vue";
import StatusFilterComponent from "../../../components/StatusFilterComponent.vue";
import { API_BASE_URL } from "../../../../api-config.ts";
import axios from "axios";

export default {
  components: {
    ModalDeleteComponent,
    ModalEditComponent,
    ButtonSaveComponent,
    ModalAtivarComponent,
    StatusFilterComponent,
  },
  data() {
    return {
      formClient: {
        name_cus: "",
        id_cus_fk: "",
      },
      troughs: [],
      loadingAnimation: false,
      isModalControllerDelete: false,
      isModalControllerAtivar: false,
      troughIdToDelete: null,
      troughIdToActivate: null,
      troughToDelete: null,
      troughToActivate: null,
      troughToEdit: null,
      editedTrough: {
        name_tro: "",
        status_tro: "",
        deletedAt: "",
      },
      isModalControllerEdit: false,
      customerList: [],
      selectedStatus: null,
      originalTroughs: null,
    };
  },
  methods: {
    async loadTroughsList() {
      try {
        this.loadingAnimation = true;
        const troughsResponse = await axios.get(`${API_BASE_URL}/troughs`);
        const customersResponse = await axios.get(`${API_BASE_URL}/customers`);

        const originalTroughs = troughsResponse.data.map((trough) => {
          const associatedCustomer = customersResponse.data.find(
            (customer) => customer.id_cus === trough.id_cus_fk
          );

          return {
            ...trough,
            customerName: associatedCustomer
              ? associatedCustomer.name_cus
              : "N/A",
          };
        });

        const sortedTroughs = originalTroughs.sort((a, b) => {
          if (a.deletedAt === null && b.deletedAt !== null) {
            return -1;
          } else if (a.deletedAt !== null && b.deletedAt === null) {
            return 1;
          } else {
            return 0;
          }
        });

        this.troughs = [...sortedTroughs];
        this.originalTroughs = [...sortedTroughs];

        this.loadingAnimation = false;
      } catch (error) {
        console.error(error);
      }
    },

    handleStatusFilter(selectedStatus) {
      this.selectedStatus = selectedStatus;
      if (selectedStatus === "Ativo" || selectedStatus === "Desativado") {
        this.troughs = this.originalTroughs.filter((trough) => {
          const isAtivo = selectedStatus === "Ativo";
          return (
            (trough.deletedAt === null && isAtivo) ||
            (trough.deletedAt !== null && !isAtivo)
          );
        });
      } else {
        this.troughs = [...this.originalTroughs];
      }
    },
    async openEditTroughModal(trough) {
      this.troughToEdit = trough;
      this.editedTrough.name_tro = trough.name_tro;
      this.editedTrough.status_tro = trough.status_tro;
      this.editedTrough.deletedAt = trough.deletedAt;
      this.isModalControllerEdit = true;
    },
    async editTrough() {
      try {
        const troughId = this.troughToEdit.id_tro;
        await axios.patch(`${API_BASE_URL}/troughs/${troughId}`, {
          name_tro: this.editedTrough.name_tro,
          status_tro: this.editedTrough.status_tro,
          deletedAt: this.editedTrough.deletedAt,
        });
        this.isModalControllerEdit = false;
        await this.loadTroughsList();
      } catch (error) {
        console.error(error);
        this.isModalControllerEdit = false;
      }
    },
    async openDeleteTroughModal(troughId) {
      try {
        this.troughIdToDelete = troughId;
        const response = await axios.get(`${API_BASE_URL}/troughs/${troughId}`);
        this.troughToDelete = response.data;
        this.isModalControllerDelete = true;
      } catch (error) {
        console.error(error);
        this.isModalControllerDelete = false;
      }
    },
    async deleteDataTroughs() {
      try {
        this.isModalControllerDelete = false;
        await axios.delete(`${API_BASE_URL}/troughs/${this.troughIdToDelete}`);
        await this.loadTroughsList();
      } catch (error) {
        console.error(error);
        this.isModalControllerDelete = false;
      }
    },
    async openActivateTroughModal(troughId) {
      try {
        this.troughIdToActivate = troughId;
        const response = await axios.get(`${API_BASE_URL}/troughs/${troughId}`);
        this.troughToActivate = response.data;
        this.isModalControllerAtivar = true;
      } catch (error) {
        console.error(error);
        this.isModalControllerAtivar = false;
      }
    },
    async activateDataTroughs() {
      try {
        this.isModalControllerAtivar = false;
        await axios.patch(
          `${API_BASE_URL}/troughs/${this.troughIdToActivate}`,
          {
            deletedAt: null,
          }
        );
        await this.loadTroughsList();
      } catch (error) {
        console.error(error);
        this.isModalControllerAtivar = false;
      }
    },
    async customer() {
      try {
        const response = await axios.get(`${API_BASE_URL}/customers`);
        this.customerList = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async searchTroughs() {
      try {
        this.loadingAnimation = true;

        const selectedStatus = this.selectedStatus;
        const selectedCustomerId = this.formClient.id_cus_fk;
        const nameSearch = this.formClient.name_cus.toLowerCase();

        if (!nameSearch && !selectedCustomerId && !selectedStatus) {
          this.$toast.info(
            "Por favor, forneça pelo menos o nome do cocho ou pecuarista."
          );
          this.loadingAnimation = false;
          return;
        }

        const troughsResponse = await axios.get(`${API_BASE_URL}/troughs`);
        const customersResponse = await axios.get(`${API_BASE_URL}/customers`);

        this.troughs = troughsResponse.data.map((trough) => {
          const associatedCustomer = customersResponse.data.find(
            (customer) => customer.id_cus === trough.id_cus_fk
          );

          if (associatedCustomer) {
            trough.customerName = associatedCustomer.name_cus;
          } else {
            trough.customerName = "N/A";
          }

          return trough;
        });

        const filteredTroughs = this.troughs.filter((trough) => {
          const nameMatch = nameSearch
            ? trough.name_tro.toLowerCase().includes(nameSearch)
            : true;
          const customerMatch = selectedCustomerId
            ? trough.id_cus_fk === selectedCustomerId
            : true;
          const statusMatch = selectedStatus
            ? (selectedStatus === "Ativo" && trough.deletedAt === null) ||
              (selectedStatus === "Desativado" && trough.deletedAt !== null)
            : true;

          return nameMatch && customerMatch && statusMatch;
        });

        this.troughs = filteredTroughs;

        if (filteredTroughs.length === 0) {
          this.$toast.info("Nenhuma informação encontrada.");
          this.formClient.name_cus = "";
          this.formClient.id_cus_fk = "";
          if (this.$refs.statusFilterComponent) {
            this.$refs.statusFilterComponent.selectedStatus = "";
          }
          this.loadTroughsList();
        } else {
          this.$toast.success("Informação encontrada com sucesso.");
        }

        this.loadingAnimation = false;
      } catch (error) {
        console.error(error);
        this.loadingAnimation = false;
      }
    },
  },
  mounted() {
    this.loadTroughsList();
    this.customer();
  },
  watch: {
    "formClient.name_cus": function (newValue, oldValue) {
      if (!newValue && oldValue) {
        this.loadTroughsList();
      }
    },
    "formClient.id_cus_fk": function (newValue, oldValue) {
      if (!newValue && oldValue) {
        this.loadTroughsList();
      }
    },
  },
};
</script>
