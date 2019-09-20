<template>
  <article class="item">
    <img v-show="productInfo.picture" :src="productInfo.picture" class="item__image" />
    <section class="item__info">
      <h2>{{ productInfo.name }}</h2>
      <p>{{ productInfo.description_short }}</p>
      <p v-if="!isMini">{{ productInfo.description }}</p>
      <p>{{ productInfo.price }}</p>
	  <p>{{ productInfo.size }}</p>
      <slot name="product-actions"></slot>
    </section>
    <span class="on-sale" v-if="productInfo.onSale">SALE</span>
  </article>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    productInfo: {
      type: Object,
      default: () => {}
    },
    isMini: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
.item {
  position: relative;
  padding: 1rem;

  &__info {
	padding: 1rem;
  }

  h2 {
    margin: 0;
  }

  &__image {
    width: 100%;
	border-radius: 4px;
  }

  $self: &;
  &#{&}--detail {
    display: flex;

    #{$self}__image {
      max-width: 50vw;
    }
  }
}

.on-sale {
	position: absolute;
	top: 0;
	left: 0;
	padding: 0.5rem 1rem;
	text-transform: uppercase;
	letter-spacing: 0.2em;
	font-weight: 700;
	background-color: #ffe5ae;
	transform: rotate(-90deg) translateX(-46%) translateY(-63%)
}
</style>
