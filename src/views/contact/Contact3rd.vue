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
            <p>お問い合わせ内容をご記入ださい</p>
          </div>
          <div class="form-main">
            <form action="#">
              <div>
                <p>-お問い合わせ内容-</p>
              </div>
              <textarea
                class="text-form"
                name="text"
                :value="message"
                @input="updateMessage"
              ></textarea>
            </form>
          </div>
        </div>
        <div class="next-button">
          <button @click="Contact2" class="btn contact-back-btn" type="reset">
            前へ戻る
          </button>
          <button @click="Contact4" class="btn contact-go-btn" type="submit">
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
    message() {
      return this.$store.getters.text;
    },
  },
  methods: {
    updateMessage(e) {
      this.$store.dispatch('setMessage', e.target.value);
    },

    toHome() {
      this.$router.push('/');
    },

    Contact2() {
      this.$router.push('contact2');
    },
    Contact4() {
      this.$router.push('contact4');
    },
  },
};
</script>
<style scope>
.text-form {
  margin: 5px 10px;
  height: 500px;
  width: 95%;
  font-size: 18px;
}
</style>
