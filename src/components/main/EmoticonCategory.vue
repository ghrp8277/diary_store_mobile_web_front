<template>
  <div>
    <!--2차 카테고리-->
    <div class="emoticonCategory">
      <button>강아지</button>
      <button>강아지</button>
      <button>강아지</button>
      <button>강아지</button>
      <button>강아지</button>
      <button>강아지</button>
      <button>강아지</button>
      <button>강아지</button>
      <button>강아지</button>
      <button>강아지</button>
      <button>강아지</button>
      <button>강아지</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'emoticonCategory',
  props: {},
});
</script>

<style lang="scss" scoped>
.emoticonCategory {
  height: 30px;
  margin: 20px 0;
  /* 가로 스크롤*/
  overflow: auto;
  white-space: nowrap;
}
.emoticonCategory::-webkit-scrollbar {
  display: none;
}
.emoticonCategory button {
  width: 70px;
  height: 25px;
  margin: 0px 5px;
  background: white;
  border: 1px solid gray;
  border-radius: 30px;
}
</style>
