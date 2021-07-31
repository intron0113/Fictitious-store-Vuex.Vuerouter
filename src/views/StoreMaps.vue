<template>
  <div>
    <section class="page-title-image">
      <div class="title-overlay"></div>
      <div class="title-box">
        <h1>店舗情報</h1>
        <p>STORES</p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="store-title">
          <h2>和歌山本店</h2>
        </div>
        <div class="footer-gide">
          <div class="photo">
            <img
              src="..//assets/store/store.jpg"
              alt="flexbox"
              class="contents-img"
              @click="toProduct6"
            />
          </div>
          <div class="adress-section">
            <div class="s-adress">
              <div class="componey">
                <div class="opentime">営業時間:9:00～17:00</div>
              </div>
              <div>定休日:不定休</div>
              <div class="tel-section">
                <div class="tell-box">
                  <div class="tell">
                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                    0120-00-0000
                  </div>
                  <p>
                    所在地:和歌山県○○郡○○町0000-0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212156.62179568066!2d135.22196228029475!3d33.81367522194369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60070c16f134a93f%3A0xda3b04e7eccbce83!2z5ZKM5q2M5bGx55yM5pel6auY6YOh44G_44Gq44G555S6!5e0!3m2!1sja!2sjp!4v1627308649130!5m2!1sja!2sjp"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div class="store-title">
          <h2>銀座東京店</h2>
        </div>
        <div class="footer-gide">
          <div class="photo">
            <img
              src="..//assets/store/store.jpg"
              alt="flexbox"
              class="contents-img"
              @click="toProduct6"
            />
          </div>
          <div class="adress-section">
            <div class="s-adress">
              <div class="componey">
                <div class="opentime">営業時間:11:00～20:00</div>
              </div>
              <div>定休日:月曜日</div>
              <div class="tel-section">
                <div class="tell-box">
                  <div class="tell">
                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                    0120-00-0000
                  </div>
                  <p>
                    所在地:東京都中央区〇〇0-00-00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212156.62179568066!2d135.22196228029475!3d33.81367522194369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60070c16f134a93f%3A0xda3b04e7eccbce83!2z5ZKM5q2M5bGx55yM5pel6auY6YOh44G_44Gq44G555S6!5e0!3m2!1sja!2sjp!4v1627308649130!5m2!1sja!2sjp"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div class="store-title">
          <h2>新横浜店</h2>
        </div>
        <div class="footer-gide">
          <div class="photo">
            <img
              src="..//assets/store/store.jpg"
              alt="flexbox"
              class="contents-img"
              @click="toProduct6"
            />
          </div>
          <div class="adress-section">
            <div class="s-adress">
              <div class="componey">
                <div class="opentime">営業時間:10:00～19:00</div>
              </div>
              <div>定休日:年中無休</div>
              <div class="tel-section">
                <div class="tell-box">
                  <div class="tell">
                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                    0120-00-0000
                  </div>
                  <p>
                    所在地:神奈川県横浜市〇〇0-0-0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212156.62179568066!2d135.22196228029475!3d33.81367522194369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60070c16f134a93f%3A0xda3b04e7eccbce83!2z5ZKM5q2M5bGx55yM5pel6auY6YOh44G_44Gq44G555S6!5e0!3m2!1sja!2sjp!4v1627308649130!5m2!1sja!2sjp"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div class="shop-btn btn-style">
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
.store-title {
  margin: 20px 0;
  border-top: 1px solid #443c31;
  border-bottom: 1px solid #443c31;
}

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

.footer-gide {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
}

@media screen and (min-width: 481px) {
  .footer-gide {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.adress-section {
  width: 100%;
}

.photo {
  width: 100%;
}
.contents-img {
  max-width: 100%;
  height: auto;
}

.map {
  width: 100%;
  margin-bottom: 100px;
}

.s-adress {
  width: 100%;
}

@media screen and (min-width: 576px) {
  .adress-section {
    width: 45%;
  }
  .photo {
    width: 45%;
  }
}

.adress {
  border-top: 1px solid #443c31;
  padding: 10px 0;
}

.tell-box {
  margin-top: 10px;
  padding: 10px 0;
  border-top: 1px solid #443c31;
  border-bottom: 1px solid #443c31;
}

.shop-btn {
  margin-bottom: 50px;
}
</style>
