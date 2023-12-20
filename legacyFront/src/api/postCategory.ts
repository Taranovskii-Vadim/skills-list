import { Method, Route } from './types';

class PostCategory implements Route {
  method: Method = 'POST';

  getUrl(): string {
    return '/categories';
  }

  getData() {}
}

export default new PostCategory();
