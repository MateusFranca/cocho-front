// router.js
import { createRouter, createWebHistory } from "vue-router";
import ClientRegister from "../pages/Register/Client/ClientRegister.vue";
import ClientQuery from "../pages/Query/Client/ClientQuery.vue";
import TroughRegister from "../pages/Register/Trough/TroughRegister.vue";
import TroughQuery from "../pages/Query/Trough/TroughQuery.vue";
import LoginAuth from "../pages/Authentication/LoginAuth.vue";
import HomeViews from "../pages/views/HomeViews.vue";
import NotFoundComponent from "../pages/views/NotFoundViews.vue";
import { checkAuthMiddleware } from "../core/middlewareAuth.js";

const routes = [
  { path: "/", name: "home-views", component: HomeViews },
  { path: "/login", name: "login-auth", component: LoginAuth },
  { path: "/login", redirect: { name: "login-auth" } },
  {
    path: "/client-register",
    name: "client-register",
    component: ClientRegister,
  },
  { path: "/client-query", name: "client-query", component: ClientQuery },
  {
    path: "/trough-register",
    name: "trough-register",
    component: TroughRegister,
  },
  { path: "/trough-query", name: "trough-query", component: TroughQuery },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(checkAuthMiddleware);

export default router;
