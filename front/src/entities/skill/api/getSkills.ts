import { format } from '@shared/lib/date';

import { Route, Method } from '@shared/api';

import { Skill } from '../model/types';

type CategoryDTO = { id: number; description: string; title: string } & MetaDataDTO;

type ResponseDTO = { id: number; logo: string; name: string; rate: number; category: CategoryDTO } & MetaDataDTO;

class GetSkills implements Route {
  method: Method = 'GET';

  getUrl(): string {
    return '/skills';
  }

  getData(data: ResponseDTO[]): Skill[] {
    return data.map(({ id, name, rate, category, createdAt, updatedAt }) => ({
      id,
      name,
      rate,
      categoryName: category.title,
      createdAt: format(createdAt),
      updatedAt: format(updatedAt),
    }));
  }
}

export default new GetSkills();
