<template>
  <div>
    <!--2차 카테고리-->
    <div class="emoticon-category">
      <button v-for="(category, index) in categories" :key="index">
        {{ category }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';

export default defineComponent({
  name: 'HomeCategory',
  setup() {
    const store = useStore();

    onMounted(async () => {
      await store.FETCH_CATEGORY_INFO();
    });

    return {
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

          arr.push(cnv_category);
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
