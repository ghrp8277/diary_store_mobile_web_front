<template>
  <div>
    <!--메인 카테고리-->
    <div class="container">
      <router-link
        to="/content"
        custom
        v-slot="{ navigate, href, isExactActive }"
      >
        <li :class="isExactActive && 'router-link-active'">
          <a :href="href" @click="navigate">홈</a>
        </li>
      </router-link>
      <router-link to="/best" custom v-slot="{ navigate, href, isExactActive }">
        <li :class="isExactActive && 'router-link-active'">
          <a :href="href" @click="navigate">인기</a>
        </li>
      </router-link>
      <router-link to="/new" custom v-slot="{ navigate, href, isExactActive }">
        <li :class="isExactActive && 'router-link-active'">
          <a :href="href" @click="navigate">신규</a>
        </li>
      </router-link>
      <router-link to="/" custom v-slot="{ navigate, href, isExactActive }">
        <li :class="isExactActive && 'router-link-active'">
          <a :href="href" @click="navigate">스타일</a>
        </li>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';

export default defineComponent({
  name: 'CategoryTab',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 40px;
  margin: 15px 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.container a {
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
}
.router-link-active {
  border-bottom: 2px solid #3b3b3b;
}

.router-link-active > a {
  color: #3b3b3b;
}
</style>
