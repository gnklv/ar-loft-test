import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home';
import Model from './pages/model';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/model',
      name: 'model',
      component: Model,
    }
  ]
})
