<template>
  <div class="container">
    <h1 class="playful" aria-label="Wash your hands">
      <span aria-hidden="true">결</span><span aria-hidden="true">제</span
      ><span aria-hidden="true">중</span><span aria-hidden="true">입</span
      ><span aria-hidden="true">니</span><span aria-hidden="true">다</span
      ><span aria-hidden="true">잠</span><span aria-hidden="true">시</span
      ><span aria-hidden="true">만</span><span aria-hidden="true">기</span
      ><span aria-hidden="true">다</span><span aria-hidden="true">려</span
      ><span aria-hidden="true">주</span><span aria-hidden="true">세</span
      ><span aria-hidden="true">요</span><span aria-hidden="true">!</span>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import router from '@/router';
import { getSavePaymentFromCookie, deleteCookie } from '@/services/cookies';
import { fetchApprove } from '@/apis/payment';

export default defineComponent({
  name: 'PaymentReadyView',
  setup() {
    async function onPayment() {
      const query = router.currentRoute.query;

      const pg_token = query.pg_token as string;

      const username = query.username as string;

      const payment = getSavePaymentFromCookie();

      await fetchApprove(username, {
        tid: payment.tid,
        pg_token,
        total_amount: payment.total_amount,
        partner_order_id: payment.partner_order_id,
      });

      setTimeout(() => {
        deleteCookie('payment_info');

        router.push({
          name: 'home',
        });
      }, 3000);
    }

    onMounted(async () => {
      await onPayment();
    });

    return {};
  },
});
</script>

<style lang="scss" scoped>
$background: #e4fff7;

.container {
  background: $background;
  width: 100%;
  height: 100%;
}

@function textShadow($precision, $size, $color) {
  $value: null;
  $offset: 0;
  $length: $size * (1 / $precision) - 1;

  @for $i from 0 through $length {
    $offset: $offset + $precision;
    $shadow: $offset + px $offset + px $color;
    $value: append($value, $shadow, comma);
  }

  @return $value;
}

.playful span {
  position: relative;
  color: #5362f6;
  text-shadow: textShadow(0.25, 6, #e485f8);
  animation: scatter 1.75s infinite;
}

.playful span:nth-child(2n) {
  color: #ed625c;
  text-shadow: textShadow(0.25, 6, #f2a063);
  animation-delay: 0.3s;
}

.playful span:nth-child(3n) {
  color: #ffd913;
  text-shadow: textShadow(0.25, 6, #6ec0a9);
  animation-delay: 0.15s;
}

.playful span:nth-child(5n) {
  color: #555bff;
  text-shadow: textShadow(0.25, 6, #e485f8);
  animation-delay: 0.4s;
}

.playful span:nth-child(7n),
.playful span:nth-child(11n) {
  color: #ff9c55;
  text-shadow: textShadow(0.25, 6, #ff5555);
  animation-delay: 0.25s;
}

@keyframes scatter {
  0% {
    top: 0;
  }
  50% {
    top: -10px;
  }
  100% {
    top: 0;
  }
}

h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 65px;
  text-transform: uppercase;
  font-family: 'Archivo Black', 'Archivo', sans-serif;
  font-weight: normal;
  display: block;
  width: 666px;
  max-width: 80vw;
  min-height: 90px;
  height: auto;
  text-align: center;
}
</style>
