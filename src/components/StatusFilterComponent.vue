<template>
  <div>
    <label for="statusFilter" class="font-medium text-[#3F3D56] mb-1">Filtro:</label>
    <select v-model="selectedStatus" @change="filterByStatus" id="statusFilter" class="border-2 border-[#3F3D56] py-[9px] mt-1 w-full rounded-md">
      <option value="">Todos</option>
      <option value="Ativo">Ativo</option>
      <option value="Desativado">Desativado</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedStatus: '',
    };
  },
  methods: {
    filterByStatus() {
      this.$emit('filter', this.selectedStatus);
    },
  },
};
</script>
