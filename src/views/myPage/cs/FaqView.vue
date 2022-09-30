<template>
  <div class="container-faq">
    <ul class="list-faq">
      <li>
        <div
          class="question-faq"
          v-for="(item, index) in FAQ"
          :key="index"
          @click="toggleShow"
          :class="{ 'toggle-show': isShow }"
        >
          <span class="txt-tit">
            {{ item.title }}
          </span>
          <span class="icon-down" :class="{ 'icon-up': isShow }">
            <font-awesome-icon icon="fa-chevron-down" />
          </span>
          <div v-if="isShow" class="content-faq">
            <span>
              {{ item.content }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'FAQDetail',
  setup() {
    const store = useStore();
    const { FAQ } = storeToRefs(store);

    const isShow = ref(false);

    const toggleShow = () => {
      isShow.value = !isShow.value;
    };

    onMounted(async () => {
      await store.FETCH_FAQ();
    });

    return {
      isShow,
      toggleShow,
      FAQ: FAQ,
    };
  },
});
</script>

<style scoped lang="scss">
.container-faq {
  background: white;
  padding: 30px 50px;

  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style: none;

  li {
    width: 100%;

    // border: 1px solid lightgray;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

    text-align: left;
  }
}
.question-faq {
  padding: 22px 35px;
  .icon-down {
    float: right;

    transition: all 0.2s;
  }

  &:hover {
    cursor: pointer;
  }

  .txt-tit:hover {
    font-weight: bold;
    text-decoration: underline;
  }
}

.icon-up {
  transform: rotate(180deg);
}

.txt-tit {
  font-size: 15px;
}
.content-faq {
  padding: 10px 0 0 0;
}
.toggle-show {
  height: auto;

  .txt-tit {
    font-size: 16px;
    font-weight: bold;
  }

  .content-faq {
    font-size: 15px;
  }

  /** 미디어 쿼리 */
  @media all and (max-width: 900px) {
  }
}
</style>
