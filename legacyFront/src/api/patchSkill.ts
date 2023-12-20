import { Method, Route } from './types';

class PatchSkill implements Route {
  method: Method = 'PATCH';

  getUrl(id?: string): string {
    return `/skills/${id}`;
  }

  getData() {}
}

export default new PatchSkill();
