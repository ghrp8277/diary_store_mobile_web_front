<template>
  <div class="container-serv">
    <div class="top-wrap">
      <div class="inner-wrap">
        <h2 class="title">고객센터</h2>
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <router-link :to="item.to">
              <span>{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ServiceCenterView',

  setup() {
    const list = [
      {
        to: '/service/list',
        name: '공지사항',
      },
      {
        to: '/service/faq',
        name: '자주 묻는 질문',
      },
    ];

    return {
      list,
    };
  },
});
</script>

<style scoped lang="scss">
.container-serv {
  padding-top: 120px;
}

.top-wrap {
  background: #f5f5f5;

  padding: 30px 0;

  .inner-wrap {
    max-width: 700px;
    margin: 0 auto;

    box-sizing: border-box;

    ul {
      box-sizing: border-box;
      padding: 0 10px;
      margin: 0;

      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;

      overflow-x: auto;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
    }

    li {
      display: inline-block;
      white-space: nowrap;

      margin-right: 10px;
      padding: 0 10px;

      border: 1px solid gray;
      border-radius: 50px;

      background: 0;
      cursor: pointer;

      a {
        text-decoration: none;

        color: black;

        font-size: 13px;
        line-height: 29px;
      }

      &:hover {
        background: rgba(gray, 0.1);
      }
    }
  }
}
</style>
