<template>
  <div class="container">
    <div class="title">인기 이모티콘</div>
    <div class="list">
      <!--순위-->
      <div class="rankNumber">1</div>
      <!--썸네일-->
      <div class="thumbnail">
        <!--테두리-->
        <div class="img-container">
          <!--이모티콘 썸네일-->
          <img src="@/assets/logo.png" alt="" />
        </div>
      </div>
      <div class="emoticonInfo">
        <!--이모티콘 제목-->
        <div class="text-box">
          <div class="emojiTitle">이모티콘 제목</div>
          <div class="author">으아아</div>
        </div>
        <!--작가명-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ListEmoticon',
  props: {},
});
</script>

<style scoped lang="scss">
.container {
  background: white;
  text-align: left;
}
.list {
  width: auto;
  height: 100px;
  margin: 10px 0px;
  display: flex;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
}
.rankNumber,
.emojiTitle {
  font-size: 17px;
  font-weight: bold;
  color: black;
}
.rankNumber {
  width: 70px;
  text-align: center;
  line-height: 100px;
}

/* 이모티콘 썸네일 */
.thumbnail {
  margin: 5px 0px 0px 0px;
}
.img-container {
  width: 90px;
  height: 90px;
  background: #f5f5f5;
  text-align: center;
  line-height: 85px;
  margin: auto;
  border-radius: 10px;
}
img {
  width: 70px;
  height: 70px;
  vertical-align: middle;
}

/* 이모티콘 정보 */
.emoticonInfo {
  display: flex;
  align-items: center;
}

.text-box {
  margin: 20px;
}

.text-box > div {
  padding: 3px 0;
}

.author {
  font-size: 13px;
  color: gray;
}
</style>
