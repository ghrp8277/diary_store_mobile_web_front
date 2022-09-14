<template>
  <div class="container">
    <CategoryTab />

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CategoryTab from '@/components/main/CategoryTab.vue';

export default defineComponent({
  name: 'MainTabView',
  components: { CategoryTab },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
