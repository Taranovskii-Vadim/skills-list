export type Method = 'GET' | 'POST' | 'PATCH';

export type Payload = Record<string, string | number> | FormData;

export type Route<D = unknown> = {
  method: Method;

  getUrl: (q?: string) => string;

  getData: (responseDTO: any) => D;
};

export type MetaDTO = {
  updatedAt: string;
  createdAt: string;
};

export type CommonSkill = { id: number; logo: string; name: string; rate: number } & MetaDTO;

export type CommonUserDTO = {
  id: number;
  name: string;
  login: string;
  lastname: string;
  role: 'admin' | 'user';
} & MetaDTO;
