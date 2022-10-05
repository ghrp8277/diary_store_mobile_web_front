<template>
  <div class="container-hometab">
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
.container-hometab {
  max-width: 900px;
}
</style>
