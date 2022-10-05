<template>
  <div class="container-payment">
    <div class="payment-wrap__info">
      <h2 class="payment-title">구매내역</h2>
      <!--리스트-->
      <div class="list-payment grid-container">
        <div class="payment-content">
          <p>2022.08.01</p>
          <!--이모지 정보-->
          <div class="emoji">
            <div class="img-container">
              <img src="@/assets/logo.png" alt="" />
            </div>
            <div class="emoji-info">
              <p class="emoji-title">바람의 나라 바람의 나라~</p>
              <p class="author">작가명명명</p>
              <p class="price">2000마넌</p>
            </div>
          </div>
          <button class="detail-btn" @click="openModal">상세보기</button>
        </div>
        <div class="payment-content">
          <p>2022.08.01</p>
          <!--이모지 정보-->
          <div class="emoji">
            <div class="img-container">
              <img src="@/assets/logo.png" alt="" />
            </div>
            <div class="emoji-info">
              <p class="emoji-title">바람의 나라 바람의 나라~</p>
              <p class="author">작가명명명</p>
              <p class="price">2000마넌</p>
            </div>
          </div>
          <button class="detail-btn" @click="openModal">상세보기</button>
        </div>
        <div class="payment-content">
          <p>2022.08.01</p>
          <!--이모지 정보-->
          <div class="emoji">
            <div class="img-container">
              <img src="@/assets/logo.png" alt="" />
            </div>
            <div class="emoji-info">
              <p class="emoji-title">
                바람의 나라 바람의 나라~ㅇㅇㄹㄴㅇㄹㄴㅇㄹㅇㄴㅇ ㅇㄴㄹㅇ
              </p>
              <p class="author">작가명명명</p>
              <p class="price">2000마넌</p>
            </div>
          </div>
          <button class="detail-btn" @click="openModal">상세보기</button>
        </div>
        <div class="payment-content">
          <p>2022.08.01</p>
          <!--이모지 정보-->
          <div class="emoji">
            <div class="img-container">
              <img src="@/assets/logo.png" alt="" />
            </div>
            <div class="emoji-info">
              <p class="emoji-title">바람의 나라 바람의 나라~</p>
              <p class="author">작가명명명</p>
              <p class="price">2000마넌</p>
            </div>
          </div>
          <button class="detail-btn" @click="openModal">상세보기</button>
        </div>
      </div>
    </div>

    <!-- 구매내역 상세 MODAL -->
    <ModalPayDetail @close="closeModal" v-if="modal" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from '@vue/composition-api';
import ModalPayDetail from '@/components/myPage/ModalPayDetail.vue';

export default defineComponent({
  components: { ModalPayDetail },
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
  },
});
</script>

<style scoped lang="scss">
.container-payment {
  background: white;
  max-width: 1100px;
  margin: 0 auto;
}
.payment-wrap__info {
  // padding: 0 100px;
}
.payment-title {
  // height: 80px;
  // line-height: 80px;
  text-align: left;
  padding-bottom: 20px;
}
.list-payment {
  place-items: center;
}
.grid-container {
  /**
     * User input values.
     */
  --grid-layout-gap: 30px;
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
.payment-content {
  width: 390px;
  height: 220px;
  border: 0px solid lightgray;
  border-radius: 10px;
  box-shadow: 0px 0px 7px lightgray;
}

/*
    emoji info
  */
.emoji {
  display: flex;
  margin: 5px 20px;
}
.img-container {
  background: white;
  line-height: 110px;
}
.emoji-info {
  width: 270px;
  margin-left: 10px;
  align-items: center;
  text-align: left;
}
.emoji-title {
  width: 90%;
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
  width: 340px;
  height: 35px;
  background: white;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 5px 0;
}
/* emoji info End */

p {
  height: 25px;
  margin: 10px 30px;
  line-height: 25px;
  text-align: left;
  font-size: small;
}
img {
  width: 100px;
  height: 100px;
  vertical-align: middle;
}
h3 {
  height: 40px;
  padding-left: 10px;
  text-align: left;
}
</style>
