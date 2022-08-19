<template>
  <div class="container">
    <input
      class="searchInput"
      v-model="searchText"
      @input="searchInputEvent"
      placeholder="검색어를 입력해주세요."
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';

export default defineComponent({
  name: 'SearchBar',
  setup() {
    const searchText = ref('');

    const searchInputEvent = (e: any) => {
      console.log(e.target.text);
    };
    return {
      searchText,
      searchInputEvent,
    };
  },
});
</script>

<style scoped lang="scss">
.container {
  background: white;
  width: 100%;
  margin: 30px 0;
}
.searchInput {
  width: inherit;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;

  text-align: left;
  padding-left: 10px;
}
</style>
