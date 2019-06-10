<template>
  <div ref="container">
    <SvgLoader />
  </div>
</template>

<script>
import firebase from "firebase/app";
import SvgLoader from "@/components/SvgLoader";

export default {
  name: "PageModel",
  components: {
    SvgLoader
  },
  data() {
    return {
      model: {
        url: null
      }
    };
  },
  async mounted() {
    const code = this.$route.query.code;

    if (!code) return;
    const model = await firebase
      .database()
      .ref(`models/${code}`)
      .once("value");
    const url = model.val().usdz.url;

    const container = this.$refs.container;
    if (!url) return;
    const imageEl = document.createElement("img");
    imageEl.style.display = "none";
    imageEl.setAttribute("src", "");
    imageEl.setAttribute("alt", "");

    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", url);
    linkEl.setAttribute("rel", "ar");
    linkEl.append(imageEl);
    container.append(linkEl);

    linkEl.click();
  }
};
</script>
