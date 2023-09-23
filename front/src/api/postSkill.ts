import { Skill } from '../store/skills/types';
import { format } from '../utils';

import { CommonSkill, Method, Route } from './types';

type ResponseDTO = CommonSkill & { category: { id: number } };

class PostSkill implements Route {
  method: Method = 'POST';

  getUrl(): string {
    return '/skills';
  }

  getData({ category, logo, ...common }: ResponseDTO): Omit<Skill, 'logo'> {
    return { ...common, createdAt: format(common.createdAt) };
  }
}

export default new PostSkill();
