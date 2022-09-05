import buyer from '@/apis/buyer';
import axios from 'axios';
export default () => {
  const baseUrl = 'http://192.168.0.212';
  const basePort = '3000';
  const version = 'v1';

  axios.create({
    baseURL: `${baseUrl}:${basePort}/${version}`,
  });

  const apis = {
    buyerURL: '/buyer',
  };

  const { buyerApiModule } = buyer(apis.buyerURL);

  const apiModule = {
    buyerApiModule,
  };

  return {
    apiModule,
  };
};
