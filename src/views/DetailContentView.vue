<template>
  <div class="container">
    <div class="emoji-container">
      <div class="thumbnail">
        <img src="@/assets/logo.png" alt="" />
      </div>

      <div class="emoji-info">
        <div class="emoji-title">이모티콘 상품명</div>
        <div class="author">작가명</div>
        <div class="price">2000원</div>
      </div>

      <div class="emoji-btn-container">
        <button class="like-btn">즐겨찾기</button>
        <button class="share-btn">공유하기</button>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
});
</script>

<style scoped lang="scss">
.container {
  margin: auto;
}

.emoji-btn-container {
  padding-top: 20px;
}

.pay-btn-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
}
.pay-btn {
  width: 100%;
  height: 100%;
}

.img-list {
  padding: 40px 25px;
}
.img-list img {
  width: 120px;
  height: 120px;
}

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
</style>
