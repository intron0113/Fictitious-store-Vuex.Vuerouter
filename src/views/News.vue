<template>
  <div>
    <section class="page-title-image">
      <div class="title-overlay"></div>
      <div class="title-box">
        <h1>新着情報</h1>
        <p>TOPICS</p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="topinfo">
          <h2 class="typesquare_tags">お知らせ</h2>
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
              </tbody>
            </table>
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
    infos() {
      return this.$store.state.infos.slice().reverse();
    },
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
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
