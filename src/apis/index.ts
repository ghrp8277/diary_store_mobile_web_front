import buyer from '@/apis/buyer';

export default () => {
  const baseUrl = 'http://192.168.0.212';
  const basePort = '3000';
  const version = 'v1';

  const apis = {
    buyerURL: `${baseUrl}:${basePort}/${version}/buyer`,
  };

  const { buyerApiModule } = buyer(apis.buyerURL);

  const apiModule = {
    buyerApiModule,
  };

  return {
    apiModule,
  };
};
