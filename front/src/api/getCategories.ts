import { Category } from 'src/store/categories/types';

import { MetaDTO, Method, Route } from './types';

type ResponseDTO = { id: number; title: string; description: string | null } & MetaDTO;

class GetCategories implements Route {
  method: Method = 'GET';

  getUrl(): string {
    return '/categories';
  }

  getData(data: ResponseDTO[]): Category[] {
    return data.map(({ id, title, description }) => ({
      id,
      // TODO expand backend
      name: title,
      numberOfSkills: 15,
      // TODO bug with mui table and ability to show info in one string
      description: description || '',
    }));
  }
}

export default new GetCategories();
