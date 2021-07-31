<template>
  <div class="swiper-container">
    <div class="swiper-slide">
      <img src="..//assets/home/ume-1.jpg" alt="" />
      <div class="inner-text style-black">
        <h2>「創業昭和三三年」</h2>
        <p>由緒あるホテルや高級料亭でしか</p>
        <p>味わえなかった幻の逸品「○○梅」が、</p>
        <p>ご家庭で召し上がれるようになりました。</p>
      </div>
    </div>

    <!-- <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img src="..//assets/home/ume-1.jpg" alt="" />
        <div class="inner-text style-black">
          <h2>「創業昭和三三年」</h2>
          <p>由緒あるホテルや高級料亭でしか</p>
          <p>味わえなかった幻の逸品「○○梅」が、</p>
          <p>ご家庭で召し上がれるようになりました。</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="..//assets/home/ume-2.jpg" alt="" />
        <div class="inner-text style-black">
          <h2>「梅干庵」</h2>
          <p>の梅干づくりの最大の特徴は、</p>
          <p>自家農園を持っていること。</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="..//assets/home/ume-3.jpg" alt="" />
        <div class="inner-text style-black">
          <h2>最優良品種の「○○梅」</h2>
          <p>
            南高梅は和歌山の風土を背景に、
          </p>
          <p>
            戦後に開発された優良品種をもとに生まれました。
          </p>
          <p>
            中でも優良品種は「○○梅」と名付けられ、
          </p>
          <p>
            ○○を代表する梅として現在に至っています。
          </p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img src="..//assets/home/ume-4.jpg" alt="" />
        <div class="inner-text style-black">
          <h2>「本当に美味しい梅干」</h2>
          <p>本当に美味しい梅干を</p>
          <p>堪能したい方へ</p>
          <p>自身をもっておすすめできる「梅干」</p>
          <p>の梅干です。</p>
        </div>
      </swiper-slide>
    </swiper> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true, //無限ループ
        slidesPerView: 1, //画面に何枚表示させるか
        // spaceBetween: 300, //スライド間隔
        speed: 3000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true, //何らかのアクション後の自動切り替えを再開
        },
        breakpoints: {
          //ブレイクポイント
          760: {
            slidesPerView: 1,
            // width: 600, //横幅をpx指定も可能
            loopAdditionalSlides: 1, //Addition number of slides that will be cloned after creating of loop
            // spaceBetween: 300,
            speed: 3000,
            grabCursor: true, //マウスで次のスライドに行くことができる
            autoplay: {
              delay: 3000,
              stopOnLastSlide: false,
              disableOnInteraction: false, //何らかのアクション後の自動切り替えを再開
            },
          },
        },
        pagination: {
          //ページネーション設定
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
};
</script>
<style>
/* 画像文字調整 */
.swiper-slide .style-black {
  width: auto;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  writing-mode: vertical;
  text-orientation: upright;
  font-family: '凸版文久明朝 R';
  font-size: 30%;
  line-height: 150%;
  letter-spacing: 3px;
  z-index: 2;
  margin: 0px auto;
  padding: 40px 0px 0px;
  text-align: left;
}

@media screen and (min-width: 481px) {
  /* 481px以上に適用されるCSS（タブレット用） */
  .swiper-slide .style-black {
    font-size: 50%;
  }
}

@media screen and (min-width: 961px) {
  .swiper-slide .style-black {
    width: 30%;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    left: auto;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-family: '凸版文久明朝 R';
    font-size: 40%;
    line-height: 180%;
    letter-spacing: 3px;
    z-index: 2;
    margin: 0px auto;
    padding: 40px 0px 0px;
    text-align: left;
  }
}
@media screen and (min-width: 1250px) {
  .swiper-slide .style-black {
    width: auto;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-family: '凸版文久明朝 R';
    font-size: 60%;
    line-height: 180%;
    letter-spacing: 3px;
    z-index: 2;
    margin: 0px auto;
    padding: 40px 0px 0px;
    text-align: left;
  }
}

/* 文字消去 */
.swiper-slide .style-black p {
  display: none;
}
@media screen and (min-width: 961px) {
  .swiper-slide .style-black p {
    display: block;
  }
}

/* 画像サイズ調整 */
.swiper-container,
.swiper-slide {
  height: 300px;
  margin-top: 33px;
  width: 100%;
}
@media screen and (min-width: 481px) {
  /* 481px以上に適用されるCSS（タブレット用） */
  .swiper-container,
  .swiper-slide {
    height: 400px;
    margin-top: 40px;
  }
}

@media screen and (min-width: 961px) and (max-width: 1249px) {
  /*画面サイズが768pxから1024pxまではここを読み込む*/
  .swiper-container,
  .swiper-slide {
    height: 600px;
    margin-top: 70px;
  }
}

@media screen and (min-width: 1250px) {
  /* 1250px以上に適用されるCSS（PC用） */
  .swiper-container,
  .swiper-slide {
    height: 100vh;
  }
}

.swiper-slide > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
}

.swiper-slide {
  position: absolute; /* ← swiper.cssと優先順位が干渉するときは工夫してください */
  top: 0;
  left: 0;
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: red;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
