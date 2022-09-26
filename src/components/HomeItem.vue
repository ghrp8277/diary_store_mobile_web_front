<template>
  <div class="container-home">
    <h2 class="tag"># 강아지 이모티콘</h2>
    <div class="emoji">
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
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';

export default defineComponent({
  name: 'HomeItem',
  setup() {
    const store = useStore();

    return {
      emoticons: computed(() => {
        return store.emoticons;
      }),
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
  font-size: 15px;
  font-weight: bold;
  margin: 20px 10px;
}

.list {
  border: 1px solid #777;

  width: 100%;
  height: 200px;
  border: 1px solid lightgray;
  border-radius: 20px;
}
.list-item {
  height: 100%;

  display: flex;

  flex-direction: row;

  flex-wrap: nowrap;

  justify-content: center;

  align-items: center;

  border-radius: 5px;
}
.list-tag {
  line-height: inherit;
}
.tag {
  font-size: 18px;
  text-align: center;
  text-indent: 15px;

  flex-grow: 0.5;
  text-align: left;
  margin: 0;
  padding: 0 0 10px 15px;

  min-width: 150px;
}
.emoji-img {
  height: 200px;
}
.emoji {
  overflow-x: auto;
  scroll-snap-type: none;
}
.img-list {
  flex-basis: 0;
  display: flex;

  justify-content: space-around;
}

img {
  width: 150px;
  height: 150px;
  width: 130px;
  height: 130px;
}

/* 미디어 쿼리 */
@media all and (max-width: 1030px) {
  .container {
    //   flex-direction: column;

    margin: 0 10px;

    width: calc(100% - 20px);

    //   background-color: #777;
  }
  .emoji {
    width: 100%;
  }
  .img-list {
    // overflow-x: scroll;
    // justify-content: flex-start;
  }

  img {
    width: 100px;
    height: 100px;
  }

  // img:nth-child(n + 5) {
  //   display: block;
  // }

  .tag {
    // flex: 1;

    // width: 100%;

    // text-align: left;

    // font-size: 14px;

    // font-weight: bold;

    // color: #000;

    margin: 0 10px;
    flex-grow: 2;
  }
}

// /* 미디어 쿼리 */
// @media all and (max-width: 915px) {
//   .container {
//     overflow-x: scroll;
//     overflow-y: hidden;

//     height: 192px;
//   }

//   .tag {
//     position: fixed;

//     top: 120px;

//     left: 10px;
//   }
// }

// /* 미디어 쿼리 */
// @media all and (max-width: 500px) {
//   img {
//     width: 50px;
//     height: 50px;
//   }
// }
</style>
