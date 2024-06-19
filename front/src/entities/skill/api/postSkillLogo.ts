import { Method, Route } from '@shared/api';

class PostSkillLogo implements Route {
  method: Method = 'POST';

  getUrl(): string {
    return '/skills/upload';
  }

  getData(response: string): string {
    return response;
  }
}

export default new PostSkillLogo();
