<template>
  <div class="container-faq">
    <ul class="list-faq">
      <li>
        <span
          >다이어리 이모티콘 샵에서 구입한 상품은 어디에서 이용할 수
          있나요?</span
        >
        <span><font-awesome-icon icon="fa-regular fa-chevron-down" /></span>
        <div class="content-faq"><span>호에엥</span></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'FAQDetail',
});
</script>

<style scoped lang="scss">
.container-faq {
  background: white;
  padding: 30px 0;
}
ul {
  list-style: none;

  li {
    width: 100%;
    height: 70px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  }
}
</style>
