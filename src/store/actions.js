import firebase from "firebase/app";
import { getFileExtension } from "@/services";

export default {
  fetchItem: ({ state, commit }, { id, resource }) =>
    new Promise(async resolve => {
      const dbRef = firebase.database().ref();
      const itemRef = dbRef.child(`${resource}/${id}`);

      const snapshot = await itemRef.once("value");
      commit("setItem", { resource, id, item: snapshot.val() });

      resolve(state[resource][id]);
    }),

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
      const dbRef = firebase.database().ref();
      const itemRef = dbRef.child(`${resource}/${id}`);

      await itemRef.remove();
      commit("deleteItem", { id, resource });

      resolve();
    }),

  uploadFile: (context, { file, id, resource }) =>
    new Promise(async resolve => {
      const storageRef = firebase.storage().ref();
      const fileExt = getFileExtension(file.name);
      const fileRef = storageRef.child(`${resource}/${id}.${fileExt}`);

      const snapshot = await fileRef.put(file);
      const url = await snapshot.ref.getDownloadURL();
      resolve({ url, filename: `${id}.${fileExt}` });
    }),

  deleteFile: (context, { resource, filename }) =>
    new Promise(async resolve => {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`${resource}/${filename}`);

      await fileRef.delete();
      resolve();
    })
};
