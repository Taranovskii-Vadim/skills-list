// TODO try to use declarations here

import { Request as ExpressRequest } from 'express';

export type ReqUser = {
  id: number;
  name: string;
  login: string;
  lastname: string;
};

export type Request = { user: ReqUser } & ExpressRequest;
