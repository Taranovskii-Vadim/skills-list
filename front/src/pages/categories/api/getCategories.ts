import { format } from '@shared/lib/date';
import { Method, Route } from '@shared/api';

import { Category } from '../model/types';

type CategoryDTO = {
  id: number;
  title: string;
  description: string | null;
  user: {
    id: number;
    name: string;
    login: string;
    lastname: string;
    role: 'admin' | 'user';
  } & MetaDataDTO;
};

type ResponseDTO = CategoryDTO & MetaDataDTO;

class GetCategories implements Route {
  method: Method = 'GET';

  getUrl(): string {
    return '/categories';
  }

  getData(data: ResponseDTO[]): Category[] {
    return data.map(({ id, title, user: { name, lastname }, createdAt, updatedAt }) => {
      const author = `${name[0].toUpperCase()}${name.slice(1)} ${lastname[0].toUpperCase()}${lastname.slice(1)}`;

      return {
        id,
        author,
        name: title,
        // TODO need to expand backend for this feature
        numberOfSkills: 15,
        createdAt: format(createdAt),
        updatedAt: format(updatedAt),
      };
    });
  }
}

export default new GetCategories();
