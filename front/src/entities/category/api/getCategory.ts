import { Method, Route } from '@shared/api';
import { format } from '@shared/lib/date';

import { Category } from '../model/types';
import { getFullname } from '@shared/lib/common';

type ResponseDTO = {
  id: number;
  title: string;
  user: UserDTO;
  description: string | null;
} & MetaDataDTO;

class GetCategory implements Route {
  method: Method = 'GET';

  // TODO think how to avoid ?. Maybe need to rewrite api method or smth
  getUrl(id?: string): string {
    return `/categories/${id}`;
  }

  getData({ user: { name, lastname }, ...response }: ResponseDTO): Category {
    return {
      name: response.title,
      author: getFullname(name, lastname),
      numberOfSkills: 15,
      // TODO need to expand backend for this feature
      createdAt: format(response.createdAt),
      updatedAt: format(response.updatedAt),
      description: response.description || '',
    };
  }
}

export default new GetCategory();
