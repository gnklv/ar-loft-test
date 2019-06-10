import Vue from "vue";
import Router from "vue-router";
import PageHome from "@/pages/PageHome";
import PageModel from "@/pages/PageModel";
import PageAdmin from "@/pages/PageAdmin";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: PageHome
    },
    {
      path: "/model",
      name: "model",
      component: PageModel
    },
    {
      path: "/admin",
      name: "admin",
      component: PageAdmin
    }
  ]
});
