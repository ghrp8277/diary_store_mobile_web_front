import { defineStore } from 'pinia';
import { state } from '@/services/pinia/state';
import { getters } from '@/services/pinia/getters';
import apis from '@/apis';

const { apiModule } = apis();

export const useStore = defineStore('main', {
  state: () => state,
  actions: {
    async FETCH_PRODUCTS_INFO(username: string) {
      const { data } = await apiModule.buyerApiModule.fetchProductsInfo(
        username,
      );

      this.products = data;
    },
  },
  getters,
});
