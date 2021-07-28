import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMq from './plugins/vue-mq';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import store from './store';

import jQuery from 'jquery';
global.jquery = jQuery;
global.$ = jQuery;
window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false;
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css';
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

new Vue({
  VueMq,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
