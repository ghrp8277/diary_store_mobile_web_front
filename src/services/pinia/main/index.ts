import { defineStore } from 'pinia';
import { computed, ref } from '@vue/composition-api';
// import getAccessFromCookie,
// getUserFromCookie,
// getRefreshFromCookie,
// '@/services/cookies';

export const useMainStore = defineStore('main', () => {
  // const username = ref(getUserFromCookie() || '');
  // const token = ref(getAccessFromCookie() || '');
  // const refreshToken = ref(getRefreshFromCookie() || '');

  const isLoading = ref(false);

  return {
    // username,
    // token,
    // refreshToken,
    isLoading,
    // isLogin: computed(() => username.value.length != 0),
  };
});
