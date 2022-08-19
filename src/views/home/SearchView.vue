<template>
  <div class="searchHome">
    <SearchBar />
    <ListEmoticon />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBar from '@/components/search/searchBar.vue';
import ListEmoticon from '@/components/search/ListEmoji.vue';

export default Vue.extend({
  components: { SearchBar, ListEmoticon },
});
</script>

<style scoped lang="scss">
.searchHome {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
