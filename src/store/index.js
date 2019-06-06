import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import models from "./modules/models";
import categories from "./modules/categories";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters,
  mutations,
  actions,
  modules: {
    models,
    categories
  }
});