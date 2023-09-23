import axios, { AxiosRequestConfig } from 'axios';

import { Payload, Route } from './types';

const baseURL = 'http://localhost:3000/api';

export const axiosInsatnce = axios.create({ baseURL });

export const api = async <D>(r: Route<D>, p?: Payload, q?: string): Promise<D> => {
  let config: AxiosRequestConfig = { method: r.method, url: r.getUrl(q) };

  if (p) {
    config = { ...config, data: p };
  }

  const { data } = await axiosInsatnce.request<D>(config);

  return r.getData(data);
};
