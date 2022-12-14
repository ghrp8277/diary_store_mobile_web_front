<template>
  <transition name="modal" appear>
    <div
      class="modal modal-overlay"
      @click.self="$emit('close', { index, is_show: false })"
    >
      <div class="modal-window">
        <div class="modal-content">
          <h3>구매내역 상세</h3>
          <div class="emoji">
            <div class="img-container">
              <img src="@/assets/logo.png" alt="" />
            </div>
            <div class="emoji-info">
              <p class="emoji-title">{{ history.product.product_name }}</p>
              <p class="author">{{ history.product.author_name }}</p>
            </div>
          </div>
          <div class="payment-box">
            <div class="payment-item">
              <div class="info-title">결제금액</div>
              <div class="info-content">{{ history.price }}</div>
            </div>
            <div class="payment-item">
              <div class="info-title">결제수단</div>
              <div class="info-content">{{ history.card_info }}</div>
            </div>
            <div class="payment-item">
              <div class="info-title">결제일시</div>
              <div class="info-content">
                {{ moment(history.createdAt).format('YYYY-MM-DD') }}
              </div>
            </div>
          </div>
          <div><button id="refund" @click="onRefund">환불하기</button></div>

          <span
            >구매 후 다운로드나 이용하지 않았을 경우 환불이 가능합니다.</span
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { PaymentHistoryInterface } from '@/types/paymentHistory';
import { defineComponent, toRefs } from '@vue/composition-api';
import moment from 'moment';
import { fetchCancel } from '@/apis/payment';
import router from '@/router';

export default defineComponent({
  name: 'ModalPayDetail',
  props: {
    index: {
      type: Number,
      required: true,
    },
    history: {
      type: Object as () => PaymentHistoryInterface,
      required: true,
    },
  },
  setup(props) {
    const { history } = toRefs(props);

    const { id } = history.value;

    async function onRefund() {
      await fetchCancel(id);

      router.push({
        name: 'home',
      });
    }

    return { moment, onRefund };
  },
});
</script>

<style lang="scss" scoped>
.modal,
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  // min-width: 410px;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.modal-window {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  max-width: 370px;
}
.modal-content {
  margin: 40px 30px;
}

// overlay 트랜지션
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;

  // 오버레이에 포함되어 있는 모달 윈도의 트랜지션
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}
// 딜레이가 적용된 모달 윈도가 제거된 후에 오버레이가 사라짐
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.emoji {
  display: flex;
  // margin: 5px 20px;
}
.img-container {
  background: white;
  line-height: 110px;
}
.emoji-info {
  // width: 270px;
  text-align: left;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-left: 10px;
}

.emoji-info > p {
  width: 100%;
  margin: 5px 0;
}

.emoji-title {
  font-size: 16px;
  font-weight: bold;
}
.author {
  font-size: 12px;
  color: gray;
}
h3 {
  height: 40px;
  text-align: left;
  margin: 0 0 10px;
}
span {
  width: 100%;
  display: inline-block;
  text-align: left;
  font-size: 11px;
  color: gray;
}
img {
  width: 100px;
  height: 100px;
  vertical-align: middle;
}

.payment-item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  flex-grow: 1;

  margin: 20px 0;
}

.payment-item > div {
  width: 100%;
  font-size: 14px;
}
.info-title {
  text-align: left;
}
.info-content {
  text-align: right;
}

#refund {
  width: 100%;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
  background: white;
  font-size: 14px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
}
</style>
