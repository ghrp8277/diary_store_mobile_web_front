<template>
  <!--메인 카테고리-->
  <div class="nav-wrap">
    <nav class="link-nav">
      <router-link
        :to="{ name: 'home' }"
        custom
        v-slot="{ navigate, href, isExactActive }"
      >
        <li :class="isExactActive && 'router-link-active'">
          <a :href="href" @click="navigate">홈</a>
        </li>
      </router-link>
      <router-link
        :to="{ name: 'best' }"
        custom
        v-slot="{ navigate, href, isExactActive }"
      >
        <li :class="isExactActive && 'router-link-active'">
          <a :href="href" @click="navigate">인기</a>
        </li>
      </router-link>
      <router-link
        :to="{ name: 'new' }"
        custom
        v-slot="{ navigate, href, isExactActive }"
      >
        <li :class="isExactActive && 'router-link-active'">
          <a :href="href" @click="navigate">신규</a>
        </li>
      </router-link>
      <router-link
        :to="{ name: 'style' }"
        custom
        v-slot="{ navigate, href, isExactActive }"
      >
        <li :class="isExactActive && 'router-link-active'">
          <a :href="href" @click="navigate">스타일</a>
        </li>
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MainTab',
  setup() {
    return {};
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

  width: calc(100% - 15px);

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
