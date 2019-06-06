import Vue from "vue";
import firebase from "firebase/app";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    models: {},
    progressUpload: {
      file: 0,
      preview: 0
    }
  },
  mutations: {
    fetchModels(state, models) {
      state.models = Object.assign({}, { ...models });
    },
    uploadModel(state, model) {
      if (!state.models[model.key]) {
        Vue.set(state.models, model.key, model);
      } else {
        state.models[model.key] = {
          ...state.models[model.key],
          ...model
        };
      }
    },
    setProgressUpload(state, { type, payload }) {
      state.progressUpload[type] = payload;
    },
    deleteModel(state, key) {
      Vue.delete(state.models, key);
    }
  },
  actions: {
    async fetchModels({ commit }) {
      const models = await firebase
        .database()
        .ref("models")
        .once("value");

      commit("fetchModels", models.val());
    },
    uploadModel({ commit }, { file, name, preview, modelKey }) {
      return new Promise(async resolve => {
        let dataDb, key;
        if (!modelKey) {
          dataDb = await firebase
            .database()
            .ref("models")
            .push({ name });

          key = dataDb.key;

          await firebase
            .database()
            .ref("models")
            .child(key)
            .update({ key });
        } else {
          key = modelKey;

          await firebase
            .database()
            .ref("models")
            .child(key)
            .update({ name });
        }

        let model = { name, key };

        if (file) {
          const fileExt = file.name.slice(file.name.lastIndexOf("."));
          const fileUploadTask = firebase
            .storage()
            .ref(`models/${key}${fileExt}`)
            .put(file);

          commit("setProgressUpload", { type: "file", payload: 0 });
          fileUploadTask.on(
            "state_changed",
            sp => {
              commit("setProgressUpload", {
                type: "file",
                payload: Math.floor((sp.bytesTransferred / sp.totalBytes) * 100)
              });
            },
            null,
            async () => {
              const url = await fileUploadTask.snapshot.ref.getDownloadURL();

              await firebase
                .database()
                .ref("models")
                .child(key)
                .update({ url });

              model = { ...model, url };

              complete(preview ? "preview" : "url");
            }
          );
        }

        if (preview) {
          const previewUploadTask = firebase
            .storage()
            .ref(`previews/${key}`)
            .put(preview);

          commit("setProgressUpload", { type: "preview", payload: 0 });
          previewUploadTask.on(
            "state_changed",
            sp => {
              commit("setProgressUpload", {
                type: "preview",
                payload: Math.floor((sp.bytesTransferred / sp.totalBytes) * 100)
              });
            },
            null,
            async () => {
              const preview = await previewUploadTask.snapshot.ref.getDownloadURL();

              await firebase
                .database()
                .ref("models")
                .child(key)
                .update({ preview });

              model = { ...model, preview };

              complete(file ? "url" : "preview");
            }
          );
        }

        const complete = type => {
          if (model[type]) {
            commit("uploadModel", model);
            commit("setProgressUpload", { type: "preview", payload: 0 });
            commit("setProgressUpload", { type: "file", payload: 0 });
            resolve();
          }
        };

        if (!file && !preview) {
          commit("uploadModel", model);
          resolve();
        }
      });
    },
    deleteModel({ commit }, key) {
      return new Promise(async resolve => {
        await firebase
            .database()
            .ref()
            .child(`models/${key}`)
            .remove();
        await firebase
            .storage()
            .ref()
            .child(`models/${key}.usdz`)
            .delete();
        await firebase
            .storage()
            .ref()
            .child(`previews/${key}`)
            .delete();
        commit("deleteModel", key);
        resolve();
      });
    }
  }
});
