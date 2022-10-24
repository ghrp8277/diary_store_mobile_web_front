<template>
  <div class="style-container">
    <ul class="list-style">
      <li v-for="(product, index) in style_products" :key="index">
        <router-link
          :to="{
            name: 'styleDetail',
            params: {
              id: product.id,
            },
          }"
          ><strong class="link-tit"
            >#{{ product.match_title }}<em>></em></strong
          ></router-link
        >

        <image-list
          :bgColor="product.bgColor"
          :textColor="product.textColor"
          :groups="product.groups"
        />
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
  max-width: 1100px;
  height: calc(100% - 120px);

  padding-top: 120px;
  margin: 0 auto;
}

.list-style {
  width: 100%;
  list-style: none;
  padding-inline-start: 0;
  padding: 12px 15px 30px;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  li {
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);

    .link-tit {
      display: inline-block;
      color: #191919;

      padding: 0 15px;
      margin: 24px 0 5px;
      text-decoration: none;

      line-height: 36px;
      font-weight: 500;
      font-size: 24px;
      margin-right: 8px;
      font-family: 'notokr-bold', sans-serif;

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
