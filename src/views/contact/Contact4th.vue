<template>
  <div>
    <div class="form">
      <div class="form-header">
        <span class="form-step">step4</span>
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

            <p>現在生命保険に加入されていますか?</p>
            <p>{{ insurance1 }}</p>
            <p>
              現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか?
            </p>
            <p>{{ insurance2 }}</p>
            <p>
              過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をした事がありますか?
            </p>
            <p>{{ insurance3 }}</p>
            <p>-お問い合わせ内容-</p>
            <p>{{ text }}</p>
          </div>
        </form>
      </div>
    </div>
    <div class="next-button">
      <button @click="Contact3" class="btn" type="reset">前へ戻る ></button>
      <button class="btn" type="submit">送信 ></button>
    </div>
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
