<template>
  <main class="page-home">
	  <article class="filters">
		  <section class="filters__price">
    		<p>Filter by price</p>
			<vue-slider v-model="rangePrice" :enable-cross="false" :marks="marks" ref="price"></vue-slider>
			<span>${{ rangePrice[0] }}-</span>
			<span>${{ rangePrice[1] }}</span>
		</section>
		<clothing-sizes typeInput="checkbox" @input="sizes = $event"></clothing-sizes>
	</article>
    <gallery :rangePriceSelected="rangePrice" :sizesSelected="sizes"></gallery>
  </main>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import Gallery from "@/components/Gallery.vue";
import ClothingSizes from "@/components/ClothingSizes";

export default {
  name: "home",
  components: {
    Gallery,
    VueSlider,
    ClothingSizes
  },
  computed: {
	  minPrice() {
		  if (this.$refs.price) {
			  console.log(this.$refs.price.getValue());
		  	return this.$refs.price.price.getValue();
		  }
	  },
  },
  data() {
    return {
      rangePrice: [20, 60],
      sizes: [
		  'small',
		  'medium',
		  'large'
		],
		marks: {
          '5': '💸',
          '100': '💰'
        },
    };
  },
};
</script>

<style lang="scss" scoped>
	.filters {
		display: flex;
		flex-direction: column;
		max-width: 17rem;
		margin-left: auto;
		padding: 1rem;
		text-align: left;
		box-sizing: border-box;

		&__price {
			margin-bottom: 1rem;
		}
	}

	.vue-slider {
		margin-bottom: 2rem;
	}

	p {
		font-weight: 700;
	}
</style>
