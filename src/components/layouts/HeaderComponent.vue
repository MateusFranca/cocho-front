<template>
  <header class="bg-[#001d38]">
    <nav
      class="mx-auto flex max-w-7xl flex-wrap items-center justify-evenly md:justify-between p-6 lg:px-8"
      aria-label="Global"
      @mouseleave="closeDropdowns"
    >
      <div class="lg:flex-1 hidden md:flex">
        <router-link to="/">
          <img
            class="h-10 w-auto"
            src="../../../public/image/icons/layouts/sille.svg"
            alt="Logo Sille"
          />
        </router-link>
      </div>
      <!-- <nav v-if="isDropdownOpenMenu" class="md:hidden flex flex-wrap items-center justify-center space-x-4"> -->
      <div class="relative md:hidden">
        <button
          type="button"
          @click="toggleDropdownTrough"
          class="flex items-center gap-x-1 text-sm font-medium leading-6 text-[#ffffff]"
          aria-expanded="false"
        >
          Cocho
          <svg
            class="h-5 w-5 flex-none text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div
          class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[16rem] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
          :class="{
            'scale-y-0': !isDropdownOpenTrough,
            'scale-y-100': isDropdownOpenTrough,
          }"
        >
          <div class="p-2">
            <div
              class="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50"
            >
              <div class="flex-auto">
                <router-link
                  to="/trough-register"
                  class="flex flex-wrap items-center gap-2"
                >
                  Cadastro de Cocho
                </router-link>
                <p class="mt-1 text-gray-600">Iniciar cadastro do cocho.</p>
              </div>
            </div>
            <div
              class="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50"
            >
              <div class="flex-auto">
                <router-link
                  to="/trough-query"
                  class="flex flex-wrap items-center gap-2"
                >
                  Consulta Cocho
                </router-link>
                <p class="mt-1 text-gray-600">Iniciar consulta do cocho.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative md:hidden">
        <button
          type="button"
          @click="toggleDropdownClient"
          class="flex items-center gap-x-1 text-sm font-medium leading-6 text-[#ffffff]"
          aria-expanded="false"
        >
          Pecuarista
          <svg
            class="h-6 w- flex-none text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <div
          class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[16rem] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
          :class="{
            'scale-y-0': !isDropdownOpenClient,
            'scale-y-100': isDropdownOpenClient,
          }"
        >
          <div class="p-4">
            <div
              class="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50"
            >
              <div class="flex-auto">
                <router-link
                  to="/client-register"
                  class="flex flex-wrap items-center gap-2"
                >
                  Cadastro de Pecuarista
                  <span class="absolute inset-0"></span>
                </router-link>
                <p class="mt-1 text-gray-600">
                  Iniciar cadastro do pecuarista.
                </p>
              </div>
            </div>
            <div
              class="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-50"
            >
              <div class="flex-auto">
                <router-link
                  to="/client-query"
                  class="flex flex-wrap items-center gap-2"
                >
                  Consultar Pecuarista
                  <span class="absolute inset-0"></span>
                </router-link>
                <p class="mt-1 text-gray-600">
                  Iniciar consulta do pecuarista.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/login" class="flex items-center gap-2 md:hidden">
        <p
          @click="logout"
          class="text-sm font-semibold leading-6 text-white flex items-center"
        >
          Desconectar
          <span aria-hidden="true" class="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                d="M10.7778 4V2.25C10.7778 1.78587 10.5905 1.34075 10.2571 1.01256C9.92368 0.684374 9.4715 0.5 9 0.5H2.77778C2.30628 0.5 1.8541 0.684374 1.5207 1.01256C1.1873 1.34075 1 1.78587 1 2.25V12.75C1 13.2141 1.1873 13.6592 1.5207 13.9874C1.8541 14.3156 2.30628 14.5 2.77778 14.5H9C9.4715 14.5 9.92368 14.3156 10.2571 13.9874C10.5905 13.6592 10.7778 13.2141 10.7778 12.75V11M17 7.5H4.55556M17 7.5L14.3333 10.125M17 7.5L14.3333 4.875"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </p>
      </router-link>
      <!-- </nav> -->
      <!-- <div class="md:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="toggleMobileMenu">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div> -->
      <div class="hidden md:flex md:gap-x-12">
        <div class="relative">
          <button
            type="button"
            @click="toggleDropdownTrough"
            class="flex items-center gap-x-1 text-sm font-medium leading-6 text-[#ffffff]"
            aria-expanded="false"
          >
            Cocho
            <svg
              class="h-5 w-5 flex-none text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            class="absolute -left-8 top-full z-10 mt-3 w-screen xl:max-w-sm max-w-[19.5rem] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            :class="{
              'scale-y-0': !isDropdownOpenTrough,
              'scale-y-100': isDropdownOpenTrough,
            }"
          >
            <div class="p-4">
              <div
                class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M9.54728 14H18.604M14.0756 9.47159V18.5283M23.1324 1.92432H5.01891C4.21825 1.92432 3.45037 2.24238 2.88422 2.80853C2.31806 3.37469 2 4.14256 2 4.94323V23.0567C2 23.8574 2.31806 24.6252 2.88422 25.1914C3.45037 25.7575 4.21825 26.0756 5.01891 26.0756H23.1324C23.933 26.0756 24.7009 25.7575 25.2671 25.1914C25.8332 24.6252 26.1513 23.8574 26.1513 23.0567V4.94323C26.1513 4.14256 25.8332 3.37469 25.2671 2.80853C24.7009 2.24238 23.933 1.92432 23.1324 1.92432Z"
                      stroke="#00EE87"
                      stroke-width="3.01891"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="flex-auto">
                  <router-link
                    to="/trough-register"
                    class="flex flex-wrap items-center gap-2"
                  >
                    Cadastro de Cocho
                    <span class="absolute inset-0"></span>
                  </router-link>
                  <p class="mt-1 text-gray-600">Iniciar cadastro do cocho.</p>
                </div>
              </div>
              <div
                class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 32 30"
                    fill="none"
                  >
                    <path
                      d="M3.58508 1.5835H28.5018C28.7778 1.6803 29.028 1.83901 29.2332 2.04745C29.4384 2.2559 29.5932 2.50855 29.6857 2.78605C29.7782 3.06356 29.806 3.35856 29.7669 3.64845C29.7278 3.93834 29.6228 4.21543 29.4601 4.4585L19.8768 15.0002V28.4168L12.2101 22.6668V15.0002L2.62675 4.4585C2.46401 4.21543 2.35906 3.93834 2.31995 3.64845C2.28083 3.35856 2.30859 3.06356 2.40109 2.78605C2.49359 2.50855 2.64839 2.2559 2.85361 2.04745C3.05884 1.83901 3.30905 1.6803 3.58508 1.5835Z"
                      stroke="#001d38"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="flex-auto">
                  <router-link
                    to="/trough-query"
                    class="flex flex-wrap items-center gap-2"
                  >
                    Consulta Cocho
                    <span class="absolute inset-0"></span>
                  </router-link>
                  <p class="mt-1 text-gray-600">Iniciar consulta do cocho.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <button
            type="button"
            @click="toggleDropdownClient"
            class="flex items-center gap-x-1 text-sm font-medium leading-6 text-[#ffffff]"
            aria-expanded="false"
          >
            Pecuarista
            <svg
              class="h-6 w- flex-none text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            class="absolute -left-8 top-full z-10 mt-3 w-screen xl:max-w-sm max-w-[19.5rem] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            :class="{
              'scale-y-0': !isDropdownOpenClient,
              'scale-y-100': isDropdownOpenClient,
            }"
          >
            <div class="p-4">
              <div
                class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M9.54728 14H18.604M14.0756 9.47159V18.5283M23.1324 1.92432H5.01891C4.21825 1.92432 3.45037 2.24238 2.88422 2.80853C2.31806 3.37469 2 4.14256 2 4.94323V23.0567C2 23.8574 2.31806 24.6252 2.88422 25.1914C3.45037 25.7575 4.21825 26.0756 5.01891 26.0756H23.1324C23.933 26.0756 24.7009 25.7575 25.2671 25.1914C25.8332 24.6252 26.1513 23.8574 26.1513 23.0567V4.94323C26.1513 4.14256 25.8332 3.37469 25.2671 2.80853C24.7009 2.24238 23.933 1.92432 23.1324 1.92432Z"
                      stroke="#00EE87"
                      stroke-width="3.01891"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="flex-auto">
                  <router-link
                    to="/client-register"
                    class="flex flex-wrap items-center gap-2"
                  >
                    Cadastro de Pecuarista
                    <span class="absolute inset-0"></span>
                  </router-link>
                  <p class="mt-1 text-gray-600">
                    Iniciar cadastro do pecuarista.
                  </p>
                </div>
              </div>
              <div
                class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
              >
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 32 30"
                    fill="none"
                  >
                    <path
                      d="M3.58508 1.5835H28.5018C28.7778 1.6803 29.028 1.83901 29.2332 2.04745C29.4384 2.2559 29.5932 2.50855 29.6857 2.78605C29.7782 3.06356 29.806 3.35856 29.7669 3.64845C29.7278 3.93834 29.6228 4.21543 29.4601 4.4585L19.8768 15.0002V28.4168L12.2101 22.6668V15.0002L2.62675 4.4585C2.46401 4.21543 2.35906 3.93834 2.31995 3.64845C2.28083 3.35856 2.30859 3.06356 2.40109 2.78605C2.49359 2.50855 2.64839 2.2559 2.85361 2.04745C3.05884 1.83901 3.30905 1.6803 3.58508 1.5835Z"
                      stroke="#001d38"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="flex-auto">
                  <router-link
                    to="/client-query"
                    class="flex flex-wrap items-center gap-2"
                  >
                    Consultar Pecuarista
                    <span class="absolute inset-0"></span>
                  </router-link>
                  <p class="mt-1 text-gray-600">
                    Iniciar consulta do pecuarista.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/login" class="flex items-center gap-2">
          <p
            @click="logout"
            class="text-sm font-semibold leading-6 text-white flex items-center"
          >
            Desconectar
            <span aria-hidden="true" class="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 18 15"
                fill="none"
              >
                <path
                  d="M10.7778 4V2.25C10.7778 1.78587 10.5905 1.34075 10.2571 1.01256C9.92368 0.684374 9.4715 0.5 9 0.5H2.77778C2.30628 0.5 1.8541 0.684374 1.5207 1.01256C1.1873 1.34075 1 1.78587 1 2.25V12.75C1 13.2141 1.1873 13.6592 1.5207 13.9874C1.8541 14.3156 2.30628 14.5 2.77778 14.5H9C9.4715 14.5 9.92368 14.3156 10.2571 13.9874C10.5905 13.6592 10.7778 13.2141 10.7778 12.75V11M17 7.5H4.55556M17 7.5L14.3333 10.125M17 7.5L14.3333 4.875"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </p>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpenTrough: false,
      isDropdownOpenClient: false,
      isDropdownOpenMenu: false,
    };
  },
  methods: {
    toggleDropdownTrough() {
      this.isDropdownOpenClient = false;
      this.isDropdownOpenTrough = !this.isDropdownOpenTrough;
    },
    toggleDropdownClient() {
      this.isDropdownOpenTrough = false;
      this.isDropdownOpenClient = !this.isDropdownOpenClient;
    },
    closeDropdowns() {
      this.isDropdownOpenTrough = false;
      this.isDropdownOpenClient = false;
    },
    toggleMobileMenu() {
      this.isDropdownOpenMenu = !this.isDropdownOpenMenu;
    },
    logout() {
      localStorage.removeItem("token");
      this.$toast.info("Deslogado com sucesso!");
    },
  },
  watch: {
    $route(to, from) {
      this.closeDropdowns();
    },
  },
};
</script>
