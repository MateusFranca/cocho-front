<template>
  <div class="container mx-auto p-8">
    <h3 class="text-4xl text-[#3F3D56] mb-5">Consultar Pecuarista</h3>
    <!--  Pesquisa  -->
    <div class="flex md:flex-nowrap flex-wrap w-full gap-3 mb-3">
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
          @click.prevent="searchClient"
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
                    class="px-6 py-3 text-left text-xs font-medium text-black uppercase border-l border-b"
                  >
                    Nome Pecuarista
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-black uppercase border-l border-b"
                  >
                    Telefone
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
                  v-for="client in clients"
                  :key="client.id_cus"
                  class="hover:bg-gray-200 odd:bg-gray-100 even:bg-white"
                >
                  <td
                    class="px-6 py-4 whitespace-normal text-sm border-1 border-r border-gray-300 break-words max-w-[300px]"
                  >
                    {{ client.name_cus }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-normal text-sm border-1 border-r border-gray-300 break-words max-w-[300px]"
                  >
                    {{ client.phone_cus || "Em Analise" }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-normal text-sm border-1 border-r border-gray-300 break-words max-w-[300px]"
                  >
                    <div class="badge-container">
                      <div
                        :class="[
                          client.deletedAt === null
                            ? 'bg-green-100 text-green-600'
                            : 'bg-red-100 text-red-600',
                          'text-center font-semibold py-1 rounded-md',
                        ]"
                      >
                        {{ client.deletedAt === null ? "Ativo" : "Desativado" }}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-left text-sm">
                    <div
                      class="flex flex-col gap-2 justify-center sm:flex-row sm:gap-5"
                    >
                      <button
                        @click="openEditClientModal(client)"
                        type="button"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold text-blue-500 hover:text-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Editar
                      </button>
                      <button
                        @click="
                          client.deletedAt === null
                            ? openDeleteClientModal(client.id_cus)
                            : openActivateClientModal(client.id_cus)
                        "
                        type="button"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold disabled:opacity-50 disabled:pointer-events-none"
                      >
                        <div class="badge-container">
                          <div
                            :class="[
                              client.deletedAt === null
                                ? 'text-red-500 hover:text-red-600'
                                : 'text-green-600 hover:text-green-700 sm:ml-5 xl:ml-4',
                              'text-center font-semibold py-1 rounded-md',
                            ]"
                          >
                            {{
                              client.deletedAt === null ? "Desativar" : "Ativar"
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
    @delete-request="deleteDataClient"
    @close-modal="isModalControllerDelete = false"
    :delete-data="clientToDelete"
    delete-data-name="name_cus"
  />
  <!-- Modal de Ativar -->
  <ModalAtivarComponent
    :is-modal-controller-ativar="isModalControllerAtivar"
    @alter-request="activateDataClient"
    @close-modal="isModalControllerAtivar = false"
    :activate-data="clientToActivate"
    activate-data-name="name_cus"
  />
  <!-- Modal de Edição -->
  <ModalEditComponent
    :is-modal-controller-edit="isModalControllerEdit"
    :edited-data="editedClient"
    @edit-request="editClient"
    @close-modal="isModalControllerEdit = false"
    title="Editar Cocho"
  >
    <template #content>
      <div>
        <label for="editName" class="text-black text-sm font-semibold"
          >Nome do Cocho:</label
        >
        <input
          v-model="editedClient.name_cus"
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
          v-model="editedClient.phone_cus"
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
      loadingAnimation: false,
      isModalControllerDelete: false,
      isModalControllerAtivar: false,
      clientToDelete: null,
      clientToActivate: null,
      clientIdToDelete: null,
      clientIdToActivate: null,
      clientToEdit: null,
      editedClient: {
        name_cus: "",
        phone_cus: "",
        deletedAt: "",
      },
      isModalControllerEdit: false,
      customerList: [],
      clients: [],
      selectedStatus: null,
      originalClient: null,
    };
  },
  methods: {
    handleStatusFilter(selectedStatus) {
      this.selectedStatus = selectedStatus;

      if (selectedStatus === "Ativo" || selectedStatus === "Desativado") {
        const filteredClients = this.originalClient.filter((client) => {
          const isAtivo = selectedStatus === "Ativo";
          return (
            (client.deletedAt === null && isAtivo) ||
            (client.deletedAt !== null && !isAtivo)
          );
        });

        this.clients = filteredClients;
      } else {
        this.clients = [...this.originalClient];
      }
    },

    async openEditClientModal(client) {
      this.clientToEdit = client;
      this.editedClient.name_cus = client.name_cus;
      this.editedClient.phone_cus = client.phone_cus;
      this.editedClient.deletedAt = client.deletedAt;
      this.isModalControllerEdit = true;
    },
    async editClient() {
      try {
        const clientId = this.clientToEdit.id_cus;
        await axios.patch(`${API_BASE_URL}/customers/${clientId}`, {
          name_cus: this.editedClient.name_cus,
          phone_cus: this.editedClient.phone_cus,
          deletedAt: this.editedClient.deletedAt,
        });
        this.isModalControllerEdit = false;
        await this.loadClientsList();
      } catch (error) {
        console.error(error);
        this.isModalControllerEdit = false;
      }
    },
    async openDeleteClientModal(clientId) {
      try {
        this.clientIdToDelete = clientId;
        const response = await axios.get(
          `${API_BASE_URL}/customers/${clientId}`
        );
        this.clientToDelete = response.data;
        this.isModalControllerDelete = true;
      } catch (error) {
        console.error(error);
        this.isModalControllerDelete = false;
      }
    },
    async deleteDataClient() {
      try {
        this.isModalControllerDelete = false;
        await axios.delete(
          `${API_BASE_URL}/customers/${this.clientIdToDelete}`
        );
        await this.loadClientsList();
      } catch (error) {
        console.error(error);
        this.isModalControllerDelete = false;
      }
    },
    async openActivateClientModal(clientId) {
      try {
        this.clientIdToActivate = clientId;
        const response = await axios.get(
          `${API_BASE_URL}/customers/${clientId}`
        );
        this.clientToActivate = response.data;
        this.isModalControllerAtivar = true;
      } catch (error) {
        console.error(error);
        this.isModalControllerAtivar = false;
      }
    },
    async activateDataClient() {
      try {
        this.isModalControllerAtivar = false;
        await axios.patch(
          `${API_BASE_URL}/customers/${this.clientIdToActivate}`,
          {
            deletedAt: null,
          }
        );
        await this.loadClientsList();
      } catch (error) {
        console.error(error);
        this.isModalControllerAtivar = false;
      }
    },
    async searchClient() {
      try {
        this.loadingAnimation = true;

        const nameSearch = this.formClient.name_cus.toLowerCase();
        const selectedCustomerId = this.formClient.id_cus_fk;
        const selectedStatus = this.selectedStatus;

        if (!selectedCustomerId) {
          this.$toast.info(
            "Por favor, selecione um pecuarista antes de pesquisar."
          );
          this.loadingAnimation = false;
          return;
        }

        const filteredClients = this.originalClient.filter((client) => {
          const nameMatch = nameSearch
            ? client.name_cus.toLowerCase().includes(nameSearch)
            : true;
          const customerMatch =
            selectedCustomerId !== null
              ? client.id_cus === selectedCustomerId
              : true;
          const statusMatch =
            selectedStatus !== null
              ? (client.deletedAt === null && selectedStatus === "Ativo") ||
                (client.deletedAt !== null && selectedStatus === "Desativado")
              : true;

          return nameMatch && customerMatch && statusMatch;
        });

        this.clients = [...filteredClients];

        if (filteredClients.length === 0) {
          this.$toast.info("Nenhuma informação encontrada.");
          this.formClient.name_cus = "";
          this.formClient.id_cus_fk = "";
          if (this.$refs.statusFilterComponent) {
            this.$refs.statusFilterComponent.selectedStatus = "";
          }
          this.loadClientsList();
        } else {
          this.$toast.success("Informação encontrada com sucesso.");
        }

        this.loadingAnimation = false;
      } catch (error) {
        console.error(error);
        this.loadingAnimation = false;
      }
    },

    async loadClientsList() {
      try {
        this.loadingAnimation = true;
        const response = await axios.get(`${API_BASE_URL}/customers`);
        const clients = response.data;

        const sortedClients = clients.sort((a, b) => {
          if (a.deletedAt === null && b.deletedAt !== null) {
            return -1;
          } else if (a.deletedAt !== null && b.deletedAt === null) {
            return 1;
          } else {
            return 0;
          }
        });

        this.originalClient = [...sortedClients];
        this.clients = sortedClients;
        this.loadingAnimation = false;
      } catch (error) {
        console.error(error);
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
  },
  mounted() {
    this.customer();
    this.loadClientsList();
  },
  watch: {
    "formClient.id_cus_fk": function (newValue, oldValue) {
      if (!newValue && oldValue) {
        this.customer();
      }
    },
  },
};
</script>
