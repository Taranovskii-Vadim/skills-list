import { format, getUserFullname } from 'src/utils';
import { Category } from 'src/store/categories/types';

import { CommonUserDTO, MetaDTO, Method, Route } from './types';

type CategoryDTO = { id: number; title: string; description: string | null; user: CommonUserDTO };

type ResponseDTO = CategoryDTO & MetaDTO;

class GetCategories implements Route {
  method: Method = 'GET';

  getUrl(): string {
    return '/categories';
  }

  getData(data: ResponseDTO[]): Category[] {
    return data.map(({ id, title, user, createdAt, updatedAt }) => ({
      id,
      name: title,
      // TODO need to expand backend for this feature
      numberOfSkills: 15,
      createdAt: format(createdAt),
      updatedAt: format(updatedAt),
      author: getUserFullname(user.name, user.lastname),
    }));
  }
}

export default new GetCategories();
