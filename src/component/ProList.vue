<template>
  <div>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        {{ product.title }} - {{ product.price }}<br />
        <button @click="addProductToCart(product)">
          Add to cart
        </button>
      </li>
    </ul>
    <!-- <ShoppingCart></ShoppingCart> -->
  </div>
</template>

<script>
// import ShoppingCart from './ShoppingCart.vue';

export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.$store.dispatch('getAllProducts');
  },
  // components: {
  //   ShoppingCart,
  // },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product);
    },
  },
};
</script>
