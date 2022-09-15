<template>
  <div>{{ favorites }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'FavoriteView',
  components: {},
  setup() {
    const store = useStore();

    const { favorites } = storeToRefs(store);

    onMounted(async () => {
      await store.FETCH_FAVORITES_INFO('test');
    });
    return {
      favorites: computed(() => favorites.value),
    };
  },
});
</script>

<style lang="scss" scoped></style>
