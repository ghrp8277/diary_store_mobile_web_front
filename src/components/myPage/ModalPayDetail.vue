<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <!-- default 슬롯 콘텐츠 -->
          <h3>구매내역 상세</h3>
          <!--이모티콘 정보-->
          <div class="emoji">
            <div class="img-container">
              <img src="@/assets/logo.png" alt="" />
            </div>
            <div class="emoji-info">
              <p class="emoji-title">이모티콘 상품명</p>
              <p class="author">작가명</p>
            </div>
          </div>
          <div class="payment-box">
            <div class="payment-item">
              <div class="info-title">결제금액</div>
              <div class="info-content">5000만원</div>
            </div>
            <div class="payment-item">
              <div class="info-title">결제수단</div>
              <div class="info-content">신용카드</div>
            </div>
            <div class="payment-item">
              <div class="info-title">결제일시</div>
              <div class="info-content">2022.09.01</div>
            </div>
          </div>
          <div><button id="refund">환불하기</button></div>

          <span
            >구매 후 다운로드나 이용하지 않았을 경우 환불이 가능합니다.</span
          >
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
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
}
#refund :hover {
  cursor: pointer;
  font-weight: bold;
}
</style>
