import axios from './axios';
import * as tools from './utils';

export default {
  install: (app: any): void => {
    app.config.globalProperties.$http = axios;
    app.config.globalProperties.$tools = tools;
  },
};
