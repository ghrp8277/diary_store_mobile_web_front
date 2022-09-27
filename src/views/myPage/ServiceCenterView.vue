<template>
  <div class="container-serv">
    <div class="area-menu">
      <h2 class="title">고객센터</h2>
      <ul>
        <router-link to="/service/notice">
          <li>공지사항</li>
        </router-link>
        <router-link to="/service/faq">
          <li>자주 묻는 질문</li>
        </router-link>
      </ul>
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
  background: white;
}
.area-menu {
  background: #f5f5f5;
  padding: 30px 100px;
  text-align: left;

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
.title {
  margin: 0 0 25px 0;
}
.container-notice {
  background: white;
  padding: 30px 100px;
}
.table-notice {
  border-top: 1px solid lightgray;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    border-bottom: 1px solid lightgray;
    padding: 15px 0;

    font-size: 14px;
  }

  .txt-title {
    font-weight: bold;
    text-align: center;
  }
  .txt-tag {
    display: inline-block;

    padding: 0 8px;
    margin: 0 5px;

    border-radius: 3px;
    font-size: 10px;
    line-height: 18px;
    background: #393a3e;
    color: #fff;
  }
  .txt-tit {
    width: 90%;
    padding: 0;
  }
  .txt-date {
    width: 20%;
    padding: 0 15px;
  }
}
</style>
