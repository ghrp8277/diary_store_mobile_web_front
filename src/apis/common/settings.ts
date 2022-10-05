import { AxiosInstance } from 'axios';
import qs from 'qs';

export function setAxiosSetting(instance: AxiosInstance) {
  // axios setting
  instance.defaults.timeout = 60 * 1000;
  instance.defaults.xsrfCookieName = 'csrftoken';
  instance.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  // http://api.com?search=[object+Object] -> paramsSerializer -> // http://api.com?search[keyword]=안녕
  instance.defaults.paramsSerializer = (params) => {
    return qs.stringify(params);
  };
}
