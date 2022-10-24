<template>
  <div id="app">
    <div :class="{ 'layer-dimmed': isLoading }"></div>

    <loading v-if="isLoading" />

    <router-view />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from '@vue/composition-api';
import { useMainStore } from '@/services/pinia/main';
import { saveUserToCookie } from './services/cookies';
import Loading from '@/components/Loading.vue';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'App',
  components: {
    Loading,
  },
  setup() {
    const mainStore = useMainStore();

    const { isLoading } = storeToRefs(mainStore);

    onMounted(() => {
      saveUserToCookie('test');
    });

    return {
      isLoading: computed(() => isLoading.value),
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

.layer-dimmed {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.66);
  z-index: 1000;

  transition: all 0.2s;
}
</style>
