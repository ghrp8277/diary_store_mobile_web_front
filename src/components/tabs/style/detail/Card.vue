<template>
  <div class="card">
    <div class="img-wrap">
      <img :src="product.title_image" alt="" />
    </div>

    <strong class="product__name">{{ product.product_name }}</strong>
    <p class="product__author_name">{{ product.author_name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'StyleCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #f1f1f1;

  padding: 20px;

  border-radius: 10px;

  background: #fff;
  text-align: center;
  border-radius: 10px;

  position: relative;
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 12%);
  box-sizing: border-box;
}

.product__name {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  line-height: 24px;
  word-wrap: break-word;
  font-size: 15px;

  color: #191919;
}

.product__author_name {
  margin: 0;
  color: #999;
  font-size: 13px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.img-wrap {
  width: 120px;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
