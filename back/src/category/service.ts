import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from './entity';
import { PostCategoryDTO } from './dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly table: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.table.find({ relations: { user: true } });
  }

  async create(payload: PostCategoryDTO): Promise<Category> {
    return await this.table.save(payload);
  }
}
