<template>
  <div class="container">
    <div class="user-info">
      <img id="user-img" src="@/assets/logo.png" alt="" />
      <div id="user-name">유저이름</div>
    </div>
    <div class="menu">
      <li>홈</li>
      <li>구매내역</li>
      <li>즐겨찾기</li>
      <li>고객센터</li>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';

export default defineComponent({
  name: 'slideMenu',
});
</script>

<style scoped lang="scss">
.container {
  background-color: white;
  position: fixed;
  top: 70px;

  width: 300px;
  height: 100%;

  z-index: 100;
}

.user-info {
  width: 300px;
  height: 250px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#user-name,
#user-img {
  width: 200px;
  margin: 5px auto;
  font-weight: bold;
  font-size: 17px;
}
img {
  border-radius: 100px;
}

li {
  list-style: none;
  width: 200px;
  height: 50px;
  margin: auto;
  text-align: left;
  line-height: 50px;
}

li:hover {
  cursor: pointer;
}
</style>
