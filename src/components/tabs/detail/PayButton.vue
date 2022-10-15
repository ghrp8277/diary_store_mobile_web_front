<template>
  <div class="payment-wrap">
    <div class="payment-btn" ref="googlePay" />
  </div>
</template>

<script lang="js">
import { defineComponent, onMounted, ref, toRefs } from '@vue/composition-api';
import { onGooglePayLoaded } from '@/services/payment';

export default defineComponent({
  name: 'GooglePay',
  props: {
    totalPrice: {
      type: String,
      default: '0.00',
      required: true,
    },
  },
  setup(props) {
    const googlePay = ref(null);

    const { totalPrice } = toRefs(props);

    onMounted(() => {
      onGooglePayLoaded(googlePay.value, totalPrice.value);
    });

    return {
      googlePay,
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
