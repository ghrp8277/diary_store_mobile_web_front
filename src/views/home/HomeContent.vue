<template>
  <div class="container">
    <CategoryTab />
    <EmoticonCategory />
    <ThumbEmoji />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
} from '@vue/composition-api';
import CategoryTab from '@/components/main/CategoryTab.vue';
import EmoticonCategory from '@/components/main/EmoticonCategory.vue';
import ThumbEmoji from '@/components/main/ThumbEmoji.vue';
import { useStore } from '@/services/pinia/buyer';
export default defineComponent({
  components: { CategoryTab, EmoticonCategory, ThumbEmoji },
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.FETCH_PRODUCTS_INFO('test');
    });

    return {};
  },
});
</script>

<style scoped lang="scss"></style>
