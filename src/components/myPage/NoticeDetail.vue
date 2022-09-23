<template>
  <div class="container-notice">
    <table class="table-notice">
      <tr>
        <td class="txt-tit">dsfasd</td>
        <td class="txt-date">2021.09.02</td>
      </tr>
    </table>
    <!-- <p><button v-on:click="show = !show">변경하기</button></p>
    <transition>
      <div v-if="show" key="a">TRUE</div>
      <div v-else key="b">FALSE</div>
    </transition> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'NoticeDetail',
  data() {
    return {
      show: true,
    };
  },
});
</script>

<style scoped lang="scss">
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
    padding: 10px;

    font-size: 14px;
  }

  .txt-tit {
    width: 90%;
  }
  .txt-date {
    width: 20%;
  }
}
// .v-enter-active,
// .v-leave-active {
//   transition: opacity 1s;
// }
// .v-leave-active {
//   position: absolute;
// }
// .v-enter,
// .v-leave-to {
//   opacity: 0;
// }
</style>
