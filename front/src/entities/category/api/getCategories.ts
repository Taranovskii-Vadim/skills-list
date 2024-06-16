import { format } from '@shared/lib/date';
import { Method, Route } from '@shared/api';
import { getFullname } from '@shared/lib/common';

import { BaseCategory } from '../model/types';

type CategoryDTO = {
  id: number;
  title: string;
  user: ProfileDTO;
  description: string | null;
};

type ResponseDTO = CategoryDTO & MetaDataDTO;

class GetCategories implements Route {
  method: Method = 'GET';

  getUrl(): string {
    return '/categories';
  }

  getData(data: ResponseDTO[]): BaseCategory[] {
    return data.map(({ id, title, user: { name, lastname }, createdAt, updatedAt }) => ({
      id,
      name: title,
      // TODO need to expand backend for this feature
      numberOfSkills: 15,
      createdAt: format(createdAt),
      updatedAt: format(updatedAt),
      author: getFullname(name, lastname),
    }));
  }
}

export default new GetCategories();
