<template>
  <footer>
    <div class="container">
      <div v-if="$mq === 'pc'">
        <!-- pc用navメニュー -->
        <nav class="footer__nav">
          <ul class="footer__ul">
            <li class="footer__li item" @click="toHome">{{ Home }}</li>
            <li class="footer__li item" @click="toNews">{{ News }}</li>
            <li class="footer__li item" @click="toProduct">{{ Products }}</li>
            <li class="footer__li item" @click="StoreMaps">{{ About }}</li>
            <li class="footer__li item" @click="Commit">{{ Tips }}</li>
            <!-- <li class="footer__li item">{{ Guide }}</li> -->
            <li class="footer__li item" @click="Contact1">{{ Contact }}</li>
          </ul>
        </nav>
      </div>
      <div class="footer-gide">
        <div class="adress">
          <div class="componey">
            <h4>梅庵食品株式会社</h4>
            <p>
              和歌山県○○郡○○町0000-0
              <br />
              TEL.1234-56-7890 FAX.1234-56-7890
            </p>
            <div href="#" class="btn footer-botton" @click="Contact1">
              <i class="far fa-envelope" aria-hidden="true"></i>
              お問い合わせ
            </div>
          </div>
          <div class="tel-section">
            <div class="tell-box">
              <div class="tell">
                <i class="fa fa-phone-square" aria-hidden="true"></i>
                0120-00-0000
              </div>
            </div>
            <div class="opentime">受付. 9:00～17:00 ※土日祝は除く</div>
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
      </div>
    </div>
    <div class="copy">
      © 2021 梅干庵. All Rights Reserved.
    </div>
  </footer>
</template>
<script>
export default {
  data: function() {
    return {
      ActiveBtn: false,
    };
  },
  computed: {
    Home() {
      return this.$store.state.Home;
    },
    Cart() {
      return this.$store.state.Cart;
    },
    News() {
      return this.$store.state.News;
    },
    Products() {
      return this.$store.state.Products;
    },
    About() {
      return this.$store.state.About;
    },
    Tips() {
      return this.$store.state.Tips;
    },
    // Guide() {
    //   return this.$store.state.Guide;
    // },
    Contact() {
      return this.$store.state.Contact;
    },
  },
  methods: {
    toShopping() {
      this.$router.push('shopping-cart');
    },
    toHome() {
      this.$router.push('/');
    },
    toNews() {
      this.$router.push('news');
    },
    toProduct() {
      this.$router.push('product');
    },
    StoreMaps() {
      this.$router.push('store');
    },
    Commit() {
      this.$router.push('commit');
    },
    Contact1() {
      this.$router.push('contact1');
    },
  },
};
</script>
<style style>
footer {
  padding: 2rem 0 0 0;
  background: url(../assets/footer/footer.jpeg) center center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.footer__ul {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  margin: 0;
  padding: 6px;
  list-style-type: none;
}

.footer__li {
  margin: 0 20px;
}

.footer-gide {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
}

@media screen and (min-width: 481px) {
  .footer-gide {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.adress {
  width: 100%;
  padding-bottom: 30px;
}

.map {
  width: 100%;
}

@media screen and (min-width: 576px) {
  .adress {
    width: 45%;
  }
  .map {
    width: 45%;
  }
}

.footer-botton {
  margin-bottom: 10px;
  cursor: pointer;
  color: #fff;
  background-color: rgba(223, 084, 107, 0.7);
  border-color: rgba(223, 084, 107, 0.7);
}

.footer-botton:hover {
  background-color: rgb(223, 084, 107);
  border-color: rgb(223, 084, 107);
}

.tell-box {
  border-top: 1px solid #443c31;
}

.copy {
  background-color: rgb(223, 084, 107);
  color: #fff;
  padding: 0.5rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0;
}

.map iframe {
  width: 100%;
  height: 300px;
}
</style>
