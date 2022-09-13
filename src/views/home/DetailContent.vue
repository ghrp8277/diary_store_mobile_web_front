<template>
  <div class="container">
    <div class="emoji-container">
      <div class="img-container">
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

      <div class="img-list"></div>

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
</style>
