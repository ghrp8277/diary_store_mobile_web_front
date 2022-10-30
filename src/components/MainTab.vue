<template>
  <!--메인 카테고리-->
  <div class="nav-wrap">
    <nav class="link-nav">
      <router-link
        v-for="(item, index) in list"
        :key="index"
        :to="{ name: item.name }"
        custom
        v-slot="{ navigate, href, isExactActive }"
      >
        <li :class="isExactActive && 'router-link-active'" @click="item.click">
          <a :href="href" @click="navigate">{{ item.title }}</a>
        </li>
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'MainTab',
  setup() {
    const store = useMainStore();

    const { isSearchShow } = storeToRefs(store);

    function onClick(e: Event) {
      const target = e.target as HTMLElement;

      const childs = target.childNodes;

      for (let child of childs) {
        if (child.nodeName == '#text') {
          if (isSearchShow.value) {
            isSearchShow.value = false;
          }
        }
      }
    }

    const list = [
      {
        name: 'home',
        title: '홈',
        click: (e: Event) => onClick(e),
      },
      {
        name: 'best',
        title: '인기',
        click: (e: Event) => onClick(e),
      },
      {
        name: 'new',
        title: '신규',
        click: (e: Event) => onClick(e),
      },
      {
        name: 'style',
        title: '스타일',
        click: (e: Event) => onClick(e),
      },
    ];

    return {
      list,
    };
  },
});
</script>

<style scoped lang="scss">
.nav-wrap {
  position: fixed;

  margin-top: 60px;

  border-bottom: 1px solid #d3d3d3;

  box-sizing: border-box;

  height: 60px;

  width: 100%;

  background: white;

  z-index: 1;
}

.link-nav {
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  text-align: center;

  max-width: 1100px;

  margin: 0 auto;
}

.link-nav a {
  margin: 10px;
  background: white;
  border: 0px white;
  font-size: 15px;

  cursor: pointer;
  text-decoration: none;
  color: #808080;
  font-weight: bold;
}

// router link active css
li {
  list-style: none;

  line-height: 57px;
}

.container {
  max-width: 1100px;

  margin: 0 auto;
}

.router-link-active {
  border-bottom: 2px solid #3b3b3b;
}

.router-link-active > a {
  color: #3b3b3b;
}
</style>
