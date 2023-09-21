import { format } from 'date-fns';
import { Skill } from '../store/skills/types';

import { MetaDTO, Method, Route } from './types';

type ResponseDTO = { id: number; name: string; rate: number } & MetaDTO;

class GetSkills implements Route {
  method: Method = 'GET';

  getUrl(id?: number): string {
    return `/skills/${id}`;
  }

  getData(data: ResponseDTO[]): Skill[] {
    return data.map(({ id, name, rate, createdAt }) => ({
      id,
      name,
      rate,
      createdAt: format(new Date(createdAt), 'dd.MM.yyyy'),
    }));
  }
}

export default new GetSkills();
