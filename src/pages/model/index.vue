<template>
  <div ref="container"></div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Model",
  data: () => ({
    model: {
      url: null
    }
  }),
  async mounted() {
    const code = this.$route.query.code;

    if (!code) return;
    const model = await firebase
      .database()
      .ref(`models/${code}`)
      .once("value");
    const url = model.val().url;

    if (!url) return;
    const imageEl = document.createElement("img");
    imageEl.style.display = "none";
    imageEl.setAttribute("src", "");
    imageEl.setAttribute("alt", "");

    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", url);
    linkEl.setAttribute("rel", "ar");
    linkEl.append(imageEl);
    this.$refs.container.append(linkEl);
    linkEl.click();
  }
};
</script>
