import { Method, Route } from './types';

class PatchSkill implements Route {
  method: Method = 'PATCH';

  getUrl(id?: number): string {
    return `/skills/${id}`;
  }

  getData() {}
}

export default new PatchSkill();
