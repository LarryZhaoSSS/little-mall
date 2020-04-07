<template>
  <div class="product">
    <product-param>
      <template v-slot:buy>
        <button class="btn buy-button">立即购买</button>
      </template>
    </product-param>
  </div>
</template>

<script>
import ProductParam from "@/components/ProductParam";
export default {
  name: "product",
  components: {
    ProductParam
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/button.scss";
.product {
  .buy-button {
    margin-left: 10px;
  }
}
</style>
