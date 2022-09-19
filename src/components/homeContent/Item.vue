<template>
  <router-link
  tag="div"
    class="emoticon"
    ref="target"
    :style="{
      transform: cardTransform,
      transition: 'transform 0.25s ease-out',
    }"
    :to="{
          name: 'detail',
          params: { id: emoticon.id },
        }"
  >
    <span class="heart" @click="likeEmoji">
      <font-awesome-icon
        class="heart-icon"
        :class="{ 'is-click': emoticon.is_like }"
        icon="fa-heart"
      />
    </span>
    <div class="emojiThumb" @click="emojiDetailPage">
      <div class="img-slides">
        <transition-group
          name="slide"
          mode="out-in"
          enter-class="slide-in"
          leave-class="slide-out"
          enter-active-class="animated slide-in-active"
          leave-active-class="animated slide-out-active"
        >
          <div v-for="(image, index) in emoticon.image_files" :key="index">
            <img
              v-if="index == active - 1"
              class="emociton-image"
              :src="image.image_url"
            />
          </div>
        </transition-group>

        <span class="prev" @click="move(-1)">L</span>
        <span class="next" @click="move(1)">R</span>

        <ul class="dots">
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
  </router-link>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  toRefs,
  onMounted,
} from '@vue/composition-api';
import { useMouseInElement } from '@vueuse/core';
import { useStore } from '@/services/pinia/buyer';
import { ImageFile } from '@/types/emojiConfirm';

export default defineComponent({
  name: 'HomeItemContent',
  props: {
    emoticon: {
      type: Object as () => {
        id: number;
        product_name: string;
        image_files: ImageFile[];
        is_like: boolean;
        category: string;
      },
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const target = ref(null);

    const { emoticon } = toRefs(props);

    const { elementX, elementY, isOutside, elementHeight, elementWidth } =
      useMouseInElement(target);

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

    function emojiDetailPage() {
      console.log('썸네일쓰 클릭');
    }

    async function likeEmoji(e: Event) {
      const id = emoticon.value.id;
      const is_like = !emoticon.value.is_like;

      await store.FETCH_PRODUCT_BY_IS_INFO('test', id, is_like);
    }

    const active = ref(1);
    const slides = ref(emoticon.value.image_files.length);

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

    return {
      likeEmoji,
      cardTransform,
      emojiDetailPage,
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
.emoticon {
  width: 210px;
  height: 210px;
  background: #fff;
  text-align: center;
  display: inline-block;
  border-radius: 10px;
  margin: 20px;
  position: relative;

  cursor: pointer;

  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 12%);

  box-sizing: border-box;
}

.emoticon:hover {
  box-shadow: 0 8px 20px 0 rgb(0 0 0 / 12%);
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

  li {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #221e21;
    opacity: 0.2;
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out,
      width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.active {
      width: 22px;
      opacity: 1;
    }
  }
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
</style>
