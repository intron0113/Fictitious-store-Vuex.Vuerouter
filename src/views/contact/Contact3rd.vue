<template>
  <div>
    <div class="form">
      <div class="form-header">
        <span class="form-step">step3</span>
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
            rows="50"
            cols="100"
            wrap="soft"
            :value="message"
            @input="updateMessage"
          ></textarea>
        </form>
      </div>
    </div>
    <div class="next-button">
      <button @click="Contact2" class="btn" type="reset">前へ戻る ></button>
      <button @click="Contact4" class="btn" type="submit">次に進む ></button>
    </div>
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
  width: 700px;
  font-size: 18px;
}
</style>
