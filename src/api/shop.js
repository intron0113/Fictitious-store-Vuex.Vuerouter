/**
 * Mocking client-server processing
 */
const _products = [
  { id: 1, title: '梅干1', price: 2500, inventory: 2 },
  { id: 2, title: '梅干2', price: 1980, inventory: 10 },
  { id: 3, title: '梅干3', price: 1500, inventory: 5 },
  { id: 4, title: '梅干4', price: 780, inventory: 5 },
  { id: 5, title: '梅干5', price: 1000, inventory: 5 },
  { id: 6, title: '梅干6', price: 550, inventory: 5 },
  { id: 7, title: '梅干7', price: 1200, inventory: 5 },
  { id: 8, title: '梅干8', price: 3980, inventory: 5 },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1
        ? cb()
        : errorCb();
    }, 100);
  },
};
