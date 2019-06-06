import firebase from "firebase/app";

export default {
  fetchItem: ({ state, commit }, { id, resource }) => {
    return new Promise(resolve => {
      const dbRef = firebase.database().ref(resource);

      dbRef.child(id).once("value", snapshot => {
        commit("setItem", {
          resource,
          id: snapshot.key,
          item: snapshot.val()
        });

        resolve(state[resource][id]);
      });
    });
  },

  fetchItems: ({ dispatch }, { ids, resource }) => {
    ids = Array.isArray(ids) ? ids : Object.keys(ids);

    return Promise.all(
      ids.map(id => {
        dispatch("fetchItem", { id, resource });
      })
    );
  },

  deleteItem: ({ commit }, { id, resource }) =>
    new Promise(async resolve => {
      const dbRef = firebase.database().ref(resource);

      await dbRef.child(id).remove();
      commit("deleteItem", { id, resource });

      resolve();
    })
};
