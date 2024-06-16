import { Method, Route } from '@shared/api';

class PostSkill implements Route {
  method: Method = 'POST';

  getUrl(): string {
    return '/skills';
  }

  getData() {}
}

export default new PostSkill();
