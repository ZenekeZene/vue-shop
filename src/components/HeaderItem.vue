<template>
  <header>
    <h1>Dealers</h1>
    <article class="cart">
      <section class="badge">{{ countItemsOnCart }}</section>
      <span class="icon"></span>
    </article>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderItem",
  computed: {
    ...mapGetters(["countItemsOnCart"])
  }
};
</script>
<style scoped lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #f9f9f9;
		text-align: left;

	}

	h1 {
		max-width: 45rem;
		width: 100%;
		margin: 0 auto;
	}
</style>
