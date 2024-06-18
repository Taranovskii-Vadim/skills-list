import { Route, Method } from '@shared/api';

type ResponseDTO = { id: number; title: string }[];

class GetCategories implements Route {
  method: Method = 'GET';

  getUrl(): string {
    return '/categories/dict';
  }

  getData(data: ResponseDTO): Dictionary {
    return data.map(({ id, title }) => ({ value: id, label: title }));
  }
}

export default new GetCategories();
