<template>
  <div class="container">
    <div class="emoji-container">
      <div class="thumbnail">
        <img src="@/assets/logo.png" alt="" />
      </div>

      <div class="wrap">
        <div class="emoji-info">
          <div class="title">이모티콘 상품명</div>
          <div class="author">작가명</div>
          <div class="price">2000원</div>
        </div>
        <div class="emoji-btn-container">
          <button class="payment-btn">구매하기</button>
          <button class="share-btn">
            <font-awesome-icon class="heart-icon" icon="fa-heart" />
          </button>
        </div>
      </div>
    </div>

    <div class="img-list grid-container">
      <img src="@/assets/logo.png" alt="" /><img
        src="@/assets/logo.png"
        alt=""
      /><img src="@/assets/logo.png" alt="" /><img
        src="@/assets/logo.png"
        alt=""
      /><img src="@/assets/logo.png" alt="" /><img
        src="@/assets/logo.png"
        alt=""
      /><img src="@/assets/logo.png" alt="" /><img
        src="@/assets/logo.png"
        alt=""
      /><img src="@/assets/logo.png" alt="" /><img
        src="@/assets/logo.png"
        alt=""
      /><img src="@/assets/logo.png" alt="" /><img
        src="@/assets/logo.png"
        alt=""
      /><img src="@/assets/logo.png" alt="" /><img
        src="@/assets/logo.png"
        alt=""
      /><img src="@/assets/logo.png" alt="" />
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
import { defineComponent, onMounted, toRefs } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  components: {},
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const store = useStore();

    onMounted(async () => {
      await store.FETCH_PRODUCTS_INFO('test');
    });
  },
});
</script>

<style scoped lang="scss">
.container {
  margin: auto;
}
.emoji-container {
  width: 100%;
  height: 200px;
  padding: 30px 0 10px 0;
  text-align: center;
}
.wrap,
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
.wrap {
  width: 450px;
  height: 200px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  padding: 20px 0 5px 0;
}
.author {
  font-size: 15px;
  padding-bottom: 20px;
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

.img-list {
  padding: 40px 30px;
  background: #dcdcdc;
  margin-bottom: 10px;
}
.img-list img {
  width: 120px;
  height: 120px;
  margin: auto;
}

/* 그리드 */
.grid-container {
  /**
   * User input values.
   */
  --grid-layout-gap: 10px;
  --grid-column-count: 5;
  --grid-item--min-width: 150px;

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
@media all and (max-width: 1030px) {
  .emoji-btn-container {
    display: none;
  }
  .pay-btn-container {
    display: block;
  }
  .img-list {
    padding: 0 0 50px 0;
  }
  // .title {
  //   font-size: 20px;
  //   font-weight: bold;
  // }
  // .author {
  //   font-size: 15px;
  // }
  // .price {
  //   font-size: 18px;
  //   color: red;
  // }
}
@media all and (max-width: 745px) {
  .emoji-container {
    height: 270px;
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
