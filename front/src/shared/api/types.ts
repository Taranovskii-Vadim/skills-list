export type Method = 'GET' | 'POST' | 'PATCH';

export type Payload = Record<string, string | number> | FormData;

export type Route<D = unknown> = {
  method: Method;

  getUrl: (q?: string) => string;

  getData: (responseDTO: any) => D;
};