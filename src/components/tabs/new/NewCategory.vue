<template>
  <!--2차 카테고리-->
  <div class="emoticon-category">
    <button @click="onItemClick('')">전체</button>
    <button
      v-for="(item, index) in categories"
      :key="index"
      @click="onItemClick(item.category)"
    >
      {{ item.cnv_category }}
    </button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  computed,
  toRefs,
} from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';

export default defineComponent({
  name: 'HomeCategory',
  emits: ['onCategory'],
  setup(props, { emit }) {
    const store = useStore();

    function onItemClick(category: string) {
      emit('onCategory', category);
    }

    onMounted(async () => {
      await store.FETCH_CATEGORY_INFO();
    });

    return {
      onItemClick,
      categories: computed(() => {
        const categories = store.categories;
        const arr = [];

        for (let item of categories) {
          let cnv_category = '';

          const category = item.category;

          switch (category) {
            case 'animal':
              cnv_category = '동물';
              break;
            case 'character':
              cnv_category = '캐릭터';
              break;
            case 'illustration':
              cnv_category = '일러스트';
              break;
          }

          arr.push({
            category,
            cnv_category,
          });
        }

        return arr;
      }),
    };
  },
});
</script>

<style lang="scss" scoped>
.emoticon-category {
  height: 30px;
  margin: 20px 0;
  /* 가로 스크롤*/
  overflow: auto;
  white-space: nowrap;
}
.emoticon-category::-webkit-scrollbar {
  display: none;
}
.emoticon-category > button {
  width: 70px;
  height: 25px;
  margin: 0px 5px;
  background: white;
  border: 1px solid gray;
  border-radius: 30px;

  cursor: pointer;

  transition: all 0.2s;
}

.emoticon-category > button:hover {
  background: rgba(#777, 0.5);
}
</style>
