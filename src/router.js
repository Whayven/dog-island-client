import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Popular from "./views/Popular.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/popular",
      name: "popular",
      component: Popular
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("./views/Register.vue")
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("./views/Profile.vue")
    }
  ]
});

export default router;
