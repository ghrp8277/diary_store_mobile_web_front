<template>
  <ul class="products__info">
    <li v-for="(product, index) in products" :key="index">
      <router-link :to="{ name: 'detail', params: { id: product.id } }">
        <card :product="product" />
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Card from '@/components/tabs/style/detail/Card.vue';

export default defineComponent({
  name: 'StyleCardList',
  props: {
    products: {
      type: Array as any,
      required: true,
    },
  },
  components: {
    Card,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.products__info {
  padding-inline-start: 0;

  list-style: none;

  padding: 10px;

  box-sizing: border-box;

  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  overflow-y: hidden;
  overflow-x: auto;

  li {
    margin: 10px;
    text-align: left;
  }
}

.products__info::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}

a {
  text-decoration: none;
}
</style>
