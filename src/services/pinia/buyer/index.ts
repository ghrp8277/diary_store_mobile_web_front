import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import {
  fetchCategories,
  fetchFavoritesInfo,
  fetchProductByIsLike,
  fetchProductsInfo,
  fetchProductRank,
} from '@/apis/buyer';

export const useStore = defineStore('buyer', {
  state: () => state,
  actions: {
    async FETCH_PRODUCTS_INFO(username: string) {
      const data = await fetchProductsInfo(username);

      this.products = data;
    },
    async FETCH_PRODUCT_BY_IS_INFO(
      username: string,
      id: number,
      is_like: boolean
    ) {
      const data = await fetchProductByIsLike(username, id, is_like);

      this.products = data;
    },
    async FETCH_FAVORITES_INFO(username: string) {
      const data = await fetchFavoritesInfo(username);

      this.favorites = data;
    },
    async FETCH_CATEGORY_INFO() {
      const data = await fetchCategories();

      this.categories = data;
    },
    async FETCH_PRODUCT_BY_RANK() {
      const data = await fetchProductRank();

      this.ranks = data;
    },
  },
  getters,
  persist: {
    storage: sessionStorage,
    key: 'products',
    paths: ['products'],
  },
});
