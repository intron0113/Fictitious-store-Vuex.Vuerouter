import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import News from './views/News.vue';
import Product from './views/Product.vue';
import StoreMaps from './views/StoreMaps.vue';
import Products1 from './views/products/ProductPage1.vue';
import Products2 from './views/products/ProductPage2.vue';
import Products3 from './views/products/ProductPage3.vue';
import Products4 from './views/products/ProductPage4.vue';
import Products5 from './views/products/ProductPage5.vue';
import Products6 from './views/products/ProductPage6.vue';
import Products7 from './views/products/ProductPage7.vue';
import Products8 from './views/products/ProductPage8.vue';
import Contact1st from './views/contact//Contact1st.vue';
import Contact2nd from './views/contact//Contact2nd.vue';
import Contact3rd from './views/contact//Contact3rd.vue';
import Contact4th from './views/contact//Contact4th.vue';
import ShoppingCart from './views/ShoppingCart.vue';
import Commitment from './views/Commitment.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  //component URLを紐付けする//
  routes: [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/products1', component: Products1 },
    { path: '/products2', component: Products2 },
    { path: '/products3', component: Products3 },
    { path: '/products4', component: Products4 },
    { path: '/products5', component: Products5 },
    { path: '/products6', component: Products6 },
    { path: '/products7', component: Products7 },
    { path: '/products8', component: Products8 },
    { path: '/contact1', component: Contact1st },
    { path: '/contact2', component: Contact2nd },
    { path: '/contact3', component: Contact3rd },
    { path: '/contact4', component: Contact4th },
    { path: '/shopping-cart', component: ShoppingCart },
    { path: '/news', component: News },
    { path: '/store', component: StoreMaps },
    { path: '/commit', component: Commitment },
  ],
});
