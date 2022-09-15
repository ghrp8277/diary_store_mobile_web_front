<template>
  <div>
    <home-category />
    <home-item-content />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import HomeItemContent from '@/components/HomeItemContent.vue';
import HomeCategory from '@/components/HomeCategory.vue';

export default defineComponent({
  name: 'NewContentView',
  components: { HomeItemContent, HomeCategory },
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
