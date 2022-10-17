<template>
  <div class="outer-wrap">
    <ul class="inner-wrap">
      <li v-for="(item, index) in groups" :key="index">
        <strong class="tag-info" :style="{ background: bgColor }">{{
          item.title
        }}</strong>

        <div class="image-wrap">
          <img :src="item.title_image" alt="" />
        </div>
      </li>

      <!-- <ul v-for="(image, index) in item.image_files" :key="index">
        <li>
          <img :src="image.image_url" alt="" />
        </li>
      </ul> -->
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
    groups: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.inner-wrap {
  display: flex;

  list-style: none;
  padding-inline-start: 0;

  li {
    padding: 10px;
  }
}
.image-wrap {
  width: 120px;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
  }
}

.tag-info {
  display: block;

  border-radius: 20px;

  color: white;
}
</style>
