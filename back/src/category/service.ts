import { Injectable } from '@nestjs/common';

import { GetCategoriesDTO } from './dto/get-categories.dto';

@Injectable()
export class CategoriesService {
  constructor() {}

  async getAll(): Promise<GetCategoriesDTO[]> {
    return Promise.resolve([
      { id: 0, title: 'frontend' },
      { id: 1, title: 'backend' },
      { id: 2, title: 'базы данных' },
      { id: 3, title: 'общие' },
    ]);
  }
}
