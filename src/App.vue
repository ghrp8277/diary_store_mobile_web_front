<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { useMainStore } from '@/services/pinia/main';
export default defineComponent({
  setup() {
    const mainStore = useMainStore();

    return {
      isLoading: computed(() => mainStore.isLoading),
    };
  },
});
</script>
<style lang="scss">
html,
body {
  margin: 0;
  // 가로 스크롤 없앤다
  overflow: hidden;
  width: 100%;
  height: 100%;

  min-width: 300px;
}

#app {
  width: 100%;
  height: 100%;
  margin: auto;
  font-family: 'Noto Sans KR', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
