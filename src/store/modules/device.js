export default {
  namespaced: true,

  state: {
    isIOS: false
  },
  getters: {},
  mutations: {
    setIsIOS: (state, payload) => {
      state.isIOS = payload;
    }
  },
  actions: {
    setIsIOS: ({ commit }, payload) => {
      commit('setIsIOS', payload);
    }
  }
};
