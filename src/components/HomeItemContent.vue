<template>
  <transition-group
    class="container grid-container"
    name="list-complete"
    tag="div"
  >
    <div
      class="list-complete-item"
      v-for="(emoticon, index) in emoticons"
      :key="index"
    >
      <home-content-item :emoticon="emoticon" />
    </div>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';
import HomeContentItem from '@/components/homeContent/Item.vue';

export default defineComponent({
  name: 'HomeItemContent',
  components: {
    HomeContentItem,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const { emoticons } = storeToRefs(store);
    const { category } = toRefs(props);

    const emoticonsInfo = computed(() => {
      if (category.value.length < 1) return emoticons.value;
      return emoticons.value.filter(
        (emoticon) => emoticon.category == category.value
      );
    });

    return {
      emoticons: emoticonsInfo,
    };
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

// list tranlations
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
