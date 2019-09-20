<template>
  <main id="app">
    <header-item></header-item>
    <router-view />
  </main>
</template>

<script>
import HeaderItem from "./components/HeaderItem";

export default {
  name: "App",
  components: {
    HeaderItem
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
