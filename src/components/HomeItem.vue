<template>
  <div class="container">
    <div class="list">
      <div class="list-item">
        <h2 class="list-tag"># 강아지 이모티콘</h2>
        <div class="emoji-img">
          <img src="@/assets/logo.png" alt="" />
          <img src="@/assets/logo.png" alt="" />
          <img src="@/assets/logo.png" alt="" />
          <img src="@/assets/logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';

export default defineComponent({
  name: 'HomeItem',
  setup() {
    const store = useStore();

    return {
      emoticons: computed(() => {
        return store.emoticons;
      }),
    };
  },
  methods: {
    likeEmoji() {
      console.log('버튼 클릭됨');
    },
    emojiDetailPage() {
      console.log('썸네일쓰 클릭');
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  background: white;
  font-size: 15px;
  font-weight: bold;
  margin: 20px 10px;
}

.list {
  width: 100%;
  height: 200px;
  border: 1px solid lightgray;
  border-radius: 20px;
}
.list-item {
  display: flex;
}
.list-tag {
  line-height: inherit;
  flex-grow: 0.5;
  text-align: left;
  margin: 0;
  padding-left: 15px;
}
.emoji-img {
  height: 200px;
  flex-basis: 0;
  display: flex;
}
img {
  width: 150px;
  height: 150px;
}

/* 그리드 */
.grid-container {
  /**
     * User input values.
     */
  --grid-layout-gap: 10px;
  --grid-column-count: 4;
  --grid-item--min-width: 200px;

  /**
     * Calculated values.
     */
  --gap-count: calc(var(--grid-column-count) - 1);
  --total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
  --grid-item--max-width: calc(
    (100% - var(--total-gap-width)) / var(--grid-column-count)
  );

  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
  );
  grid-gap: var(--grid-layout-gap);
}
</style>
