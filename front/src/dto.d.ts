declare type MetaDataDTO = { updatedAt: string; createdAt: string };

declare type UserDTO = {
  id: number;
  name: string;
  login: string;
  lastname: string;
  role: 'admin' | 'user';
} & MetaDataDTO;
