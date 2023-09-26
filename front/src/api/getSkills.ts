import { Skill } from 'src/store/skills/types';
import { format } from 'src/utils';

import { CommonSkill, Method, Route } from './types';

class GetSkills implements Route {
  method: Method = 'GET';

  getUrl(id?: string): string {
    return `/skills/${id}`;
  }

  getData(data: CommonSkill[]): Skill[] {
    return data.map(({ id, logo, name, rate, createdAt }) => ({
      id,
      name,
      logo,
      rate,
      createdAt: format(createdAt),
    }));
  }
}

export default new GetSkills();
