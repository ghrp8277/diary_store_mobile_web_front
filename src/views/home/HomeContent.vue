<template>
  <div class="container">
    <CategoryTab />
    <EmoticonCategory />
    <ThumbEmoji />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CategoryTab from '@/components/main/CategoryTab.vue';
import EmoticonCategory from '@/components/main/EmoticonCategory.vue';
import ThumbEmoji from '@/components/main/ThumbEmoji.vue';

export default Vue.extend({
  components: { CategoryTab, EmoticonCategory, ThumbEmoji },
});
</script>

<style scoped lang="scss">
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
