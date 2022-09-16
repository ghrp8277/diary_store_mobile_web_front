<template>
  <div>
    <home-category @onCategory="onCategory" />
    <home-item-content :category="category" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import HomeItemContent from '@/components/HomeItemContent.vue';
import HomeCategory from '@/components/HomeCategory.vue';

export default defineComponent({
  name: 'NewContentView',
  components: { HomeItemContent, HomeCategory },
  setup() {
    const store = useStore();
    const category = ref('');

    function onCategory(item: string) {
      category.value = item;
    }

    onMounted(async () => {
      await store.FETCH_PRODUCTS_INFO();
    });

    return { onCategory, category };
  },
});
</script>

<style scoped lang="scss"></style>
