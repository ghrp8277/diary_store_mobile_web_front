<template>
  <div>
    <new-category @onCategory="onCategory" />
    <new-item-content :category="category" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import NewItemContent from '@/components/tabs/new/NewItemContent.vue';
import NewCategory from '@/components/tabs/new/NewCategory.vue';

export default defineComponent({
  name: 'NewContentView',
  components: { NewItemContent, NewCategory },
  setup() {
    const store = useStore();
    const category = ref('');

    function onCategory(item: string) {
      category.value = item;
    }

    onMounted(async () => {
      await store.FETCH_PRODUCTS_INFO('test');
    });

    return { onCategory, category };
  },
});
</script>

<style scoped lang="scss"></style>
