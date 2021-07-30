<template>
  <div>
    <section class="page-title-image">
      <div class="title-overlay"></div>
      <div class="title-box">
        <h1>商品詳細</h1>
        <p>PRODUCT DETAIL</p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="product-page">
          <h2 class="typesquare_tags">梅干8</h2>
          <div class="product-cell">
            <div class="img-div">
              <img
                src="../..//assets/products/product-1.jpg"
                class="p-img"
                alt=""
              />
            </div>
            <div class="p-setummei">
              <ul class="spec typesquare_tags">
                <li class="typesquare_tags">容量：○ｋｇ</li>
                <li class="typesquare_tags">容器：○○○○</li>
                <li class="typesquare_tags">原材料原産地：○○</li>
                <li class="typesquare_tags">原料：梅、食塩</li>
                <li class="typesquare_tags">賞味期限：○年</li>
                <li class="typesquare_tags">塩度○％・酸度○％</li>
              </ul>
            </div>
          </div>
          <div class="explain typesquare_tags">
            粗塩だけでつけた昔ながらの酸っぱい梅干です。チューハイや和え物などのお料理に幅広くお使いいただけます。塩以外は使っていません。
          </div>

          <div
            class="cart-list"
            v-for="product in products"
            v-bind:key="product.id"
          >
            <span class="price">￥{{ product.price }}(税込み)</span>
            <br />
            <button
              @click="addProductToCart(product)"
              class="products-button btn"
            >
              <i class="fas fa-shopping-cart"></i>
              カートに入れる
            </button>
          </div>
        </div>
        <div class="btn-style">
          <button class="news-button  btn" @click="toHome">HOMEに戻る</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      message: false,
    };
  },
  computed: {
    products() {
      return this.$store.state.products.slice(7, 8);
    },
  },
  created() {
    this.$store.dispatch('getAllProducts');
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product);
    },
  },
};
</script>
<style scoped>
/* 新着タイトル */
.page-title-image {
  margin-top: 100px;
  background-image: url(../../assets/news/ume-hana.jpg);
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

.product-page {
  border: 1px solid #dddddd;
  background: #ffffff;
  padding: 5vw;
  margin: 50px 0;
}

.p-img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.product-cell {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.p-setummei,
.img-div {
  width: 100%;
}

.p-setummei li {
  font-size: 88%;
  line-height: 120%;
  padding: 10px 0;
  font-family: '中ゴシックBBB';
  border-bottom: 1px solid #dddddd;
}

@media screen and (min-width: 601px) {
  .product-cell {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .p-setummei {
    width: 45%;
  }
  .img-div {
    width: 55%;
  }
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

.cart-list {
  margin-top: 30px;
  text-align: center;
}

.price {
  display: block;
  padding-bottom: 10px;
  font-size: 140% !important;
  font-weight: 700;
}
</style>
