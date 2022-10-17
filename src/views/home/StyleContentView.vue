<template>
  <div class="style-container">
    <ul>
      <li v-for="(product, index) in style_products" :key="index">
        <strong>#{{ product.title }}<em>></em></strong>

        <image-list :bgColor="product.bgColor" :groups="product.groups" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';
import ImageList from '@/components/tabs/style/ImageList.vue';

export default defineComponent({
  components: { ImageList },
  name: 'StyleContentView',
  setup() {
    const store = useStore();

    const { style_products } = storeToRefs(store);

    onMounted(async () => {
      await store.FETCH_PRODUCTS_STYLE();
    });

    return {
      style_products,
    };
  },
});
</script>

<style lang="scss" scoped>
.style-container {
  padding-top: 120px;
}

ul {
  list-style: none;

  padding-inline-start: 0;

  margin: 20px;

  li {
    margin: 20px 0;

    padding: 10px;
    box-sizing: border-box;

    strong {
      display: block;
      width: auto;

      text-align: left;

      font-size: 20px;

      margin: 5px 0;
      padding: 5px 10px;

      box-sizing: border-box;

      font-weight: 500;

      cursor: pointer;

      em {
        font-style: normal;
        font-weight: 100;

        margin-left: 5px;

        color: #7f837f;
      }
    }
  }
}
</style>
