<template>
  <div>
    <header class="header">
      <div class="header__inner appear up">
        <div class="logo item" @click="toHome">
          <img src="../assets/header/umean.png" alt="梅屋庵" />
        </div>
        <!-- PC表示 -->
        <div v-if="$mq === 'pc'">
          <!-- 買い物かご -->
          <div class="cart-icon" @click="toShopping">
            <i class="fas fa-shopping-cart"></i><span>買い物カゴ</span>
          </div>
          <!-- pc用navメニュー -->
          <nav class="header__nav">
            <ul class="header__ul">
              <li class="header__li item" @click="toHome">{{ Home }}</li>
              <li class="header__li item" @click="toNews">{{ News }}</li>
              <li class="header__li item" @click="toProduct">{{ Products }}</li>
              <li class="header__li item" @click="StoreMaps">{{ About }}</li>
              <li class="header__li item" @click="Commit">{{ Tips }}</li>
              <!-- <li class="header__li item">{{ Guide }}</li> -->
              <li class="header__li item" @click="Contact1">{{ Contact }}</li>
            </ul>
          </nav>
        </div>
        <!-- モバイル表示 -->
        <div v-if="$mq === 'sp'">
          <!-- 買い物かご -->
          <div class="mb-cart-icon" @click="toShopping">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <!--ハンバーガーメニューのボタン-->
          <div class="hamburger_btn" v-on:click="ActiveBtn = !ActiveBtn">
            <span
              class="line line_01"
              v-bind:class="{ btn_line01: ActiveBtn }"
            ></span>
            <span
              class="line line_02"
              v-bind:class="{ btn_line02: ActiveBtn }"
            ></span>
            <span
              class="line line_03"
              v-bind:class="{ btn_line03: ActiveBtn }"
            ></span>
          </div>
          <!-- サイドバーカバー -->
          <transition name="cover">
            <div
              class="cover"
              v-show="ActiveBtn"
              v-on:click="ActiveBtn = !ActiveBtn"
            ></div>
          </transition>
          <!--サイドバー-->
          <transition name="menu">
            <div class="menu" v-show="ActiveBtn">
              <ul class="mobile-menu__ul">
                <!-- <li class="header__li item">お買い物メニュー</li> -->
                <li class="mb-h-li item" @click="toShopping">{{ Cart }}</li>
                <li class="mb-h-li item" @click="toHome">{{ Home }}</li>
                <!-- <li class="mb-h-li item">ホームメニュー</li> -->
                <li class="mb-h-li item" @click="toNews">{{ News }}</li>
                <li class="mb-h-li item" @click="toProduct">{{ Products }}</li>
                <li class="mb-h-li item" @click="StoreMaps">{{ About }}</li>
                <li class="mb-h-li item" @click="Commit">{{ Tips }}</li>
                <!-- <li class="mb-h-li item">{{ Guide }}</li> -->
                <li class="mb-h-li item" @click="Contact1">{{ Contact }}</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </header>
  </div>
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
<style>
.header__inner {
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  z-index: 10;
  background-color: rgba(255, 255, 255, 1);
}
@media screen and (min-width: 961px) {
  .header__inner {
    height: 150px;
  }
}

/* ヘッダーロゴ */
.logo {
  margin: 0 20px;
}

.logo img {
  height: 90px;
  width: 100px;
  object-fit: cover;
}

@media screen and (min-width: 481px) {
  .logo img {
    height: 90px;
    width: 200px;
  }
}

/* PCメニューバー */
li {
  list-style: none;
  cursor: pointer;
}

.header__ul {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  margin: 0;
  padding: 6px;
  list-style-type: none;
}

.header__li {
  margin: 0 20px;
}

/* 買い物カート */
.mb-cart-icon {
  position: fixed;
  top: 30px;
  right: 80px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 10;
  background-color: rgba(223, 084, 107, 0.9);
  border-radius: 5px;
  border: 1px solid transparent;
  color: #fff;
  font-size: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 481px) {
  /* 481px以上に適用されるCSS（タブレット用） */
  .mb-cart-icon {
    top: 20px;
    right: 90px;
    width: 50px;
    height: 50px;
    font-size: 34px;
  }
}
/* 買い物カートPC */
.cart-icon {
  position: fixed;
  top: 20px;
  right: 90px;
  width: 150px;
  height: 50px;
  cursor: pointer;
  z-index: 10;
  background-color: rgba(223, 084, 107, 0.9);
  border-radius: 5px;
  border: 1px solid transparent;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-icon span {
  margin-left: 10px;
}

/*ボタン*/
.hamburger_btn {
  position: fixed; /*常に最上部に表示したいので固定top: 20px;*/
  top: 20px;
  right: 20px;
  width: 50px;
  height: 52px;
  cursor: pointer;
  z-index: 50;
}

@media screen and (min-width: 481px) {
  /* 481px以上に適用されるCSS（タブレット用） */
  .hamburger_btn {
    width: 70px;
    height: 72px;
  }
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 15px;
  width: 25px;
  height: 2px;
  background: #333333;
  text-align: center;
}

@media screen and (min-width: 481px) {
  /* 481px以上に適用されるCSS（タブレット用） */
  .hamburger_btn .line {
    left: 20px;
    width: 32px;
    height: 2px;
    background: #333333;
    text-align: center;
  }
}

.hamburger_btn .line_01 {
  top: 16px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 26px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 36px;
  transition: 0.4s ease;
}

.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

/* カバー */
.cover-enter-active,
.cover-leave-active {
  transition: opacity 0.4s;
}
.cover-enter,
.cover-leave-to {
  opacity: 0;
}
.cover-leave,
.cover-enter-to {
  opacity: 1;
}

.cover {
  background-color: rgba(0, 0, 0, 0.25);
  height: 100vh;
  width: 100%;
  z-index: 20;
  position: fixed;
  top: 0;
  cursor: pointer;
}

/*サイドバー*/
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
}
.menu-leave,
.menu-enter-to {
  opacity: 1;
}

.menu {
  background-color: rgb(223, 084, 107);
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 13rem;
  height: 80rem;
  top: 0;
  right: 0;
}
.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 1.2rem;
  /* padding: 0 2rem; */
}

.menu ul {
  margin: 1rem;
  padding: 50px 0;
}
</style>
