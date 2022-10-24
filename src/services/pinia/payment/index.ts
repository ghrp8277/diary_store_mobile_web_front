import { defineStore } from 'pinia';
import { state } from './state';
import { getters } from './getters';
import { fetchHistory } from '@/apis/payment';

export const useStore = defineStore('payment', {
  state: () => state,
  actions: {
    async FETCH_PAYMENT_HISTORY(username: string) {
      const data = await fetchHistory(username);

      this.payment_histories = data;
    },
  },
  getters,
});
