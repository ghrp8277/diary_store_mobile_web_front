<template>
  <div class="container-fav">
    <h2 class="txt-tit">즐겨찾기</h2>

    <div v-if="dynamicComponent && !isLoading">
      <component :is="dynamicComponent" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  defineComponent,
  onMounted,
  defineAsyncComponent,
} from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'FavoriteView',
  setup() {
    const store = useStore();
    const mainStore = useMainStore();

    const isLoading = ref(false);

    const { emoticon_favorites } = storeToRefs(store);

    const dynamicComponent = computed(() => {
      let componentName =
        emoticon_favorites.value.length > 0 ? 'Content' : 'NotContent';

      return defineAsyncComponent({
        loader: () =>
          import(`@/components/myPage/favorite/${componentName}.vue`),
      });
    });

    onMounted(async () => {
      isLoading.value = true;

      await store.FETCH_FAVORITES_INFO(mainStore.username);

      isLoading.value = false;
    });

    return {
      emoticon_favorites,
      dynamicComponent,

      isLoading,
    };
  },
});
</script>

<style lang="scss" scoped>
.container-fav {
  width: 100%;
  height: calc(100% - 120px);
  margin: 0 auto;
  background: white;
  max-width: 900px;
  padding-top: 120px;

  position: relative;
}
</style>
