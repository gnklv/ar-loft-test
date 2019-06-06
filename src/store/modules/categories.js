import firebase from "firebase/app";

export default {
  namespaced: true,

  state: {},

  actions: {
    fetchCategory: ({ dispatch }, { id }) =>
      dispatch("fetchItem", { resource: "categories", id }, { root: true }),

    fetchCategories: ({ dispatch }, { ids }) =>
      dispatch("fetchItems", { resource: "categories", ids }, { root: true }),

    fetchAllCategories: ({ state, commit }) =>
      new Promise(resolve => {
        const dbRefCategories = firebase.database().ref("categories");

        dbRefCategories.once("value", snapshot => {
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
        });
      }),

    createCategory: ({ state, commit }, category) =>
      new Promise(async resolve => {
        const dbRef = firebase.database().ref();
        const dbRefCategories = firebase.database().ref("categories");
        const categoryId = dbRefCategories.push().key;

        const updates = {};
        updates[`categories/${categoryId}`] = category;

        await dbRef.update(updates);

        commit(
          "setItem",
          { resource: "categories", id: categoryId, item: category },
          { root: true }
        );

        resolve(state[categoryId]);
      }),

    updateCategory: ({ state, commit }, { id, name }) =>
      new Promise(async resolve => {
        const dbRefCategories = firebase.database().ref("categories");
        const category = state[id];

        const updates = { name };

        await dbRefCategories.child(id).update(updates);

        commit(
          "setItem",
          { resource: "categories", id, item: { ...category, name } },
          { root: true }
        );

        resolve(category);
      }),

    deleteCategory: ({ dispatch }, { id }) =>
      dispatch("deleteItem", { resource: "categories", id }, { root: true })
  }
};
