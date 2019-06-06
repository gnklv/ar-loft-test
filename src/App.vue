<template>
  <v-app>
    <v-content>
      <v-container>
        <SvgLoader v-show="!showPage"/>
        <router-view
          v-show="showPage"
          :key="$route.path"
          @ready="pageReady"
        ></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SvgLoader from '@/components/SvgLoader';

export default {
  name: "App",
  components: {
    SvgLoader
  },
  data() {
    return {
      showPage: false,
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.showPage = false;
      next();
    })
  },
  methods: {
    pageReady() {
      this.showPage = true;
    }
  }
};
</script>
