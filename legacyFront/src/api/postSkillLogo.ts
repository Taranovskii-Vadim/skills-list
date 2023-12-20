import { Method, Route } from './types';

class PostFile implements Route {
  method: Method = 'POST';

  getUrl(): string {
    return '/skills/upload';
  }

  getData(response: string): string {
    return response;
  }
}

export default new PostFile();
