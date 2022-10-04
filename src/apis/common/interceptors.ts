import {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
  AxiosError,
  AxiosRequestHeaders,
} from 'axios';
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';

const DEBUG = process.env.NODE_ENV === 'development';

const store = useMainStore();
// const { token, isLoading } = storeToRefs(store);

// const startLoading = () => {
//   isLoading.value = true;
// };

// const endLoading = () => {
//   isLoading.value = false;
// };

export function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      if (DEBUG) {
        console.info(`
                      [method] [${JSON.stringify(config.method)}]
                      [mappedServiceUrl] [${config.url}]
                      [headers] [${JSON.stringify(config.headers)}]
                  `);
      }

      const headers = config.headers as AxiosRequestHeaders;

      // headers.Authorization = `Bearer ${token.value}`;

      // startLoading();
      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      if (DEBUG) {
        console.error(`[request error] [${JSON.stringify(error)}]`);
      }
      // endLoading();
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      if (DEBUG) {
        console.info(`
                      [method] [${response.config.method}]
                      [mappedServiceUrl] [${response.config.url}]
                      [responseStatusCode] [${response.status}]
                      [data] [${JSON.stringify(response.data)}]
                  `);
      }
      // endLoading();
      return response;
    },
    (error: AxiosError): Promise<AxiosError> => {
      if (DEBUG) {
        console.error(`
                      [method] [${error.response?.config.method}]
                      [mappedServiceUrl] [${error.response?.config.url}]
                      [responseStatusCode] [${error.response?.status}]
                  `);
      }
      // endLoading();
      return Promise.reject({ error });
    }
  );

  return instance;
}
