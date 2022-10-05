<template>
  <div class="searchHome">
    <SearchBar />
    <ProductsList v-if="isSearch" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import SearchBar from '@/components/search/SearchBar.vue';
import ProductsList from '@/components/search/ProductsList.vue';
import { useStore } from '@/services/pinia/buyer';

export default defineComponent({
  name: 'SearchView',
  components: { SearchBar, ProductsList },
  setup() {
    const store = useStore();

    const isSearch = computed(() => {
      const count = store.searchCount;

      return count > 0;
    });

    return {
      isSearch,
    };
  },
});
</script>

<style scoped lang="scss">
.searchHome {
  width: 100%;
  height: 100%;

  position: fixed;
  top: 120px;
}
</style>
