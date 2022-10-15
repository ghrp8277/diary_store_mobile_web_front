<template>
  <div class="new-container">
    <new-category @onCategory="onCategory" />
    <new-item-content :category="category" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { useMainStore } from '@/services/pinia/main';
import NewItemContent from '@/components/tabs/new/NewItemContent.vue';
import NewCategory from '@/components/tabs/new/NewCategory.vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'NewContentView',
  components: { NewItemContent, NewCategory },
  setup() {
    const store = useStore();
    const mainStore = useMainStore();

    const { username } = storeToRefs(mainStore);

    const category = ref('');

    let page = 1;
    let size = 20;

    function onCategory(item: string) {
      category.value = item;
    }

    onMounted(async () => {
      await store.FETCH_PRODUCTS_NEW(username.value, page, size);
    });

    return { onCategory, category };
  },
});
</script>

<style scoped lang="scss">
.new-container {
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
  padding-top: 120px;
}
</style>
