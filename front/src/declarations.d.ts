declare type Role = 'admin' | 'user';

declare type MetaDataDTO = { updatedAt: string; createdAt: string };

declare type ProfileDTO = {
  id: number;
  role: Role;
  name: string;
  login: string;
  lastname: string;
} & MetaDataDTO;
