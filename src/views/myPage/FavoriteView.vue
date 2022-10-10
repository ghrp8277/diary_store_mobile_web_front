<template>
  <div class="container-fav">
    <h2 class="txt-tit">즐겨찾기</h2>
    <ul class="product-list">
      <router-link
        v-for="(favorite, index) in favorites"
        :key="index"
        :to="{ name: 'detail', params: { id: favorite.id } }"
      >
        <li class="outer-wrap product">
          <div class="inner-wrap">
            <div class="unit-emot">
              <img :src="favorite.image_files[0].image_url" alt="" />
            </div>
            <div class="area-info">
              <div class="area-tit">
                <span class="txt-title">{{ favorite.product_name }}</span>
                <span class="txt-author">{{ favorite.author_name }}</span>
              </div>
              <button
                class="btn-like"
                @click.stop.prevent="likeEmoji(favorite.id)"
              >
                <font-awesome-icon class="heart-icon" icon="fa-heart" />
              </button>
            </div>
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from '@vue/composition-api';
import { useStore } from '@/services/pinia/buyer';
import { storeToRefs } from 'pinia';
// import emoticon from '@/composables/emoticon';
// import favorite from '@/composables/favorite';

export default defineComponent({
  name: 'FavoriteView',
  components: {},
  setup() {
    const store = useStore();

    const { emoticon_favorites } = storeToRefs(store);

    onMounted(async () => {
      await store.FETCH_FAVORITES_INFO('test');
    });

    async function likeEmoji(id: number) {
      await store.FETCH_PRODUCT_BY_IS_INFO('test', id, false);
      await store.FETCH_FAVORITES_INFO('test');
    }

    return {
      favorites: computed(() => emoticon_favorites.value),
      likeEmoji,
    };
  },
});
</script>

<style lang="scss" scoped>
.container-fav {
  width: 100%;

  margin: 0 auto;
  background: white;
  max-width: 900px;

  padding-top: 120px;
}
ul {
  list-style: none;

  padding-inline-start: 0;
  margin: 0;
}
li {
  float: left;
}
.txt-tit {
  text-align: left;
  padding: 10px 30px 0 10px;
  margin: 20px 0px;
}
.product-list {
  margin: 0;
}
.product {
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 0 25px;

  box-sizing: border-box;
}
.unit-emot {
  width: 130px;
  height: 130px;
  margin: 15px auto;
}
.unit-emot img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.area-info {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
}
.area-tit {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 5px 0 0;
  text-align: left;
}
.txt-title {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
}
.txt-author {
  font-size: 12px;
  color: gray;
}
.btn-like {
  width: 30px;
  height: 30px;
  background: white;
  border: 1px solid lightgray;
  border-radius: 50px;
  float: right;

  cursor: pointer;
}
.heart-icon {
  color: #fa4637;
}

/** 미디어쿼리 */
@media all and (max-width: 600px) {
  .btn-like {
    display: none;
  }
  .txt-tit {
    margin: 0;
    padding: 30px 30px 20px 30px;
  }
  .product-list {
    margin: 0 10px;
    padding: 0;
  }
  .product {
    width: 100%;
    height: auto;

    padding: 0 20px;

    .inner-wrap {
      width: 100%;
      display: flex;
      flex-direction: row;

      border-bottom: 1px solid #f5f5f5;
    }
  }

  .unit-emot {
    width: 70px;
    height: 70px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .area-info {
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 10px 0 0 10px;
    align-items: center;
  }
  .txt-title {
    font-size: 14px;
    padding: 5px 0;
  }
  .txt-author {
    font-size: 12px;
  }
}
</style>
