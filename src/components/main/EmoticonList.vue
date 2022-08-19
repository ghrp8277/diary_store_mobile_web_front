<template>
  <div class="container">
    <ThumbEmoji />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ThumbEmoji from '@/components/main/ThumbEmoji.vue';

export default Vue.extend({
  name: 'EmoticonList',
  components: {
    ThumbEmoji,
  },
  props: {},
});
</script>

<style lang="scss" scoped>
.container {
  background: white;
  font-size: 15px;
}
</style>
