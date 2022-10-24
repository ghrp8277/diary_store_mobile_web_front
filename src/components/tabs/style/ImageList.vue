<template>
  <div class="outer-wrap">
    <ul class="inner-wrap">
      <li v-for="(item, index) in groups" :key="index">
        <span
          class="tag-info"
          :style="{ background: bgColor, color: textColor }"
          >{{ item.title }}</span
        >

        <ul class="img-group grid-container">
          <li
            class="img-wrap"
            v-for="(result, index) in item.result"
            :key="index"
          >
            <img v-if="index < 4" :src="result.title_image" alt="" />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'StyleImageList',
  props: {
    bgColor: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
    groups: {
      type: Array as any,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
/* 그리드 */
.grid-container {
  /**
   * User input values.
   */
  --grid-layout-gap: 10px;
  --grid-column-count: 4;
  --grid-item--min-width: 400px;

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

.inner-wrap {
  list-style: none;
  padding-inline-start: 0;

  overflow: hidden;

  li {
    display: inline-block;
    width: 206px;
    padding: 20px 23px;
    box-sizing: border-box;
    border-radius: 10px;
    min-height: 245px;

    margin: 5px;
    box-shadow: 0 4px 4px 0 rgb(0 0 0 / 6%);
  }
}

.tag-info {
  display: inline-block;
  font-size: 13px;
  text-align: center;
  border-radius: 19px;
  padding: 0 12px 0;
  line-height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'notokr-bold', sans-serif;
  font-weight: bold;
}

.img-group {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding-inline-start: 0;
  overflow: hidden;

  .img-wrap {
    width: 72px;
    height: 72px;
    min-height: 72px;

    float: left;
    margin-top: 14px;
    padding: 0;
    margin: 0;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;

      vertical-align: top;

      border: 0 none;
    }
  }
}
</style>
