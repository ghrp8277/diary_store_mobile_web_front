<template>
  <div class="container-faq">
    <ul class="list-faq">
      <li
        v-for="(item, index) in faq"
        :key="index"
        :class="{ 'toggle-show': visible_list[index] }"
      >
        <div class="item-wrap">
          <span class="txt-tit">
            {{ item.title }}
          </span>

          <label
            class="icon-down"
            :class="{ icon__up__down: visible_list[index] }"
          >
            <font-awesome-icon icon="fa-chevron-down" />
            <input type="checkbox" v-model="visible_list[index]"
          /></label>

          <div v-if="visible_list[index]" class="content-faq">
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
    const { faq } = storeToRefs(store);

    const visible_list = ref<boolean[]>([]);

    function onVisible(index: number) {
      const is_visible = visible_list.value[index];

      visible_list.value[index] = !is_visible;
    }

    onMounted(async () => {
      await store.FETCH_FAQ();

      for (let i = 0; i < faq.value.length; i++) {
        visible_list.value.push(false);
      }
    });

    return {
      faq,
      visible_list,
      onVisible,
    };
  },
});
</script>

<style scoped lang="scss">
.icon-down {
  float: right;

  transition: all 0.2s;

  cursor: pointer;
}

input[type='checkbox'] {
  display: none;
  cursor: pointer;

  opacity: 0;

  filter: alpha(opacity=0);

  background: transparent;
}

.container-faq {
  background: white;
  padding: 30px 50px;

  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding-inline-start: 0;

  li {
    width: 100%;
    margin-bottom: 25px;

    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

    text-align: left;
  }
}
.item-wrap {
  padding: 22px 35px;

  .txt-tit:hover {
    font-weight: bold;
    text-decoration: underline;
  }
}

.icon__up__down {
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
