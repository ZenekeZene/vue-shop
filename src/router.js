import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";
import ShopSingle from "./views/ShopSingle.vue";
import Cart from "./views/Cart.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/shopSingle:id",
      name: "shopSingle",
      component: ShopSingle
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    }
  ]
});
