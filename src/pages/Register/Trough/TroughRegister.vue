<template>
  <form @submit.prevent="submitFormTrough"> 
    <FormsRegister
    title="Cadastrar cocho"
    imgPath="../../../../public/image/decorationRegister/decorationTrough.svg"
    >
    <Tab :tabs="tabs">
      <template #0>
        <div class="flex flex-col w-full">
          <label for="nameTrough" class="font-medium text-[#3F3D56] mb-1"
            >Nome do cocho:</label
          >
          <input
            v-model="formTrough.name_tro"
            type="text"
            name="nameTrough"
            id="nameTrough"
            placeholder="Digite o nome do cocho"
            class="border-2 border-[#3F3D56] p-2 w-full rounded-lg"
          />
        </div>
        <div class="flex flex-col gap-1 w-full mt-3">
          <label for="limitTrough" class="font-medium text-[#3F3D56] mb-1"
            >Limite crítico de enchimento (metros):</label
          >
          <input
            v-model="formTrough.status_tro"
            type="number"
            disabled
            step="0.01"
            name="limitTrough"
            id="limitTrough"
            placeholder="Digite o limite"
            class="border-2 border-[#3F3D56] p-2 w-full rounded-lg"
          />
        </div>
        <div class="flex flex-col gap-1 w-full mt-3">
          <label for="sensorTrough" class="font-medium text-[#3F3D56] mb-1"
            >Nome do sensor</label>
          <input
            v-model="formTrough.sensorName_tro"
            type="text" 
            name="sensorTrough"
            id="sensorTrough"
            placeholder="Digite o nome do sensor"
            class="border-2 border-[#3F3D56] p-2 w-full rounded-lg"
          />
        </div>
        <div class="flex flex-col gap-1 w-full mt-3 mb-3">
          <label for="executionTeamTrough" class="font-medium text-[#3F3D56] mb-1">Agendar Execução:</label>
          <div class="flex items-center">
            <input
              v-model="formTrough.scheduledRunHours_tro"
              type="number"
              min="0"
              max="23"
              name="executionTeamHoursTrough"
              id="executionTeamHoursTrough"
              placeholder="HH"
              class="border-2 border-[#3F3D56] p-2 w-1/3 rounded-lg mr-1"
            />
            <span>:</span>
            <input
              v-model="formTrough.scheduledRunMinutes_tro"
              type="number"
              min="0"
              max="59"
              name="executionTeamMinutesTrough"
              id="executionTeamMinutesTrough"
              placeholder="MM"
              class="border-2 border-[#3F3D56] p-2 w-1/3 rounded-lg mx-1"
            />
            <span>:</span>
            <input
              v-model="formTrough.scheduledRunSeconds_tro"
              type="number"
              min="0"
              max="59"
              name="executionTeamSecondsTrough"
              id="executionTeamSecondsTrough"
              placeholder="SS"
              class="border-2 border-[#3F3D56] p-2 w-1/3 rounded-lg ml-1"
            />
          </div>
        </div>
        <label for="customer" class="font-medium text-[#3F3D56] mb-1">Pecuarista:</label>
        <Multiselect
          id="customer"
          v-model="formTrough.id_cus_fk"
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
            container: 'relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-[#03223f] rounded-md bg-white leading-snug outline-none mb-5',
            optionSelected: 'text-white bg-green-500',
            optionPointed: 'bg-gray-100',
            optionSelectedPointed: 'text-white bg-red-500',
          }"
        />
        <!-- <ButtonSaveComponent title="Proximo" imgPath="../../public/image/icons/register/iconeArrowRight.svg" /> -->
      </template>
      <template #1>
        <div class="flex flex-wrap -mx-3">
          <div class="w-full px-3 mb-3">
            <div class="flex flex-col w-full">
              <label for="cepTrough" class="font-medium text-[#3F3D56] mb-1">CEP:</label>
              <input
                v-model="formTrough.cep_tro"
                type="text"
                name="cepTrough"
                id="cepTrough"
                placeholder="Digite o CEP"
                @input="searchCep()"
                v-mask="'#####-###'"
                class="border-2 border-[#3F3D56] p-2 w-full rounded-lg"
              />
            </div>
          </div>
          <div class="w-full px-3 mb-3">
            <label for="states" class="font-medium text-[#3F3D56] mb-1">Estado:</label>
            <Multiselect
              id="states"
              v-model="formTrough.states_tro"
              placeholder="Digite para pesquisar"
              noOptionsText="Nenhuma opção disponíveis" 
              noResultsText="Nenhum resultado encontrado"
              searchable
              :limit="5"
              :options="
                statesList.map((states) => ({
                  label: states.name_sta,
                  value: states.id_sta,
                }))
              "
              :classes="{
                container: 'relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-[#03223f] rounded-md bg-white leading-snug outline-none',
                optionSelected: 'text-white bg-green-500',
                optionPointed: 'bg-gray-100',
                optionSelectedPointed: 'text-white bg-red-500',
              }"
            />
          </div>
          <div class="w-full px-3 mb-3">
            <label for="city" class="font-medium text-[#3F3D56] mb-1">Cidade:</label>
            <Multiselect
              id="city"
              v-model="formTrough.city_tro"
              placeholder="Digite para pesquisar"
              noOptionsText="Nenhuma opção disponíveis" 
              noResultsText="Nenhum resultado encontrado"
              searchable
              :limit="5"
              :options="
                cityList.map((city) => ({
                  label: city.name_cit,
                  value: city.id_cit,
                }))
              "
              :classes="{
                container: 'relative w-full flex items-center justify-end box-border cursor-pointer border-2 border-[#03223f] rounded-md bg-white leading-snug outline-none',
                optionSelected: 'text-white bg-green-500',
                optionPointed: 'bg-gray-100',
                optionSelectedPointed: 'text-white bg-red-500',
              }"
            />
          </div>
          <div class="w-full lg:w-1/2 px-3 mb-3">
            <div class="flex flex-col w-full">
              <label for="addressTrough" class="font-medium text-[#3F3D56] mb-1">Endereço:</label>
              <input
                v-model="formTrough.address_tro"
                type="text"
                name="addressTrough"
                id="addressTrough"
                placeholder="Digite o endereço"
                class="border-2 border-[#3F3D56] p-2 w-full rounded-lg"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-3 mb-3">
            <div class="flex flex-col w-full">
              <label for="neighborhoodTrough" class="font-medium text-[#3F3D56] mb-1">Bairro:</label>
              <input
                v-model="formTrough.neighborhood_tro"
                type="text"
                name="neighborhoodTrough"
                id="neighborhoodTrough"
                placeholder="Digite o bairro"
                class="border-2 border-[#3F3D56] p-2 w-full rounded-lg"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-3 mb-3">
            <div class="flex flex-col w-full">
              <label for="numberTrough" class="font-medium text-[#3F3D56] mb-1">Número:</label>
              <input
                v-model="formTrough.number_tro"
                type="text"
                name="numberTrough"
                id="numberTrough"
                placeholder="Digite o número"
                class="border-2 border-[#3F3D56] p-2 w-full rounded-lg"
              />
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-3 mb-3">
            <div class="flex flex-col w-full">
              <label for="complementTrough" class="font-medium text-[#3F3D56] mb-1">Complemento:</label>
              <input
                v-model="formTrough.complement_tro"
                type="text"
                name="complementTrough"
                id="complementTrough"
                placeholder="Digite o complemento"
                class="border-2 border-[#3F3D56] p-2 w-full rounded-lg"
              />
            </div>
          </div>
        </div>
        <ButtonSaveComponent class="mt-3" title="Salvar" imgPath="../../public/image/icons/register/iconSave.svg" @click.prevent="save" />
      </template>
    </Tab>
    </FormsRegister>
  </form>
</template>

<script>
import ButtonSaveComponent from "../../../components/ButtonSaveComponent.vue";
import FormsRegister from "../../../components/layouts/FormsRegisterComponent.vue";
import Tab from "../../../components/TabComponent.vue";
import { API_BASE_URL } from "../../../../api-config.ts";
import axios from "axios";

export default {
  name: "Trough",
  components: { FormsRegister, ButtonSaveComponent, Tab },
  data() {
    return {
      formTrough: {
        name_tro: "",
        status_tro: 1,
        sensorName_tro: "",
        scheduledRun_tro: "",
        id_cus_fk: "",
        cep_tro: "",
        states_tro: "",
        city_tro: "",
        neighborhood_tro: "",
        address_tro: "",
        number_tro: "",
        complement_tro: "",
        scheduledRunHours_tro: "",
        scheduledRunMinutes_tro: "",
        scheduledRunSeconds_tro: "",
      },
      tabs: [{ title: "Principal" }, { title: "Complementar" }],
      activeTab: 0,
      customerList: [],
      statesList: [],
      cityList: [],
      addressesList:[],
      filteredCityList: [],
      selectedCustomer: null,
      selectedCustomer: null,
      isModalControllerModal: false,
      notificationShown: false,
      errorShown: false,
      relatedTarget: false,
    };
  },
  methods: {
    async submitFormTrough() {
      try {
        const addressData = {
          street_add: this.formTrough.address_tro,
          neighborhood_add: this.formTrough.neighborhood_tro,
          cep_add: this.clearMask(this.formTrough.cep_tro),
          number_add: this.formTrough.number_tro,
          complement_add: this.formTrough.complement_tro,
          id_cit_fk: this.formTrough.city_tro
        };

        const addressResponse = await axios.post(`${API_BASE_URL}/addresses`, addressData);

        const scheduledRunDate = new Date();

        const year = scheduledRunDate.getFullYear();
        const month = (scheduledRunDate.getMonth() + 1).toString().padStart(2, '0');
        const day = scheduledRunDate.getDate().toString().padStart(2, '0');
        const scheduledRun_tro = `${year}-${month}-${day}T${this.formTrough.scheduledRunHours_tro}:${this.formTrough.scheduledRunMinutes_tro}:${this.formTrough.scheduledRunSeconds_tro}Z`;

        const requestData = {
          name_tro: this.formTrough.name_tro,
          status_tro: this.formTrough.status_tro,
          sensorName_tro: this.formTrough.sensorName_tro,
          scheduledRun_tro: scheduledRun_tro,
          alertFlag_tro: true,
          id_cus_fk: this.formTrough.id_cus_fk,
          id_add_fk: addressResponse.data.id_add,
        };

        const customerResponse = await axios.post(`${API_BASE_URL}/troughs`, requestData);

        this.$toast.success("Cocho cadastrado com sucesso!");
      } catch (error) {
        this.$toast.error("Erro ao cadastrar o cocho");
        console.error(error);
      }
    },

    save() {
      this.submitFormTrough();
    },

    async cep(search = "") {
        try {
          if (!search) {
            this.notificationShown = false;
            this.errorShown = false;
            return;
          }

          const response = await axios.get(`${API_BASE_URL}/cep/${search}`);
          if (!this.notificationShown) {
            this.$toast.success("CEP encontrado com sucesso!");
            this.notificationShown = true;
          }

          this.formTrough.address_tro = response.data.street_add || "";
          this.formTrough.neighborhood_tro =
            response.data.neighborhood_add || "";

          const cityName = response.data.city || "";
          const selectedCity = this.cityList.find(
              (city) => city.name_cit === cityName
          );
          if (selectedCity) {
              this.formTrough.city_tro = selectedCity.id_cit;
          } else {
              this.formTrough.city_tro = "";
          }

          const stateUf = response.data.state || "";
          const selectedState = this.statesList.find(
            (state) => state.uf_sta === stateUf
          );
          if (selectedState) {
            this.formTrough.states_tro = selectedState.id_sta;
          } else {
            this.formTrough.states_tro = "";
          }
      } catch (error) {
          if (!this.errorShown) {
            this.$toast.error("Erro ao buscar informações do CEP.");
            this.errorShown = true;
          }
        console.error(error);
      }
    },
    async states() {
      try {
        const states = await axios.get(`${API_BASE_URL}/states`);
        this.statesList = states.data;
      } catch (error) {
        console.error(error);
      }
    },
    async city() {
      try {
        const citys = await axios.get(`${API_BASE_URL}/cities`);
        this.cityList = citys.data;
      } catch (error) {
        console.error(error);
      }
    },
    // async addresses() {
    //   try {
    //     const response = await axios.get(`${API_BASE_URL}/addresses`);
    //     this.addressesList = response.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    async customer() {
      try {
        const response = await axios.get(`${API_BASE_URL}/customers`);
        this.customerList = response.data.filter(customer => !customer.deletedAt);
      } catch (error) {
        console.error(error);
      }
    },
    clearFormFieldsCEP() {
      this.formTrough.address_tro = "";
      this.formTrough.neighborhood_tro = "";
      this.formTrough.city_tro = "";
      this.formTrough.states_tro = "";
    },
    filterCityList(state) {
      this.filteredCityList = this.cityList.filter(
        (city) => String(city.id_sta_fk) === String(state)
      );
    },
    searchCep() {
      this.notificationShown = false;
      this.errorShown = false;

      if (this.formTrough.cep_tro.length === 9 && this.formTrough.cep_tro.includes('-')) {
        this.cep(this.formTrough.cep_tro);
      } else {
        this.formTrough.cep_tro.$reset();
      }
    },
    clearMask(value) {
      return value.replace(/\D/g, "");
    },
  },
  mounted() {
    // this.addresses();
    this.customer();
    this.states();
    this.city();
  },
  watch: {
    "formTrough.states_tro": function (newState) {
      this.filterCityList(newState);
    },
  },
};
</script>
