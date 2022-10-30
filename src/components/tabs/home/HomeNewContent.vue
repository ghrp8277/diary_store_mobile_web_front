<template>
  <div class="new__info_wrap">
    <router-link class="link-txt" :to="{ name: 'new' }">
      <h3 class="title-txt">신규 이모티콘 <em class="sub-txt">></em></h3>
    </router-link>

    <ul class="new-products grid-container">
      <router-link
        v-for="(emoticon, index) in emoticons"
        :key="index"
        tag="li"
        :to="{
          name: 'detail',
          params: {
            id: emoticon.id,
          },
        }"
      >
        <div class="product__info_wrap">
          <div class="img-wrap">
            <img :src="emoticon.image_files[0].image_url" />
          </div>

          <strong class="product-title"
            ><span class="tit-item">{{ emoticon.product_name }}</span></strong
          >
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'HomeNewContent',
  setup() {
    const store = useStore();

    const { emoticons } = storeToRefs(store);

    return {
      emoticons: computed(() => emoticons.value),
    };
  },
});
</script>

<style lang="scss" scoped>
/** 신규 css */
.new__info_wrap {
  flex: 1;

  text-align: left;
  .link-txt {
    text-decoration: none;
    color: #000;

    display: inline-block;
    .sub-txt {
      font-style: normal;
      font-weight: normal;

      color: #777373;
    }
  }
}

.new-products {
  list-style: none;
  margin: 0;
  padding-inline-start: 0;

  li {
    position: relative;
    float: left;

    box-sizing: border-box;
    padding: 12px 0 12px 16px;
    cursor: pointer;
  }
}

.product__info_wrap {
  width: 210px;
  padding: 0 0 20px 0;
  background-color: #fff;
  display: block;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 6%);

  text-align: center;
}

.img-wrap {
  position: relative;
  width: 150px;
  height: 120px;
  display: block;
  margin: 0 auto;
  padding: 30px 0 0;

  img {
    width: 100%;
    height: 100%;
  }
}

.product-title {
  position: relative;
  display: inline-block;
  max-width: 100%;
  padding: 16px 20px 0;
  font-weight: normal;
  box-sizing: border-box;

  .tit-item {
    display: block;
    height: 19px;
    font-size: 15px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    border-bottom: 1px solid rgba(0, 0, 0, 0);
  }
}

.grid-container {
  /**
   * User input values.
   */
  --grid-layout-gap: 15px;
  --grid-column-count: 4;
  --grid-item--min-width: 230px;

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
}

/* 미디어 쿼리 */
@media all and (max-width: 920px) {
  .new__info_wrap {
    padding: 0 10px;
  }
}

@media all and (max-width: 511px) {
  .product__info_wrap {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .product-title {
    .tit-item {
      font-size: 18px;

      font-weight: bold;
    }
  }

  .new-products {
    li {
      padding: 0;
    }
  }
}
</style>
