import { Method, Route } from './types';

// TODO think about getURL query types
class GetFile implements Route {
  method: Method = 'GET';

  getUrl(logo?: string): string {
    return `/skills/logo/${logo}`;
  }

  getData(response: Blob): string {
    return URL.createObjectURL(response);
  }
}

export default new GetFile();
