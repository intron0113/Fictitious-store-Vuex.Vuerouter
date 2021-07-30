<template>
  <div>
    <div class="form">
      <div class="form-header">
        <span class="form-step">step1</span>
        <p>お客様の情報を入力してください</p>
      </div>
      <div class="form-main">
        <form action="">
          <p>-お名前-</p>
          <textarea
            name="text"
            rows="1"
            cols="30"
            wrap="soft"
            :value="name"
            @input="setName"
          ></textarea>
          <p>-メールアドレス-</p>
          <textarea
            name="text"
            rows="1"
            cols="30"
            wrap="soft"
            :value="email"
            @input="setMail"
          ></textarea>
          <p>-電話番号-</p>
          <textarea
            name="text"
            rows="1"
            cols="30"
            wrap="soft"
            :value="phone"
            @input="setPhone"
          ></textarea>
        </form>
      </div>
    </div>
    <div class="next-button">
      <button @click="Contact2" class="btn" type="submit">次に進む ></button>
    </div>
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
.form {
  margin: 100px auto;
  width: 800px;
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
  font-size: 20px;
  text-align: center;
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
  font-size: 18px;
  padding: 10px 0 30px 30px;
}
.next-button {
  text-align: center;
}
/* .btn {
  border-radius: 5px;
  background-color: green;
  padding: 20px;
  text-align: center;
  color: white;
  margin: 0 30px;
  text-decoration: none;
} */
</style>
