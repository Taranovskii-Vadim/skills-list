import { Method, Route } from '@shared/api';

class DeleteCategory implements Route {
  method: Method = 'DELETE';

  // TODO think how to avoid ?. Maybe need to rewrite api method or smth
  getUrl(id?: string): string {
    return `/categories/${id}`;
  }

  getData() {}
}

export default new DeleteCategory();
