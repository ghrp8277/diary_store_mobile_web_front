<template>
  <div class="container"><CategoryTab /> <ThumbEmoji /></div>
</template>

<script lang="ts">
import Vue from 'vue';
import CategoryTab from '@/components/main/CategoryTab.vue';
import ThumbEmoji from '@/components/main/ThumbEmoji.vue';
export default Vue.extend({
  components: {
    CategoryTab,
    ThumbEmoji,
  },
});
</script>

<style lang="scss" scoped></style>
