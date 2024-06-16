declare type Maybe<T> = T | undefined;

declare type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

declare type Redirect = () => void;

declare type Role = 'admin' | 'user';

declare type MetaDataDTO = { updatedAt: string; createdAt: string };

declare type ProfileDTO = {
  id: number;
  role: Role;
  name: string;
  login: string;
  lastname: string;
} & MetaDataDTO;
