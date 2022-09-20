<template>
  <div class="container">
    <div class="emoji-wrap">
      <section class="thumbnail">
        <img :src="emoticon.image_files[0].image_url" alt="" />
      </section>

      <section class="buyer-box">
        <div class="emoji-info">
          <strong class="title">{{ emoticon.product_name }}</strong>
          <div class="author">{{ emoticon.author }}</div>
          <div class="price">{{ emoticon.price }}원</div>
        </div>

        <div class="emoji-btn-container">
          <button class="payment-btn">구매하기</button>
          <button class="share-btn">
            <font-awesome-icon class="heart-icon" icon="fa-heart" />
          </button>
        </div>
      </section>
    </div>

    <div class="wrap-box">
      <div class="img-list grid-container">
        <div v-for="(image, index) in emoticon.image_files" :key="index">
          <img :src="image.image_url" alt="" />
        </div>
      </div>
    </div>

    <div class="pay-btn-container">
      <button class="pay-btn">구매하기</button>
      <button class="share-btn-bottom">
        <font-awesome-icon class="heart-icon" icon="fa-heart" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: {},
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const { emoticons } = storeToRefs(store);
    const { id } = toRefs(props);

    const emoticon = computed(() => {
      let emoticon = emoticons.value.find((emoticon) => {
        const equl_id = id.value;
        const emoticon_id = emoticon.id;

        if (equl_id == emoticon_id) return emoticon;
      });

      return emoticon
        ? emoticon
        : {
            id: 0,
            product_name: '',
            image_files: [],
            is_like: false,
            category: '',
            author: '',
            price: 0,
          };
    });

    return {
      emoticon,
    };
  },
});
</script>

<style scoped lang="scss">
/** 기본 */
.container {
  margin: auto;
}
.emoji-wrap {
  width: 100%;
  height: 200px;
  padding: 30px 0 20px 0;
  text-align: center;
}
.buyer-box,
.thumbnail {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
}
.thumbnail {
  width: 200px;
  height: 200px;
  padding: 0 40px;
}
.thumbnail img {
  width: 100%;
  height: 100%;
}
.buyer-box {
  width: 450px;
}
.title {
  font-size: 20px;
}
.author {
  font-size: 15px;
  padding: 5px 0 20px;

  color: gray;
}
.price {
  font-size: 18px;
  color: red;
}
.emoji-btn-container {
  padding-top: 20px;
}
.payment-btn,
.share-btn {
  height: 40px;
  font-size: 14px;
  margin: 0 5px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 10px;
}
.payment-btn {
  width: 350px;
}
.share-btn {
  width: 50px;
}

.pay-btn-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: none;
}
.pay-btn {
  width: 90%;
  height: 100%;
  border: 0;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 15px;
}
.share-btn-bottom {
  width: 10%;
  height: 100%;
  border: 0;
}

.wrap-box {
  position: absolute;

  bottom: 0;
  left: 0;

  width: 100%;

  background: #fafafa;
}
.img-list {
  text-align: center;

  padding: 40px;

  width: 950px;
  height: 450px;

  margin: auto;

  div {
    width: 120px;
    height: 120px;

    display: flex;

    flex-wrap: nowrap;

    justify-self: center;
  }

  img {
    width: 100%;
    height: 100%;
  }
}

/* 그리드 */
.grid-container {
  /**
   * User input values.
   */
  --grid-layout-gap: 20px;
  --grid-column-count: 6;
  --grid-item--min-width: 120px;

  /**
   * Calculated values.
   */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc(
    (100% - var(--total-gap-width)) / var(--grid-column-count)
  );

  // minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
  );
  grid-gap: var(--grid-layout-gap);
}
/** 기본 끝*/

/* 미디어 쿼리 */
@media all and (max-width: 1030px) {
}
@media all and (max-width: 745px) {
  .emoji-btn-container {
    display: none;
  }
  .pay-btn-container {
    display: block;
  }
  .emoji-container {
    height: 270px;
  }
  .thumbnail {
    width: 130px;
    height: 130px;
  }
  .thumbnail img {
    width: 100%;
    height: 100%;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .author {
    font-size: 15px;
  }
  .price {
    font-size: 18px;
    color: red;
  }
}
</style>
