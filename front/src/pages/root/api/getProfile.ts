import { Method, Route } from '@shared/api';

import { Profile } from '../model/types';

type ResponseDTO = UserDTO;

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
