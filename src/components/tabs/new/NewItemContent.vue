<template>
  <div>
    <transition-group class="grid-container" name="list-complete" tag="div">
      <div
        class="outer-wrap list-complete-item"
        v-for="(emoticon, index) in emoticons"
        :key="index"
      >
        <new-item :emoticon="emoticon" />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';
import NewItem from '@/components/tabs/new/NewItem.vue';

export default defineComponent({
  name: 'HomeItemContent',
  components: {
    NewItem,
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

    const category = computed(() => props.category);

    return {
      emoticons: computed(() => {
        if (!category.value) return emoticons.value;
        else {
          return emoticons.value.filter((emoticon) => {
            if (emoticon.category === category.value) {
              return emoticon;
            }
          });
        }
      }),
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

.outer-wrap {
  margin: 0;
  padding-inline-start: 0;

  overflow: hidden;
}

.grid-container {
  /**
   * User input values.
   */
  --grid-layout-gap: 15px;
  --grid-column-count: 4;
  --grid-item--min-width: 230px;

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
