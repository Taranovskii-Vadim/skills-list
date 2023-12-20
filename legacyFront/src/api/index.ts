import axios, { AxiosRequestConfig, ResponseType } from 'axios';

import { Payload, Route } from './types';

const baseURL = 'http://localhost:3000/api';

export const axiosInsatnce = axios.create({
  baseURL,
  headers: {
    common: { Authorization: `bearer ${localStorage.getItem('token')}` },
  },
});

export const api = async <D>(r: Route<D>, p?: Payload, q?: string, rt?: ResponseType): Promise<D> => {
  let config: AxiosRequestConfig = { method: r.method, url: r.getUrl(q), responseType: rt };

  if (p) {
    config = { ...config, data: p };
  }

  const { data } = await axiosInsatnce.request<D>(config);

  return r.getData(data);
};
