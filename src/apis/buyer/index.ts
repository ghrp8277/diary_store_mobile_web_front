import axios, { AxiosPromise } from 'axios';

interface Axios {
  fetchProductsInfo(username: string): AxiosPromise<any>;
}

export default (url: string) => {
  const buyerApiModule: Axios = {
    fetchProductsInfo: async (username: string) => {
      const response = await axios.get(`${url}/${username}/test`);

      return response;
    },
  };

  return {
    buyerApiModule,
  };
};
