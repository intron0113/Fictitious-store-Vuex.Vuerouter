<template>
  <div>
    <HeroSlider></HeroSlider>
    <section>
      <div class="container">
        <div class="topinfo">
          <h2 class="typesquare_tags">新着情報</h2>
          <div class="infotable">
            <table class="infolist">
              <tbody v-for="info in infos" :key="info.id">
                <tr v-on:click="info.id = !info.id">
                  <td class="day">{{ info.day }}</td>
                  <td class="type-td" v-if="$mq === 'pc'">
                    <div class="type">{{ info.type }}</div>
                  </td>
                  <td class="title">{{ info.title }}</td>
                </tr>

                <!-- <transition name="fade"> -->
                <tr v-if="!info.id">
                  <td class="message" colspan="3">{{ info.message }}</td>
                </tr>
                <tr v-if="!info.id">
                  <td v-on:click="info.id = !info.id">
                    <button class="news-button  btn">
                      閉じる
                    </button>
                  </td>
                </tr>
                <!-- </transition> -->
              </tbody>
            </table>
          </div>
        </div>
        <div class="btn-style">
          <button class="news-button  btn" @click="toNews">もっとみる</button>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="products-container">
          <h2 product-title>商品一覧</h2>
          <Productlist></Productlist>
        </div>
      </div>
    </section>
    <Kodawari></Kodawari>
  </div>
</template>
<script>
import HeroSlider from '../component/HeroSlider.vue';
import Productlist from '../component/Productlist.vue';
import Kodawari from '../component/Kodawari.vue';

export default {
  data: function() {
    return {
      message: false,
    };
  },
  computed: {
    infos() {
      return this.$store.state.infos.slice(-1).reverse();
    },
  },
  components: {
    HeroSlider,
    Productlist,
    Kodawari,
  },
  methods: {
    toNews() {
      this.$router.push('news');
    },
  },
};
</script>
<style>
/* 新着情報 */
.topinfo {
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
}

.infotable {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

table {
  width: 90%;
  word-break: break-all;
  word-wrap: break-all;
  position: relative;
  table-layout: fixed;
  border-spacing: 0px 20px;
}

.day,
.type-td,
.title:hover {
  cursor: pointer;
}

.day {
  width: 120px;
  text-align: left;
}

.type-td {
  width: 100px;
  padding-right: 25px;
}

.type {
  margin-right: 25px;
  width: 100px;
  text-align: left;
  background-color: #e5c7cc;
}

.title {
  text-align: left;
}

/* ボタン */
.news-button {
  cursor: pointer;
  color: #fff;
  background-color: rgb(165, 205, 137);
  border-color: rgb(165, 205, 137);
}

.news-button:hover {
  background-color: rgb(125, 194, 142);
  border-color: rgb(125, 194, 142);
}

.btn-style {
  text-align: center;
}

/* 商品一覧 */
.products-container {
  margin-top: 50px;
}
</style>
