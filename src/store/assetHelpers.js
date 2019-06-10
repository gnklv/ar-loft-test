import Vue from "vue";

export const makeAppendChildToParentMutation = ({ child }) => (
  state,
  { childId, parentId }
) => {
  const resource = state[parentId];

  if (!resource[child]) Vue.set(resource, child, {});

  Vue.set(resource[child], childId, childId);
};

export const makeDeleteChildFromParentMutation = ({ child }) => (
  state,
  { childId, parentId }
) => {
  const resource = state[parentId];

  Vue.delete(resource[child], childId);

  if (Object.keys(resource[child]).length === 0) Vue.delete(resource, child);
};
