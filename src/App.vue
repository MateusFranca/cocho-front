<template>
  <div id="app">
    <HeaderComponent v-if="!isLoginPage" />
    <div id="content">
      <router-view></router-view>
    </div>
    <footer id="footer">
      <FooterComponent v-if="!isLoginPage" />
    </footer>
  </div>
</template>

<script>
import SidebarComponent from './components/layouts/SidebarComponent.vue'
import HeaderComponent from './components/layouts/HeaderComponent.vue'
import FooterComponent from './components/layouts/FooterComponent.vue'
export default {
  name: 'App',
  components: { HeaderComponent, FooterComponent },
  computed: {
    isLoginPage() {
      return this.$route.name === 'login-auth';
    }
  }
}
</script>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #footer {
    flex-shrink: 0;
  }
</style>