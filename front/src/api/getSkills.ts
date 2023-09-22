import { Skill } from '../store/skills/types';
import { format } from '../utils';

import { CommonSkill, Method, Route } from './types';

class GetSkills implements Route {
  method: Method = 'GET';

  getUrl(id?: number): string {
    return `/skills/${id}`;
  }

  getData(data: CommonSkill[]): Skill[] {
    return data.map(({ id, name, rate, createdAt }) => ({
      id,
      name,
      rate,
      createdAt: format(createdAt),
    }));
  }
}

export default new GetSkills();
