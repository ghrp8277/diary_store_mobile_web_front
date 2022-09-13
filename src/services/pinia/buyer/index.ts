import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import { fetchProductsInfo } from '@/apis/buyer';

export const useStore = defineStore('buyer', {
  state: () => state,
  actions: {
    async FETCH_PRODUCTS_INFO(username: string) {
      const data = await fetchProductsInfo(username);

      console.log(data);

      this.products = data;
    },
  },
  getters,
});
