<template>
  <main class="page-cart">
    <article class="cart">
      <section>
        <span>Image</span>
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
        <span>Remove</span>
      </section>
      <section v-for="(item, index) in cart" :key="index">
        <span>
          <img v-show="item.product.picture" :src="item.product.picture" />
        </span>
        <span>{{ item.product.name }}</span>
        <span>{{ item.product.price }}</span>
        <span>{{ item.quantity }}</span>
        <span>{{ calculatePriceTotalItem(item.product.price, item.quantity) }}</span>
        <span @click="removeItemOnCart({ id: item.product._id })">X</span>
      </section>
    </article>
    <button class="button">
      <router-link to="/">Continue shopping</router-link>
    </button>
    <article class="cart-total">
      <ol>
        <li>Subtotal: ${{ getTotalPriceCart }}</li>
		<li>Total: ${{ getTotalPriceCart }}</li>
      </ol>
	  <button class="button" @click="launchCheckout">Checkout</button>
    </article>
  </main>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["getTotalPriceCart"])
  },
  methods: {
    ...mapMutations(["removeItemOnCart"]),
    calculatePriceTotalItem(price, quantity) {
      return `$${parseFloat(price.replace("$", "")) * quantity}`;
    },
	launchCheckout() {
		alert('Checkout OK!!!');
	},
  }
};
</script>

<style scoped lang="scss">
.cart section {
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;

  &:first-child {
	  padding: 1rem 0;
	  font-weight: 700;
  }

  img {
    max-height: 5rem;
  }
}
</style>
