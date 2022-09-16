<template>
  <div>
    <home-category />
    <home-item />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import HomeItem from '@/components/HomeItem.vue';
import HomeCategory from '@/components/HomeCategory.vue';

export default defineComponent({
  name: 'MainTabView',
  components: { HomeCategory, HomeItem },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
