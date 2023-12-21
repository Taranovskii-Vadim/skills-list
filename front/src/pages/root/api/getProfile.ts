import { Method, Route } from '@shared/api';

import { Profile } from '../model/types';

type ResponseDTO = {
  id: number;
  name: string;
  login: string;
  lastname: string;
  role: 'admin' | 'user';

  updatedAt: string;
  createdAt: string;
};

class GetProfile implements Route {
  method: Method = 'GET';

  getUrl(): string {
    return '/user/profile';
  }

  getData({ login, role }: ResponseDTO): Profile {
    return { login, role };
  }
}

export default new GetProfile();
