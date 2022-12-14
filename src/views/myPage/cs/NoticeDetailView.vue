<template>
  <div class="container-detail">
    <div class="title-head">
      <div class="wrap-content">
        <span v-if="is_important" class="txt-tag">중요</span>
        <strong>{{ title }}</strong>
      </div>
    </div>
    <div class="content" v-html="html"></div>

    <router-link :to="{ name: 'notices' }" tag="div" class="paging-recent">
      <span>목록</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { fetchStoreNoticeInfo } from '@/apis/buyer';
import {
  defineComponent,
  onMounted,
  toRefs,
  ref,
  computed,
} from '@vue/composition-api';
import moment from 'moment';

export default defineComponent({
  name: 'NoticeDetail',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { id } = toRefs(props);
    const html = ref('');
    const result = ref<{
      id: number;
      is_important: boolean;
      title: string;
      createdAt: Date;
    }>({ id: 0, is_important: false, title: '', createdAt: new Date() });

    const createdAt = computed(() => result.value.createdAt);
    const title = computed(() => result.value.title);
    const is_important = computed(() => result.value.is_important);

    onMounted(async () => {
      const data = await fetchStoreNoticeInfo(id.value);

      html.value = data.html;

      result.value = data.notice;
    });

    return {
      html,
      result,
      title,
      is_important,
      createAtToMoment: moment(createdAt.value).format('YYYY-MM-DD'),
    };
  },
});
</script>

<style lang="scss" scoped>
.container-detail {
  background: white;
  padding: 30px 100px;
  max-width: 700px;
  margin: 0 auto;
}
.title-head {
  height: 52px;
  margin-bottom: 20px;
  border: 1px solid #e6e6e6;
  line-height: 54px;
}

.wrap-content {
  float: left;
  width: 75%;
  height: 100%;
  padding: 0 40px;
  text-align: left;
}

.wrap-content > strong {
  font-size: 13px;
  color: #717274;

  display: inline-block;
  overflow: hidden;
  max-width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.txt-tag {
  float: left;
  margin: 18px 13px 0 0;
  padding: 0 8px;
  border-radius: 3px;
  font-size: 10px;
  line-height: 18px;
  background: #393a3e;
  color: #fff;
}

.txt-date {
  float: right;
  padding: 0 20px;
  display: block;
  overflow: hidden;

  font-size: 11px;
}

.content {
  margin: 30px 0;

  border-bottom: 1px solid #e6e6e6;
}

.paging-recent {
  text-align: center;

  cursor: pointer;
}

.paging-recent > span:hover {
  color: #ffbb1b;
}

.paging-recent > span {
  margin: 0 40px;
  color: #2d2e32;

  font-size: 13px;
}

/** 미디어 쿼리 */
@media all and (max-width: 600px) {
  .container-detail {
    padding: 0;
  }

  .paging-recent {
    box-sizing: border-box;

    padding: 10px;

    width: 100%;

    border-bottom: 1px solid #e6e6e6;

    span {
      &:hover {
        color: gray;
      }
    }
  }

  .content {
    margin: 0;
  }
}
</style>
