import { Skill } from '../store/skills/types';
import { format } from '../utils';

import { CommonSkill, Method, Route } from './types';

class PostSkill implements Route {
  method: Method = 'POST';

  getUrl(): string {
    return '/skills';
  }

  getData({ category, ...common }: CommonSkill & { category: { id: number } }): Skill {
    return { ...common, createdAt: format(common.createdAt) };
  }
}

export default new PostSkill();
