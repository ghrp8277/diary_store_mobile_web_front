import { defineStore } from 'pinia';
import { ref } from '@vue/composition-api';

export const useMainStore = defineStore('main', () => {
  const isLoading = ref(false);

  return {
    isLoading,
  };
});
