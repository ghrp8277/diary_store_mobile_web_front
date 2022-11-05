import { defineStore } from 'pinia';
import { ref, computed } from '@vue/composition-api';
import {
  getUserFromCookie,
  getAccessFromCookie,
  getRefreshFromCookie,
} from '@/services/cookies';

export const useMainStore = defineStore('main', () => {
  const username = ref(getUserFromCookie() || '');
  const token = ref(getAccessFromCookie() || '');
  const refreshToken = ref(getRefreshFromCookie() || '');

  const isLoading = ref(false);
  const isSearchShow = ref(false);

  return {
    username,
    token,
    refreshToken,
    isLoading,
    isSearchShow,
    isLogin: computed(() => username.value.length != 0),
  };
});
