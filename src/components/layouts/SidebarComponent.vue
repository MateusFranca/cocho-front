<template>
  <!-- Global -->
  <div v-if="token" class="w-full mt-5 md:mt-14 md:mb-5 flex flex-wrap justify-center">
    <!-- Box -->
    <div class="flex items-center justify-center gap-5 flex-wrap">
      <router-link to="/trough-register" class="flex flex-wrap items-center gap-2">
        <!-- Opc 1 -->
        <!-- Icon -->
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 28" fill="none">
            <path d="M9.54728 14H18.604M14.0756 9.47159V18.5283M23.1324 1.92432H5.01891C4.21825 1.92432 3.45037 2.24238 2.88422 2.80853C2.31806 3.37469 2 4.14256 2 4.94323V23.0567C2 23.8574 2.31806 24.6252 2.88422 25.1914C3.45037 25.7575 4.21825 26.0756 5.01891 26.0756H23.1324C23.933 26.0756 24.7009 25.7575 25.2671 25.1914C25.8332 24.6252 26.1513 23.8574 26.1513 23.0567V4.94323C26.1513 4.14256 25.8332 3.37469 25.2671 2.80853C24.7009 2.24238 23.933 1.92432 23.1324 1.92432Z" stroke="#A0E875" stroke-width="3.01891" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <!-- Text -->
        <p class="text-[#3F3D56]">Cadastrar cocho</p>
      </router-link>
      <!-- Opc 2 -->
      <router-link to="/client-register" class="flex flex-wrap items-center gap-2">
        <!-- Icon -->
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 28" fill="none">
            <path d="M9.54728 14H18.604M14.0756 9.47159V18.5283M23.1324 1.92432H5.01891C4.21825 1.92432 3.45037 2.24238 2.88422 2.80853C2.31806 3.37469 2 4.14256 2 4.94323V23.0567C2 23.8574 2.31806 24.6252 2.88422 25.1914C3.45037 25.7575 4.21825 26.0756 5.01891 26.0756H23.1324C23.933 26.0756 24.7009 25.7575 25.2671 25.1914C25.8332 24.6252 26.1513 23.8574 26.1513 23.0567V4.94323C26.1513 4.14256 25.8332 3.37469 25.2671 2.80853C24.7009 2.24238 23.933 1.92432 23.1324 1.92432Z" stroke="#A0E875" stroke-width="3.01891" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <!-- Text -->
        <p class="text-[#3F3D56]">Cadastrar pecuarista</p>
      </router-link>
      <!-- Opc 3 -->
      <router-link to="/trough-query" class="flex flex-wrap items-center gap-2">
        <!-- Icon -->
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 30" fill="none">
            <path d="M3.58508 1.5835H28.5018C28.7778 1.6803 29.028 1.83901 29.2332 2.04745C29.4384 2.2559 29.5932 2.50855 29.6857 2.78605C29.7782 3.06356 29.806 3.35856 29.7669 3.64845C29.7278 3.93834 29.6228 4.21543 29.4601 4.4585L19.8768 15.0002V28.4168L12.2101 22.6668V15.0002L2.62675 4.4585C2.46401 4.21543 2.35906 3.93834 2.31995 3.64845C2.28083 3.35856 2.30859 3.06356 2.40109 2.78605C2.49359 2.50855 2.64839 2.2559 2.85361 2.04745C3.05884 1.83901 3.30905 1.6803 3.58508 1.5835Z" stroke="#EC5AA0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <!-- Text -->
        <p class="text-[#3F3D56]">Consulta do cocho</p>
      </router-link>
      <!-- Opc 4 -->
      <router-link to="/client-query" class="flex flex-wrap items-center gap-2">
        <!-- Icon -->
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 30" fill="none">
            <path d="M3.58508 1.5835H28.5018C28.7778 1.6803 29.028 1.83901 29.2332 2.04745C29.4384 2.2559 29.5932 2.50855 29.6857 2.78605C29.7782 3.06356 29.806 3.35856 29.7669 3.64845C29.7278 3.93834 29.6228 4.21543 29.4601 4.4585L19.8768 15.0002V28.4168L12.2101 22.6668V15.0002L2.62675 4.4585C2.46401 4.21543 2.35906 3.93834 2.31995 3.64845C2.28083 3.35856 2.30859 3.06356 2.40109 2.78605C2.49359 2.50855 2.64839 2.2559 2.85361 2.04745C3.05884 1.83901 3.30905 1.6803 3.58508 1.5835Z" stroke="#EC5AA0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <!-- Text -->
        <p class="text-[#3F3D56]">Consulta do pecuarista</p>
      </router-link>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Sidebar",
  computed: {
    token() {
      return localStorage.getItem('token');
    }
  },
};
</script>