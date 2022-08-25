<template>
  <div class="home">
    <!--slide menu-->
    <Transition name="slide-fade">
      <SlideMenu v-if="isShow" />
    </Transition>
    <!--menu bar-->
    <div class="menubar-container">
      <!-- toggle button -->
      <button class="leftButton" @click="menuButton">
        <font-awesome-icon icon="fa-bars" style="width: 50%; height: auto" />
      </button>
      <span class="title" @click="titleButton">{{ msg }}</span>
      <div>
        <button class="rightButton" @click="searchButton">
          <font-awesome-icon
            icon="fa-magnifying-glass"
            style="width: 50%; height: auto"
          />
        </button>
      </div>
    </div>

    <router-view class="main-view" :class="{ 'toggle-show': isShow }" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';
import router from '@/router';
import SlideMenu from '@/components/main/SlideMenu.vue';

export default defineComponent({
  name: 'HomeView',
  components: { SlideMenu },
  setup() {
    const isShow = ref(false);
    const msg = ref('이모티콘 스토어');
    // 메뉴버튼 클릭 함수
    const menuButton = () => {
      isShow.value = !isShow.value;
    };
    // 타이틀 클릭 함수
    const titleButton = () => {
      router.push({ path: 'content' });
    };
    // 검색버튼 클릭 함수
    const searchButton = () => {
      router.push({ path: 'search' });
    };

    return {
      // toggle
      isShow,
      // etc
      msg,
      menuButton,
      titleButton,
      searchButton,
    };
  },
});
</script>

<style lang="scss" scoped>
.menubar-container {
  height: 35px;
  margin: 15px 10px;
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
}
button {
  width: 40px;
  height: 100%;
  background: white;
  border: 0px;
  padding: 0px;

  cursor: pointer;
}
.leftButton {
  float: left;
}
.rightButton {
  float: right;
}
.title {
  font-size: 18px;
  font-weight: bold;
  line-height: 35px;

  cursor: pointer;
}

.main-view {
  max-width: 1000px;
  margin: 0 auto;
}

// transitions
.slide-fade {
  transition: all 1s;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.toggle-show {
  opacity: 0.3;
  pointer-events: none;

  // 드래그 금지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
