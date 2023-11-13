import { Profile } from 'src/store/profile/types';

import { Method, Route } from './types';

type ResponseDTO = {
  id: number;
  name: string;
  login: string;
  lastname: string;
  role: 'admin' | 'user';
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
