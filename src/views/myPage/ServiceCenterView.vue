<template>
  <div class="container-serv">
    <div class="area-menu">
      <h2 class="title">고객센터</h2>
      <ul>
        <li>공지사항</li>
        <li>자주 묻는 질문</li>
      </ul>
    </div>
    <div class="container-notice">
      <table class="table-notice">
        <colgroup>
          <col width="10%" />
          <col width="70%" />
          <col width="20%" />
        </colgroup>
        <tr>
          <td scope="col" class="txt-title">
            <span class="txt-tag">중요</span>
          </td>
          <td scope="col" class="txt-tit">dsfasd</td>
          <td scope="col" class="txt-date">2021.09.02</td>
        </tr>
      </table>
    </div>
    <keep-alive>
      <component v-bind:is="comp"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import FaqView from '@/components/myPage/FaqView.vue';

export default defineComponent({
  components: { FaqView },
  data() {
    return {
      comp: 'FAQDetail',
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
  border: 1px solid lightgray;
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
