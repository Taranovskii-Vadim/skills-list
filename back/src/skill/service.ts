import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Skill } from './entity';
import { PostSkillDTO } from './dto';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill) private readonly table: Repository<Skill>,
  ) {}

  async getAll(id: number): Promise<Skill[]> {
    return await this.table.find({ where: { category: { id } } });
  }

  async create({ categoryId: id, ...other }: PostSkillDTO): Promise<Skill> {
    const response = await this.table.save({ ...other, category: { id } });

    return response;
  }

  async update(id: number, rate: number): Promise<number> {
    return (await this.table.save({ id, rate })).rate;
  }
}
