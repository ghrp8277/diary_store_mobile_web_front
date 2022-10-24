<template>
  <div>결제에 실패했습니다!!!!</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import router from '@/router';

export default defineComponent({
  name: 'PaymentFailView',
  setup() {
    onMounted(() => {
      window.setTimeout(() => {
        router.push({
          name: 'home',
        });
      }, 5000);
    });
    return {};
  },
});
</script>
