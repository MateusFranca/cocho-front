<template>
  <div>
    <p class="mb-3 font-semibold text-[#03223f]">Informação</p>
    <div class="flex w-full border-2 border-[#03223f] rounded-xl mb-3">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['flex-1', 'py-2', 'text-center', 'cursor-pointer', 'rounded-lg', activeTab === index ? 'bg-[#03223f] text-white' : '']"
        @click="changeTab(index)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div>
      <slot :name="activeTab"></slot>
    </div>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        activeTab: 0,
      };
    },
    props: {
      tabs: {
        type: Array,
        required: true,
      },
    },
    methods: {
      changeTab(index) {
        this.activeTab = index;
      },
    },
  };
</script>
