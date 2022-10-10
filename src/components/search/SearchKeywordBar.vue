<template>
  <div class="search-inner">
    <div class="search-input-wrap">
      <font-awesome-icon class="icon" icon="fa-magnifying-glass" />

      <input
        class="search-bar"
        :value="keyword"
        @input="onInputSearch"
        @focus="isFocus = true"
        @blur="
          () => {
            if (!isMouseOver) isFocus = false;
          }
        "
        placeholder="검색어를 입력해주세요."
        type="text"
      />

      <!-- 이전 검색 내역 -->
      <!-- <div
        @mouseover="isMouseOver = true"
        @mouseleave="isMouseOver = false"
        class="keywords-wrap"
        :class="[isFocus ? 'keywords-wrap__show' : 'keywords-wrap__not_show']"
      >
        <strong class="keywords-title">최근 검색어</strong>
        <ul>
          <li
            v-for="keyword in keywordSearch"
            :key="keyword"
            @click="onKeywordClick(keyword)"
          >
            {{ keyword }}
          </li>
        </ul>

        <div class="keywords-setting">
          <span class="keywords-delete" @click="onDeleteKeywords"
            >전체 삭제</span
          >
          <span class="keywords-save__auto" @click="isSaveKeywords"
            >최근 검색어 끄기</span
          >
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api';
import { useDebouncedRef } from '@/composables/debounced';
import {
  saveSearchKeywordToCookie,
  getSearchKeywordFromCookie,
  deleteCookie,
} from '@/services/cookies';
import router from '@/router';

export default defineComponent({
  name: 'SearchKeywordBar',
  emits: ['search'],
  setup(props, { emit }) {
    const isFocus = ref(false);
    const isMouseOver = ref(false);

    const isSaveKeywords = ref(true);

    const keywordSearch = ref<string[]>([]);

    // 이전 검색 키워드 쿠키에 저장
    // searchKeywordType {"초밥":0}|{"메론소다":0}|{"환타 메론소다":0}|{"커피":0}|{"커피머신":0}|{"컴퓨터 의자":0}|{"매직 트랙패드2":0}|{"매직 키보드 1세대":0}|{"매직 키보드":0}
    function saveSearchKeyword(keyword: string) {
      if (isSaveKeywords) {
        keywordSearch.value.push(keyword);

        // 중복 제거
        const uniqueArr = keywordSearch.value.filter((element, index) => {
          return keywordSearch.value.indexOf(element) === index;
        });

        keywordSearch.value = Array.from(uniqueArr) as string[];

        const list = uniqueArr.join('|');

        saveSearchKeywordToCookie(list);
      }
    }

    // 디바운스 검색
    const keyword = useDebouncedRef('', 500);

    watch(keyword, async (newVal) => {
      // 2글자 이상 입력될 경우 검색 데이터를 보여준다.
      if (newVal.trim().length >= 2) {
        router.push({
          name: 'search',
          query: {
            q: newVal,
          },
        });

        // 데이터가 가져와졌을때 검색 키워드에 추가
        saveSearchKeyword(newVal);
      } else {
        isFocus.value = false;
      }
    });

    function onInputSearch(e: InputEvent) {
      const target = e.target as HTMLInputElement;

      keyword.value = target.value;
    }

    function onKeywordClick(selectKeyword: string) {
      keyword.value = selectKeyword;

      isFocus.value = false;
    }

    // 전체 삭제
    function onDeleteKeywords() {
      deleteCookie('searchKeyword');
      // 배열 초기화
      keywordSearch.value.length = 0;
    }

    function init() {
      // 쿠키에 저장된 키워드를 가져온다 (최근 검색어 목적)
      const getKeyword = getSearchKeywordFromCookie();

      const stringToArray = getKeyword.split('|');

      keywordSearch.value.push(...stringToArray);
    }

    onMounted(() => init());

    return {
      onInputSearch,
      keyword,
      keywordSearch,
      isMouseOver,
      isFocus,
      isSaveKeywords,
      onKeywordClick,
      onDeleteKeywords,
    };
  },
});
</script>

<style scoped lang="scss">
.search-inner {
  background: #f7f7f7;

  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  overflow: hidden;
}

.search-input-wrap {
  width: 100%;
  height: 100%;
  max-width: 900px;

  margin: 0 auto;

  position: relative;

  .icon {
    position: absolute;

    left: 10px;
    top: 8px;

    z-index: 1;
  }
}

.search-bar {
  width: inherit;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 30px;

  text-indent: 35px;
  transition: all linear 0.3s;
  border: none;

  &:focus {
    outline: none;
    border: 1px solid gray;

    border-radius: 5px;
  }
}

.keywords-wrap__show {
  display: block;
}

.keywords-wrap__not_show {
  display: none;
}

.keywords-wrap {
  position: fixed;

  width: calc(100% - 60px);
  max-width: 904px;

  background: white;
  box-shadow: 0 4px 5px rgb(0 0 0 / 30%);
  z-index: 1;

  ul {
    margin: 0;
    list-style: none;

    text-align: left;
    padding-inline-start: 10px;

    li {
      margin: 10px;

      font-size: 13px;

      font-weight: normal;

      cursor: pointer;

      &:hover {
        color: #008cff;

        text-decoration: underline;
      }
    }
  }

  .keywords-title {
    display: block;
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    text-indent: 20px;
    line-height: 40px;

    border-bottom: 1px solid #f1f1f1;
  }

  .keywords-setting {
    background-color: #f5f5f5;
    text-align: left;

    padding-inline-start: 20px;

    border-top: 1px solid #f1f1f1;

    .keywords-delete {
      color: #888;
      line-height: 30px;

      font-size: 13px;

      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .keywords-save__auto {
      color: #888;
      line-height: 30px;

      font-size: 13px;

      cursor: pointer;

      float: right;

      padding-inline-end: 20px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
