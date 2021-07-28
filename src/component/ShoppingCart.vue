<template>
  <div class="cart">
    <h2>カート</h2>
    <p v-show="!cartProducts.length">
      <i>カートの中身は空です</i>
    </p>
    <table class="shop-table">
      <thead v-show="cartProducts.length">
        <tr class="t-secondary">
          <th class="th">商品名</th>
          <th class="th">金額</th>
          <th class="th">個数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cartProducts" :key="product.id">
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>
    <div class="cart_totals" v-show="cartProducts.length">
      <h2>カートの合計</h2>
      <table>
        <tbody>
          <tr>
            <th>合計</th>
            <td>￥{{ cartTotalPrice }}</td>
          </tr>
        </tbody>
      </table>

      <div
        class="checkout btn"
        v-show="cartProducts.length"
        @click="checkout(cartProducts)"
      >
        お支払いへ進む
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['cartProducts', 'cartTotalPrice']),
};
</script>
<style>
/* 商品カゴ表 */
.shop-table {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 -1px 24px 0;
  text-align: left;
  width: 100%;
  border-collapse: separate;
  border-radius: 5px;
  text-indent: initial;
  border-spacing: 2px;
}

.t-secondary {
  background-color: #dddfe2;
}

.th {
  padding: 10px;
}

/* 合計 */
.cart_totals {
  width: 100%;
  float: none;
  text-align: left;
}

.cart_totals h2 {
  border-bottom: 1px solid #ccc;
  border-top: 3px solid #ccc;
  position: relative;
  font-size: 140%;
  line-height: 160%;
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  color: inherit;
  margin-top: 0;
}

.cart_totals table {
  margin: 0 0 6px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 -1px 24px 0;
  text-align: left;
  width: 100%;
  border-collapse: separate;
  border-radius: 5px;
}
.cart_totals tbody {
  box-sizing: border-box;
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
}

.checkout {
  cursor: pointer;
  color: #fff !important;
  width: 100%;
  background-color: #ad061a;
  border-color: #ad061a;
  padding: 0.375rem 0;
}
</style>
