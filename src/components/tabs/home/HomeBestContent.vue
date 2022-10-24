<template>
  <div class="best__info_wrap">
    <router-link class="link-txt" :to="{ name: 'best' }">
      <h3 class="title-txt">인기 이모티콘 <em class="sub-txt">></em></h3>
    </router-link>

    <ul class="best-products grid-container">
      <router-link
        v-for="(emoticon, index) in ranks"
        :key="index"
        tag="li"
        :to="{ name: 'detail', params: { id: emoticon.id } }"
      >
        <div class="product__info_wrap" v-if="index < 6">
          <span class="rank-number" :class="{ 'best-rank': index + 1 <= 3 }">
            {{ index + 1 }}
          </span>
          <div class="info-wrap">
            <strong class="product-title">{{ emoticon.product_name }}</strong>
            <div class="product-author__info_wrap">
              <span>{{ emoticon.author_name }}</span>
              <span v-if="emoticon.isNewCreated" class="new-icon">N</span>
            </div>
          </div>
          <div class="img-wrap">
            <img :src="emoticon.title_image" />
          </div>
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
  name: 'HomeBestContent',
  setup() {
    const store = useStore();

    const { emoticon_ranks } = storeToRefs(store);

    const ranks = computed(() => emoticon_ranks.value);

    return {
      ranks,
    };
  },
});
</script>

<style lang="scss" scoped>
/** 인기 css */
.best__info_wrap {
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

.best-products {
  list-style: none;
  padding-inline-start: 0;
  margin-top: 0;
}

.product__info_wrap {
  width: 100%;
  height: 100px;
  margin: 10px 0px;
  display: flex;

  cursor: pointer;

  position: relative;

  &:hover {
    .product-title {
      text-decoration: underline;

      font-weight: bold;
    }

    img {
      width: 90px;
      height: 90px;
    }
  }

  &::after {
    content: '';
    width: calc(100% - 58px);
    position: absolute;
    bottom: 0;
    left: 58px;
    border-bottom: 1px solid #d3d3d3;
  }
}

/* 이모티콘 썸네일 */
.img-wrap {
  width: 80px;
  height: 80px;

  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;

    transition: all 0.3s;
  }
}

.info-wrap {
  flex: 1;
  margin: auto;

  di .product-title {
    display: block;
    text-align: left;
    font-size: 15px;
    font-weight: 400;
    color: black;
  }

  .product-author__info_wrap {
    font-size: 12px;
    color: gray;
    text-align: left;
  }
}

.best-rank {
  color: red;
  font-weight: bold;
  font-size: larger;
}

.rank-number {
  width: 70px;
  text-align: center;
  line-height: 100px;
}

.new-icon {
  border-radius: 50%;

  background-color: red;

  width: 15px;
  height: 15px;

  color: #fff;

  font-size: 10px;

  margin: 0 5px;

  display: inline-block;

  text-align: center;
}

/* 그리드 */
.grid-container {
  /**
     * User input values.
     */
  --grid-layout-gap: 10px;
  --grid-column-count: 2;
  --grid-item--min-width: 400px;

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
</style>
