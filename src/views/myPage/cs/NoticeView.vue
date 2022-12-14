<template>
  <div class="container-notice">
    <table class="table-notice">
      <colgroup>
        <col width="70%" />
        <col width="30%" />
      </colgroup>
      <tr
        v-for="(notice, index) in notices"
        :key="index"
        @click="onClick(notice.id)"
      >
        <td
          class="txt-info"
          scope="col"
          :class="{ 'txt-title': notice.is_important }"
        >
          <span v-if="notice.is_important" class="txt-tag">중요</span>
          {{ notice.title }}
        </td>
        <td scope="col" class="txt-date">
          {{ moment(notice.createdAt).format('YYYY-MM-DD') }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';
import moment from 'moment';
import router from '@/router';

export default defineComponent({
  name: 'NoticeView',
  setup() {
    const store = useStore();
    const { notices } = storeToRefs(store);

    function onClick(id: number) {
      router.push({
        name: 'notice',
        params: {
          id: String(id),
        },
      });
    }

    onMounted(async () => {
      await store.FETCH_NOTICES(1);
    });

    return {
      notices,
      moment,
      onClick,
    };
  },
});
</script>

<style scoped lang="scss">
.container-notice {
  background: white;
  padding: 30px 100px;

  max-width: 700px;

  margin: 0 auto;
}

.table-notice {
  width: 100%;
  border-top: 1px solid lightgray;
  border-collapse: collapse;
  text-align: left;

  td {
    box-sizing: border-box;
    border-bottom: 1px solid lightgray;
    padding: 15px;

    font-size: 14px;

    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .txt-title {
    font-weight: bold;
    text-align: left;
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
  .txt-date {
    width: 20%;
    text-align: right;
    padding: 0 15px 0 0;
  }
}

tr {
  cursor: pointer;

  &:hover {
    background: rgba(gray, 0.1);
  }
}

/** 미디어 쿼리 */
@media all and (max-width: 600px) {
  .container-notice {
    padding: 0;
  }

  .txt-date {
    display: none;
  }

  .txt-info {
    width: 100%;
  }
}
</style>
