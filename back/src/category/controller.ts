import { Get, Controller } from '@nestjs/common';

import { Category } from './entity';
import { CategoriesService } from './service';

@Controller('/categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async getCategories(): Promise<Category[]> {
    return this.service.getAll();
  }
}
