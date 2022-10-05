<template>
  <div class="search-result__list">
    <strong class="title">인기 이모티콘</strong>

    <h5 class="search-result__list_leng">
      검색결과 <em>{{ count }}</em>
    </h5>

    <ol>
      <li class="product-info" v-for="emoticon in emoticons" :key="emoticon">
        <!--테두리-->
        <div class="img-wrap">
          <!--이모티콘 썸네일-->
          <img :src="emoticon.title_image" alt="" />
        </div>
        <!--이모티콘 제목-->
        <div class="info-wrap">
          <h4 class="product-info__name">{{ emoticon.product_name }}</h4>
          <span class="product-info__author">{{ emoticon.author }}</span>
        </div>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'ListEmoticon',
  setup(props) {
    const store = useStore();

    const { emoticons, searchCount } = storeToRefs(store);

    return {
      emoticons: computed(() => emoticons.value),
      count: computed(() => searchCount.value),
    };
  },
});
</script>

<style scoped lang="scss">
@media all and (min-width: 1000px) {
  li::before {
    border-radius: 50%;
    font-size: 1.5em;
    height: 1.35em;
    margin-left: 2.5%;
    padding-left: 0;
    padding-top: 0;
    top: -0.15em;
    width: 1.35em;
    z-index: -1;
  }
}

.search-result__list_leng {
  font-weight: 400;

  em {
    font-weight: normal;
    font-style: normal;

    color: #fb9597;
  }
}

.search-result__list {
  text-align: left;
  width: 100%;
  height: 100%;

  max-width: 900px;
  margin: auto;
  position: relative;

  ol {
    padding-inline-start: 0;

    list-style: none;
    clear: both;

    .product-info {
      margin: 2em 0;
      display: block;
      position: relative;
      counter-increment: inst;
      padding: 20px;

      &::before {
        content: counter(inst);
        background: rgba(255, 150, 0, 0.35);
        color: #fff;

        font-size: 1em;
        font-weight: 700;
        font-style: italic;
        text-shadow: 1px 1px rgba(255, 150, 0, 0.5);

        border-radius: 0 0.675em 0.675em 0;
        font-size: 1.5em;
        text-align: center;

        padding-top: 0;
        padding-left: 2.25%;
        left: -5%;
        top: -0.65em;
        height: 1.35em;
        width: 1.35em;
        position: absolute;

        transition: all 0.2s ease-in-out;

        z-index: -1;
      }

      .img-wrap {
        width: 100px;
        height: 100px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .info-wrap {
        .product-info__name {
          font-size: 17px;
          font-weight: bold;
          color: black;

          margin: 5px 0;
        }

        .product-info__author {
          font-size: 13px;
          color: gray;
        }
      }
    }
  }
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
}
</style>
