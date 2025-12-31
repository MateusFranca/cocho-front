// vite.config.js
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
  },
};
