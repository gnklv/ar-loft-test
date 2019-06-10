import firebase from "firebase/app";
import {
  makeAppendChildToParentMutation,
  makeDeleteChildFromParentMutation
} from "../assetHelpers";

export default {
  namespaced: true,

  state: {},

  getters: {},

  mutations: {
    appendModelToCategory: makeAppendChildToParentMutation({ child: "models" }),
    deleteModelFromCategory: makeDeleteChildFromParentMutation({
      child: "models"
    })
  },

  actions: {
    fetchCategory: ({ dispatch }, { id }) =>
      dispatch("fetchItem", { resource: "categories", id }, { root: true }),

    fetchAllCategories: ({ state, commit }) =>
      new Promise(async resolve => {
        const dbRef = firebase.database().ref();
        const categoriesRef = dbRef.child("categories");

        const snapshot = await categoriesRef.once("value");
        const categoriesObject = snapshot.val();

        Object.keys(categoriesObject).forEach(categoryId => {
          const category = categoriesObject[categoryId];
          commit(
            "setItem",
            { resource: "categories", id: categoryId, item: category },
            { root: true }
          );
        });

        resolve(Object.values(state));
      }),

    createCategory: ({ state, commit }, { name }) =>
      new Promise(async resolve => {
        const dbRef = firebase.database().ref();
        const categoriesRef = dbRef.child("categories");
        const categoryId = categoriesRef.push().key;

        const updates = {};
        updates[`categories/${categoryId}`] = { name };

        await dbRef.update(updates);

        commit(
          "setItem",
          { resource: "categories", id: categoryId, item: { name } },
          { root: true }
        );

        resolve(state[categoryId]);
      }),

    updateCategory: ({ state, commit }, { id, name }) =>
      new Promise(async resolve => {
        const dbRef = firebase.database().ref();
        const category = state[id];

        const updates = {};
        updates[`categories/${id}`] = { name };

        await dbRef.update(updates);

        commit(
          "setItem",
          { resource: "categories", id, item: { ...category, name } },
          { root: true }
        );

        resolve(state[id]);
      }),

    deleteCategory: ({ dispatch }, { id }) =>
      dispatch("deleteItem", { resource: "categories", id }, { root: true })
  }
};
