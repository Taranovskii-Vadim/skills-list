import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from './entity';
import { PatchCategoryDTO, PostCategoryDTO } from './dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly table: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.table.find({ relations: { user: true } });
  }

  async getCategoriesDictionary(): Promise<Category[]> {
    return await this.table.find({ select: ['id', 'title'] });
  }

  async getBy(id: number): Promise<Category> {
    return await this.table.findOne({
      where: { id },
      relations: { user: true },
    });
  }

  async update(id: number, payload: PatchCategoryDTO): Promise<Category> {
    // TODO pass real user id
    await this.table.update(id, { user: { id: 1 }, ...payload });

    return this.getBy(id);
  }

  async deleteBy(id: number): Promise<void> {
    await this.table.delete(id);
  }

  async create(payload: PostCategoryDTO): Promise<Category> {
    // TODO pass real user id
    // TODO expand relations for front
    return await this.table.save({ user: { id: 1 }, ...payload });
  }
}
