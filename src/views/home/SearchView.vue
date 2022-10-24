<template>
  <div
    class="search-result__list"
    :class="{ 'search-keyboard__hide': !isSearchShow }"
  >
    <h5 class="search-result__list_leng">
      검색결과 <em>{{ count }}</em>
    </h5>

    <div v-if="dynamicComponent && !isLoading">
      <component :is="dynamicComponent" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  watch,
  defineAsyncComponent,
  onMounted,
} from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'SearchView',
  props: {
    q: {
      type: String,
      required: true,
      default: '',
    },
  },
  setup(props) {
    const mainStore = useMainStore();
    const store = useStore();

    const { search_emoticons, searchCount } = storeToRefs(store);

    let size = 20;
    const page = ref(1);

    const keyword = computed(() => props.q);

    const isLoading = ref(false);

    watch(
      () => keyword.value,
      async (curVal) => {
        await store.FETCH_PRODUCTS_SEARCH(curVal, page.value, size);
      }
    );

    const dynamicComponent = computed(() => {
      let componentName =
        search_emoticons.value.length > 0 ? 'Content' : 'NotContent';

      return defineAsyncComponent({
        loader: () => import(`@/components/search/${componentName}.vue`),
      });
    });

    onMounted(async () => {
      isLoading.value = true;

      await store.FETCH_PRODUCTS_SEARCH(keyword.value, page.value, size);

      isLoading.value = false;
    });

    return {
      dynamicComponent,
      emoticons: computed(() => search_emoticons.value),
      count: computed(() => searchCount.value),
      isSearchShow: computed(() => mainStore.isSearchShow),
      isLoading,
    };
  },
});
</script>

<style scoped lang="scss">
@media all and (min-width: 1000px) {
  li::before {
    border-radius: 50%;
    font-size: 1.5em;
    height: 1.35em;
    margin-left: 2.5%;
    padding-left: 0;
    padding-top: 0;
    top: -0.15em;
    width: 1.35em;
    z-index: -1;
  }
}

.search-result__list_leng {
  font-weight: 400;

  em {
    font-weight: normal;
    font-style: normal;

    color: #fb9597;
  }
}

.search-result__list {
  text-align: left;
  width: 100%;
  height: calc(100% - 200px);

  max-width: 900px;
  margin: 0 auto;
  position: relative;

  padding-top: 200px;

  transition: all 0.5s;

  overflow: hidden;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
}

.search-keyboard__hide {
  padding-top: 120px;
}
</style>
