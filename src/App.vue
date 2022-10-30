<template>
  <div id="app">
    <div :class="{ 'layer-dimmed': isLoading }"></div>

    <loading v-if="isLoading" />

    <router-view />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { useMainStore } from '@/services/pinia/main';
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
  width: 100%;
  height: 100%;

  min-width: 300px;
}

/* width */
html::-webkit-scrollbar {
  -webkit-appearance: none;
}

/* Track */
html::-webkit-scrollbar-track {
  background: #f1f1f1;

  width: 15px;
}

/* Handle */
html::-webkit-scrollbar-thumb {
  background-color: rgba(50, 50, 50, 0.5);
  border: 3px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
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
