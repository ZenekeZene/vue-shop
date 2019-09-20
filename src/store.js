import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: []
  },
  getters: {
    countItemsOnCart: state => state.cart.length,
    getProductsFilteredByPrice: state => rangePrice =>
      state.products.filter(product => {
        const priceCleaned = parseFloat(product.price.replace("$", ""));
        return priceCleaned > rangePrice[0] && priceCleaned < rangePrice[1];
      }),
    getProductsFilteredBySize: state => sizes =>
      state.products.filter(product => sizes.includes(product.size)),
    getProductsFilteredByPriceAndSize: (state, getters) => (
      rangePrice,
      sizes
    ) => {
      if (sizes.length > 0) {
        return getters
          .getProductsFilteredByPrice(rangePrice)
          .filter(product => sizes.includes(product.size));
      } else {
        return getters.getProductsFilteredByPrice(rangePrice);
      }
    },
    getProductById: state => id =>
      state.products.find(product => product._id === id),
    getTotalPriceCart: state =>
      state.cart.reduce(
        (accumulator, item) =>
          accumulator + parseFloat(item.product.price.replace("$", ""))
      , 0)
  },
  mutations: {
    addItemOnCart: (state, payload) => {
      let isDuplicated = false;
      state.cart.forEach(item => {
        if (item.product._id === payload.product._id) {
          item.quantity += payload.quantity;
          isDuplicated = true;
        }
      });
      if (!isDuplicated) {
        state.cart.push(payload);
      }
    },
    removeItemOnCart: (state, payload) => {
      state.cart = state.cart.filter(item => item.product._id != payload.id);
    },
    setProductsFromCloud: (state, payload) => {
      state.products = payload.products;
    }
  },
  actions: {
    getProductsFromCloud({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://www.mocky.io/v2/5d1f23b53100003e74ebeaee?delay=100", {})
          .then(response => {
            resolve({
              products: response.data.products
            });
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getProductByIdFromCloud({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get("http://www.mocky.io/v2/5d1f23b53100003e74ebeaee?delay=100", {})
          .then(response => {
            resolve({
              product: response.data.products.find(
                product => payload.id === product._id
              )
            });
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
});
