import firebase from "firebase/app";

export default {
  namespaced: true,

  state: {},

  actions: {
    fetchModel: ({ dispatch }, { id }) =>
      dispatch("fetchItem", { resource: "models", id }, { root: true }),

    fetchModels: ({ dispatch }, { ids }) =>
      dispatch("fetchItems", { resource: "models", ids }, { root: true }),

    createModel: (
      { dispatch, commit },
      { name, categoryId, usdzFile, previewFile }
    ) =>
      new Promise(async resolve => {
        const dbRef = firebase.database().ref();
        const modelsRef = dbRef.child("models");
        const modelId = modelsRef.push().key;
        let model = {};

        if (usdzFile) {
          model.usdz = await dispatch(
            "uploadFile",
            { file: usdzFile, id: modelId, resource: "models" },
            { root: true }
          );
        }

        if (previewFile) {
          model.preview = await dispatch(
            "uploadFile",
            { file: previewFile, id: modelId, resource: "previews" },
            { root: true }
          );
        }

        model = { ...model, name, categoryId };
        const updates = {};
        updates[`models/${modelId}`] = model;
        updates[`categories/${categoryId}/models/${modelId}`] = modelId;

        await dbRef.update(updates);
        commit(
          "setItem",
          { resource: "models", id: modelId, item: model },
          { root: true }
        );
        commit(
          "categories/appendModelToCategory",
          { parentId: categoryId, childId: modelId },
          { root: true }
        );

        resolve(model);
      }),

    updateModel: (
      { state, commit, dispatch },
      { id, name, categoryId, usdzFile, previewFile }
    ) =>
      new Promise(async resolve => {
        const dbRef = firebase.database().ref();
        const model = state[id];
        let updatedModel = {};

        if (usdzFile) {
          updatedModel.usdz = await dispatch(
            "uploadFile",
            { file: usdzFile, id, resource: "models" },
            { root: true }
          );
        } else if (model.usdz) {
          updatedModel.usdz = model.usdz;
        }

        if (previewFile) {
          updatedModel.preview = await dispatch(
            "uploadFile",
            { file: previewFile, id, resource: "previews" },
            { root: true }
          );
        } else if (model.preview) {
          updatedModel.preview = model.preview;
        }

        const updates = {};
        if (categoryId) {
          await dbRef
            .child(`categories/${model.categoryId}/models/${id}`)
            .remove();
          updates[`categories/${categoryId}/models/${id}`] = id;
        }

        updatedModel.name = name || model.name;
        updatedModel.categoryId = categoryId || model.categoryId;
        updates[`models/${id}`] = updatedModel;

        await dbRef.update(updates);

        if (categoryId) {
          commit(
            "categories/deleteModelFromCategory",
            { parentId: model.categoryId, childId: id },
            { root: true }
          );
          commit(
            "categories/appendModelToCategory",
            { parentId: categoryId, childId: id },
            { root: true }
          );
        }
        commit(
          "setItem",
          { resource: "models", id, item: updatedModel },
          { root: true }
        );

        resolve(state[id]);
      }),

    deleteModel: ({ commit, dispatch }, { id, categoryId, usdz, preview }) =>
      new Promise(async resolve => {
        const dbRef = firebase.database().ref();

        await dbRef.child(`models/${id}`).remove();
        await dbRef.child(`categories/${categoryId}/models/${id}`).remove();
        if (usdz) {
          await dispatch(
            "deleteFile",
            { resource: "models", filename: usdz.filename },
            { root: true }
          );
        }
        if (preview) {
          await dispatch(
            "deleteFile",
            { resource: "previews", filename: preview.filename },
            { root: true }
          );
        }

        commit("deleteItem", { resource: "models", id }, { root: true });
        commit(
          "categories/deleteModelFromCategory",
          { parentId: categoryId, childId: id },
          { root: true }
        );

        resolve();
      })
  }
};
