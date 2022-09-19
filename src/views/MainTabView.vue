<template>
  <div class="container">
    <CategoryTab />

    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CategoryTab from '@/components/main/CategoryTab.vue';

export default defineComponent({
  name: 'MainTabView',
  components: { CategoryTab },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
