<template>
  <div>
    <header>
      <div class="header-logo">
        <img src="./assets/header/header-logo.jpg" alt="味覚庵" />
      </div>
      <div class="header-text">
        <p>「紀州・南高梅」の新宿直売店</p>
        <!-- <p>-創業昭和32年-</p>
        <p>業界でも評判の品質と味わい!</p>
        <p>由緒あるホテルや高級料亭でしか</p>
        <p>味わえなかった幻の逸品「紀州・南高梅」が、</p>
        <p>ようやくご家庭で召し上がれるようになりました！</p> -->
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
<style>
.header-logo img {
  float: left;
}

.header-text {
  float: left;
  font-size: 0.9rem;
}
</style>
