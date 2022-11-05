import axios from 'axios';
import { setInterceptors } from './common/interceptors';
import { setAxiosSetting } from './common/settings';
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';

function createInstanceWithAuth(url: string) {
  const store = useMainStore();
  const { token } = storeToRefs(store);

  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_BASE_URL}${url}/`,
    headers: {
      Authorization: token.value,
    },
  });

  setAxiosSetting(instance);

  return setInterceptors(instance);
}

export const instance = {
  buyer: createInstanceWithAuth('buyer'),
  payment: createInstanceWithAuth('payment'),
  auth: createInstanceWithAuth('auth'),
};
