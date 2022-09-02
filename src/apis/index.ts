import axios from 'axios';

export default () => {
  const baseUrl = 'http://192.168.0.212';
  const basePort = '3000';
  const prefix = 'v1';

  const apis = {
    fetchData: async function () {
      const response = await axios.get(`${baseUrl}:${basePort}/${prefix}`);
      return response;
    },
  };

  return {
    apis,
  };

  //   const response = apis.fetchData().then((result) => {
  //     const { data, status } = result;

  //     if (status == 200) {
  //       const test = data;
  //     } else if (status == 404) {
  //       //throw new Ex
  //     }
  //   });
};
