import { Method, Route } from './types';

type ResponseDTO = { filename: string };

class PostFile implements Route {
  method: Method = 'POST';

  getUrl(): string {
    return '/skills/upload';
  }

  getData({ filename }: ResponseDTO): string {
    return filename;
  }
}

export default new PostFile();
