<template>
  <div
    class="emoticon-wrap"
    ref="target"
    :style="{
      transform: cardTransform,
      transition: 'transform 0.25s ease-out',
    }"
  >
    <span class="heart" @click="likeEmoji">
      <font-awesome-icon
        class="heart-icon"
        :class="{ 'is-click': emoticon.is_like }"
        icon="fa-heart"
      />
    </span>
    <div class="emoji-thumb">
      <div class="img-slides">
        <transition-group
          name="slide"
          mode="out-in"
          enter-class="slide-in"
          leave-class="slide-out"
          enter-active-class="animated slide-in-active"
          leave-active-class="animated slide-out-active"
        >
          <router-link
            class="image-box"
            tag="div"
            v-for="(image, index) in emoticon.image_files"
            :key="index"
            :to="{
              name: 'detail',
              params: {
                id: emoticon.id,
              },
            }"
          >
            <img
              v-if="index == active - 1"
              class="emociton-image"
              :src="image.image_url"
            />

            <span>자세히 보기</span>
          </router-link>
        </transition-group>

        <span class="prev" @click="move(-1)">L</span>
        <span class="next" @click="move(1)">R</span>

        <ul class="dots" start="7">
          <li
            v-for="(dot, index) in slides"
            :key="index"
            :class="{ active: ++index === active }"
            @click="jump(index)"
          />
        </ul>
      </div>
      <div class="emoticon-title">{{ emoticon.product_name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted,
} from '@vue/composition-api';
import { useMouseInElement } from '@vueuse/core';
import { useStore } from '@/services/pinia/buyer';
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'HomeItemContent',
  props: {
    emoticon: {
      type: Object as () => {
        id: number;
        is_like: boolean;
        product_name: string;
        image_files: { image_url: string }[];
        title_image: string;
        category: string;
        author: string;
        price: number;
        count: number;
      },
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const mainStore = useMainStore();

    const { username } = storeToRefs(mainStore);

    const emoticon = computed(() => props.emoticon);

    const target = ref(null);

    const { elementX, elementY, isOutside, elementHeight, elementWidth } =
      useMouseInElement(target);

    let page = 1;
    let size = 20;

    const cardTransform = computed(() => {
      const MAX_ROTATION = 6;

      const rX = (
        MAX_ROTATION / 2 -
        (elementY.value / elementHeight.value) * MAX_ROTATION
      ).toFixed(2); // handles x-axis

      const rY = (
        (elementX.value / elementWidth.value) * MAX_ROTATION -
        MAX_ROTATION / 2
      ).toFixed(2); // handles y-axis

      return isOutside.value
        ? ''
        : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    });

    async function likeEmoji(e: Event) {
      await store.FETCH_PRODUCT_BY_IS_LIKE(
        username.value,
        emoticon.value.id,
        !emoticon.value.is_like,
        page,
        size
      );
    }

    const active = ref(1);
    const slides = computed(() => {
      const length = emoticon.value.image_files.length;
      if (length > 5) return 5;

      return length;
    });

    function jump(index: number) {
      active.value = index;
    }

    function move(amount: number) {
      let newActive = 0;

      const newIndex = active.value + amount;

      if (newIndex > slides.value) newActive = 1;
      if (newIndex === 0) newActive = slides.value;

      active.value = newActive || newIndex;
    }

    onMounted(() => {
      setInterval(() => {
        move(1);
      }, 10000);
    });

    return {
      likeEmoji,
      cardTransform,
      target,
      // slider
      active,
      slides,
      jump,
      move,
    };
  },
});
</script>

<style lang="scss" scoped>
.emoticon-wrap {
  width: 210px;
  height: 210px;

  background: #fff;
  text-align: center;
  display: inline-block;
  border-radius: 10px;
  margin: 20px;
  position: relative;

  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 12%);

  box-sizing: border-box;
}

.emoticon-wrap:hover {
  box-shadow: 0 8px 20px 0 rgb(0 0 0 / 12%);

  .prev,
  .next {
    visibility: visible;
  }
}

.image-box {
  cursor: pointer;

  width: 100%;

  span {
    display: none;
  }
}

.image-box:hover {
  opacity: 0.8;

  span {
    display: inline-block;

    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100px;

    color: #221e21;
  }
}

.heart {
  display: inline-block;
  width: 100%;
  border: 0px;
  background: #f5f5f5;

  cursor: pointer;

  transition: all 0.3s;
}

.heart:hover {
  opacity: 0.6;
}

.heart-icon {
  color: #777;
  font-size: 17px;
  position: absolute;
  top: 7px;
  left: 185px;
}

.is-click {
  color: #dc143c;
}

.emociton-image {
  width: 100%;
  height: 130px;
}

.emoticon-title {
  width: 170px;
  margin: auto;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

// 이미지 슬라이더
.img-slides {
  width: 150px;
  margin: 0 auto;
}

.animated {
  transition: all 400ms;
  position: absolute;
  transform: translate(-50%, -50%);
}

.slide-in {
  opacity: 0;
  transform: translate(-40%, -50%);
}

.slide-in-active {
  transition-delay: 150ms;
}

.slide-out {
  opacity: 1;
}

.slide-out-active {
  opacity: 0;
  transform: translate(-60%, -50%);
}

// slider dot
.dots {
  margin: 0;
  padding-inline-start: 0;
  text-align: center;

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  margin-top: 5px;

  width: 100%;
  height: 15px;

  overflow-y: hidden;
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  li {
    min-width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #221e21;
    opacity: 0.2;
    display: inline;
    margin: 0 3px;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out,
      width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.active {
      min-width: 22px;
      opacity: 1;
    }
  }
}

.dots::-webkit-scrollbar {
  display: none;

  scrollbar-width: none;
}

.dots::-webkit-scrollbar-thumb {
  display: none;

  scrollbar-width: none;
}

.dots::-webkit-scrollbar-track {
  display: none;

  scrollbar-width: none;
}

// next
.prev,
.next {
  width: 20px;
  height: 20px;
  border: 2px solid #221e21;
  color: #221e21;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  line-height: 18px;

  visibility: hidden;

  &:hover {
    background: #221e21;
    color: #fff;
    transform: scale(1.2);
  }

  &:active {
    transform: translate(0, 3px) scale(1.2);
  }
}

.next {
  position: absolute;
  right: 30px;
  bottom: 10px;
}

.prev {
  position: absolute;
  left: 30px;
  bottom: 10px;
}

/* 미디어 쿼리 */
@media all and (max-width: 474px) {
  .emoticon-wrap {
    width: calc(100% - 40px);
    height: 250px;
  }

  .emoji-thumb {
    height: 100%;

    padding: 10px;
  }

  .emoticon-title {
    font-size: 18px;
  }

  .heart-icon {
    right: 0;
    left: 10px;
  }

  .emociton-image {
    height: auto;
  }
}
</style>
