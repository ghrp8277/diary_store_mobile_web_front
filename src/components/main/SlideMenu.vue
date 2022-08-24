<template>
  <transition name="slide-menu">
    <div v-show="show" class="container">
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
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';

export default defineComponent({
  name: 'slideMenu',
  data: function () {
    return {
      show: false,
    };
  },
  created() {
    this.$Event.$on('toggleMenu', () => {
      this.toggle();
    });
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
});
</script>

<style scoped lang="scss">
.slide-menu-enter-active {
  transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  transform: translate(275px, 0);
  -webkit-transform: translate(275px, 0);
}

.slide-menu-leave-active {
  transform: translate(275px, 0);
  -webkit-transform: translate(275px, 0);
}
.container {
  width: 300px;
  height: auto;
}
</style>
