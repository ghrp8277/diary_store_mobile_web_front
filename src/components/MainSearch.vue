<template>
  <div class="search-wrap">
    <search-keyword-bar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import SearchKeywordBar from '@/components/search/SearchKeywordBar.vue';

export default defineComponent({
  name: 'SearchView',
  components: { SearchKeywordBar },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.search-wrap {
  width: 100%;

  position: fixed;
  margin-top: 120px;

  z-index: 1;
}
</style>
