import Vue from 'vue'
import firebase from 'firebase/app';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    models: {},
    nameNewModel: '',
    progressUpload: 0,
    isUploading: false,
    isUploadEnd: false,
    nameDeletedModel: '',
    isDeleteState: false
  },
  getters: {
    getModels: state => state.models,
    getProgressUpload: state => state.progressUpload,
    getUploading: state => state.isUploading,
    getUploadEnd: state => state.isUploadEnd,
    getNameNewModel: state => state.nameNewModel,
    getNameDeletedModel: state => state.nameDeletedModel,
    getDeleteState: state => state.isDeleteState,
  },
  mutations: {
    fetchModels(state, models) {
      state.models = Object.assign({}, { ...models });
    },
    uploadModel(state, model) {
      Vue.set(state.models, model.key, model);
    },
    deleteModel(state, key) {
      Vue.delete(state.models, key);
    },
    setProgressUpload(state, progress) {
      state.progressUpload = progress;
    },
    setUploading(state, uploading) {
      state.isUploading = uploading;
    },
    setUploadEnd(state, uploadEnd) {
      state.isUploadEnd = uploadEnd;
    },
    setNameNewModel(state, name) {
      state.nameNewModel = name;
    },
    setDeleteState(state, deleteState) {
      state.isDeleteState = deleteState;
    },
    setNameDeletedModel(state, name) {
      state.nameDeletedModel = name;
    }
  },
  actions: {
    async fetchModels({ commit }) {
      const models = await firebase.database().ref('models').once('value');
      
      commit('fetchModels', models.val());
    },
    async uploadModel({ commit }, file) {
      commit('setUploadEnd', false);
      commit('setUploading', true);
      const name = file.name.slice(0, file.name.lastIndexOf('.usdz'));
      const dataDb = await firebase.database().ref('models').push({ name });

      const key = dataDb.key;
      const ext = file.name.slice(file.name.lastIndexOf('.'));
      const uploadTask = firebase.storage().ref(`models/${key}${ext}`).put(file);
      
      uploadTask.on('state_changed', sp => {
        commit('setProgressUpload', Math.floor(sp.bytesTransferred / sp.totalBytes * 100));
      },
      null,
      async () => {
        const url = await uploadTask.snapshot.ref.getDownloadURL();

        const model = { name, key, url };
        await firebase.database().ref('models').child(key).update({ url, key });
        commit('setUploadEnd', true);
        commit('setDeleteState', false);

        commit('setUploading', false);
        commit('setProgressUpload', 0);
        
        commit('uploadModel', model);
        commit('setNameNewModel', name);
      });
    },
    async deleteModel({ state, commit }, key) {
      await firebase.database().ref().child(`models/${key}`).remove();
      await firebase.storage().ref().child(`models/${key}.usdz`).delete();
      commit('deleteModel', key);
      commit('setUploadEnd', false);
      commit('setDeleteState', true);
    }
  }
})
