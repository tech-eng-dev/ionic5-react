const axios = require('axios');
const api = axios.create({
  baseURL: 'https://repoondemandcloud.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use((response: any) => {
  if (response.status === 200) {
    return response.data.data;
  }
});

export function login(param: any): Promise<any> {
  return api.post('/auth', param);
};

export const API = {
  login
};
