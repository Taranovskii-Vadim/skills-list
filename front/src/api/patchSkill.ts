import { Method, Route } from './types';

class PatchSkill implements Route {
  method: Method = 'PATCH';

  getUrl(id?: number): string {
    return `/skills/${id}`;
  }

  getData(data: number) {
    return data;
  }
}

export default new PatchSkill();
