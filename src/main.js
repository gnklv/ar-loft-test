import Vue from 'vue'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import './plugins/vuetify'

import App from './App';
import store from './store'
import router from './router'

Vue.config.productionTip = false

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_ID
};
firebase.initializeApp(config);


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
