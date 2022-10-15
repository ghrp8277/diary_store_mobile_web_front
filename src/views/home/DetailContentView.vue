<template>
  <div class="detail-container">
    <div class="emoji-wrap">
      <section class="thumbnail">
        <img :src="title_image" alt="" />
      </section>

      <section class="buyer-box">
        <div class="emoji-info">
          <strong class="title">{{ product_name }}</strong>
          <div class="author">{{ author_name }}</div>
          <div class="price">{{ price }}원</div>
        </div>

        <div class="emoji-btn-container">
          <div class="payment-btn">
            <span>구매하기</span>
            <pay-button :totalPrice="'12000'" />
          </div>

          <div class="btn-liked" @click="onClickLiked">
            <input type="checkbox" id="liked" />
            <label for="liked" class="lb-liked">
              <font-awesome-icon
                :class="{ 'is-like': is_like }"
                class="heart-icon"
                icon="fa-heart"
            /></label>
          </div>
        </div>
      </section>
    </div>

    <div class="wrap-box">
      <ul class="img-list grid-container">
        <li v-for="(image, index) in image_files" :key="index">
          <img :src="image.image_url" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  toRefs,
  computed,
} from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { useMainStore } from '@/services/pinia/main';
import PayButton from '@/components/tabs/detail/PayButton.vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: { PayButton },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const mainStore = useMainStore();

    const { username } = storeToRefs(mainStore);

    const { id } = toRefs(props);

    const emoticon = computed(() => store.emoticon);

    const price = computed(() => emoticon.value.price);

    const is_like = computed(() => emoticon.value.is_like);

    const createdAt = computed(() => emoticon.value.author_name);

    const count = computed(() => emoticon.value.count);

    const product_name = computed(() => emoticon.value.product_name);

    const author_name = computed(() => emoticon.value.author_name);

    const image_files = computed(() => emoticon.value.image_files);

    const title_image = computed(() => emoticon.value.title_image);

    let page = 1;
    let size = 20;

    async function likeEmoji() {
      await store.FETCH_PRODUCT_BY_IS_LIKE(
        username.value,
        id.value,
        !is_like.value,
        page,
        size
      );

      await store.FETCH_PRODUCT_DETAIL(id.value, username.value);
    }

    async function onClickLiked(e: InputEvent) {
      const target = e.target as HTMLElement;

      if (target.nodeName == 'INPUT') {
        await likeEmoji();
      }
    }

    onMounted(async () => {
      await store.FETCH_PRODUCT_DETAIL(id.value, username.value);
    });

    return {
      onClickLiked,
      emoticon,
      is_like,
      title_image,
      product_name,
      author_name,
      price,
      image_files,
    };
  },
});
</script>

<style scoped lang="scss">
/** 기본 */
.detail-container {
  width: 100%;
  height: calc(100% - 120px);
  margin: 0 auto;

  padding-top: 120px;
  overflow: hidden;
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
  margin-top: 10px;
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

  display: flex;
}
.payment-btn {
  position: relative;
  width: 100%;
  height: 40px;
  font-size: 14px;
  margin: 0 5px;
  background: white;
  border: 1px solid lightgray;

  border-radius: 10px;

  cursor: pointer;
  transition: all 0.5s;

  span {
    line-height: 38px;
  }
}

// 좋아요 버튼
.btn-liked {
  position: relative;
  width: 40px;
  height: 38px;
  // height: calc(0.4vmin * 10);

  .heart-icon {
    color: #777;
    font-size: 20px;

    transition: all 0.4s;

    &:hover {
      font-size: 25px;

      animation: bounce 1s ease-in-out 0s;
    }

    &:active {
      font-size: 10px;
    }

    @keyframes bounce {
      70% {
        font-size: 20px;
      }
    }
  }

  .is-like {
    color: #dc143c;
  }

  input {
    display: none;
  }

  label {
    background: transparent;
    border: 1px solid lightgray;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #fff;
  }
}

.wrap-box {
  width: 100%;
  height: 100%;
  // position: absolute;
  // left: 0;

  background: #fafafa;
}

.img-list {
  text-align: center;

  padding: 40px;

  max-width: 900px;

  margin: auto;

  list-style: none;

  background: inherit;

  padding-bottom: 60px;

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

    left: 50%;
    top: 50%;
    position: relative;
    transform: translate(-50%, -50%);
  }
}

/* 그리드 */
.grid-container {
  /**
   * User input values.
   */
  --grid-layout-gap: 10px;
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
@media all and (max-width: 753px) {
  .emoji-btn-container {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: nowrap;
    z-index: 1;

    padding: 0;

    width: 100%;

    min-width: 320px;

    .payment-btn {
      flex: 1;

      margin: 0;
      border-radius: 0;

      background: black;
      color: white;
      font-weight: bold;
      font-size: 15px;
      border: none;

      cursor: pointer;
    }

    .lb-liked {
      border: none;
      border-radius: 0;

      background: #999;
      height: 42px;
    }
  }

  .emoji-wrap {
    display: flex;

    flex-direction: column;
    align-items: center;

    .thumbnail {
      width: 112px;
      height: 112px;
    }

    .buyer-box {
      text-align: center;
      font-size: 18px;
      line-height: 22px;
      width: 100%;

      .price {
        // float: left;

        // padding-left: 30px;

        font-weight: bold;

        font-size: 16px;
      }
    }
  }
}
</style>
