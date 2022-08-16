<template>
  <div class="container">
    <div
      class="emoticon"
      style="position: relative"
      v-for="index in emojiList"
      :key="index"
    >
      <button class="heart" @click="likeEmoji">
        <font-awesome-icon
          icon="fa-heart"
          style="
            width: 17px;
            height: 17px;
            position: absolute;
            top: 7px;
            left: 185px;
            color: #dc143c;
          "
        />
      </button>
      <div class="emojiThumb" @click="emojiDetailPage">
        <div class="img-container">
          <img class="emocitonImage" :src="index.path" />
        </div>
        <div class="emoticonTitle">{{ index.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Emoji } from '@/test';

export default Vue.extend({
  name: 'ThumbEmoji',
  props: {},
  methods: {
    likeEmoji() {
      console.log('버튼 클릭됨');
    },
    emojiDetailPage() {
      console.log('썸네일쓰 클릭');
    },
  },
  data: function () {
    return {
      emojiList: [] as Emoji[],
    };
  },
  // 부모 자식간의 데이터 이동 구현
  mounted() {
    for (let i = 0; i < 30; i++) {
      const emoji = new Emoji('@/assets/logo.png', `${i}_emoji`, 'test');

      this.emojiList.push(emoji);
    }
  },
});
</script>

<style lang="scss" scoped>
.container {
  background: white;
  font-size: 15px;
  font-weight: bold;
  margin: 20px 10px;
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
  background: white;
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
