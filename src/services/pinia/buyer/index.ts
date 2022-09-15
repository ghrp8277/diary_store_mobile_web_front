import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import {
  fetchFavoritesInfo,
  fetchProductByIsLike,
  fetchProductsInfo,
} from '@/apis/buyer';

export const useStore = defineStore('buyer', {
  state: () => state,
  actions: {
    async FETCH_PRODUCTS_INFO() {
      const data = await fetchProductsInfo();

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
  },
  getters,
});
