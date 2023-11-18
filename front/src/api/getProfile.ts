import { Profile } from 'src/store/profile/types';

import { CommonUserDTO, Method, Route } from './types';

class GetProfile implements Route {
  method: Method = 'GET';

  getUrl(): string {
    return '/user/profile';
  }

  getData({ login, role }: CommonUserDTO): Profile {
    return { login, role };
  }
}

export default new GetProfile();
