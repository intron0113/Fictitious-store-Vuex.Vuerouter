<template>
  <div>
    <section class="page-title-image">
      <div class="title-overlay"></div>
      <div class="title-box">
        <h1>お問い合わせ</h1>
        <p>CONTACT</p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="form">
          <div class="form-header">
            <p>お客様の情報を入力してください</p>
          </div>
          <div class="form-main">
            <form class="form-box" action="">
              <p>-お名前-</p>
              <input
                class="input-form"
                name="text"
                :value="name"
                @input="setName"
              />
              <p>-メールアドレス-</p>
              <input
                class="input-form"
                name="text"
                :value="email"
                @input="setMail"
              />
              <p>-電話番号-</p>
              <input
                class="input-form"
                name="text"
                :value="phone"
                @input="setPhone"
              />
            </form>
          </div>
        </div>
        <div class="next-button">
          <button @click="Contact2" class="btn contact-btn" type="submit">
            次に進む
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.getters.name;
      },
    },
    email: {
      get() {
        return this.$store.getters.email;
      },
    },
    phome: {
      get() {
        return this.$store.getters.phone;
      },
    },
  },
  methods: {
    setName(e) {
      this.$store.dispatch('setName', e.target.value);
    },
    setMail(e) {
      this.$store.dispatch('setMail', e.target.value);
    },
    setPhone(e) {
      this.$store.dispatch('setPhone', e.target.value);
    },
    toHome() {
      this.$router.push('/');
    },

    Contact2() {
      this.$router.push('contact2');
    },
  },
};
</script>

<style>
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

/* ボタン */
.contact-btn {
  margin-bottom: 50px;
  cursor: pointer;
  color: #fff;
  background-color: rgb(165, 205, 137);
  border-color: rgb(165, 205, 137);
}

.contact-btn:hover {
  background-color: rgb(125, 194, 142);
  border-color: rgb(125, 194, 142);
}

.form {
  margin: 100px auto;
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgb(51, 255, 255);
}
.form-header {
  position: relative;
  height: 50px;
  background-color: rgba(51, 255, 255, 0.5);
}
.form-header p {
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 0;
  margin-top: 0;
  font-size: 15px;
  text-align: center;
}

.form-box {
  width: 90%;
}

.input-form {
  width: 100%;
}

.form p {
  font-size: 15px;
}

@media screen and (min-width: 481px) {
  .form p {
    font-size: 20px;
  }
}

@media screen and (min-width: 961px) {
  .form p {
    font-size: 25px;
  }
}

.form-step {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  background-color: blue;
  color: white;
}
.form-main {
  font-size: 15px;
  padding: 10px 30px;
}

@media screen and (min-width: 481px) {
  .form-main {
    font-size: 20px;
  }
}

@media screen and (min-width: 961px) {
  .form-main {
    font-size: 25px;
  }
}

.next-button {
  text-align: center;
}
.contact-go-btn {
  cursor: pointer;
  color: #fff;
  background-color: rgb(165, 205, 137);
  border-color: rgb(165, 205, 137);
  margin-left: 25px;
}

.contact-go-btn:hover {
  background-color: rgb(125, 194, 142);
  border-color: rgb(125, 194, 142);
}
.contact-back-btn {
  cursor: pointer;
  color: #fff;
  background-color: rgba(223, 084, 107, 0.7);
  border-color: rgba(223, 084, 107, 0.7);
  margin-right: 25px;
}

.contact-back-btn:hover {
  background-color: rgb(223, 084, 107);
  border-color: rgb(223, 084, 107);
}
</style>
