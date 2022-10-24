<template>
  <div class="favorite-not__info">
    <img src="@/assets/logo.png" alt="" />

    <strong class="tit-empty">구매한 상품이 없습니다.</strong>
    <p class="sub-tit">아래 버튼을 눌러 상품을 구매하러 가보세요.</p>
    <router-link class="home-btn" tag="button" :to="{ name: 'home' }"
      >홈으로 가기</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.favorite-not__info {
  display: block;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: auto;
}

img {
  max-width: 300px;
  min-width: 50px;
}

.tit-empty {
  display: block;
  margin: 12px 0 4px;
  font-weight: bold;

  font-size: 18px;
  line-height: 24px;
}
.sub-tit {
  font-size: 13px;

  color: #7f7f7f;
}

.home-btn {
  background: #cfe99f;

  border: 1px solid #f1f1f1;

  border-radius: 5px;

  padding: 10px 20px;

  cursor: pointer;

  &:hover {
    color: #fff;
  }
}
</style>
