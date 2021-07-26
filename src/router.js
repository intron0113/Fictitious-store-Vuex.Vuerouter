import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import News from './views/News.vue';
// import Product from './views/Productlist.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  //component URLを紐付けする//
  routes: [
    { path: '/', component: Home },
    // { path: '/product', component: Product },
    { path: '/news', component: News },
  ],
});
