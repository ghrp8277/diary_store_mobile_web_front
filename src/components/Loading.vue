<template>
  <div class="loading" data-loading-text="LOADING..."></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'LoadingComponent',
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.loading {
  left: 50%;
  top: 50%;
  font-size: 36px;
  font-family: serif;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: capitalize;
  position: fixed;
  overflow: hidden;
  transform: translate(-50%, -50%);

  z-index: 99999;
}

.loading::before {
  color: #aaa;
  content: attr(data-loading-text);
}

.loading::after {
  top: 0;
  left: 0;
  width: 0;
  opacity: 1;
  color: #444;
  overflow: hidden;
  position: absolute;
  animation: loading 5s infinite;
  content: attr(data-loading-text);
}

@keyframes loading {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
