<template>
  <div class="home-container">
    <home-new-content />
    <home-best-content />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from '@vue/composition-api';
import HomeBestContent from '@/components/tabs/home/HomeBestContent.vue';
import HomeNewContent from '@/components/tabs/home/HomeNewContent.vue';
import { useStore } from '@/services/pinia/buyer';
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'MainTabView',
  components: {
    HomeBestContent,
    HomeNewContent,
  },
  setup() {
    const store = useStore();
    const mainStroe = useMainStore();

    const { username } = storeToRefs(mainStroe);

    let page = 1;
    let size = 20;

    onMounted(async () => {
      await store.FETCH_PRODUCTS_RANK(page, size);
      await store.FETCH_PRODUCTS_NEW(username.value, page, size);
    });

    return {};
  },
});
</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: calc(100% - 120px);
  max-width: 900px;
  margin: 0 auto;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
</style>
