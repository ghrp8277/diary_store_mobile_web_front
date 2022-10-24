<template>
  <ul class="payment-wrap__info grid-container">
    <li v-for="(history, index) in payment_history" :key="index">
      <div class="payment-content">
        <p>{{ moment(history.createdAt).format('YYYY-MM-DD') }}</p>
        <!--이모지 정보-->
        <div class="emoji">
          <div class="img-container">
            <img :src="history.product.title_image" alt="" />
          </div>
          <div class="emoji-info">
            <p class="emoji-title">{{ history.product.product_name }}</p>
            <p class="author">{{ history.product.author_name }}</p>
            <p class="price">
              {{ history.price }}
            </p>
          </div>
        </div>
        <button class="detail-btn" @click="openModal(index)">상세보기</button>
      </div>

      <!-- 구매내역 상세 MODAL -->
      <ModalPayDetail
        @close="closeModal"
        v-if="arr_show[index]"
        :index="index"
        :history="history"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onMounted,
  computed,
} from '@vue/composition-api';
import ModalPayDetail from '@/components/myPage/payment/ModalPayDetail.vue';

import { useStore } from '@/services/pinia/payment';
import moment from 'moment';

export default defineComponent({
  name: 'PaymentHistoryView',
  components: { ModalPayDetail },
  setup() {
    const store = useStore();

    const arr_show = ref<boolean[]>([]);

    const payment_history = computed(() => store.payment_histories);

    function openModal(index: number) {
      const arr = [];

      arr_show.value[index] = true;

      arr.push(...arr_show.value);

      arr_show.value = [];

      arr_show.value.push(...arr);
    }

    function closeModal(result: { index: number; is_show: boolean }) {
      const arr = [];

      arr_show.value[result.index] = result.is_show;

      arr.push(...arr_show.value);

      arr_show.value = [];

      arr_show.value.push(...arr);
    }

    onMounted(() => {
      for (let i = 0; i < payment_history.value.length; i++) {
        arr_show.value.push(false);
      }
    });

    return {
      openModal,
      closeModal,
      payment_history,
      moment,
      arr_show,
      history,
    };
  },
});
</script>

<style scoped lang="scss">
.list-payment {
  place-items: center;
  width: 100%;
}
.grid-container {
  /**
     * User input values.
     */
  --grid-layout-gap: 10px;
  --grid-column-count: 2;
  --grid-item--min-width: 390px;

  /**
     * Calculated values.
     */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc(
    (100% - var(--total-gap-width)) / var(--grid-column-count)
  );

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
  );
  grid-gap: var(--grid-layout-gap);
}

.payment-wrap__info {
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
}

.payment-content {
  // box-sizing: border-box;
  // width: 390px;
  width: calc(100% - 30px);
  height: 220px;
  border: 0px solid lightgray;
  border-radius: 10px;
  box-shadow: 0px 0px 7px lightgray;

  margin: 0 auto;

  /*
    emoji info
  */

  .emoji {
    display: flex;
    margin: 5px 20px;
  }
  .img-container {
    flex: 1;
    max-width: 100px;
    max-height: 100px;

    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
    }
  }

  .emoji-info {
    flex: 2;
    margin-left: 10px;
    align-items: center;
    text-align: left;
  }

  .emoji-title {
    font-size: 16px;
    font-weight: bold;
    margin: 0;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .author {
    font-size: 12px;
    color: gray;
    margin: 0px;
  }
  .price {
    font-size: 14px;
    color: #dc143c;
    margin: 10px 0;
  }
  .detail-btn {
    width: calc(100% - 50px);
    height: 35px;
    background: white;
    border: 1px solid gray;
    border-radius: 10px;
    margin: 5px 10px;

    cursor: pointer;
  }
  /* emoji info End */

  p {
    height: 25px;
    margin: 10px 30px;
    line-height: 25px;
    text-align: left;
    font-size: small;
  }

  h3 {
    height: 40px;
    padding-left: 10px;
    text-align: left;
  }
}

@media all and (max-width: 400px) {
  .grid-container {
    --grid-layout-gap: 0px;
  }
  .payment-content {
    margin: 10px 0;
  }
}
</style>
