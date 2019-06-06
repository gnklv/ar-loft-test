import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home";
import Model from "./pages/model";
import Admin from "./pages/PageAdmin";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/model",
      name: "model",
      component: Model
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    }
  ]
});
