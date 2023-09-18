import { Get, Controller } from '@nestjs/common';

import { CategoriesService } from './service';
import { GetCategoriesDTO } from './dto/get-categories.dto';

@Controller('/categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async getCategories(): Promise<GetCategoriesDTO[]> {
    return this.service.getAll();
  }
}
