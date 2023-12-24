import { Method, Route } from '@shared/api';

class PostCategory implements Route {
  method: Method = 'POST';

  getUrl(): string {
    return '/categories';
  }

  getData() {}
}

export default new PostCategory();
