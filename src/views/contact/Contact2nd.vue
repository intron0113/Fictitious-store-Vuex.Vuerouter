<template>
  <div>
    <div class="form">
      <div class="form-header">
        <span class="form-step">step2</span>
        <p>以下の質問にお答えください</p>
      </div>
      <div class="form-main">
        <form action="">
          <div>
            <p>お問い合わせですか内容をお選びください。</p>
            <label
              ><input
                v-on:change="q2 = !q2"
                type="radio"
                name="insurance-1"
                value="商品に関する内容"
                v-model="insurance1"
              />商品に関する内容</label
            >
            <label
              ><input
                v-on:change="q2 = !q2"
                type="radio"
                name="insurance-1"
                value="不明点に対するお問い合わせ"
                v-model="insurance1"
              />不明点に対するお問い合わせ</label
            >
            <label
              ><input
                v-on:change="q2 = !q2"
                type="radio"
                name="insurance-1"
                value="その他"
                v-model="insurance1"
              />その他</label
            >
          </div>
          <transition name="fade">
            <div v-if="q2">
              <p>
                商品はどちらで購入されましたか？
              </p>
              <label
                ><input
                  v-on:change="q3 = !q3"
                  type="radio"
                  name="insurance-2"
                  value="店舗"
                  v-model="insurance2"
                />店舗</label
              >
              <label
                ><input
                  v-on:change="q3 = !q3"
                  type="radio"
                  name="insurance-2"
                  value="通販"
                  v-model="insurance2"
                />通販</label
              >
            </div>
          </transition>
          <transition name="fade">
            <div v-if="q3">
              <p>
                ご返信はどのような形式がよろしいですか？
              </p>
              <label
                ><input
                  type="radio"
                  name="insurance-3"
                  value="お電話"
                  v-model="insurance3"
                />お電話</label
              >
              <label
                ><input
                  type="radio"
                  name="insurance-3"
                  value="メール"
                  v-model="insurance3"
                />メール</label
              >
            </div>
          </transition>
        </form>
      </div>
    </div>
    <div class="next-button">
      <button @click="Contact1" class="btn" type="reset">前へ戻る ></button>
      <button @click="Contact3" class="btn" type="submit">次に進む ></button>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      q2: false,
      q3: false,
    };
  },
  computed: {
    insurance1: {
      get() {
        return this.$store.getters.insurance1;
      },
      set(value) {
        this.$store.dispatch('setInsurance1', value);
      },
    },
    insurance2: {
      get() {
        return this.$store.getters.insurance2;
      },
      set(value) {
        this.$store.dispatch('setInsurance2', value);
      },
    },
    insurance3: {
      get() {
        return this.$store.getters.insurance3;
      },
      set(value) {
        this.$store.dispatch('setInsurance3', value);
      },
    },
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },

    Contact1() {
      this.$router.push('contact1');
    },
    Contact3() {
      this.$router.push('contact3');
    },
  },
};
</script>
<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
