<template>
  <div>
    <home-category />
    <home-item />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import HomeItemContent from '@/components/HomeItemContent.vue';
import HomeItem from '@/components/HomeItem.vue';
import HomeCategory from '@/components/HomeCategory.vue';

export default defineComponent({
  name: 'MainTabView',
  components: { HomeCategory, HomeItem },
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.FETCH_PRODUCTS_INFO();
    });

    return {};
  },
});
</script>

<style scoped lang="scss"></style>
