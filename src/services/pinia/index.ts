import { defineStore } from 'pinia';
import apiModule from '@/apis';
// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use` and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
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
