import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from './entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly table: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.table.find({ relations: { user: true } });
  }
}
