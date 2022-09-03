<template>
  <div class="container">
    <CategoryTab />
    <EmoticonCategory />
    <ThumbEmoji />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import CategoryTab from '@/components/main/CategoryTab.vue';
import EmoticonCategory from '@/components/main/EmoticonCategory.vue';
import ThumbEmoji from '@/components/main/ThumbEmoji.vue';
import apiModule from '@/apis';
import { useStore } from '@/services/pinia';

export default defineComponent({
  components: { CategoryTab, EmoticonCategory, ThumbEmoji },
  setup() {
    const store = useStore();
    // const { apis } = apiModule();
    // const result = ref<any>(null);

    // onMounted(async () => {
    //   const response = await apis.fetchData();
    //   const { data } = response;

    //   result.value = data;
    // });

    return {
      count: store.count,
    };
  },
});
</script>

<style scoped lang="scss"></style>
