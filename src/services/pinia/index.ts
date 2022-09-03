import { defineStore } from 'pinia';
import apiModule from '@/apis';

export const useStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      data: null as any,
    };
  },
  actions: {
    async getData() {
      const { apis } = apiModule();
      const response = await apis.fetchData();

      const { data } = response;
      this.data = data;
    },
  },
  // other options...
});
