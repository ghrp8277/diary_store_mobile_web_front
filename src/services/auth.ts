import { deleteCookie } from './cookies';
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';
import axios, { AxiosError, AxiosRequestHeaders } from 'axios';

// export async function logout() {
//   const store = useMainStore();

//   const { username, token, refreshToken } = storeToRefs(store);

//   await fetchLogout(refreshToken.value);

//   username.value = '';
//   token.value = '';
//   refreshToken.value = '';

//   deleteCookie('til_access');
//   deleteCookie('til_refresh');
//   deleteCookie('til_user');
// }

// export async function refreshTokenVerify(error: AxiosError<unknown, any>) {
//   const store = useMainStore();

//   const { token, refreshToken } = storeToRefs(store);

//   const config = error.config;
//   const headers = config.headers as AxiosRequestHeaders;

//   const data = await fetchRefreshToken(refreshToken.value);

//   token.value = data;

//   saveAccessTokenToCookie(token.value);

//   headers.Authorization = token.value;

//   await axios.request(config);
// }
