<template>
  <div class="container-fav">
    <h3 class="txt-tit">즐겨찾기</h3>
    <ul class="product-list">
      <router-link
        v-for="(favorite, index) in favorites"
        :key="index"
        :to="{ name: 'detail', params: { id: favorite.id } }"
      >
        <li class="product">
          <div class="unit-emot">
            <img :src="favorite.image_files[0].image_url" alt="" />
          </div>
          <div class="area-info">
            <div class="area-tit">
              <span class="txt-title">{{ favorite.product_name }}</span>
              <span class="txt-author">{{ favorite.author_name }}</span>
            </div>
            <button class="btn-like">
              <font-awesome-icon class="heart-icon" icon="fa-heart" />
            </button>
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

export default defineComponent({
  name: 'FavoriteView',
  components: {},
  setup() {
    const store = useStore();

    const { emoticon_favorites } = storeToRefs(store);

    onMounted(async () => {
      await store.FETCH_FAVORITES_INFO('test');
    });

    return {
      favorites: computed(() => emoticon_favorites.value),
    };
  },
});
</script>

<style lang="scss" scoped>
.container-fav {
  margin: auto;
  background: white;
}
ul {
  list-style: none;
}
li {
  float: left;
}
.txt-tit {
  text-align: left;
  padding: 0 50px;
  margin: 20px 0 40px 0;
}
.product {
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin: 0 25px;
}
.unit-emot {
  width: 130px;
  height: 130px;
  margin: 10px auto;
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
  width: 75%;
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
}
.heart-icon {
  color: #fa4637;
}

/** 미디어쿼리 */
@media all and (max-width: 770px) {
  .btn-like {
    display: none;
  }
  .product {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #f5f5f5;
    margin: 10px 0;
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
    width: 80%;
    height: 100%;
    text-align: left;
    padding-top: 10px;
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
