<template>
  <div class="about">
	<product-item
		v-if="contentLoaded"
		:product-info="productInfo"
		class="item--detail"
	>
		<template v-slot:product-actions>
			<number-input v-model="quantity" :value="0" inline center controls></number-input>
			<clothing-sizes typeInput="radio" @input="size = $event"></clothing-sizes>
			<button class="button"><router-link to="/">Continue shopping</router-link></button>
			<button class="button" @click="addToCart">Add to cart</button>
			<button class="button"><router-link to="cart">Go to checkout</router-link></button>
		</template>
	</product-item>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import ProductItem from '../components/ProductItem';
import ClothingSizes from '../components/ClothingSizes';

export default {
	name: 'ShopSingle',
	components: {
		ProductItem,
		ClothingSizes,
	},
	data() {
		return {
			contentLoaded: false,
			productInfo: null,
			size: 'medium',
			quantity: 0,
		};
	},
	methods: {
		...mapMutations([
			'addItemOnCart',
		]),
		...mapActions([
			'getProductByIdFromCloud'
		]),
		addToCart() {
			if (this.quantity > 0) {
				const quantity = this.quantity;
				this.quantity = 0;
				this.addItemOnCart({
					product: this.productInfo,
					quantity,
					size: this.size[0],
				});
			}
		},
	},
	beforeMount() {
		this.getProductByIdFromCloud({ id: this.$route.params.id })
		.then((response) => {
			this.productInfo = response.product;
			this.contentLoaded = true;
		});
	},
}
</script>

<style lang="scss">
.item {
@media (max-width: 740px) {
	    flex-direction: column;
    align-items: center;
  }

}

</style>
