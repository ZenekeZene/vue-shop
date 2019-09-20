<template>
  <section class="clothing-sizes">
    <p>Size</p>
    <ol>
      <li>
        <input :type="typeInput" value="small" id="small" v-model="sizeSelected" />
        <label for="small">Small (2,319)</label>
      </li>
      <li>
        <input :type="typeInput" value="medium" id="medium" v-model="sizeSelected" />
        <label for="medium">Medium (1,282)</label>
      </li>
      <li>
        <input :type="typeInput" value="large" id="large" v-model="sizeSelected" />
        <label for="large">Large (1,392)</label>
      </li>
    </ol>
  </section>
</template>

<script>
import _ from "lodash";

export default {
  name: "ClothingSizes",
  props: {
    typeInput: {
      type: String,
      default: "checkbox"
    },
  },
  data() {
    return {
      sizeSelected: [
		  'small',
		  'medium',
		  'large'
		],
    };
  },
  watch: {
    sizeSelected(input) {
      let output = input;
      if (_.isString(input)) {
        output = [];
        output[0] = input;
      }
      this.$emit("input", output);
    }
  },
  mounted() {
    if (this.typeInput === 'radio') {
      this.sizeSelected = 'medium';
    }
  }
};
</script>

<style lang="scss" scoped>
.clothing-sizes {
	text-align: left;
}

p {
  margin: 0;
  font-weight: 700;
}

ol {
  display: inline-block;
  list-style: none;
  padding-left: 0;

  li {
    text-align: left;
  }
}

label {
	margin-left: 0.5rem;
}
</style>
