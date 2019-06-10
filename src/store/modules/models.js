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

        const usdz = await dispatch(
          "uploadFile",
          { file: usdzFile, id: modelId, resource: "models" },
          { root: true }
        );
        const preview = await dispatch(
          "uploadFile",
          { file: previewFile, id: modelId, resource: "previews" },
          { root: true }
        );

        const model = { name, categoryId, usdz, preview };
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

        let usdz;
        if (usdzFile)
          usdz = await dispatch(
            "uploadFile",
            { file: usdzFile, id, resource: "models" },
            { root: true }
          );
        else usdz = model.usdz;

        let preview;
        if (previewFile)
          preview = await dispatch(
            "uploadFile",
            { file: previewFile, id, resource: "previews" },
            { root: true }
          );
        else preview = model.preview;

        const updates = {};
        if (categoryId) {
          await dbRef
            .child(`categories/${model.categoryId}/models/${id}`)
            .remove();
          updates[`categories/${categoryId}/models/${id}`] = id;
        }

        updates[`models/${id}`] = {
          name: name || model.name,
          usdz,
          preview,
          categoryId: categoryId || model.categoryId
        };

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
          {
            resource: "models",
            id,
            item: {
              ...model,
              name: name || model.name,
              usdz,
              preview,
              categoryId: categoryId || model.categoryId
            }
          },
          { root: true }
        );

        resolve(state[id]);
      }),

    deleteModel: ({ commit, dispatch }, { id, categoryId, usdz, preview }) =>
      new Promise(async resolve => {
        const dbRef = firebase.database().ref();

        await dbRef.child(`models/${id}`).remove();
        await dbRef.child(`categories/${categoryId}/models/${id}`).remove();
        await dispatch(
          "deleteFile",
          { resource: "models", filename: usdz.filename },
          { root: true }
        );
        await dispatch(
          "deleteFile",
          { resource: "previews", filename: preview.filename },
          { root: true }
        );

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
