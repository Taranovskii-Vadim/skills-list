import { Skill } from '../store/skills/types';

import { MetaDTO, Method, Route } from './types';

type ResponseDTO = { id: number; name: string; rate: number } & MetaDTO;

class GetSkills implements Route {
  method: Method = 'GET';

  getUrl(id?: number): string {
    return `/skills/${id}`;
  }

  getData(data: ResponseDTO[]): Skill[] {
    return data.map(({ id, name, rate }) => ({ id, name, rate }));
  }
}

export default new GetSkills();
