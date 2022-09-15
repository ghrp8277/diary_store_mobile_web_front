<template>
  <div class="container grid-container">
    <div
      class="emoticon"
      style="position: relative"
      v-for="(emoticon, index) in emoticons"
      :key="index"
    >
      <button class="heart" @click="likeEmoji($event, emoticon)">
        <font-awesome-icon
          class="heart-icon"
          :class="{ 'is-click': emoticon.is_like }"
          icon="fa-heart"
        />
      </button>
      <div class="emojiThumb" @click="emojiDetailPage">
        <div class="img-container">
          <img class="emocitonImage" :src="emoticon.image_file" />
        </div>
        <div class="emoticonTitle">{{ emoticon.product_name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'HomeItemContent',
  setup() {
    const store = useStore();

    const { emoticons } = storeToRefs(store);

    async function likeEmoji(
      e: Event,
      emoticon: {
        id: number;
        product_name: string;
        image_file: string;
        is_like: boolean;
      }
    ) {
      const id = emoticon.id;
      const is_like = !emoticon.is_like;

      await store.FETCH_PRODUCT_BY_IS_INFO('test', id, is_like);
    }

    return {
      emoticons: computed(() => emoticons.value),
      likeEmoji,
    };
  },
  methods: {
    emojiDetailPage() {
      console.log('썸네일쓰 클릭');
    },
  },
  // data: function () {
  //   return {
  //     emojiList: [] as Emoji[],
  //     count: 0 as number,
  //   };
  // },
  // // 부모 자식간의 데이터 이동 구현
  // mounted() {
  //   const store = useStore();

  //   for (let i = 0; i < 30; i++) {
  //     const emoji = new Emoji('logo.png', `${i}_emoji`, 'test');

  //     this.emojiList.push(emoji);
  //   }
  // },
});
</script>

<style lang="scss" scoped>
.container {
  background: white;
  font-size: 15px;
  font-weight: bold;
  margin: 20px 10px;
}

.grid-container {
  /**
   * User input values.
   */
  --grid-layout-gap: 10px;
  --grid-column-count: 4;
  --grid-item--min-width: 200px;

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

.img-container {
  width: 150px;
  margin: 0 auto;
}
.emoticon {
  width: 210px;
  height: 210px;
  background: #f5f5f5;
  text-align: center;
  display: inline-block;
  border-radius: 10px;
  margin: 20px;
}
.heart {
  width: 30px;
  border: 0px;
  background: #f5f5f5;

  cursor: pointer;

  transition: all 0.3s;
}

.heart:hover {
  opacity: 0.6;
}

.heart-icon {
  color: #777;
  font-size: 17px;
  position: absolute;
  top: 7px;
  left: 185px;
}

.is-click {
  color: #dc143c;
}

.emocitonImage {
  width: 100%;
  height: 150px;
}
.emoticonTitle {
  width: 170px;
  margin: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
