<template>
  <div class="home">
    <!--메뉴바-->
    <div class="menubar-container">
      <button class="leftButton" @click="menuButton">
        <font-awesome-icon icon="fa-bars" style="width: 50%; height: auto" />
      </button>
      <span class="title">{{ msg }}</span>
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
import Vue from 'vue';

export default Vue.extend({
  name: 'MainCategory, EmoticonCategory',
  data() {
    return {
      msg: '이모티콘 스토어',
    };
  },
  methods: {
    // 메뉴버튼 클릭 함수
    menuButton() {
      console.log('menubutton click');
    },
    // 검색버튼 클릭 함수
    searchButton() {
      this.$router.push({ path: 'search' });
    },
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
}
.rightButton {
  float: right;
}
.title {
  font-size: 18px;
  font-weight: bold;
  line-height: 35px;
}
</style>
