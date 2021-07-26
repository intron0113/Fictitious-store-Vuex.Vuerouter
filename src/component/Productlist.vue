<template>
  <div class="main">
    <div class="parent">
      <div class="contents-box">
        <a href="https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E9%A7%85">
          <img
            src="..//assets/products/umeproduct.jpg"
            alt="flexbox"
            class="contents-img"
          />
        </a>
        <h2 class="subtitle">梅干1</h2>
        <div>
          <button class="products-button  btn" @click="toNews">
            くわしく見る
          </button>
        </div>
      </div>
      <div class="contents-box">
        <a href="https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E9%A7%85">
          <img
            src="..//assets/products/umeproduct.jpg"
            alt="flexbox"
            class="contents-img"
          />
        </a>
        <h2 class="subtitle">梅干2</h2>
        <div>
          <button class="products-button  btn" @click="toNews">
            くわしく見る
          </button>
        </div>
      </div>
      <div class="contents-box">
        <a href="https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E9%A7%85">
          <img
            src="..//assets/products/umeproduct.jpg"
            alt="flexbox"
            class="contents-img"
          />
        </a>
        <h2 class="subtitle">梅干3</h2>
        <div>
          <button class="products-button  btn" @click="toNews">
            くわしく見る
          </button>
        </div>
      </div>
      <div class="contents-box">
        <a href="https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E9%A7%85">
          <img
            src="..//assets/products/umeproduct.jpg"
            alt="flexbox"
            class="contents-img"
          />
        </a>
        <h2 class="subtitle">梅干4</h2>
        <div>
          <button class="products-button  btn" @click="toNews">
            くわしく見る
          </button>
        </div>
      </div>
      <div class="contents-box">
        <a href="https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E9%A7%85">
          <img
            src="..//assets/products/umeproduct.jpg"
            alt="flexbox"
            class="contents-img"
          />
        </a>
        <h2 class="subtitle">梅干5</h2>
        <div>
          <button class="products-button  btn" @click="toNews">
            くわしく見る
          </button>
        </div>
      </div>
      <div class="contents-box">
        <a href="https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E9%A7%85">
          <img
            src="..//assets/products/umeproduct.jpg"
            alt="flexbox"
            class="contents-img"
          />
        </a>
        <h2 class="subtitle">梅干6</h2>
        <div>
          <button class="products-button  btn" @click="toNews">
            くわしく見る
          </button>
        </div>
      </div>
      <div class="contents-box">
        <a href="https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E9%A7%85">
          <img
            src="..//assets/products/umeproduct.jpg"
            alt="flexbox"
            class="contents-img"
          />
        </a>
        <h2 class="subtitle">梅干7</h2>
        <div>
          <button class="products-button  btn" @click="toNews">
            くわしく見る
          </button>
        </div>
      </div>
      <div class="contents-box">
        <a href="https://ja.wikipedia.org/wiki/%E6%9D%B1%E4%BA%AC%E9%A7%85">
          <img
            src="..//assets/products/umeproduct.jpg"
            alt="flexbox"
            class="contents-img"
          />
        </a>
        <h2 class="subtitle">梅干8</h2>
        <div>
          <button class="products-button  btn" @click="toNews">
            くわしく見る
          </button>
        </div>
      </div>
      <div class="empty_item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      msg: 'ここはメイン１です',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: #555d6b;
  font-weight: bold;
}
.parent {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
}
.contents-box {
  /* background-color: lightgray; */
  padding: 10px;
  margin: 10px;
  width: 40%;
  text-align: center;
}
.contents-img {
  width: 80%;
  height: 200px;
  object-fit: contain;
}

@media (min-width: 960px) {
  .contents-box {
    width: 25%;
  }
}

@media (min-width: 1250px) {
  .contents-box {
    width: 20%;
  }
}

.empty_item {
  width: 40%;
  padding: 10px;
  margin: 10px;
}

@media (min-width: 960px) {
  .empty_item {
    width: 25%;
  }
}

@media (min-width: 1250px) {
  .empty_item {
    width: 20%;
  }
}

.products-button {
  cursor: pointer;
  color: #fff;
  background-color: rgba(223, 084, 107, 0.7);
  border-color: rgba(223, 084, 107, 0.7);
}

.products-button:hover {
  background-color: rgb(223, 084, 107);
  border-color: rgb(223, 084, 107);
}
</style>
