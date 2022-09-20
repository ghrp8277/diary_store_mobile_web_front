<template>
  <div class="home">
    <!--slide menu-->
    <Transition name="slide-fade">
      <SlideMenu v-if="isShow" @onShowClose="onShowClose" />
    </Transition>
    <!--menu bar-->
    <div class="menubar-container" :class="{ 'menubar-slider-active': isShow }">
      <!-- toggle button -->
      <button class="leftButton" @click="menuButton">
        <font-awesome-icon icon="fa-bars" style="width: 50%; height: auto" />
      </button>
      <router-link
        :to="{ name: 'home' }"
        class="title"
        tag="span"
        @click="menuButton"
      >
        <span>이모티콘 스토어</span>
      </router-link>
      <div>
        <router-link :to="{ name: 'search' }" class="rightButton" tag="button">
          <font-awesome-icon class="icon" icon="fa-magnifying-glass" />
        </router-link>
      </div>
    </div>

    <router-view class="main-view" :class="{ 'toggle-show': isShow }" />

    <div :class="{ 'layer-dimmed': isShow }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import SlideMenu from '@/components/main/SlideMenu.vue';

export default defineComponent({
  name: 'MainView',
  components: { SlideMenu },
  setup() {
    const isShow = ref(false);

    // 메뉴버튼 클릭 함수
    const menuButton = () => {
      isShow.value = !isShow.value;
    };

    function onShowClose(is: boolean) {
      isShow.value = is;
    }

    return {
      isShow,
      menuButton,
      onShowClose,
    };
  },
});
</script>

<style lang="scss" scoped>
.menubar-container {
  height: 60px;
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;

  z-index: 1100;

  position: fixed;
  top: 0;

  background: #fff;

  text-align: center;

  align-content: center;
  width: 100%;
}

.menubar-slider-active {
  border-bottom: 1px solid rgba($color: gray, $alpha: 0.2);
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
  padding-top: 60px;
}

.icon {
  width: 50%;
  height: auto;
}

.layer-dimmed {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.33);
  z-index: 100;

  transition: all 1s;
}

/* transitions */
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
