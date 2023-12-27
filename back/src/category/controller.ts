import {
  Get,
  Body,
  Post,
  Controller,
  UseGuards,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/guards/jwt';

import { Category } from './entity';
import { PostCategoryDTO } from './dto';
import { CategoriesService } from './service';

@Controller('/categories')
@UseGuards(JwtAuthGuard)
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get()
  async getCategories(): Promise<Category[]> {
    return this.service.getAll();
  }

  @Get(':id')
  async getCategory(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.service.getBy(id);
  }

  @Delete(':id')
  async delCategory(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.deleteBy(id);
  }

  @Post()
  async postCategory(@Body() body: PostCategoryDTO): Promise<Category> {
    return this.service.create(body);
  }
}
