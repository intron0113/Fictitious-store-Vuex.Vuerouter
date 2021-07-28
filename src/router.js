import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import News from './views/News.vue';
import Products1 from './views/products/ProductPage1.vue';
import ShoppingCart from './views/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  //component URLを紐付けする//
  routes: [
    { path: '/', component: Home },
    { path: '/products1', component: Products1 },
    { path: '/shopping-cart', component: ShoppingCart },
    { path: '/news', component: News },
  ],
});
