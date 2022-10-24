<template>
  <div class="container-payment">
    <h2 class="payment-title">구매내역</h2>

    <div v-if="dynamicComponent && !is_loading">
      <component :is="dynamicComponent" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  computed,
  defineAsyncComponent,
  ref,
} from '@vue/composition-api';
import { useMainStore } from '@/services/pinia/main';
import { useStore } from '@/services/pinia/payment';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'PaymentHistoryView',
  setup() {
    const mainStore = useMainStore();
    const store = useStore();

    const { username } = storeToRefs(mainStore);

    const payment_history = computed(() => store.payment_histories);

    const is_loading = ref(false);

    const dynamicComponent = computed(() => {
      let componentName =
        payment_history.value.length > 0 ? 'Content' : 'NotContent';

      return defineAsyncComponent({
        loader: () =>
          import(`@/components/myPage/payment/${componentName}.vue`),
      });
    });

    onMounted(async () => {
      is_loading.value = true;

      await store.FETCH_PAYMENT_HISTORY(username.value);

      is_loading.value = false;
    });

    return {
      dynamicComponent,
      is_loading,
    };
  },
});
</script>

<style scoped lang="scss">
.container-payment {
  width: 100%;

  background: white;
  max-width: 900px;
  margin: 0 auto;

  padding-top: 120px;
}
.payment-title {
  text-align: left;
  padding: 0 20px 10px 20px;
  margin: 20px 0;
}
</style>
