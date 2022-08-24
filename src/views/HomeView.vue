<template>
  <div class="home">
    <!--slide menu-->
    <SlideMenu />
    <!--menu bar-->
    <div class="menubar-container">
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

    <router-view />
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
    const msg = ref('이모티콘 스토어');
    // 메뉴버튼 클릭 함수
    const menuButton = () => {
      //this.$Event.$emit('toggleMenu');
      console.log('menubutton click');
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
</style>
