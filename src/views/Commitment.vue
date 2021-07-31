<template>
  <div>
    <section class="page-title-image">
      <div class="title-overlay"></div>
      <div class="title-box">
        <h1>梅干庵のこだわり</h1>
        <p>COMMITMENT</p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="icon-box-wrapper">
          <div class="icon-box-icon">
            <i class="fas fa-check-square"></i>
          </div>
          <div class="icon-box-content">
            <h3 class="icon-box-title">
              <span>最高ランクのA級○○梅を使用</span>
            </h3>
            <p class="icon-box-description">
              A級の○○梅は、傷がなく、皮が薄く柔らかく、果肉がたっぷり。
            </p>
          </div>
        </div>
        <div class="icon-box-wrapper">
          <div class="icon-box-icon">
            <i class="fas fa-check-square"></i>
          </div>
          <div class="icon-box-content">
            <h3 class="icon-box-title">
              <span>料亭の味わい</span>
            </h3>
            <p class="icon-box-description">
              当店の○○梅は高級料亭にお出ししている梅を市販用にしたものです。
              <br />味がしっかりしみこみ、種まで美味しくいただけます。
            </p>
          </div>
        </div>
        <div class="icon-box-wrapper">
          <div class="icon-box-icon">
            <i class="fas fa-check-square"></i>
          </div>
          <div class="icon-box-content">
            <h3 class="icon-box-title">
              <span>日本一の産地で育った梅のみの使用</span>
            </h3>
            <p class="icon-box-description">
              自家農園で採れた梅だけにこだわって作っております。
            </p>
          </div>
        </div>
        <div class="why">
          <h4>なぜ日本一の産地と言われているのか</h4>
          <p>
            ○○の土壌は、梅の生育に適しているとされている水はけのよい微酸性の<br />
            土壌です。<br />
            梅の生育に適した、土壌水分30~40%土壌が必要です。<br />
            こうした厳しい条件を満たした土壌だからこそ○○梅という逸品が生まれたのです。
          </p>
        </div>
        <div class="tip-img-box">
          <img class="img" src="..//assets/commitment/commitment.jpg" />
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

.icon-box-wrapper {
  margin: 70px 0px;
}

.img {
  max-width: 100%;
  height: auto;
}

.tip-img-box {
  width: 100%;
  margin: 100px 0;
}
</style>
