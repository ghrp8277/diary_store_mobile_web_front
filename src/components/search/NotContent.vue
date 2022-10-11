<template>
  <div class="search-result__not">
    <img src="@/assets/logo.png" alt="" />
    <strong class="tit-empty">검색 결과가 없습니다.</strong>
    <p class="desc-empty">다른 검색어로 다시 시도해주세요.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'NotSearchContent',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.search-result__not {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
}

.tit-empty {
  display: block;
  margin: 12px 0 4px;
  font-weight: bold;

  font-size: 18px;
  line-height: 24px;
}

.desc-empty {
  font-size: 13px;
  line-height: 20px;
  color: #7f7f7f;
}
</style>
