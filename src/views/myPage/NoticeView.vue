<template>
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
    {{ notices }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'NoticeView',
  setup() {
    const store = useStore();
    const { service_notices } = storeToRefs(store);

    onMounted(async () => {
      await store.FETCH_NOTICES(1);
    });

    return {
      notices: service_notices,
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
