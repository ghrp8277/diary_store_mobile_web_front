<template>
  <div class="home">
    <!--slide menu-->
    <Transition name="slide-fade">
      <SlideMenu v-if="isSlideShow" @onSlideShow="onSlideShow" />
    </Transition>

    <!-- main menu bar -->
    <main-menu-bar @onSlideShow="onSlideShow" :isSlideShow="isSlideShow" />

    <!-- main tab -->
    <main-tab />

    <!-- search -->
    <Transition name="slide-fade-down">
      <main-search v-if="isSearchShow" />
    </Transition>

    <transition name="slide-router-fade" mode="out-in">
      <router-view :class="{ 'toggle-show': isSlideShow }" />
    </transition>

    <div :class="{ 'layer-dimmed': isSlideShow }"></div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
} from '@vue/composition-api';
import SlideMenu from '@/components/MainSlideMenu.vue';
import MainTab from '@/components/MainTab.vue';
import MainSearch from '@/components/MainSearch.vue';
import MainMenuBar from '@/components/MainMenuBar.vue';
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';
import router from '@/router';

export default defineComponent({
  name: 'MainView',
  components: { SlideMenu, MainMenuBar, MainSearch, MainTab },
  setup() {
    const store = useMainStore();

    const { isSearchShow, username } = storeToRefs(store);

    const isSlideShow = ref(false);

    function onSlideShow(is: boolean) {
      isSlideShow.value = is;
    }

    function onPaymentCheck() {
      const query = router.currentRoute.query;

      const pg_token = query.pg_token as string;

      if (pg_token) {
        router.push({
          path: 'payment/ready',
          query: { pg_token, username: username.value },
        });
      }
    }

    onMounted(() => {
      onPaymentCheck();
    });

    return {
      isSlideShow,
      onSlideShow,
      isSearchShow,
    };
  },
});
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;

  overflow-y: auto;
  overflow-x: hidden;
}

/* width */
.home::-webkit-scrollbar {
  -webkit-appearance: none;
}

/* Track */
.home::-webkit-scrollbar-track {
  background: #f1f1f1;

  width: 15px;
}

/* Handle */
.home::-webkit-scrollbar-thumb {
  background-color: rgba(50, 50, 50, 0.5);
  border: 3px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}

.layer-dimmed {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.33);
  z-index: 100;

  transition: all 1s;
}

.toggle-show {
  opacity: 0.3;
  pointer-events: none;

  // 드래그 금지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* transitions */
.slide-fade {
  transition: all 1s;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* 미디어 쿼리 */
@media all and (max-width: 760px) {
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }

  .slide-fade {
    transition: all 0.5s;
  }
}

/* transitions */
.slide-fade-down {
  transition: all 1s;
}

.slide-fade-down-enter-active,
.slide-fade-down-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-down-enter,
.slide-fade-down-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}

/* transitions */
.slide-router-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-router-fade-enter-active,
.slide-router-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-router-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
