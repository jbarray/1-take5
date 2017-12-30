// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../src/components/layout.vue'
import IndexPage from 'pages/Index.vue'

Vue.use(VueRouter);
let router=new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/apple',
      component:IndexPage
    }
  ]
});
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<layout/>',
  router,
  components: { Layout }
});
