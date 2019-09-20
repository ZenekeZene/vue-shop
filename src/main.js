import Vue from "vue";
import VueNumberInput from "@chenfengyuan/vue-number-input";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import styles from "./assets/styles/styles.scss";
Vue.use(VueNumberInput);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
