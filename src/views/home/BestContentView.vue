<template>
  <ul class="rank-items grid-container">
    <router-link
      v-for="(emoticon, index) in ranks"
      :key="index"
      tag="li"
      :to="{ name: 'detail', params: { id: emoticon.id } }"
    >
      <div class="rank-item">
        <!--순위-->
        <div class="rank-number" :class="{ 'best-rank': index + 1 <= 3 }">
          {{ index + 1 }}
        </div>
        <!--썸네일-->
        <div class="thumbnail">
          <!--테두리-->
          <div class="img-container">
            <!--이모티콘 썸네일-->
            <img :src="emoticon.title_image" />
          </div>
        </div>
        <div class="emoticon-info">
          <!--이모티콘 정보-->
          <div class="text-box">
            <div class="emoji-title">{{ emoticon.product_name }}</div>
            <div class="author">
              <span>{{ emoticon.author_name }}</span>
              <span v-if="emoticon.isNewCreated" class="new-icon">N</span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: {},
  setup() {
    const store = useStore();

    const { emoticon_ranks } = storeToRefs(store);

    onMounted(async () => {
      await store.FETCH_PRODUCT_BY_RANK();
    });

    return {
      ranks: emoticon_ranks,
    };
  },
});
</script>

<style scoped lang="scss">
.rank-items {
  width: 100%;
  max-width: 900px;

  padding-top: 120px;

  list-style: none;
  padding-inline-start: 0;
  margin: 0 auto;
}

.rank-item {
  width: 100%;
  height: 100px;
  margin: 10px 0px;
  display: flex;

  cursor: pointer;

  position: relative;

  &:hover {
    .emoji-title {
      text-decoration: underline;

      font-weight: bold;
    }

    img {
      width: 75px;
      height: 75px;
    }
  }
}

.rank-item::after {
  content: '';
  width: calc(100% - 58px);
  position: absolute;
  bottom: 0;
  left: 58px;
  border-bottom: 1px solid #d3d3d3;
}

.rankNumber,
.emoji-title {
  font-size: 17px;
  font-weight: 400;
  color: black;
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

/* 그리드 */
.grid-container {
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
}

/* 이모티콘 썸네일 */
.thumbnail {
  margin: 5px 0px 0px 0px;
}

.img-container {
  width: 90px;
  height: 90px;
  text-align: center;
  line-height: 85px;
  margin: auto;
  border-radius: 10px;
}

img {
  width: 70px;
  height: 70px;
  vertical-align: middle;

  transition: all 0.3s;
}

/* 이모티콘 정보 */
.emoticon-info {
  display: flex;
  align-items: center;

  width: 100%;
}

.text-box {
  margin: 20px;
  text-align: left;

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
}

.text-box > div {
  padding: 3px 0;
}

.author {
  font-size: 13px;
  color: gray;
}
</style>
