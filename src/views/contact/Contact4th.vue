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
            <p>以下の内容をご確認ください</p>
          </div>
          <div class="form-main">
            <form action="#">
              <div>
                <p>-お名前-</p>
                <p>{{ name }}</p>
                <p>-メールアドレス-</p>
                <p>{{ email }}</p>
                <p>-お電話番号-</p>
                <p>{{ phone }}</p>

                <p>お問い合わせ内容をお選びください。</p>
                <p>{{ insurance1 }}</p>
                <p>
                  商品はどちらで購入されましたか？
                </p>
                <p>{{ insurance2 }}</p>
                <p>
                  ご返信はどのような形式がよろしいですか？
                </p>
                <p>{{ insurance3 }}</p>
                <p>-お問い合わせ内容-</p>
                <p>{{ text }}</p>
              </div>
            </form>
          </div>
        </div>
        <div class="next-button">
          <button @click="Contact3" class="btn contact-back-btn" type="reset">
            前へ戻る
          </button>
          <button class="btn contact-go-btn" type="submit">送信</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'text',
      'email',
      'phone',
      'day',
      'insurance1',
      'insurance2',
      'insurance3',
      'name',
    ]),
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },

    Contact3() {
      this.$router.push('Contact3');
    },
  },
};
</script>
