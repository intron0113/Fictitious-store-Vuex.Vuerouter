<template>
  <div id="app">
    <section class="page-title-image">
      <div class="title-overlay"></div>
      <div class="title-box">
        <h1>お買い物カゴ</h1>
        <p>Cart</p>
      </div>
    </section>
    <div class="container">
      <h1>Shopping Cart Example</h1>
      <hr />
      <h2>Products</h2>
      <ShoppingCart />
    </div>
  </div>
</template>

<script>
import ShoppingCart from '../component/ShoppingCart.vue';

export default {
  components: { ShoppingCart },
};
</script>
<style>
/* 新着タイトル */
.page-title-image {
  margin-top: 100px;
  background-image: url(..//assets/news/ume-hana.jpg);
  padding: 4rem 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}

.title-overlay {
  margin: 100px 0px;
  width: 100%;
}

.title-box {
  position: relative;
  text-align: center;
  color: #fff;
  letter-spacing: 1px;
}

.container {
  margin-bottom: 100px;
}
</style>
