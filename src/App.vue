<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import 'normalize.css';
import Header from './component/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
<style>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media screen and (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media screen and (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media screen and (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media screen and (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}
</style>
