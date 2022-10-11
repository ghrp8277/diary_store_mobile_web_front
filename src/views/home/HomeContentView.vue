<template>
  <div class="home-container">
    <home-content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import HomeContent from '@/components/tabs/home/HomeContent.vue';

export default defineComponent({
  name: 'MainTabView',
  components: { HomeContent },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.home-container {
  width: 100%;

  max-width: 900px;

  margin: 0 auto;

  padding-top: 120px;
}
</style>
