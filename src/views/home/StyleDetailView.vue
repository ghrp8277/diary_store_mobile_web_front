<template>
  <div class="style-detail-container">
    <ul class="groups__info">
      <li v-for="(item, index) in groups" :key="index">
        <strong class="tag-txt">{{ item.title }}</strong>

        <card-list :products="item.result" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';
import CardList from '@/components/tabs/style/detail/CardList.vue';

export default defineComponent({
  name: 'StyleDetailView',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  components: {
    CardList,
  },
  setup(props) {
    const store = useStore();

    const { style_products } = storeToRefs(store);

    const { id } = toRefs(props);

    const groups = computed(() => {
      const products = style_products.value.find(
        (products: any) => products.id == id.value
      );
      return products.groups;
    });

    return {
      groups,
    };
  },
});
</script>

<style scoped lang="scss">
.style-detail-container {
  padding-top: 120px;

  height: calc(100% - 120px);

  overflow: hidden;

  .groups__info {
    max-width: 1100px;
    padding-inline-start: 0;

    list-style: none;

    margin: 0 auto;

    .tag-txt {
      display: inline-block;
      float: left;

      font-size: 20px;

      padding: 5px 10px;

      margin-top: 5px;

      font-family: 'Century Gothic';
      text-transform: uppercase;
      text-rendering: optimizeLegibility;

      color: #e0dfdc;

      letter-spacing: 1rem;
      text-shadow: 0 -1px 0 #ffffff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c,
        0 3px 0 #2a2a2a, 0 5px 4px rgba(20, 20, 20, 1.9);
    }
  }
}
</style>
