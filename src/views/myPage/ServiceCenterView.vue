<template>
  <div class="container-serv">
    <div class="area-menu">
      <h2 class="txt-tit">고객센터</h2>
      <ul>
        <router-link :to="{ name: 'payment' }">
          <li>공지사항</li>
        </router-link>
        <li>자주 묻는 질문</li>
      </ul>
      <!-- <button class="btn-notice">공지사항</button>
      <button class="btn-faq">자주 묻는 질문</button> -->
    </div>
    <keep-alive>
      <component v-bind:is="comp"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import NoticeDetail from '@/components/myPage/NoticeDetail.vue';
import FAQDetail from '@/components/myPage/FAQDetail.vue';

export default defineComponent({
  components: { NoticeDetail, FAQDetail },
  data() {
    return {
      comp: 'NoticeDetail',
    };
  },
  setup() {
    // changeComponent: function(componentName){
    //   this.comp = componentName
  },
});
</script>

<style scoped lang="scss">
.container-serv {
  background: white;
}
.area-menu {
  background: #f5f5f5;
  padding: 30px 100px;
  text-align: left;

  ul {
    padding: 0;
  }

  li {
    display: inline-block;
    height: 30px;
    margin: 0 10px 0 0;
    padding: 0 15px;

    border: 1px solid gray;
    border-radius: 50px;
    color: black;
    background: 0;

    font-size: 14px;
    line-height: 29px;
    cursor: pointer;
    text-decoration: none;
  }
}
.txt-tit {
  margin: 0 0 25px 0;
}
</style>
