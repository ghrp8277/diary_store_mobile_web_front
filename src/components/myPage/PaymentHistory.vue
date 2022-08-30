<template>
  <div class="container">
    <h2 class="title">구매내역</h2>
    <!--리스트-->
    <div class="grid-container">
      <div class="payment-content">
        <p>2022.08.01</p>
        <!--이모지 정보-->
        <div class="emoji">
          <div class="img-container">
            <img src="@/assets/logo.png" alt="" />
          </div>
          <div class="emoji-info">
            <p id="emoji-title">바람의 나라 바람의 나라~</p>
            <p id="author">작가명명명</p>
            <p id="price">2000마넌</p>
          </div>
        </div>
        <button class="detail-btn">호에엥??</button>
      </div>
      <div class="payment-content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PaymentHistory',
});
</script>

<style lang="scss" scoped>
.container {
  background: white;
  margin: 10px 20px;
}
.title {
  height: 80px;
  line-height: 80px;
  text-align: left;
}

.grid-container {
  /**
   * User input values.
   */
  --grid-layout-gap: 10px;
  --grid-column-count: 4;
  --grid-item--min-width: 450px;

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
  width: 450px;
  height: 220px;
  border: 0px solid lightgray;
  border-radius: 10px;
  box-shadow: 0px 0px 7px lightgray;
}

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
#emoji-title {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}
#author {
  font-size: 12px;
  color: gray;
  margin: 0px;
}
#price {
  font-size: 14px;
  color: #dc143c;
  margin: 10px 0;
}
.detail-btn {
  width: 400px;
  height: 35px;
  background: white;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 5px 0;
}

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
// p {
//   width: 400px;
//   height: 30px;
// }
</style>
