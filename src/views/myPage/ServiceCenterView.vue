<template>
  <div class="container-serv">
    <div class="top-wrap">
      <div class="inner-wrap">
        <h2 class="title">고객센터</h2>
        <ul>
          <router-link to="/service/list">
            <li>공지사항</li>
          </router-link>
          <router-link to="/service/faq">
            <li>자주 묻는 질문</li>
          </router-link>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: {},
  data() {
    return {
      comp: 'FaqView',
    };
  },
});
</script>

<style scoped lang="scss">
.container-serv {
  width: 100%;

  margin: auto;
}

.top-wrap {
  background: #f5f5f5;

  padding: 30px 0;

  .inner-wrap {
    margin: 0 auto;
    padding: 0 100px;
    width: 700px;

    text-align: left;

    .title {
      margin-top: 10px;
    }

    ul {
      padding: 0;
      margin: 10px 0 0 0;
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
}
</style>
