<template>
  <v-app>
    <v-content>
      <v-toolbar v-show="showPage" height="80">
        <HeaderLogo />
      </v-toolbar>
      <v-container>
        <router-view
          v-show="showPage"
          :key="$route.path"
          @ready="pageReady"
        ></router-view>
      </v-container>
    </v-content>
    <SvgLoader v-show="!showPage"/>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import SvgLoader from '@/components/SvgLoader';
import HeaderLogo from '@/components/HeaderLogo';
import { detectIsIOS } from "@/services";

export default {
  name: "App",
  components: {
    SvgLoader,
    HeaderLogo
  },
  data() {
    return {
      showPage: false,
    }
  },
  created() {
    this.setIsIOS(detectIsIOS());

    this.$router.beforeEach((to, from, next) => {
      this.showPage = false;
      next();
    })
  },
  methods: {
    ...mapActions('device', ['setIsIOS']),
    pageReady() {
      this.showPage = true;
    }
  }
};
</script>
