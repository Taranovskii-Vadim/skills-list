import { Get, Controller, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/guards/jwt';

import { Category } from './entity';
import { CategoriesService } from './service';

@Controller('/categories')
@UseGuards(JwtAuthGuard)
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async getCategories(): Promise<Category[]> {
    return this.service.getAll();
  }
}
