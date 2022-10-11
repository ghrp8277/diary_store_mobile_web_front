<template>
  <ol>
    <router-link
      v-for="(emoticon, index) in emoticons"
      class="product-info"
      :key="index"
      tag="li"
      :to="{ name: 'detail', params: { id: emoticon.id } }"
      @click.native="onRouterClick"
    >
      <div class="img-wrap">
        <img :src="emoticon.title_image" alt="" />
      </div>

      <div class="info-wrap">
        <h4 class="product-info__name">
          <span>{{ emoticon.product_name }}</span>

          <span v-if="emoticon.isNewCreated" class="new-icon">N</span>
        </h4>
        <span class="product-info__author">{{ emoticon.author }}</span>
      </div>
    </router-link>
  </ol>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { useMainStore } from '@/services/pinia/main';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'SearchContent',
  setup(props) {
    const mainStore = useMainStore();
    const store = useStore();

    const { search_emoticons } = storeToRefs(store);

    function onRouterClick() {
      mainStore.isSearchShow = false;
    }

    return {
      emoticons: computed(() => search_emoticons.value),
      onRouterClick,
    };
  },
});
</script>

<style scoped lang="scss">
ol {
  padding-inline-start: 0;

  list-style: none;
  clear: both;

  /**
   * User input values.
   */
  --grid-layout-gap: 10px;
  --grid-column-count: 2;
  --grid-item--min-width: 300px;

  /**
   * Calculated values.
   */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc(
    (100% - var(--total-gap-width)) / var(--grid-column-count)
  );

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
  );
  grid-gap: var(--grid-layout-gap);

  .product-info {
    display: block;
    position: relative;
    counter-increment: inst;
    padding: 20px;

    border-bottom: 1px solid #f1f1f1;

    cursor: pointer;

    .img-wrap {
      width: 100px;
      height: 100px;
      float: right;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .info-wrap {
      width: 70%;

      .product-info__name {
        height: 25px;
        font-size: 16px;
        line-height: 18px;
        font-weight: normal;
        overflow: hidden;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;

        margin: 0;
      }

      .product-info__author {
        overflow: hidden;
        display: block;
        font-size: 13px;
        line-height: 19px;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #999;
      }
    }
  }
}

.new-icon {
  border-radius: 50%;

  background-color: red;

  width: 15px;
  height: 15px;
  line-height: 16px;
  padding-right: 1px;

  color: #fff;
  font-size: 10px;

  margin: 0 5px;

  display: inline-block;

  text-align: center;
}
</style>
