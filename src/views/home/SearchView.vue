<template>
  <div class="searchHome">
    <SearchBar @search="search" />
    <ProductsList :isSearch="isSearch" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref } from '@vue/composition-api';
import SearchBar from '@/components/search/SearchBar.vue';
import ProductsList from '@/components/search/ProductsList.vue';

export default defineComponent({
  name: 'SearchView',
  components: { SearchBar, ProductsList },
  setup() {
    const isSearch = ref(false);

    function search(is: boolean) {
      isSearch.value = is;
    }

    onUnmounted(() => {
      console.log('???');
    });

    return {
      search,
      isSearch,
    };
  },
});
</script>

<style scoped lang="scss">
.searchHome {
  width: 100%;
  height: 100%;
  max-width: 900px;

  margin: auto;
}
</style>
