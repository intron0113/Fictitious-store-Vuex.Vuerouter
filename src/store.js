import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import shop from '@/api/shop.js';

export default new Vuex.Store({
  state: {
    products: [],
    items: [],
    infos: [
      {
        id: 1,
        type: 'お知らせ',
        day: '2021.06.05',
        title: 'HPオープンのお知らせ',
        message:
          '平素より格別の平素より格別のご高配を賜り、厚く御礼申し上げます。\n この度、梅食品株式会社は公式HPを開設いたしました。\nより一層の内容充実に努めてまいりますので、今後ともどうぞよろしくお願い申し上げます。',
      },
      {
        id: 2,
        type: 'キャンペーン',
        day: '2021.07.21',
        title: 'キャンペーン1',
        message:
          'お会計10%キャンペーン実施中です。\nこの機会に是非ご賞味ください。',
      },
      {
        id: 3,
        type: 'キャンペーン',
        day: '2021.07.30',
        title: 'キャンペーン2',
        message:
          'お会計10%キャンペーン実施中です。\nこの機会に是非ご賞味ください。',
      },
      {
        id: 4,
        type: 'キャンペーン',
        day: '2021.08.01',
        title: 'キャンペーン3',
        message:
          'お会計10%キャンペーン実施中です。\nこの機会に是非ご賞味ください。',
      },
      {
        id: 5,
        type: 'キャンペーン',
        day: '2021.08.05',
        title: 'キャンペーン4',
        message:
          'お会計10%キャンペーン実施中です。\nこの機会に是非ご賞味ください。',
      },
    ],
    Home: 'ホーム',
    Cart: '買い物かご',
    News: 'news',
    Products: '商品一覧',
    About: '店舗のご案内',
    Tips: '梅の豆知識',
    Guide: 'ご注文ガイド',
    Contact: 'お問い合わせ',
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    pushProductToCart(state, product) {
      state.items.push({
        id: product.id,
        quantity: 1,
      });
    },
    incrementItemQuantity(state, { id }) {
      const cartItem = state.items.find((item) => item.id === id);
      cartItem.quantity++;
    },
  },
  actions: {
    getAllProducts({ commit }) {
      shop.getProducts((products) => {
        commit('setProducts', products);
      });
    },
    // addProductToCart({ commit }, product) {
    //   commit('pushProductToCart', product);
    // },
    addProductToCart({ state, commit }, product) {
      const cartItem = state.items.find((item) => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', product);
      } else {
        commit('incrementItemQuantity', cartItem);
      }
    },
  },
  getters: {
    cartProducts: (state) => {
      return state.items.map((item) => {
        const product = state.products.find(
          (product) => product.id === item.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: item.quantity,
        };
      });
    },
    cartTotalPrice: (state, getters) => {
      return getters.cartProducts.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
  },
  modules: {},
});
