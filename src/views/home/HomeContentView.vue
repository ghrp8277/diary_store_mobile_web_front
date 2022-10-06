<template>
  <div class="home-container">
    <home-item />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import HomeItem from '@/components/tabs/home/HomeItem.vue';

export default defineComponent({
  name: 'MainTabView',
  components: { HomeItem },
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
