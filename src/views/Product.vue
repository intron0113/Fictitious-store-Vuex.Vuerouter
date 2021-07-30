<template>
  <div>
    <section class="page-title-image">
      <div class="title-overlay"></div>
      <div class="title-box">
        <h1>商品一覧</h1>
        <p>PRODUCT</p>
      </div>
    </section>
    <div class="container">
      <table class="product-table">
        <thead>
          <tr class="t-secondary">
            <th class="th">商品名</th>
            <th class="th">金額</th>
            <th class="th">カートに追加</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="td">{{ product.title }}</td>
            <td class="td">{{ product.price }}</td>
            <td class="td">
              <button
                class="products-button btn"
                @click="addProductToCart(product)"
              >
                <i class="fas fa-shopping-cart"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="btn-style">
        <button class="news-button  btn" @click="toHome">HOMEに戻る</button>
      </div>
    </div>
  </div>
</template>

<script>
// import ShoppingCart from './ShoppingCart.vue';

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.$store.dispatch('getAllProducts');
  },
  // components: {
  //   ShoppingCart,
  // },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product);
    },
    toHome() {
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
.product-table {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 -1px 24px 0;
  text-align: center;
  width: 100%;
  border-collapse: separate;
  border-radius: 5px;
  text-indent: initial;
  border-spacing: 2px;
  margin-top: 50px;
}

.t-secondary {
  background-color: #dddfe2;
}

.th,
.td {
  padding: 20px;
  /* font-size: 20px; */
}

.products-button {
  margin-bottom: 10px;
  cursor: pointer;
  color: #fff;
  background-color: rgba(223, 084, 107, 0.7);
  border-color: rgba(223, 084, 107, 0.7);
}

.products-button:hover {
  background-color: rgb(223, 084, 107);
  border-color: rgb(223, 084, 107);
}
</style>
