<template>
  <div class="container-home">
    <div class="wrap-tag">
      <div class="emoji">
        <h2 class="tag"># 강아지 이모티콘</h2>
        <div class="img-list">
          <img src="@/assets/logo.png" alt="" />
          <img src="@/assets/logo.png" alt="" />
          <img src="@/assets/logo.png" alt="" />
          <img src="@/assets/logo.png" alt="" />
          <img src="@/assets/logo.png" alt="" />
          <img src="@/assets/logo.png" alt="" />
        </div>
      </div>
    </div>

    <!-- 인기 -->
    <div class="wrap-best">
      <div class="category-name">
        <router-link :to="{ name: 'best' }">
          <h3>인기 이모티콘 ></h3>
        </router-link>
      </div>

      <div class="items">
        <ul class="rank-items grid-container">
          <router-link
            v-for="(emoticon, index) in ranks"
            :key="index"
            tag="li"
            :to="{ name: 'detail', params: { id: emoticon.id } }"
          >
            <div class="rank-item" v-if="index < 6">
              <div class="rank-number" :class="{ 'best-rank': index + 1 <= 3 }">
                {{ index + 1 }}
              </div>
              <div class="emoticon-info">
                <div class="text-box">
                  <div class="emoji-title">{{ emoticon.product_name }}</div>
                  <div class="author">
                    <span>{{ emoticon.author_name }}</span>
                    <span v-if="emoticon.isNewCreated" class="new-icon">N</span>
                  </div>
                </div>
              </div>
              <div class="thumbnail">
                <div class="img-container">
                  <img :src="emoticon.title_image" />
                </div>
              </div>
            </div>
          </router-link>
        </ul>
      </div>
    </div>

    <!-- 신규 -->
    <div class="wrap-new">
      <div class="category-name">
        <router-link :to="{ name: 'new' }">
          <h3>신규 이모티콘 ></h3>
        </router-link>
      </div>

      <div
        class="emojiThumb"
        v-for="(emoticon, index) in emoticons.slice(0, 8)"
        :key="index"
      >
        <router-link
          class="image-box"
          tag="div"
          :to="{
            name: 'detail',
            params: {
              id: emoticon.id,
            },
          }"
        >
          <img
            class="emociton-image"
            :src="emoticon.image_files[0].image_url"
          />
        </router-link>
        <div class="emoticon-title">{{ emoticon.product_name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'HomeItem',
  setup() {
    const store = useStore();

    const { emoticon_ranks } = storeToRefs(store);

    onMounted(async () => {
      // await store.FETCH_PRODUCT_BY_RANK();
      // await store.FETCH_PRODUCTS_INFO('test');
    });

    return {
      emoticons: computed(() => {
        return store.emoticons;
      }),
      ranks: emoticon_ranks,
    };
  },
  methods: {
    likeEmoji() {
      console.log('버튼 클릭됨');
    },
    emojiDetailPage() {
      console.log('썸네일쓰 클릭');
    },
  },
});
</script>

<style lang="scss" scoped>
.container-home {
  background: white;

  .category-name {
    width: 100%;
    text-align: left;
    margin-bottom: 5px;
  }
  h3 {
    display: block;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    cursor: pointer;
  }
}

/** 태그 css */
.wrap-tag {
  font-size: 15px;
  font-weight: bold;
  margin: 30px 0;

  .tag {
    font-size: 17px;
    text-align: center;
    color: white;
    background: #008080;
    border-radius: 20px;

    margin: 0;
    padding: 5px 0;

    max-width: 200px;
  }
  .img-list {
    float: left;
    flex-basis: 0;
    display: flex;

    justify-content: space-around;
  }
  .emoji {
    overflow-x: auto;
    scroll-snap-type: none;
    margin: 0 0 25px 0;
  }
  img {
    width: 130px;
    height: 130px;
  }
}

/** 신규 css */
.emojiThumb {
  width: 180px;
  height: 190px;
  background: #fff;
  text-align: center;
  display: inline-block;
  border-radius: 10px;
  margin: 20px 10px;
  position: relative;

  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 7%);
  box-sizing: border-box;
}
.image-box {
  cursor: pointer;
  width: 90%;
  margin: 10px auto;
}
.emociton-image {
  width: 100%;
  height: 130px;
}

.emoticon-title {
  width: 170px;
  font-size: 14px;
  margin: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

/** 인기 css */
.wrap-best {
  margin-bottom: 30px;
}
.rank-items {
  list-style: none;
  padding-inline-start: 0;
  margin-top: 0;
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
  font-size: 15px;
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

/* 이모티콘 썸네일 */
.thumbnail {
  margin: 5px 0px 0px 0px;

  img {
    width: 80px;
    height: 80px;
    vertical-align: middle;

    transition: all 0.3s;
  }
}
.img-container {
  width: 90px;
  height: 90px;
  line-height: 85px;
  margin: 0 auto;
}

/* 이모티콘 정보 */
.emoticon-info {
  display: flex;
  align-items: center;

  width: 100%;
}

.text-box {
  margin: 20px;

  .new-icon {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 5px;

    background-color: red;
    color: #fff;
    font-size: 8px;

    text-align: center;
  }
}
.text-box > div {
  padding: 3px 0;
}
.author {
  font-size: 12px;
  color: gray;
  text-align: left;
}

/* 미디어 쿼리 */
@media all and (max-width: 1030px) {
  .container-home {
    margin: 0 10px;
    width: calc(100% - 20px);
  }
  .emoji {
    width: 100%;
  }
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
