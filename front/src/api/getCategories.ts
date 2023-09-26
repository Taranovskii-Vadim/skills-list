import { Category } from 'src/store/categories/types';

import { MetaDTO, Method, Route } from './types';

type ResponseDTO = { id: number; title: string } & MetaDTO;

class GetCategories implements Route {
  method: Method = 'GET';

  getUrl(): string {
    return '/categories';
  }

  getData(data: ResponseDTO[]): Category[] {
    return data.map(({ id, title }) => ({ id, title }));
  }
}

export default new GetCategories();
