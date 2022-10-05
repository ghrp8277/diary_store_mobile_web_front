<template>
  <div
    class="menubar-container"
    :class="{ 'menubar-slider-active': isSlideShow }"
  >
    <!-- toggle button -->
    <button @click="onSlideShow">
      <font-awesome-icon icon="fa-bars" style="width: 50%; height: auto" />
    </button>
    <router-link :to="{ name: 'home' }" class="title" tag="span">
      <span>이모티콘 스토어</span>
    </router-link>
    <button class="btn-search" @click="onSearchShow">
      <font-awesome-icon class="icon" icon="fa-magnifying-glass" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from '@vue/composition-api';

export default defineComponent({
  name: 'MainMenu',
  props: {
    isSlideShow: {
      type: Boolean,
      required: true,
      default: false,
    },
    isSearchShow: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  emits: ['onSlideShow', 'onSearchShow'],
  setup(props, { emit }) {
    const { isSlideShow, isSearchShow } = toRefs(props);

    // 메뉴버튼 클릭 함수
    function onSlideShow() {
      emit('onSlideShow', !isSlideShow.value);
    }

    function onSearchShow() {
      emit('onSearchShow', !isSearchShow.value);
    }

    return {
      onSlideShow,
      onSearchShow,
    };
  },
});
</script>

<style scoped lang="scss">
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
.btn-search {
  position: absolute;
  right: 0;

  transition: all 0.3s;
}

.title {
  font-size: 18px;
  font-weight: bold;
  line-height: 35px;

  cursor: pointer;
}

.icon {
  width: 50%;
  height: auto;
}
</style>
