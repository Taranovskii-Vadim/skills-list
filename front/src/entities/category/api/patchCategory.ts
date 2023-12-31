import { Method, Route } from '@shared/api';

class PatchCategory implements Route {
  method: Method = 'PATCH';

  getUrl(id?: string): string {
    return `/categories/${id}`;
  }

  getData() {}
}

export default new PatchCategory();
