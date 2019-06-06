export default {
  namespaced: true,

  state: {},

  actions: {
    fetchModel: ({ dispatch }, { id }) =>
        dispatch("fetchItem", { resource: "models", id }, { root: true }),

    fetchModels: ({ dispatch }, { ids }) =>
        dispatch("fetchItems", { resource: "models", ids }, { root: true })
  }
};
