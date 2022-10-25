<template>
  <div class="payment-wrap">
    <div class="payment-btn" @click="onPayment" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRefs } from '@vue/composition-api';
import { savePaymentToCookie, getPaymentFromCookie } from '@/services/cookies';
import { fetchPayment } from '@/apis/payment';

export default defineComponent({
  name: 'PayButton',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { id } = toRefs(props);

    async function onPayment() {
      const payment_info = {
        tid: '',
        quantity: 1,
        total_amount: 3000,
        partner_order_id: String(id.value),
      };

      const result: {
        tid: string;
        tms_result: false;
        next_redirect_app_url: string;
        next_redirect_mobile_url: string;
        next_redirect_pc_url: string;
        android_app_scheme: string;
        ios_app_scheme: string;
        created_at: string;
      } = await fetchPayment({
        quantity: payment_info.quantity,
        total_amount: payment_info.total_amount,
        partner_order_id: String(id.value),
      });

      payment_info.tid = result.tid;

      while (true) {
        savePaymentToCookie(JSON.stringify(payment_info));

        const payment = getPaymentFromCookie();

        if (payment) break;
      }

      setTimeout(() => {
        window.location.href = result.next_redirect_pc_url;
      }, 500);
    }

    return {
      onPayment,
    };
  },
});
</script>

<style lang="scss" scoped>
.payment-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;
}

.payment-btn {
  opacity: 0;
  width: 100%;
  height: 100%;
}
</style>
