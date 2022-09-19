<template>
  <div>
    <home-item />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import HomeItem from '@/components/HomeItem.vue';

export default defineComponent({
  name: 'MainTabView',
  components: { HomeItem },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
